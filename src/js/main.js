// Dark mode toggle
(function () {
  // Register service worker for offline access
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/aivues/sw.js').catch(function () {});
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('is-open');
    });
  }

  const btn = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  if (!btn) return;

  function getTheme() {
    return localStorage.getItem('theme') || 'auto';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      icon.textContent = '🌙';
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      icon.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      icon.textContent = window.matchMedia('(prefers-color-scheme: dark)').matches ? '🌙' : '☀️';
    }
  }

  // Cycle: auto → dark → light → auto
  btn.addEventListener('click', function () {
    const current = getTheme();
    let next;
    if (current === 'auto') next = 'dark';
    else if (current === 'dark') next = 'light';
    else next = 'auto';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  applyTheme(getTheme());

  // Phone selector (buttons in header)
  var phoneBtns = document.querySelectorAll('.phone-selector .selector-btn');
  function applyPhone(value) {
    document.body.classList.toggle('phone-android', value === 'android');
    phoneBtns.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.phone === value));
    });
  }

  if (phoneBtns.length) {
    var saved = localStorage.getItem('phone');
    if (!saved) {
      saved = /android/i.test(navigator.userAgent) ? 'android' : 'iphone';
    }
    phoneBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem('phone', btn.dataset.phone);
        applyPhone(btn.dataset.phone);
      });
    });
    applyPhone(saved);
  }

  // Progress checkboxes
  document.querySelectorAll('.progress-check input[type="checkbox"]').forEach(function (cb) {
    var key = 'progress-' + cb.id;
    cb.checked = localStorage.getItem(key) === 'true';
    cb.addEventListener('change', function () {
      localStorage.setItem(key, cb.checked);
    });
  });

  // Open all <details> before printing, restore after
  var detailsStates = [];
  window.addEventListener('beforeprint', function () {
    detailsStates = [];
    document.querySelectorAll('details').forEach(function (d) {
      detailsStates.push(d.open);
      d.open = true;
    });
  });
  window.addEventListener('afterprint', function () {
    document.querySelectorAll('details').forEach(function (d, i) {
      if (i < detailsStates.length) d.open = detailsStates[i];
    });
  });

  // --- Assessment Quiz ---
  var assessEl = document.getElementById('assessment');
  if (assessEl) {
    var lang = document.documentElement.lang || 'en';
    var totalSteps = 6;
    var answers = [];
    var currentStep = 0;

    var intro = document.getElementById('assess-intro');
    var resultEl = document.getElementById('assess-result');
    var steps = [];
    for (var si = 1; si <= totalSteps; si++) {
      steps.push(document.getElementById('assess-step-' + si));
    }

    function assessShow(n) {
      intro.hidden = true;
      resultEl.hidden = true;
      steps.forEach(function (s, i) { s.hidden = (i !== n); });
      var h = steps[n].querySelector('h3');
      if (h) h.focus();
      var back = steps[n].querySelector('.assess-back');
      if (back) back.hidden = (n === 0);
      // Update progress dots
      steps[n].querySelectorAll('.assess-progress .dot').forEach(function (d, i) {
        d.classList.toggle('filled', i <= n);
      });
      // Highlight previously selected answer
      var prev = answers[n];
      steps[n].querySelectorAll('.assess-options button').forEach(function (b, bi) {
        b.classList.toggle('selected', prev ? prev.btnIndex === bi : false);
      });
      currentStep = n;
    }

    function assessRecalc() {
      var score = 0, flags = [], tags = [];
      answers.forEach(function (a) {
        if (!a) return;
        score += a.score;
        if (a.flags) flags = flags.concat(a.flags);
        if (a.tags) tags = tags.concat(a.tags);
      });
      return { score: score, flags: flags, tags: tags };
    }

    // Bilingual messages
    var msg = {
      en: {
        great: 'Smart glasses look like a great fit for you!',
        good: 'Smart glasses could work well — with some preparation.',
        notReady: 'You may not be ready yet — but there are steps to get there.',
        voiceOk: 'You\'re comfortable with voice control',
        helperOk: 'You have someone to help with setup',
        reading: 'Reading text is a strong use case for these glasses',
        seeing: 'Object and scene recognition will help you daily',
        navigation: 'Voice navigation adds real independence',
        communication: 'Hands-free communication works great',
        all: 'These glasses cover all your needs',
        needsPhone: 'You\'ll need a smartphone first. Smart glasses connect to your phone for AI, internet, and apps.',
        needsScreenreader: 'We recommend learning to use your phone with VoiceOver (iPhone) or TalkBack (Android) first. This makes glasses setup and daily use much easier.',
        needsHelper: 'Consider asking a family member, friend, or optician to help with the one-time setup (about 15 minutes). After that you can use the glasses independently.',
        cochlear: 'Good news: the setup guide has a dedicated section for cochlear implant users, including fit tips and audio routing.',
        hearingAid: 'The setup guide covers audio routing for hearing devices. Temple arms are thicker than normal glasses — test the fit.',
        needsFunding: 'Smart glasses are not yet recognized as a standard insurance benefit in the Netherlands. Check with your gemeente about WMO coverage, or ask your health insurer.',
        budgetBlocker: 'The opticians page has information about potential insurance and WMO coverage options.',
        setup: 'Set up my glasses',
        training: 'Start training',
        learnMore: 'Learn more about the glasses',
        prepFirst: 'Here\'s what to address first:',
        nextStep: 'Recommended next step:',
        tryAgain: 'When you\'re ready, come back and try the assessment again.',
        restart: 'Start over',
        setupUrl: '/en/setup/',
        trainingUrl: '/en/training/',
        opticiansUrl: '/en/opticians/'
      },
      nl: {
        great: 'Een AI bril lijkt heel geschikt voor jou!',
        good: 'Een AI bril kan goed werken — met wat voorbereiding.',
        notReady: 'Je bent er misschien nog niet klaar voor — maar er zijn stappen om er te komen.',
        voiceOk: 'Je bent vertrouwd met stembesturing',
        helperOk: 'Je hebt iemand om te helpen bij installatie',
        reading: 'Tekst lezen is een sterke toepassing voor deze bril',
        seeing: 'Object- en scèneherkenning helpt je dagelijks',
        navigation: 'Spraaknavigatie geeft echte zelfstandigheid',
        communication: 'Handsfree communicatie werkt uitstekend',
        all: 'Deze bril dekt al je behoeften',
        needsPhone: 'Je hebt eerst een smartphone nodig. De bril verbindt met je telefoon voor AI, internet en apps.',
        needsScreenreader: 'We raden aan om eerst te leren je telefoon met VoiceOver (iPhone) of TalkBack (Android) te gebruiken. Dit maakt het instellen en dagelijks gebruik veel makkelijker.',
        needsHelper: 'Overweeg een familielid, vriend of opticien te vragen om te helpen bij de eenmalige installatie (ongeveer 15 minuten). Daarna kun je de bril zelfstandig gebruiken.',
        cochlear: 'Goed nieuws: de installatiegids heeft een apart gedeelte voor cochleair implantaat gebruikers, inclusief tips voor pasvorm en audiorouting.',
        hearingAid: 'De installatiegids behandelt audiorouting voor hoortoestellen. De brillenpoten zijn dikker dan normale brillen — test de pasvorm.',
        needsFunding: 'AI brillen worden nog niet standaard vergoed door de zorgverzekering. Informeer bij je gemeente over WMO-vergoeding, of vraag bij je zorgverzekeraar.',
        budgetBlocker: 'De opticiens-pagina heeft informatie over mogelijke verzekering en WMO-vergoedingsmogelijkheden.',
        setup: 'Mijn bril instellen',
        training: 'Start training',
        learnMore: 'Meer lezen over de bril',
        prepFirst: 'Dit kun je het beste eerst regelen:',
        nextStep: 'Aanbevolen volgende stap:',
        tryAgain: 'Als je er klaar voor bent, probeer de test dan opnieuw.',
        restart: 'Opnieuw beginnen',
        setupUrl: '/nl/instellen/',
        trainingUrl: '/nl/training/',
        opticiansUrl: '/nl/opticiens/'
      }
    };
    var m = msg[lang] || msg.en;

    function assessRender() {
      var r = assessRecalc();
      var hasBlocker = r.flags.indexOf('needs-phone') >= 0;
      var hasBudgetBlocker = r.flags.indexOf('budget-blocker') >= 0;
      var category;
      if (hasBlocker || r.score < 9) {
        category = 'not-ready';
      } else if (r.score < 14 || r.flags.indexOf('needs-screenreader') >= 0) {
        category = 'good';
      } else {
        category = 'great';
      }

      var icon, title;
      if (category === 'great') { icon = '✓'; title = m.great; }
      else if (category === 'good') { icon = '◐'; title = m.good; }
      else { icon = '○'; title = m.notReady; }

      var html = '<div class="assess-result-icon" aria-hidden="true">' + icon + '</div>';
      html += '<h3 tabindex="-1">' + title + '</h3>';

      // Positive bullets
      if (category !== 'not-ready') {
        html += '<ul>';
        if (answers[0] && answers[0].score >= 2) html += '<li>' + m.voiceOk + '</li>';
        if (answers[2] && answers[2].score >= 2) html += '<li>' + m.helperOk + '</li>';
        r.tags.forEach(function (t) { if (m[t]) html += '<li>' + m[t] + '</li>'; });
        html += '</ul>';
      }

      // Flag notes
      var notes = [];
      if (r.flags.indexOf('needs-phone') >= 0) notes.push(m.needsPhone);
      if (r.flags.indexOf('needs-screenreader') >= 0) notes.push(m.needsScreenreader);
      if (r.flags.indexOf('needs-helper') >= 0) notes.push(m.needsHelper);
      if (r.flags.indexOf('cochlear') >= 0) notes.push(m.cochlear);
      if (r.flags.indexOf('hearing-aid') >= 0) notes.push(m.hearingAid);
      if (r.flags.indexOf('needs-funding') >= 0) notes.push(m.needsFunding);
      if (hasBudgetBlocker) notes.push(m.budgetBlocker);

      if (notes.length) {
        html += '<div class="assess-notes">';
        if (category === 'not-ready' || category === 'good') html += '<p><strong>' + m.prepFirst + '</strong></p>';
        html += '<ul>';
        notes.forEach(function (n) { html += '<li>' + n + '</li>'; });
        html += '</ul></div>';
      }

      // CTAs
      if (category === 'not-ready') {
        html += '<p>' + m.tryAgain + '</p>';
        html += '<ul class="routing-links" role="list">';
        html += '<li><a href="' + m.opticiansUrl + '">' + m.learnMore + '</a></li>';
        html += '</ul>';
      } else {
        html += '<p><strong>' + m.nextStep + '</strong></p>';
        html += '<ul class="routing-links" role="list">';
        html += '<li><a href="' + m.setupUrl + '">' + m.setup + '</a></li>';
        html += '<li><a href="' + m.trainingUrl + '">' + m.training + '</a></li>';
        html += '</ul>';
      }

      html += '<button class="assess-restart" type="button">' + m.restart + '</button>';
      resultEl.innerHTML = html;

      // Restart handler
      resultEl.querySelector('.assess-restart').addEventListener('click', function () {
        answers = [];
        resultEl.hidden = true;
        intro.hidden = false;
        intro.querySelector('.assess-start').focus();
      });

      var rh = resultEl.querySelector('h3');
      if (rh) rh.focus();
    }

    // Start button
    var startBtn = assessEl.querySelector('.assess-start');
    if (startBtn) {
      startBtn.addEventListener('click', function () { assessShow(0); });
    }

    // Wire up answer buttons
    steps.forEach(function (step, stepIndex) {
      if (!step) return;
      var btns = step.querySelectorAll('.assess-options button');
      btns.forEach(function (btn, btnIndex) {
        btn.addEventListener('click', function () {
          var pts = parseInt(btn.dataset.score, 10) || 0;
          var flagStr = btn.dataset.flag || '';
          var tagStr = btn.dataset.tag || '';
          var phone = btn.dataset.phone || null;

          answers[stepIndex] = {
            score: pts,
            flags: flagStr ? flagStr.split(',') : [],
            tags: tagStr ? tagStr.split(',') : [],
            phone: phone,
            btnIndex: btnIndex
          };

          if (phone) {
            localStorage.setItem('phone', phone);
            document.body.classList.toggle('phone-android', phone === 'android');
            document.querySelectorAll('.phone-selector .selector-btn').forEach(function (b) {
              b.setAttribute('aria-pressed', String(b.dataset.phone === phone));
            });
          }

          if (stepIndex < totalSteps - 1) {
            assessShow(stepIndex + 1);
          } else {
            intro.hidden = true;
            steps.forEach(function (s) { s.hidden = true; });
            resultEl.hidden = false;
            assessRender();
          }
        });
      });

      var back = step.querySelector('.assess-back');
      if (back) {
        back.addEventListener('click', function () {
          if (stepIndex > 0) assessShow(stepIndex - 1);
        });
      }
    });
  }
})();

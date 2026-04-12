// Dark mode toggle
(function () {
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

  // Phone toggle
  const radios = document.querySelectorAll('.phone-toggle input[type="radio"]');
  function applyPhone(value) {
    document.body.classList.toggle('phone-android', value === 'android');
  }

  if (radios.length) {
    var saved = localStorage.getItem('phone');
    if (!saved) {
      saved = /android/i.test(navigator.userAgent) ? 'android' : 'iphone';
    }
    radios.forEach(function (r) {
      r.checked = r.value === saved;
      r.addEventListener('change', function () {
        localStorage.setItem('phone', r.value);
        applyPhone(r.value);
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
})();

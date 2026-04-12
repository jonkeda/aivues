---
layout: layouts/page.njk
title: Is dit iets voor mij?
description: "Ontdek of Ray-Ban Meta AI brillen geschikt zijn voor jou — wat ze wel en niet kunnen voor mensen met een visuele beperking"
lang: nl
order: 1
permalink: /nl/bril/
---

# Is dit iets voor mij?

Ray-Ban Meta brillen hebben een ingebouwde camera en AI die je met je stem bedient. Zie ze als een extra paar ogen op je neus — geen vervanging voor je witte stok of geleidehond, maar een handig hulpmiddel erbij.

**Vraag het en ze vertellen je:**

- Wat er voor je is — scènes, objecten, kleuren
- Wat er op een bord, menu, label of brief staat
- Welke kant je op moet lopen
- Het antwoord op bijna elke vraag

**Ze doen ook dagelijkse taken handsfree:**

- Bellen en berichten
- Muziek en podcasts
- Foto's en video

**Goed om te weten voordat je begint:**

- Ze hebben je telefoon in de buurt nodig
- Batterij gaat ongeveer vier tot zes uur mee
- Ze werken niet goed in compleet donker
- Gezichtsherkenning is nog niet betrouwbaar

Om te beginnen heb je de bril nodig, een iPhone of Android telefoon, een gratis Meta-account, Wi-Fi en iemand die helpt bij de eerste installatie.

<div class="assessment" id="assessment" aria-label="Geschiktheidstest">
  <div class="assessment-intro" id="assess-intro">
    <h2>Controleer of een AI bril bij jouw situatie past</h2>
    <p>Beantwoord 6 korte vragen voor een persoonlijk advies.</p>
    <button class="assess-start" type="button">Start test</button>
  </div>

  <div class="assessment-step" id="assess-step-1" hidden>
    <div class="assess-progress" aria-label="Stap 1 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Kun je je telefoon bedienen met je stem of een schermlezer?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3">Ja, ik gebruik het dagelijks</button>
      <button type="button" data-score="2">Ik ben aan het leren</button>
      <button type="button" data-score="0" data-flag="needs-screenreader">Nee, nog niet</button>
    </div>
    <button class="assess-back" type="button" hidden>← Vorige vraag</button>
  </div>

  <div class="assessment-step" id="assess-step-2" hidden>
    <div class="assess-progress" aria-label="Stap 2 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Welke telefoon gebruik je?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3" data-phone="iphone">iPhone</button>
      <button type="button" data-score="3" data-phone="android">Android</button>
      <button type="button" data-score="0" data-flag="needs-phone">Ik heb geen smartphone</button>
    </div>
    <button class="assess-back" type="button">← Vorige vraag</button>
  </div>

  <div class="assessment-step" id="assess-step-3" hidden>
    <div class="assess-progress" aria-label="Stap 3 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Heb je iemand die kan helpen bij de eerste installatie?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3">Ja</button>
      <button type="button" data-score="2">Ik kan iemand vragen</button>
      <button type="button" data-score="1" data-flag="needs-helper">Nee, ik zou het alleen moeten doen</button>
    </div>
    <button class="assess-back" type="button">← Vorige vraag</button>
  </div>

  <div class="assessment-step" id="assess-step-4" hidden>
    <div class="assess-progress" aria-label="Stap 4 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Wat zou je het meest helpen in het dagelijks leven?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3" data-tag="reading">Tekst lezen (post, menu's, etiketten)</button>
      <button type="button" data-score="3" data-tag="seeing">Dingen herkennen (objecten, kleuren, scènes)</button>
      <button type="button" data-score="3" data-tag="navigation">Navigatie en oriëntatie</button>
      <button type="button" data-score="2" data-tag="communication">Handsfree bellen en berichten</button>
      <button type="button" data-score="3" data-tag="all">Al het bovenstaande</button>
    </div>
    <button class="assess-back" type="button">← Vorige vraag</button>
  </div>

  <div class="assessment-step" id="assess-step-5" hidden>
    <div class="assess-progress" aria-label="Stap 5 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Draag je een cochleair implantaat of hoortoestel?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3">Nee</button>
      <button type="button" data-score="2" data-flag="cochlear">Ja, cochleair implantaat</button>
      <button type="button" data-score="2" data-flag="hearing-aid">Ja, hoortoestel</button>
    </div>
    <button class="assess-back" type="button">← Vorige vraag</button>
  </div>

  <div class="assessment-step" id="assess-step-6" hidden>
    <div class="assess-progress" aria-label="Stap 6 van 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Weet je dat Ray-Ban Meta AI brillen rond de €300–400 kosten?</h3>
    <div class="assess-options" role="group" aria-label="Kies een optie">
      <button type="button" data-score="3">Ja, dat is prima</button>
      <button type="button" data-score="2" data-flag="needs-funding">Ik heb verzekering of financiering nodig</button>
      <button type="button" data-score="0" data-flag="budget-blocker">Dat is te duur</button>
    </div>
    <button class="assess-back" type="button">← Vorige vraag</button>
  </div>

  <div class="assessment-result" id="assess-result" hidden aria-live="polite"></div>
</div>

## Waar wil je naartoe?

<ul class="routing-links" role="list">
  <li><a href="/nl/instellen/">Mijn bril instellen</a></li>
  <li><a href="/nl/training/">Leren gebruiken</a></li>
  <li><a href="/nl/gebruik/">Ik gebruik ze al</a></li>
  <li><a href="/nl/apps/">De juiste apps vinden</a></li>
  <li><a href="/nl/opticiens/">Ik ben opticien</a></li>
</ul>

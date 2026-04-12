---
layout: layouts/page.njk
title: Is This For Me?
description: "Find out if Ray-Ban Meta smart glasses are right for you — what they can and can't do for visually impaired people"
lang: en
order: 1
permalink: /en/glasses/
---

# Is This For Me?

Ray-Ban Meta glasses have a built-in camera and AI that you control with your voice. Think of them as an extra pair of eyes on your nose — not a replacement for your cane or guide dog, but a helpful addition.

**Ask them and they'll tell you:**

- What's in front of you — scenes, objects, colors
- What a sign, menu, label, or letter says
- Which direction to walk
- The answer to almost any question

**They also handle everyday tasks hands-free:**

- Phone calls and messages
- Music and podcasts
- Photos and video

**Good to know before you start:**

- They need your phone nearby to work
- Battery lasts about four to six hours
- They don't work well in complete darkness
- Face recognition isn't reliable yet

To get started you need the glasses, an iPhone or Android phone, a free Meta account, Wi-Fi, and someone to help with the first-time setup.

<div class="assessment" id="assessment" aria-label="Suitability assessment">
  <div class="assessment-intro" id="assess-intro">
    <h2>Check if smart glasses fit your situation</h2>
    <p>Answer 6 short questions to get a personalized recommendation.</p>
    <button class="assess-start" type="button">Start assessment</button>
  </div>

  <div class="assessment-step" id="assess-step-1" hidden>
    <div class="assess-progress" aria-label="Step 1 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Can you use your phone by voice or with a screen reader?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3">Yes, I use it daily</button>
      <button type="button" data-score="2">I'm learning</button>
      <button type="button" data-score="0" data-flag="needs-screenreader">No, not yet</button>
    </div>
    <button class="assess-back" type="button" hidden>← Previous question</button>
  </div>

  <div class="assessment-step" id="assess-step-2" hidden>
    <div class="assess-progress" aria-label="Step 2 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Which phone do you use?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3" data-phone="iphone">iPhone</button>
      <button type="button" data-score="3" data-phone="android">Android</button>
      <button type="button" data-score="0" data-flag="needs-phone">I don't have a smartphone</button>
    </div>
    <button class="assess-back" type="button">← Previous question</button>
  </div>

  <div class="assessment-step" id="assess-step-3" hidden>
    <div class="assess-progress" aria-label="Step 3 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Do you have someone who can help with the first-time setup?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3">Yes</button>
      <button type="button" data-score="2">I can ask someone</button>
      <button type="button" data-score="1" data-flag="needs-helper">No, I'd be on my own</button>
    </div>
    <button class="assess-back" type="button">← Previous question</button>
  </div>

  <div class="assessment-step" id="assess-step-4" hidden>
    <div class="assess-progress" aria-label="Step 4 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">What would help you most day-to-day?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3" data-tag="reading">Reading text (mail, menus, labels)</button>
      <button type="button" data-score="3" data-tag="seeing">Recognizing things (objects, colors, scenes)</button>
      <button type="button" data-score="3" data-tag="navigation">Navigation and orientation</button>
      <button type="button" data-score="2" data-tag="communication">Hands-free calls and messages</button>
      <button type="button" data-score="3" data-tag="all">All of the above</button>
    </div>
    <button class="assess-back" type="button">← Previous question</button>
  </div>

  <div class="assessment-step" id="assess-step-5" hidden>
    <div class="assess-progress" aria-label="Step 5 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Do you wear a cochlear implant or hearing aid?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3">No</button>
      <button type="button" data-score="2" data-flag="cochlear">Yes, cochlear implant</button>
      <button type="button" data-score="2" data-flag="hearing-aid">Yes, hearing aid</button>
    </div>
    <button class="assess-back" type="button">← Previous question</button>
  </div>

  <div class="assessment-step" id="assess-step-6" hidden>
    <div class="assess-progress" aria-label="Step 6 of 6"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <h3 tabindex="-1">Are you aware that Ray-Ban Meta smart glasses cost around €300–400?</h3>
    <div class="assess-options" role="group" aria-label="Choose one">
      <button type="button" data-score="3">Yes, that's fine</button>
      <button type="button" data-score="2" data-flag="needs-funding">I'd need insurance or funding</button>
      <button type="button" data-score="0" data-flag="budget-blocker">That's too expensive</button>
    </div>
    <button class="assess-back" type="button">← Previous question</button>
  </div>

  <div class="assessment-result" id="assess-result" hidden aria-live="polite"></div>
</div>

## Where do you want to go?

<ul class="routing-links" role="list">
  <li><a href="/en/setup/">Set up my glasses</a></li>
  <li><a href="/en/training/">Learn to use them</a></li>
  <li><a href="/en/use/">I already use them</a></li>
  <li><a href="/en/apps/">Find the right apps</a></li>
  <li><a href="/en/opticians/">I'm an optician</a></li>
</ul>

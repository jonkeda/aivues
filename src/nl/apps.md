---
layout: layouts/page.njk
title: Essentiële apps
lang: nl
order: 4
permalink: /nl/apps/
---

# Essentiële apps

De 8 apps die elke AI-brillengebruiker moet installeren.

{% set legend = "Kies je telefoon" %}{% include "components/phone-toggle.njk" %}

---

## De 8 apps die iedereen nodig heeft

{% for app in apps.apps %}
<div class="app-card">

### {{ app.name }}

{{ app.description.nl }}

<p class="app-links">
{%- if app.url_ios and (app.platform == "both" or app.platform == "ios") %}
<a href="{{ app.url_ios }}">App Store</a>
{%- endif %}
{%- if app.url_ios and app.url_android and app.platform == "both" %} · {% endif %}
{%- if app.url_android and (app.platform == "both" or app.platform == "android") %}
<a href="{{ app.url_android }}">Google Play</a>
{%- endif %}
</p>

</div>
{% endfor %}

---

## Nederland-specifieke apps

- **9292** — OV-reisplanner
- **NS** — treinen, actuele vertrektijden
- **Buienradar** — neerslag en weer
- **Albert Heijn** — boodschappenlijst, aanbiedingen
- **DigiD** — overheidsidentificatie
- **Tikkie** — betaalverzoeken
- **OVpay** — in- en uitchecken OV

---

## Meer nodig?

- [AppleVis App Directory](https://www.applevis.com/apps) — uitgebreide app-catalogus met toegankelijkheidsbeoordeling
- [Google Toegankelijkheid Apps](https://play.google.com/store/apps/collection/promotion_topic_accessibility) — Android toegankelijkheidstools

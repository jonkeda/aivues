---
layout: layouts/page.njk
title: Essentiële apps
description: "De 7 essentiële apps voor slechtziende gebruikers van Ray-Ban Meta AI brillen — van AI-zicht tot navigatie"
lang: nl
order: 4
permalink: /nl/apps/
---

# Essentiële apps

Deze zeven apps vullen aan wat de bril alleen niet kan — van vrijwilligershulp tot AI-scènebeschrijving.

---

## De 7 apps die iedereen nodig heeft

Installeer deze voordat je begint met training. Elke app dient een ander doel.

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

Naast de zeven basisapps zijn er Nederlandse apps die goed werken met VoiceOver en TalkBack.

### Openbaar vervoer

Reizen met het OV is een van de meest gevraagde functies. Deze apps maken het makkelijker.

- **9292** — OV-reisplanner voor heel Nederland. Spreekt routes voor met VoiceOver/TalkBack en geeft realtime vertrektijden en verstoringen
- **NS** — Treinreizen plannen en e-tickets kopen. Toegankelijk met VoiceOver. Live vertrek- en aankomsttijden op stations
- **OVpay** — In- en uitchecken met bankpas of telefoon in het OV. Alternatief voor de OV-chipkaart

### Weer

Handig om voor vertrek te checken of je onderweg nat wordt.

- **Buienradar** — Neerslagverwachting per locatie. "Regent het over 30 minuten?" Handig als je met de bril buiten bent

### Boodschappen & betalen

Apps die helpen bij winkelen en geld.

- **Albert Heijn** — Boodschappenlijst maken, aanbiedingen bekijken, Bonuskaart scannen in de winkel. Redelijk toegankelijk met VoiceOver
- **Tikkie** — Betaalverzoeken sturen en ontvangen. Veel gebruikt in Nederland. Eenvoudige interface, werkt met VoiceOver

### Overheid & identiteit

Voor contact met overheidsinstanties heb je DigiD nodig.

- **DigiD** — Inloggen bij overheidswebsites. Nodig voor Mijn Belastingdienst, UWV en gemeente. Let op: gezichtsherkenning werkt mogelijk niet met de bril op — gebruik de pincode-optie

### Bankieren

Alle grote Nederlandse banken hebben apps die redelijk tot goed werken met VoiceOver en TalkBack.

- **ING** — Goed toegankelijk. Spraaknavigatie werkt
- **Rabobank** — Goed toegankelijk. Face ID/Touch ID voor inloggen
- **ABN AMRO** — Redelijk toegankelijk. Sommige grafieken zijn niet gelabeld

---

## Meer nodig?

Deze directories beoordelen apps specifiek op toegankelijkheid.

- [AppleVis App Directory](https://www.applevis.com/apps) — uitgebreide app-catalogus met toegankelijkheidsbeoordeling
- [Google Toegankelijkheid Apps](https://play.google.com/store/apps/collection/promotion_topic_accessibility) — Android toegankelijkheidstools

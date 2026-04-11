---
layout: layouts/page-with-sidebar.njk
title: Installatiehandleiding
lang: nl
order: 1
permalink: /nl/instellen/
sidebar:
  - id: is-dit-voor-mij
    label: Is dit voor mij?
  - id: hardware
    label: Hardware instellen
  - id: koppelen
    label: Koppelen met telefoon
  - id: toegankelijkheid
    label: Toegankelijkheid telefoon
  - id: apps
    label: Apps installeren
  - id: testen
    label: Testen
---

# Installatiehandleiding

{% set legend = "Kies je telefoon" %}{% include "components/phone-toggle.njk" %}

Alles wat je nodig hebt om van een ongeopende doos naar werkende AI brillen te gaan. Een helper moet dit samen met de gebruiker doen.

## Is dit voor mij? {#is-dit-voor-mij}

**Wat Ray-Ban Meta kan:**

- Beschrijven wat er voor je is ("Hey Meta, what do you see?")
- Tekst voorlezen (menu's, labels, brieven, borden)
- Objecten, kleuren en mensen herkennen
- Navigeren met stembegeleiding
- Handsfree bellen en berichten sturen
- Muziek en podcasts afspelen
- Foto's en video maken
- Vragen beantwoorden via AI

**Wat ze niet kunnen:**

- Een witte stok of geleidehond vervangen
- Werken zonder telefoon in de buurt
- Gezichten betrouwbaar herkennen
- In het donker zien
- Langer dan 4-6 uur continu draaien

**Wat je nodig hebt:** Ray-Ban Meta bril, iPhone of Android telefoon, Meta-account, Wi-Fi en een helper voor de installatie.

---

## Hardware instellen {#hardware}

### Wat zit er in de doos

- Ray-Ban Meta bril
- Oplaadcase met USB-C kabel
- Snelstartkaart
- Brilpoetsdoekje

### Opladen

- Leg de bril in de case, sluit USB-C aan
- LED wordt groen als de bril vol is — eerste keer opladen duurt circa 1 uur
- Batterij gaat 4–6 uur mee bij actief gebruik
- De case biedt circa 8 extra volledige ladingen — houd hem in je tas
- Batterij controleren: zeg **"Hey Meta, battery"**

### Pasvorm & comfort

- Verstelbare neuspads — pas aan voor comfort
- Past op de meeste volwassen gezichtsvormen (standaard Ray-Ban Wayfarer)
- IPX4 waterbestendig — veilig in de regen
- Glazen opties: helder, zonnebril, transition, of op sterkte

### Bediening

- **Touchpad** (rechterpoot):
  - Enkele tik = afspelen / pauzeren
  - Dubbele tik = volgend nummer
  - Veeg naar voren = volume omhoog
  - Veeg naar achteren = volume omlaag
- **Opnameknop** (bovenzijde rechterpoot):
  - Kort indrukken = foto maken
  - Lang indrukken = video opnemen

### Privacy-LED

- Een klein wit lampje aan de binnenkant van het montuur gaat branden wanneer de camera actief is
- De LED kan niet uitgeschakeld worden — dit is opzettelijk zodat mensen om je heen weten dat de camera aan staat
- Vertel de gebruiker dat het lampje er is, zodat zij het aan anderen kunnen uitleggen

---

## Koppelen met telefoon {#koppelen}

1. Installeer de **Meta View** app uit de App Store (iPhone) of Google Play (Android)
2. Open de app en log in met een Meta-account
3. Volg de koppelwizard in de app — de bril wordt automatisch gevonden
4. Accepteer de firmware-update wanneer daarom gevraagd wordt — dit duurt 5–10 minuten. **Houd de bril in de case** tijdens de update.
5. Na de update verbindt de bril automatisch opnieuw

<div class="iphone-only">

### iPhone koppelen

- Controleer Bluetooth-verbinding: Instellingen → Bluetooth → "Ray-Ban Meta" moet **Verbonden** tonen
- Audio-routing: muziek, VoiceOver en Siri spelen automatisch af via de brillenspeakers
- Test: speel een nummer af — je zou het door de bril moeten horen, niet via de telefoon
- Als audio via de telefoon komt: verbreek en herverbind Bluetooth, of controleer de Meta View app

</div>

<div class="android-only">

### Android koppelen

- Controleer Bluetooth-verbinding: Instellingen → Verbonden apparaten → "Ray-Ban Meta" moet **Actief** tonen
- Audio-routing: media-audio en telefoongesprekken spelen af via de brillenspeakers
- Test: speel een nummer af — je zou het door de bril moeten horen, niet via de telefoon
- Geef meldingstoegang aan de Meta View app wanneer daarom gevraagd wordt

</div>

---

## Toegankelijkheid telefoon {#toegankelijkheid}

<div class="iphone-only">

### iPhone

*Inhoud volgt binnenkort — VoiceOver, meldingen voorlezen, Siri instellen.*

</div>

<div class="android-only">

### Android

*Inhoud volgt binnenkort — TalkBack, meldingen voorlezen, Google Assistent.*

</div>

---

## Apps installeren {#apps}

Installeer deze 8 apps voordat je begint met training. Zie de [apps-pagina](/nl/apps/) voor details.

1. **Meta View** — brillenbeheer (vereist)
2. **Be My Eyes** — vrijwilliger + AI visuele hulp
3. **Google Maps** — wandelnavigatie
4. **WhatsApp** — berichten met Meta AI
5. **Seeing AI** (iPhone) / **Google Lookout** (Android) — OCR + scènes
6. **Lazarillo** — continue omgevingsinformatie
7. **Cash Reader** — eurobankbiljetherkenning
8. **Spotify** — spraakgestuurde muziek

---

## Testen {#testen}

Zeg: **"Hey Meta, what do you see?"**

Als Meta AI beschrijft wat er voor je is, is de installatie compleet. Ga verder met [Training](/nl/training/).

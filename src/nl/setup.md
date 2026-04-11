---
layout: layouts/page-with-sidebar.njk
title: Installatiehandleiding
lang: nl
order: 1
permalink: /nl/instellen/
sidebar:
  - id: hardware
    label: Hardware instellen
  - id: koppelen
    label: Koppelen met telefoon
  - id: cochleair
    label: Cochleair & Hoorapparaten
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

Niet zeker of een AI bril iets voor jou is? Lees [Is dit iets voor mij?](/nl/bril/) eerst.

---

## Hardware instellen {#hardware}

Open de doos en je vindt de bril, een oplaadcase met USB-C kabel, een snelstartkaart en een brilpoetsdoekje. Dat is alles.

**Opladen:**

- Leg de bril in de case en sluit USB-C aan — eerste keer opladen duurt ongeveer een uur
- De LED wordt groen als de bril vol is
- Batterij gaat 4–6 uur mee bij actief gebruik; de case biedt circa 8 extra ladingen
- Batterij controleren: zeg **"Hey Meta, battery"**

**Pasvorm en comfort:**

- Verkrijgbaar als Ray-Ban Wayfarer, Skyler, Headliner en Oakley Blayzer en Optics — meerdere montuurtypes voor verschillende gezichtsvormen
- IPX4 waterbestendig — veilig in lichte regen
- Glazen opties: helder, zonnebril, transition, of op sterkte

**Bediening op de rechter brillenpoot:**

- Enkele tik op het touchpad = afspelen / pauzeren
- Dubbele tik = volgend nummer
- Veeg naar voren / achteren = volume omhoog / omlaag
- Kort indrukken bovenste knop = foto
- Lang indrukken = video

**Over de privacy-LED:**

Een klein wit lampje aan de buitenkant van het montuur gaat branden zodra de camera actief is. Het kan niet uitgeschakeld worden — dit is opzettelijk zodat mensen in de buurt weten dat de camera aan staat. Zorg dat de gebruiker weet dat het lampje er is, zodat zij het aan anderen kunnen uitleggen.

---

## Koppelen met telefoon {#koppelen}

Koppelen duurt ongeveer 15 minuten, waarvan het grootste deel een firmware-update is.

1. Installeer de **Meta View** app uit de App Store (iPhone) of Google Play (Android)
2. Open de app en log in met een Meta-account
3. Volg de koppelwizard in de app — de bril wordt automatisch gevonden
4. Accepteer de firmware-update wanneer gevraagd. **Houd de bril in de case** tijdens de update (5–10 minuten)
5. Na de update verbindt de bril vanzelf opnieuw

<div class="iphone-only">

**iPhone — controleer de verbinding:**

- Instellingen → Bluetooth → "Ray-Ban Meta" moet **Verbonden** tonen
- Muziek, VoiceOver en Siri spelen automatisch af via de brillenspeakers
- Test door een nummer af te spelen — je moet het door de bril horen, niet via de telefoon
- Als audio via de telefoon komt, verbreek en herverbind Bluetooth of controleer de Meta View app

</div>

<div class="android-only">

**Android — controleer de verbinding:**

- Instellingen → Verbonden apparaten → "Ray-Ban Meta" moet **Actief** tonen
- Media-audio en telefoongesprekken spelen af via de brillenspeakers
- Test door een nummer af te spelen — je moet het door de bril horen, niet via de telefoon
- Geef meldingstoegang aan de Meta View app wanneer gevraagd

</div>

---

## Cochleair & Hoorapparaten {#cochleair}

Als de gebruiker een cochleair implantaat of soortgelijk hoorapparaat draagt, kan audio van zowel de telefoon als de bril ernaartoe worden gerouteerd. De instellingen hangen af van je apparaat en telefoonttype.

<div class="iphone-only">

**iPhone + Cochleair (of compatibel hoorapparaat):**

1. **Koppel het hoorapparaat met iPhone:**
   - Instellingen → Bluetooth → zet Bluetooth aan
   - Zet het hoorapparaat in koppeelmodus (zie je apparaathandleiding)
   - Selecteer het in de Bluetooth-lijst
   - Het verschijnt nu onder "Mijn apparaten" in Bluetooth-instellingen

2. **Stel het in als audio-uitvoer:**
   - iPhone stuurt audio automatisch naar het hoorapparaat voor telefoongesprekken en meldingen
   - Muziek en audio gaan meestal naar het meest recent verbonden apparaat (bril of hoorapparaat — je kan kiezen)
   - Controleer welk apparaat audio afspeelt: Bedieningscentrum → Audio-uitvoer → selecteer hoorapparaat of bril

3. **Zorg dat Meta AI en bril-audio juist worden gerouteerd:**
   - Zowel de bril als het hoorapparaat kunnen met dezelfde telefoon gekoppeld zijn
   - Bril-audio gaat standaard naar de brillenspeakers — wil je het door het hoorapparaat sturen, gebruik dan het bedieningscentrum voordat je Meta AI aanspreekt
   - Sommige hoorapparaten hebben een iOS-app waarmee je een standaarduitvoer kan instellen — controleer je Cochleair-app

4. **Test het:**
   - Zeg "Hey Meta, what time is it?" — je zou het antwoord in je hoorapparaat moeten horen
   - Speel een nummer af via Spotify — zou via het geselecteerde apparaat moeten spelen
   - Bel een vriend — zou via het hoorapparaat moeten bellen

**Tip:** Je hebt nu twee audio-uitgangen. Gebruik het bedieningscentrum om snel te schakelen tussen brillenspeakers (voor een snelle reactie) en hoorapparaat (voor belangrijke gesprekken).

</div>

<div class="android-only">

**Android + Cochleair (of compatibel hoorapparaat):**

1. **Koppel het hoorapparaat met Android:**
   - Instellingen → Verbonden apparaten → Bluetooth → zet Bluetooth aan
   - Zet het hoorapparaat in koppeelmodus (zie je apparaathandleiding)
   - Selecteer het in de lijst met beschikbare apparaten
   - Bevestig de koppeling

2. **Stel het in als audio-uitvoer:**
   - Ga naar Instellingen → Toegankelijkheid → Hoorapparaten
   - Schakel "Audio-routering voor hoorapparaten" in als beschikbaar (nieuwere Android-versies)
   - Android geeft prioriteit aan hoorapparaat-audio voor telefoongesprekken en meldingen
   - Voor andere audio (muziek, Meta AI), controleer of je hoorapparaat een Android-app heeft voor audio-routeringsvoorkeuren

3. **Zorg dat Meta AI en bril-audio juist worden gerouteerd:**
   - De bril en het hoorapparaat kunnen beide met dezelfde telefoon gekoppeld zijn
   - Bril-audio gaat standaard naar de bril — wil je het naar het hoorapparaat schakelen, ga dan naar Instellingen → Geluid → Geavanceerd → Standaardapparaat en selecteer het hoorapparaat, of gebruik de snelinstelling
   - Sommige Cochleair Android-apps hebben een "Meta AI-audio routeren" optie — controleer je Cochleair-app-instellingen

4. **Test het:**
   - Zeg "Hey Google, what time is it?" — je zou het antwoord in je hoorapparaat moeten horen
   - Speel een nummer af via Spotify — zou via het geselecteerde apparaat moeten spelen
   - Bel een vriend — zou via het hoorapparaat moeten bellen

**Tip:** Je kan zowel de bril als het hoorapparaat tegelijk actief hebben. Swipe twee keer naar beneden voor Snelinstelling en bekijk "Audio-uitvoer" of "Hoorapparaat" instellingen om eenvoudig te schakelen.

</div>

---

## Toegankelijkheid telefoon {#toegankelijkheid}

Deze instellingen zorgen dat de telefoon via de bril met de gebruiker praat. Stel ze één keer in en ze blijven aan.

<div class="iphone-only">

**VoiceOver** maakt van het scherm een steminterface.

- Instellingen → Toegankelijkheid → VoiceOver → **AAN**
- Snelle schakelaar: Instellingen → Toegankelijkheid → Snel naar → VoiceOver (drievoudig klikken op zijknop)
- Audio speelt af via de brillenspeakers over Bluetooth

**Meldingen aankondigen** leest inkomende berichten voor via de bril.

- Instellingen → Toegankelijkheid → Siri → Meldingen aankondigen → **AAN**
- Inschakelen voor: WhatsApp, Telefoon, Berichten, Agenda, Meta View
- Uitschakelen voor: sociale media, marketing-apps, games

**Siri** laat je de telefoon bedienen met je stem.

- Instellingen → Siri en zoeken → Luister naar "Hey Siri" → **AAN**
- Sta Siri toe bij vergrendeling → **AAN**
- Taal: Engels aanbevolen voor de beste AI-kwaliteit

**Gesproken inhoud** leest geselecteerde tekst of het hele scherm voor.

- Instellingen → Toegankelijkheid → Gesproken inhoud → Spreek selectie → **AAN**
- Spreek scherm → **AAN** (veeg met twee vingers omlaag om het hele scherm voor te laten lezen)

**Snelle test:** Zeg **"Hey Siri, what time is it?"** — je moet het antwoord door de bril horen.

</div>

<div class="android-only">

**TalkBack** maakt van het scherm een steminterface.

- Instellingen → Toegankelijkheid → TalkBack → **AAN**
- Audio speelt af via de brillenspeakers over Bluetooth
- Belangrijke gebaren: veeg rechts = volgend item, veeg links = vorig, dubbeltikken = activeren

**Meldingen voorlezen** kondigt inkomende berichten aan via de bril.

- Instellingen → Toegankelijkheid → TalkBack → Instellingen → Meldingen hardop voorlezen
- Inschakelen voor: WhatsApp, Telefoon, Berichten, Meta View
- Uitschakelen voor: sociale media, marketing-apps

**Google Assistent** laat je de telefoon bedienen met je stem.

- Instellingen → Google → Google Assistent → "Hey Google" → **AAN**
- Toestaan op vergrendelscherm → **AAN**
- Taal: Engels aanbevolen voor de beste AI-kwaliteit

**Selecteren en voorlezen** leest tekst voor waar je de telefooncamera op richt.

- Instellingen → Toegankelijkheid → Selecteren en voorlezen → **AAN**
- Richt de camera op tekst en tik op de afspeelknop

**Snelle test:** Zeg **"Hey Google, what time is it?"** — je moet het antwoord door de bril horen.

</div>

---

## Apps installeren {#apps}

Installeer deze acht apps voordat je begint met training. Elke app voegt iets toe wat de bril alleen niet kan. Zie de [apps-pagina](/nl/apps/) voor details.

1. **Meta View** — brillenbeheer (vereist)
2. **Be My Eyes** — vrijwilliger + AI visuele hulp
3. **Google Maps** — wandelnavigatie
4. **WhatsApp** — berichten met Meta AI
5. **Seeing AI** (iPhone) / **Google Lookout** (Android) — OCR en scènebeschrijving
6. **Lazarillo** — continue omgevingsinformatie
7. **Cash Reader** — eurobankbiljetherkenning
8. **Spotify** — spraakgestuurde muziek

---

## Testen {#testen}

Zet de bril op en zeg: **"Hey Meta, what do you see?"**

Als Meta AI beschrijft wat er voor je is, is de installatie compleet. Ga verder met [Training](/nl/training/).

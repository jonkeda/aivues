---
layout: layouts/page.njk
title: Toegankelijkheidsverklaring
description: "AiVues toegankelijkheidsverklaring — WCAG-conformiteit, bekende beperkingen en contactgegevens"
lang: nl
permalink: /nl/toegankelijkheid/
---

# Toegankelijkheidsverklaring

AiVues wil deze site toegankelijk maken voor iedereen, inclusief mensen die schermlezers, vergrotingssoftware, toetsenbordnavigatie en andere hulptechnologieën gebruiken.

## Conformiteit

Deze site streeft naar conformiteit met **WCAG 2.1 Niveau AA**. We hebben het volgende geïmplementeerd:

- Semantische HTML met correcte koppenstructuur
- Skip-navigatielink
- ARIA-attributen voor interactieve elementen
- Toetsenbordtoegankelijke navigatie en bediening
- Focusindicatoren op alle interactieve elementen
- Minimaal 44×44 px aanraakgebieden
- Donkere modus en systeemvoorkeur-ondersteuning
- Ondersteuning voor verminderde beweging via `prefers-reduced-motion`
- Printvriendelijke stijlen
- Tweetalige inhoud met correcte `lang`-attributen en `hreflang`-links
- Spraakgeoptimaliseerde pagina's voor schermlezer- en slimme brillengebruik

## Bekende beperkingen

- Deze site is nog niet formeel geaudit door een onafhankelijke toegankelijkheidsbeoordelaar.
- De site ondersteunt nog geen Windows Hoog Contrast modus (`forced-colors`).

## Feedback

Als je toegankelijkheidsproblemen ervaart op deze site, laat het ons weten:

- **GitHub:** [Maak een issue aan](https://github.com/jonkeda/aivues/issues)

We nemen feedback over toegankelijkheid serieus en zullen gemelde problemen snel aanpakken.

## Technische details

- Statische HTML gegenereerd met [Eleventy](https://www.11ty.dev/)
- Geen JavaScript-frameworks — alleen vanilla JS
- CSS: ~5 KB, JS: ~4 KB — minimaal paginagewicht
- Alle pagina's werken zonder JavaScript

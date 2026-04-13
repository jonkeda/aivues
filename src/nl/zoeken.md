---
layout: layouts/page.njk
title: Zoeken
description: "Doorzoek de AiViews gids"
lang: nl
permalink: /nl/zoeken/
---

# Zoeken

<div id="search" class="search-container"></div>

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    new PagefindUI({
      element: '#search',
      showSubResults: true,
      showImages: false,
      translations: {
        placeholder: 'Doorzoek de gids...',
        zero_results: 'Geen resultaten voor "[SEARCH_TERM]"'
      }
    });
    var input = document.querySelector('.pagefind-ui__search-input');
    if (input) input.focus();
  });
</script>

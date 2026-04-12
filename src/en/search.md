---
layout: layouts/page.njk
title: Search
description: "Search the AiVues guide"
lang: en
permalink: /en/search/
---

# Search

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
        placeholder: 'Search the guide...',
        zero_results: 'No results for "[SEARCH_TERM]"'
      }
    });
    var input = document.querySelector('.pagefind-ui__search-input');
    if (input) input.focus();
  });
</script>

---
layout: layouts/page.njk
title: Essential Apps
lang: en
order: 4
permalink: /en/apps/
---

# Essential Apps

The 8 apps every smart glasses user should install. No AI finder yet — that's coming later.

{% set legend = "Choose your phone" %}{% include "components/phone-toggle.njk" %}

---

## The 8 Apps Every User Needs

{% for app in apps.apps %}
<div class="app-card">

### {{ app.name }}

{{ app.description.en }}

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

## Want More?

- [AppleVis App Directory](https://www.applevis.com/apps) — extensive accessibility-rated app catalog
- [Google Accessibility Apps](https://play.google.com/store/apps/collection/promotion_topic_accessibility) — Android accessibility tools

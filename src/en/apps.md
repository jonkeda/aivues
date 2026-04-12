---
layout: layouts/page.njk
title: Essential Apps
description: "The 7 essential apps for visually impaired Ray-Ban Meta smart glasses users — from AI vision to navigation"
lang: en
order: 4
permalink: /en/apps/
---

# Essential Apps

These seven apps add features the glasses alone can't provide — from volunteer help to AI scene description.

---

## The 7 Apps Every User Needs

Install these before you start training. Each one serves a different purpose.

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

These directories review apps specifically for accessibility.

- [AppleVis App Directory](https://www.applevis.com/apps) — extensive accessibility-rated app catalog
- [Google Accessibility Apps](https://play.google.com/store/apps/collection/promotion_topic_accessibility) — Android accessibility tools

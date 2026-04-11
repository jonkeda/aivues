---
layout: layouts/page-with-sidebar.njk
title: Setup Guide
lang: en
order: 1
permalink: /en/setup/
sidebar:
  - id: is-this-for-me
    label: Is This For Me?
  - id: hardware
    label: Hardware Setup
  - id: pair
    label: Pair with Phone
  - id: accessibility
    label: Phone Accessibility
  - id: apps
    label: Install Essential Apps
  - id: test
    label: Test It
---

# Setup Guide

{% set legend = "Choose your phone" %}{% include "components/phone-toggle.njk" %}

Everything you need to go from unopened box to working smart glasses. A helper should do this together with the user.

## Is This For Me? {#is-this-for-me}

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

---

## Hardware Setup {#hardware}

Open the box and you'll find the glasses, a charging case with USB-C cable, a quick start card, and a lens cloth. That's everything.

**Charging:**

- Place the glasses in the case and connect USB-C — first charge takes about an hour
- The LED turns solid green when full
- Battery lasts 4–6 hours of active use; the case holds about 8 extra charges
- Check battery anytime: say **"Hey Meta, battery"**

**Fit and comfort:**

- Adjustable nose pads — tweak until comfortable
- Standard Ray-Ban Wayfarer shape, fits most adults
- IPX4 water-resistant — safe in light rain
- Lens options: clear, sun, transition, or prescription inserts

**Controls on the right temple:**

- Single tap the touchpad = play / pause
- Double tap = skip track
- Swipe forward / back = volume up / down
- Short press the top button = photo
- Long press = video

**About the privacy LED:**

A small white light on the inside of the frame turns on whenever the camera is active. It can't be disabled — this is intentional so people around the user know the camera is on. Make sure the user knows it's there so they can explain it to others.

---

## Pair with Phone {#pair}

Pairing takes about 15 minutes, most of which is a firmware update.

1. Install the **Meta View** app from the App Store (iPhone) or Google Play (Android)
2. Open it and sign in with a Meta account
3. Follow the in-app pairing wizard — it finds the glasses automatically
4. Accept the firmware update when prompted. **Keep the glasses in the case** during the update (5–10 minutes)
5. After the update the glasses reconnect on their own

<div class="iphone-only">

**iPhone — verify the connection:**

- Settings → Bluetooth → "Ray-Ban Meta" should say **Connected**
- Music, VoiceOver, and Siri all play through the glasses speakers automatically
- Test by playing a song — you should hear it through the glasses, not the phone
- If audio comes from the phone, disconnect and reconnect Bluetooth or check the Meta View app

</div>

<div class="android-only">

**Android — verify the connection:**

- Settings → Connected Devices → "Ray-Ban Meta" should say **Active**
- Media audio and phone calls play through the glasses speakers
- Test by playing a song — you should hear it through the glasses, not the phone
- Grant notification access to the Meta View app when prompted

</div>

---

## Phone Accessibility Settings {#accessibility}

These settings let the phone talk to the user through the glasses. Configure them once and they stay on.

<div class="iphone-only">

**VoiceOver** turns the screen into a voice interface.

- Settings → Accessibility → VoiceOver → **ON**
- Quick toggle: Settings → Accessibility → Accessibility Shortcut → VoiceOver (triple-click side button)
- Audio plays through the glasses speakers via Bluetooth

**Announce Notifications** reads incoming messages aloud through the glasses.

- Settings → Accessibility → Siri → Announce Notifications → **ON**
- Enable for: WhatsApp, Phone, Messages, Calendar, Meta View
- Disable for: social media, marketing apps, games

**Siri** lets you control the phone by voice.

- Settings → Siri & Search → Listen for "Hey Siri" → **ON**
- Allow Siri When Locked → **ON**
- Language: English recommended for best AI quality

**Spoken Content** reads selected text or the entire screen aloud.

- Settings → Accessibility → Spoken Content → Speak Selection → **ON**
- Speak Screen → **ON** (two-finger swipe down to read the full screen)

**Quick test:** Say **"Hey Siri, what time is it?"** — you should hear the answer through the glasses.

</div>

<div class="android-only">

**TalkBack** turns the screen into a voice interface.

- Settings → Accessibility → TalkBack → **ON**
- Audio plays through the glasses speakers via Bluetooth
- Key gestures: swipe right = next item, swipe left = previous, double-tap = activate

**Notification reading** announces incoming messages through the glasses.

- Settings → Accessibility → TalkBack → Settings → Read notifications aloud
- Enable for: WhatsApp, Phone, Messages, Meta View
- Disable for: social media, marketing apps

**Google Assistant** lets you control the phone by voice.

- Settings → Google → Google Assistant → "Hey Google" → **ON**
- Allow on lock screen → **ON**
- Language: English recommended for best AI quality

**Select to Speak** reads text you point the phone camera at.

- Settings → Accessibility → Select to Speak → **ON**
- Point the camera at text and tap the play button

**Quick test:** Say **"Hey Google, what time is it?"** — you should hear the answer through the glasses.

</div>

---

## Install Essential Apps {#apps}

Install these eight apps before you start training. Each one adds something the glasses alone can't do. See the [full apps page](/en/apps/) for details.

1. **Meta View** — glasses management (required)
2. **Be My Eyes** — volunteer + AI vision help
3. **Google Maps** — walking navigation
4. **WhatsApp** — messaging with Meta AI
5. **Seeing AI** (iPhone) / **Google Lookout** (Android) — OCR and scene description
6. **Lazarillo** — continuous surroundings info
7. **Cash Reader** — euro banknote identification
8. **Spotify** — voice-controlled music

---

## Test It {#test}

Put the glasses on and say: **"Hey Meta, what do you see?"**

If Meta AI describes what's in front of you, setup is complete. Move on to [Training](/en/training/).

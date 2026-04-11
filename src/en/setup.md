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

Everything you need to go from unopened box to working smart glasses. A helper should do this with the user.

## Is This For Me? {#is-this-for-me}

**What Ray-Ban Meta can do:**

- Describe what's in front of you ("Hey Meta, what do you see?")
- Read text aloud (menus, labels, letters, signs)
- Identify objects, colors, and people
- Navigate with voice directions
- Make hands-free calls and send messages
- Play music and podcasts
- Take photos and video
- Answer questions via AI

**What they can't do:**

- Replace a white cane or guide dog
- Work without a phone nearby
- Identify faces reliably
- See in the dark
- Run continuously for more than 4-6 hours

**What you need:** Ray-Ban Meta glasses, iPhone or Android phone, Meta account, Wi-Fi, and a helper for setup.

---

## Hardware Setup {#hardware}

### What's in the box

- Ray-Ban Meta glasses
- Charging case with USB-C cable
- Quick start card
- Lens cloth

### Charging

- Place the glasses in the case, connect USB-C
- LED turns solid green when fully charged — first charge takes about 1 hour
- Battery lasts 4–6 hours of active use
- The case holds about 8 extra full charges — keep it in your bag
- Check battery: say **"Hey Meta, battery"**

### Fit & comfort

- Adjustable nose pads — tweak for comfort
- Fits most adult face shapes (standard Ray-Ban Wayfarer)
- IPX4 water-resistant — safe in rain
- Lens options: clear, sun, transition, or prescription inserts

### Controls

- **Touchpad** (right temple):
  - Single tap = play / pause
  - Double tap = skip track
  - Swipe forward = volume up
  - Swipe back = volume down
- **Capture button** (top of right temple):
  - Short press = take a photo
  - Long press = record video

### Privacy LED

- A small white LED on the inside of the frame turns on whenever the camera is active
- It cannot be disabled — this is intentional so people around you know the camera is on
- Tell the user it's there so they can explain it to others

---

## Pair with Phone {#pair}

1. Install the **Meta View** app from the App Store (iPhone) or Google Play (Android)
2. Open the app and sign in with a Meta account
3. Follow the in-app pairing wizard — it will find the glasses automatically
4. When prompted, allow the firmware update — this takes 5–10 minutes. **Keep the glasses in the case** during the update.
5. After the update, the glasses will reconnect automatically

<div class="iphone-only">

### iPhone Pairing

- Confirm Bluetooth is connected: Settings → Bluetooth → "Ray-Ban Meta" should say **Connected**
- Audio routing: music, VoiceOver, and Siri all play through the glasses speakers automatically
- Test: play a song — you should hear it through the glasses, not the phone speaker
- If audio comes from the phone: disconnect and reconnect Bluetooth, or check the Meta View app

</div>

<div class="android-only">

### Android Pairing

- Confirm Bluetooth is connected: Settings → Connected Devices → "Ray-Ban Meta" should say **Active**
- Audio routing: media audio and phone calls play through the glasses speakers
- Test: play a song — you should hear it through the glasses, not the phone speaker
- Grant notification access to the Meta View app when prompted

</div>

---

## Phone Accessibility Settings {#accessibility}

<div class="iphone-only">

### iPhone

*Content coming soon — VoiceOver, Announce Notifications, Siri setup.*

</div>

<div class="android-only">

### Android

*Content coming soon — TalkBack, notification reading, Google Assistant.*

</div>

---

## Install Essential Apps {#apps}

Install these 8 apps before you start training. See the [full apps page](/en/apps/) for details.

1. **Meta View** — glasses management (required)
2. **Be My Eyes** — volunteer + AI vision help
3. **Google Maps** — walking navigation
4. **WhatsApp** — messaging with Meta AI
5. **Seeing AI** (iPhone) / **Google Lookout** (Android) — OCR + scenes
6. **Lazarillo** — continuous surroundings info
7. **Cash Reader** — Euro banknote identification
8. **Spotify** — voice-controlled music

---

## Test It {#test}

Say: **"Hey Meta, what do you see?"**

If Meta AI describes what's in front of you, setup is complete. Move on to [Training](/en/training/).

---
layout: layouts/page-with-sidebar.njk
title: Setup Guide
description: "Step-by-step setup guide for Ray-Ban Meta smart glasses — pairing, accessibility settings, and essential apps"
lang: en
order: 1
permalink: /en/setup/
sidebar:
  - id: hardware
    label: Hardware Setup
  - id: pair
    label: Pair with Phone
  - id: cochlear
    label: Cochlear & Hearing Devices
  - id: accessibility
    label: Phone Accessibility
  - id: apps
    label: Install Essential Apps
  - id: test
    label: Test It
---

# Setup Guide

Everything you need to go from unopened box to working smart glasses. A helper can do this together with the user.

Not sure if smart glasses are right for you? Read [Is This For Me?](/en/glasses/) first.

---

## Hardware Setup {#hardware}

Open the box and you'll find the glasses, a charging case with USB-C cable, a quick start card, and a lens cloth. That's everything.

**Charging:**

- Place the glasses in the case and connect USB-C — first charge takes about an hour
- The LED turns solid green when full
- Battery lasts 4–6 hours of active use; the case holds about 8 extra charges
- Check battery anytime: say **"Hey Meta, battery"**

**Fit and comfort:**

- Available as Ray-Ban Wayfarer, Skyler, Headliner, and Oakley Blayzer and Optics — multiple frame styles to fit different faces
- IPX4 water-resistant — safe in light rain
- Lens options: clear, sun, transition, or prescription inserts

**Controls on the right temple:**

- Single tap the touchpad = play / pause
- Double tap = skip track
- Swipe forward / back = volume up / down
- Short press the top button = photo
- Long press = video

**About the privacy LED:**

A small white light on the outside of the frame turns on whenever the camera is active. It can't be disabled — this is intentional so people around the user know the camera is on. Make sure the user knows it's there so they can explain it to others.

---

## Pair with Phone {#pair}

Pairing takes about 15 minutes, most of which is a firmware update.

1. Install the **Meta AI** app from the App Store (iPhone) or Google Play (Android)
2. Open it and sign in with a Meta account
3. Follow the in-app pairing wizard — it finds the glasses automatically
4. Accept the firmware update when prompted. **Keep the glasses in the case** during the update (5–10 minutes)
5. After the update the glasses reconnect on their own

<div class="iphone-only">

**iPhone — verify the connection:**

- Settings → Bluetooth → "Ray-Ban Meta" should say **Connected**
- Music, VoiceOver, and Siri all play through the glasses speakers automatically
- Test by playing a song — you should hear it through the glasses, not the phone
- If audio comes from the phone, disconnect and reconnect Bluetooth or check the Meta AI app

</div>

<div class="android-only">

**Android — verify the connection:**

- Settings → Connected Devices → "Ray-Ban Meta" should say **Active**
- Media audio and phone calls play through the glasses speakers
- Test by playing a song — you should hear it through the glasses, not the phone
- Grant notification access to the Meta AI app when prompted

</div>

---

## Cochlear Implant & Hearing Devices {#cochlear}

If the user wears a Cochlear implant or similar hearing device, audio from both the phone and the glasses can be routed through it. Setup depends on your device and phone type.

<div class="iphone-only">

**iPhone + Cochlear (or compatible hearing device):**

1. **Pair the hearing device to iPhone:**
   - Settings → Bluetooth → enable Bluetooth
   - Put the hearing device in pairing mode (see your device manual)
   - Select it from the Bluetooth list
   - It will now appear under "My Devices" in Bluetooth settings

2. **Set it as the audio output:**
   - Once paired, iPhone automatically routes audio through the hearing device for phone calls and notifications
   - Music and audio typically route to the most recently connected device (glasses or hearing device — you may need to choose)
   - To control which device plays audio: Control Center → Audio Output → select the hearing device or glasses

3. **Ensure Meta AI and glasses audio route correctly:**
   - Both the glasses and hearing device can be paired to the same phone
   - Glasses audio may route to the glasses speakers by default — to send it through the hearing device instead, use the Control Center audio output switcher before speaking to Meta AI
   - Some hearing devices have an iOS app that lets you set a default output — check your Cochlear app for this option

4. **Test it:**
   - Say "Hey Meta, what time is it?" — listen for the response in your hearing device
   - Play a song through Spotify — should play through the selected audio device
   - Call a friend — should ring through the hearing device

**Tip:** You now have two audio outputs. Use the Control Center audio switcher to toggle between glasses speakers (for a quick reply) and hearing device (for important conversations).

</div>

<div class="android-only">

**Android + Cochlear (or compatible hearing device):**

1. **Pair the hearing device to Android:**
   - Settings → Connected Devices → Bluetooth → Turn on Bluetooth
   - Put the hearing device in pairing mode (see your device manual)
   - Select it from the list of available devices
   - Confirm pairing

2. **Set it as the audio output:**
   - Go to Settings → Accessibility → Hearing aids
   - Enable "Hearing aid audio routing" if available (newer Android versions)
   - Android will prioritize hearing device audio for phone calls and notifications
   - For other audio (music, Meta AI), check if your hearing device has an Android app for audio routing preferences

3. **Ensure Meta AI and glasses audio route correctly:**
   - The glasses and hearing device can both be paired to the same phone
   - Glasses audio goes to the glasses by default — to switch it to the hearing device, go to Settings → Sound → Advanced → Default audio device and select the hearing device, or use the quick settings audio switcher
   - Some Cochlear Android apps have a "Route Meta AI audio" option — check your Cochlear app settings

4. **Test it:**
   - Say "Hey Google, what time is it?" — listen for the response in your hearing device
   - Play a song through Spotify — should play through the selected audio device
   - Call a friend — should ring through the hearing device

**Tip:** You can have both the glasses and hearing device active. Use Quick Settings (swipe down twice) to see "Audio output" or "Hearing device" settings and toggle between them.

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
- Enable for: WhatsApp, Phone, Messages, Calendar, Meta AI
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
- Enable for: WhatsApp, Phone, Messages, Meta AI
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

Install these seven apps before you start training. Each one adds something the glasses alone can't do. See the [full apps page](/en/apps/) for details.

1. **Meta AI** — glasses management (required)
2. **Be My Eyes** — volunteer + AI vision help
3. **WhatsApp** — messaging with Meta AI
4. **Envision AI** — OCR, scene description and object finding
5. **Ally** — accessible AI assistant by Envision
6. **ScribeMe** — AI scanner, live visual assistant and document reader
7. **Spotify** — voice-controlled music

---

## Test It {#test}

Put the glasses on and say: **"Hey Meta, what do you see?"**

If Meta AI describes what's in front of you, setup is complete. Move on to [Training](/en/training/).

<div class="next-steps" markdown="1">

## Next Steps

<ul class="routing-links" role="list">
  <li><a href="/en/training/">Start training</a></li>
  <li><a href="/en/apps/">Find the right apps</a></li>
  <li><a href="/en/help/">I need help</a></li>
</ul>

</div>

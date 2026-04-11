# Auto-Training Integration: Siri Shortcuts & Meta AI

## The idea

Both Siri Shortcuts and Meta AI can be configured to guide a user through training steps hands-free. Instead of only reading lesson content on a webpage, the user could trigger a lesson via voice and be walked through the exercises conversationally.

This document explores how to integrate that into the existing 4-week training page.

---

## What's possible today

### Siri Shortcuts (iPhone)

Siri Shortcuts can be pre-built and shared as `.shortcut` files or iCloud links. A shortcut can:

- Speak text aloud (using the `Speak Text` action)
- Wait for the user to say "next" or "done" (using `Dictate Text` or `Wait to Return`)
- Ask yes/no questions ("Are you ready for the next step?")
- Chain multiple steps into a guided walkthrough
- Be triggered by voice: "Hey Siri, start lesson 3"

**Limitations:**
- Shortcuts run on the phone, not the glasses — Siri uses the phone mic
- Complex branching (if/else based on user answers) is possible but clunky to build
- Sharing requires iCloud links; no Android equivalent
- Can't interact with Meta AI (separate wake word, separate system)

### Meta AI custom commands

Meta AI on Ray-Ban Meta currently does **not** support:
- Custom routines or automation
- User-defined multi-step flows
- Shortcut-like scripting

What it **can** do:
- Answer freeform questions ("Hey Meta, walk me through pairing my glasses")
- Give conversational guidance if prompted well
- Remember context within a single conversation

So Meta AI can act as a tutor if the user knows what to ask, but it can't run a structured lesson plan autonomously.

---

## Integration options

### Option A: Downloadable Siri Shortcuts per lesson (iPhone only)

Add a download link inside each `<details>` lesson block:

```
<details>
<summary>Lesson 3 — "Hey Meta, what do you see?"</summary>
<div>

[existing bullet content]

<div class="iphone-only">
📲 <a href="https://www.icloud.com/shortcuts/abc123">Install "Lesson 3" shortcut</a> — 
say "Hey Siri, start lesson 3" to be guided through the exercises by voice.
</div>

<label class="progress-check"><input type="checkbox" id="w1d3"> Done</label>
</div>
</details>
```

**Pros:**
- Fully hands-free training via voice
- Stays integrated with the existing page — the shortcut is a bonus, not a replacement
- Users who can't read the screen get the same content by voice
- Each shortcut is self-contained (no app install needed)

**Cons:**
- iPhone only — no Android equivalent (Google Routines can't do multi-step spoken guides)
- We need to build and maintain 28 shortcuts
- iCloud sharing links can break
- Shortcut updates require re-downloading

### Option B: "Ask Meta AI" prompts per lesson

Instead of building automation, give the user a ready-made prompt to say to Meta AI that turns it into a tutor for that lesson:

```
<details>
<summary>Lesson 3 — "Hey Meta, what do you see?"</summary>
<div>

[existing bullet content]

**Voice training:** Say "Hey Meta, I want to practice describing scenes. 
Ask me to look at something, then I'll tell you what I said, and you tell me 
if I used the right command." Meta AI will guide you through practice exercises.

<label class="progress-check"><input type="checkbox" id="w1d3"> Done</label>
</div>
</details>
```

**Pros:**
- Works on both iPhone and Android
- No downloads, no maintenance
- Uses the glasses mic — truly hands-free
- Meta AI can adapt to the user (ask follow-ups, give encouragement)

**Cons:**
- Meta AI doesn't always follow instructions perfectly
- Quality depends on how Meta AI interprets the prompt
- Can't guarantee a consistent experience
- Doesn't work offline

### Option C: Hybrid — Siri Shortcuts + Meta AI prompts

Combine both: offer Siri Shortcuts for iPhone users (structured, reliable) and Meta AI prompts for everyone (flexible, cross-platform).

```
<details>
<summary>Lesson 3 — "Hey Meta, what do you see?"</summary>
<div>

[existing bullet content]

**Practice by voice:**
<div class="iphone-only">
📲 <a href="...">Install shortcut</a> — say "Hey Siri, lesson 3"
</div>

Or say: **"Hey Meta, help me practice describing what's around me. 
Give me 5 things to try."**

<label class="progress-check"><input type="checkbox" id="w1d3"> Done</label>
</div>
</details>
```

**Pros:**
- Best of both worlds
- Siri Shortcuts for reliable step-by-step; Meta AI for flexible practice
- Progressive enhancement: works for everyone, better for iPhone

**Cons:**
- Most work to build and maintain
- Two different systems to explain

### Option D: Separate "Voice Training" page

Instead of embedding into each lesson, create a new page `/en/voice-training/` that:
- Lists all 28 lessons as voice-activatable Siri Shortcuts (iPhone)
- Lists Meta AI practice prompts per lesson (all platforms)
- Links back to the main training page for the written content

**Pros:**
- Keeps the existing training page clean
- Easier to maintain voice content separately
- Could be linked from the training page sidebar

**Cons:**
- Splits the experience across two pages
- Users need to navigate between pages

---

## Recommendation

**Option C (Hybrid)** is the strongest approach:

1. **Add a "Practice by voice" block** at the bottom of each lesson (inside the existing `<details>`)
2. **Meta AI prompts for all users** — one well-crafted sentence they can say to start practicing
3. **Siri Shortcuts for iPhone users** — downloadable, triggered by "Hey Siri, lesson [N]"
4. **Keep the written content as the primary path** — voice training is a bonus layer

### Implementation plan

**Phase 1 — Meta AI prompts (low effort, high value):**
- Write a practice prompt for each of the 28 lessons
- Add them to the existing training pages (EN + NL)
- No downloads, no external dependencies

**Phase 2 — Siri Shortcuts (medium effort, iPhone only):**
- Build shortcuts for the most impactful lessons first (lessons 3, 4, 5 of Week 1)
- Host on iCloud, add download links inside the iPhone-only divs
- Expand to all 28 if feedback is positive

**Phase 3 — Google Assistant routines (low effort, limited):**
- Google Routines are much simpler than Siri Shortcuts
- At most: "Hey Google, start lesson 3" → reads the lesson steps aloud using TTS
- Worth exploring but limited in interactivity

---

## Open questions

1. Has anyone tested long Meta AI prompts for tutoring? How well does it follow complex instructions?
2. Can Siri Shortcuts be shared without an iCloud account? (important for accessibility)
3. Should we test with Martine first before building all 28?
4. Do we want the Meta AI prompts in English only (since Meta AI works best in English) or bilingual?

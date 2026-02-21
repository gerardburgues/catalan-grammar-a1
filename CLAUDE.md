# ParlaAra — Catalan A1/A2 Learning App

Interactive Catalan language learning app for English speakers, at A1–A2 level.
Red + yellow color theme (inspired by Catalan senyera flag).

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JS (no build step, no framework)
- **Backend**: Firebase (Auth, Firestore, Hosting) — **not wired yet, local-first**
- **Payments**: Stripe — **stub only, not wired**
- **Storage**: localStorage (prefix `parlaara_`) until Firebase is added
- **Spaced repetition**: SM-2 algorithm, localStorage-backed
- **GitHub**: https://github.com/gerardburgues/catalan-grammar-a1

## Architecture
All JS uses the IIFE module pattern (`const Module = (function() { ... })()`) with `var` for globals.

### Key Files
| File | Status | Description |
|------|--------|-------------|
| `index.html` | ✅ Done | Full SPA — all 8 page sections |
| `style.css` | ✅ Done | 3,169 lines — red/yellow theme, all components |
| `app.js` | ✅ Done | Core engine — sidebar, exercises, flashcards |
| `dashboard.js` | ✅ Done | Dashboard rendering, i18n, stats |
| `spaced-repetition.js` | ✅ Done | SM-2 for grammar + vocab, localStorage |
| `auth.js` | ✅ Done | localStorage stub (no Firebase yet) |
| `analytics.js` | ✅ Done | No-op stubs |
| `stripe.js` | ✅ Done | No-op stubs |
| `firebase-config.js` | ✅ Done | Local stub (gitignored) |
| `data.js` | ⚠️ Partial | Chapters 1–6 done, chapters 7–10 missing |
| `CLAUDE.md` | ✅ Done | This file |

## Pages / Sections in index.html
- `#landing-page` — hero, features, pricing (€9/mo, €39/6mo, €59/yr), footer
- `#onboarding-page` — welcome + start
- `#dashboard-page` — 3-col grid: sidebar | main | right panel
- `#lesson-page` — grammar lessons with exercises
- `#vocabulary-page` — vocab flashcards + exercises
- `#review-page` — spaced repetition review queue
- `#study-plan-page` — week-by-week plan cards
- `#progress-page` — overall stats + chapter breakdown

## CSS Conventions
- Landing: `lp-*` (lp-navbar, lp-hero, lp-features, lp-pricing, lp-footer)
- Auth modal: `.auth-modal-overlay`, `.auth-modal`
- Dashboard: `dash-*`
- Sidebar: `sb-*`
- Study plan: `sp-*`
- Vocabulary: `voc-*`
- Exercise types: `.fb-*` (fill-blank), `.mc-*` (multiple choice), `.match-*`, `.sort-*`, `.reorder-*`

## Color Theme
```css
--color-primary: #E63946      /* red */
--color-secondary: #F4D03F    /* yellow */
--color-accent: #FFD700       /* gold */
--color-dark: #1a1a2e         /* main bg */
--color-dark2: #16213e        /* card bg */
--color-dark3: #0f3460        /* sidebar bg */
--sidebar-width: 260px
```

## localStorage Keys
- `parlaara_user` — `{ email, displayName, subscriptionStatus }`
- `parlaara_scores` — `{ [sectionId]: { completed, correct, total } }`
- `parlaara_history` — array of `{ sectionId, sectionType, correct, timestamp, xp }`
- `parlaara_streak` — `{ date, count }`
- `parlaara_reviewItems` — SM-2 items `{ [key]: { sectionId, sectionType, exerciseType, itemIdx, interval, easeFactor, nextReview, repetitions } }`

## i18n
Dashboard supports EN / CA toggle (English UI vs Catalan labels).
- `Dashboard.setLanguage('en' | 'ca')`
- `applyI18nToSidebar()` updates `[data-i18n]`, `[data-label-en]`, `[data-label-ca]`

---

## Content Status — data.js

### ✅ Completed Chapters (chapters 1–6, 29 sections)

| Chapter | ID | Sections | Type |
|---------|-----|----------|------|
| Chapter 1 — Articles & Nouns | chapter-1 | g1, g2, g3, g4 | Grammar |
| Chapter 2 — Greetings & Basics | chapter-2 | v1, v2, v3, v4 | Vocabulary |
| Chapter 3 — Verbs: Present Tense | chapter-3 | g5, g6, g7, g8, g9, g10, g11, g12 | Grammar |
| Chapter 4 — Daily Life Vocabulary | chapter-4 | v5, v6, v7, v8, v9, v10 | Vocabulary |
| Chapter 5 — Adjectives & Agreement | chapter-5 | g13, g14, g15, v11 | Grammar + Vocab |
| Chapter 6 — Question Words & Prepositions | chapter-6 | g16, g17, g18 | Grammar |

### ❌ Missing Chapters (to generate tomorrow)

| Chapter | ID | Sections to create | Type |
|---------|-----|-------------------|------|
| Chapter 7 — Around Town | chapter-7 | v12 (city/places), v13 (transport), v14 (jobs), v15 (home/furniture) | Vocabulary |
| Chapter 8 — Pronouns & Possessives | chapter-8 | g19 (personal pronouns), g20 (possessives), g21 (demonstratives) | Grammar |
| Chapter 9 — Past & Future | chapter-9 | g22 (passat perifràstic), g23 (futur amb anar+inf), g24 (irregular verbs review) | Grammar |
| Chapter 10 — Weather & Nature | chapter-10 | v16 (weather), v17 (nature), v18 (adjectives review) | Vocabulary |

### Exercise Types Used
1. `fillblank` — text input, min 6 items
2. `multichoice` — 4 options, min 6 items
3. `matching` — left/right pairs, min 8 pairs
4. `sorting` — assign words to categories, min 10 items
5. `transformation` — rewrite/inflect, min 6 items
6. `reorder` — build sentence from word tokens, min 5 items

Each section has minimum 3 exercise blocks.

---

## TODO — Next Session

### Priority 1: Complete data.js
- Append chapters 7–10 (sections v12–v18, g19–g24) to `data.js`
- Follow exact same format as existing chapters (see chapter-4 or chapter-6 as reference)
- Each section: id, type, subtitle, navLabel, navLabelEn, caseTag, explanation, exercises[]

### Priority 2: Integration testing
- Open `index.html` in browser and smoke-test
- Check sidebar builds from DATA correctly
- Check exercise rendering for each type
- Check flashcard flip for vocab sections
- Check localStorage save/load works
- Check EN/CA toggle on sidebar

### Priority 3: Polish & fixes
- Verify all `showPage()` / `setActiveNav()` calls wire correctly
- Check mobile responsive layout (burger menu, sidebar overlay)
- Fix any JS errors in browser console
- Study plan page: populate with actual week-by-week content based on data.js structure
- Progress page: wire up actual chapter data

### Priority 4: Firebase (when ready)
- Create Firebase project
- Replace localStorage calls in auth.js with real Firebase Auth
- Replace localStorage calls in spaced-repetition.js with Firestore
- Replace localStorage calls in dashboard.js with Firestore reads
- Add Stripe extension and configure prices

### Priority 5: GitHub Actions
- Add validate.yml (syntax check, required files)
- Add deploy-prod.yml (Firebase Hosting deploy on push to main)

---

## Grammar Content Reference (for generating missing sections)

**Passat perifràstic** (Chapter 9, g22):
- vaig + infinitive = past tense
- vaig menjar (I ate), vas anar (you went), va fer (he/she did)
- nosaltres vam, vosaltres vau, ells/elles van
- NO accent on "va" (unlike the noun "va")

**Futur immediat** (Chapter 9, g23):
- anar a + infinitive = near future
- vaig a menjar (I'm going to eat), vas a estudiar (you're going to study)
- Same conjugation of anar as past perifràstic — context determines meaning

**Possessives** (Chapter 8, g20):
- el meu / la meva / els meus / les meves (my)
- el teu / la teva / els teus / les teves (your)
- el seu / la seva / els seus / les seves (his/her/your formal)
- el nostre / la nostra / els nostres / les nostres (our)
- el vostre / la vostra / els vostres / les vostres (your pl.)
- el seu / la seva / els seus / les seves (their)

**Demonstratives** (Chapter 8, g21):
- aquest / aquesta / aquests / aquestes (this/these — near)
- aquell / aquella / aquells / aquelles (that/those — far)
- No neuter "this/that" like Spanish esto/eso — use the masculine form

**Personal pronouns** (Chapter 8, g19):
- jo, tu, ell/ella/vostè, nosaltres, vosaltres, ells/elles/vostès
- Note: "vostè" is formal singular (3rd person verb)
- Weak pronouns (clitics): em, et, es, ens, us, es (reflexive/dative/accusative)

# Design directions for Sanu Dilshan’s portfolio

## Three possible directions

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| Terminal Atlas | A dark editorial portfolio that translates backend systems into a curated developer field guide, with sharp lime navigation marks and technical annotations. | 0.06 |
| Paper Signal | A warm, print-inspired case-study site that feels like a contemporary engineering journal, using ink, ivory, and crimson. | 0.08 |
| Kinetic Stack | A clean, light, Swiss-modern personal brand using cool blue, oversized type, and data-led geometric motion. | 0.04 |

## Chosen approach: Terminal Atlas

### Design Movement

**Terminal Atlas** combines late-modernist editorial design with the visual language of developer tooling. It is not a simulated terminal interface; it uses the clarity, hierarchy, and compact metadata of a useful technical environment, paired with confident art-direction and expressive display typography.

### Core Principles

1. **Evidence over decoration.** Each interaction, stat, and visual cue must make Sanu’s engineering work easier to understand.
2. **Asymmetric composition.** A compact side rail, wide headline field, and deliberately offset panels create momentum without hiding the reading order.
3. **Systemic detail.** Hairline grids, coordinates, build-status marks, and modular tags imply technical discipline while remaining legible.
4. **Quiet confidence.** Motion, colors, and language are energetic but controlled, avoiding visual noise and gimmicks.

### Color Philosophy

The foundation is midnight blue-black, selected for focus and contrast rather than a generic “tech dark mode.” Warm off-white gives long-form copy a human, editorial quality. **Atlas Lime** is the singular signal color: it marks active states, evidence, and calls to action, making it feel earned rather than decorative. A muted steel blue supports secondary metadata and grid structures.

### Layout Paradigm

The page reads as a **vertical engineering field note**. On desktop, a narrow persistent identity rail anchors the left side, while modular content spreads through a broad main canvas. Important content is staggered instead of centered: the hero headline leans left, proof metrics sit in a right-aligned ledger, and projects alternate their visual weight. On smaller screens, the rail collapses into a compact top bar while preserving section ordering.

### Signature Elements

1. An **Atlas Mark**: three stacked, offset lime modules forming a directional “S” path.
2. A faint **coordinate grid** and micro-label system, used behind hero and section dividers.
3. **Evidence chips** and lined metadata rows that present stacks, outcomes, and roles like a product build record.

### Interaction Philosophy

Interactions should reward deliberate exploration. Nav links track the active section; project cards lift minimally and reveal a concise “read the build” affordance; the contact area offers immediate, clear actions. No interaction exists only to look clever.

### Animation

On initial load, the rail, headline, and evidence ledger enter with 40–70ms staggered opacity-and-translate transitions. Hover states use a 160ms cubic-bezier(0.23, 1, 0.32, 1) ease-out and only alter transform, opacity, and color. The lime atlas modules shift by a few pixels when hovered. Section reveal effects are subtle and disabled under `prefers-reduced-motion`.

### Typography System

**DM Sans** provides readable body copy, metadata, and controls. **Space Grotesk** is reserved for decisive, high-contrast headlines and project names. Display type uses tight tracking and large line breaks; body copy uses comfortable measure and height. Metadata is set in DM Mono for a compact, engineering-aware voice.

### Brand Essence

**A production-minded full stack developer portfolio for teams that need secure APIs, useful interfaces, and accountable engineering.**

Personality: **methodical, curious, dependable.**

### Brand Voice

Headlines are declarative and outcome-focused. CTAs are direct and specific. Microcopy names the practical value, never filling space with generic welcome language.

Examples: “Secure systems, tangible outcomes.” and “Open a project brief.”

### Wordmark & Logo

The wordmark uses a spaced **SANU / DILSHAN** construction in DM Mono paired with the Atlas Mark: three descending offset modules that imply an “S,” a stacked architecture, and forward motion. It is a graphic mark first, with the name acting as an editorial label rather than unstyled text.

### Signature Brand Color

**Atlas Lime — #C7FF4B**

## Style Decisions

- The left rail is the brand anchor: it carries the Atlas Mark, a visible SANU / DILSHAN wordmark, compact coordinates, an Atlas index, and persistent section wayfinding.
- Atlas Lime is reserved for actions, active marks, proof numerals, selected headline emphasis, and concise system-status markers. The final signal area remains lime, but is structured with dark grid, ledger, and rule detail.
- Every project visual is paired with a build-record annotation, a technology route, and an engineering-system label so the visual serves as project evidence rather than decoration.

## Responsive typography refinement

The refreshed direction borrows the strongest applicable principles from modern developer portfolios: clear, personality-led one-line positioning; expressive display type that does not sacrifice scanning; and compact, humanized technical copy. The current DM Mono metadata voice remains useful, but the display voice will move toward a soft, contemporary grotesque with more character and wider shapes. This will make the site feel less like a technical dashboard while keeping project evidence credible.

The desktop canvas will trade the oversized permanent rail for a slimmer, information-rich navigation strip that gives work more width. The mobile canvas will treat every section as an intentional editorial sequence, reducing visual density, increasing type scale where reading begins, and maintaining tap targets and content spacing.

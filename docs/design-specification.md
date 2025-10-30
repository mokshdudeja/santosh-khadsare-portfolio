# Design Specification - Moksh Dudeja Portfolio

**Style**: Modern Minimalism (Premium)  
**Target Audience**: 18-35 professionals, recruiters, potential clients  
**Primary Goal**: Showcase technical expertise and drive professional connections

---

## 1. Design Direction & Rationale

### 1.1 Style Essence
Modern Minimalism Premium creates **professional restraint** through generous whitespace (48-96px section spacing), subtle interactions, and a 90/10 neutral-to-accent color ratio. This style conveys **technical competence and sophistication** perfect for an AI/ML specialist targeting tech industry opportunities.

### 1.2 Real-World Examples
- **Stripe.com** - Clean payment platform showcasing technical clarity
- **Linear.app** - Modern project management with refined interactions
- **Vercel.com** - Developer-focused minimalism with generous spacing

### 1.3 Why This Works for Moksh
- **Age 18-22**: Aligns with young professional aesthetic expectations (clean, modern, digital-native)
- **Dual Expertise**: Minimalism lets technical achievements stand out without visual competition
- **Professional Context**: Tech industry recruiters expect this design language (SaaS/startup standard)

---

## 2. Design Tokens

### 2.1 Color Palette

#### Primary Brand Color (Modern Blue)
| Token | Hex | Usage | WCAG |
|-------|-----|-------|------|
| `primary-50` | `#E6F0FF` | Subtle backgrounds, hover states | - |
| `primary-100` | `#CCE0FF` | Light accents, borders | - |
| `primary-500` | `#0066FF` | CTAs, links, active states | 4.53:1 ✅ AA |
| `primary-600` | `#0052CC` | Hover states for primary buttons | 6.05:1 ✅ AA |
| `primary-900` | `#003D99` | Deep accents (rare use) | 9.89:1 ✅ AAA |

#### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#FAFAFA` | Page background |
| `neutral-100` | `#F5F5F5` | Card/section surfaces |
| `neutral-200` | `#E5E5E5` | Borders, dividers |
| `neutral-500` | `#A3A3A3` | Disabled text, placeholders |
| `neutral-700` | `#404040` | Secondary text, captions |
| `neutral-900` | `#171717` | Primary text, headings |

#### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success-500` | `#10B981` | Success states, positive metrics |
| `warning-500` | `#F59E0B` | Warning states |
| `error-500` | `#EF4444` | Error states, validation |

#### Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `bg-page` | `neutral-50` | Main page background |
| `bg-surface` | `#FFFFFF` | Cards, elevated surfaces |

**WCAG Validation:**
- `primary-500` (#0066FF) on white: **4.53:1** ✅ AA (safe for 14px+ text)
- `neutral-900` (#171717) on white: **16.5:1** ✅ AAA (body text)
- `neutral-700` (#404040) on white: **8.6:1** ✅ AAA (secondary text)

### 2.2 Typography

#### Font Families
| Token | Value | Fallback Stack |
|-------|-------|----------------|
| `font-primary` | Inter | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |

#### Font Sizes (Responsive)
| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| `text-hero` | `64px` | `40px` | Hero headline (h1) |
| `text-title` | `48px` | `32px` | Section headers (h2) |
| `text-subtitle` | `32px` | `24px` | Subsection headers (h3) |
| `text-body-large` | `20px` | `18px` | Intro paragraphs, emphasis |
| `text-body` | `16px` | `16px` | Standard content |
| `text-small` | `14px` | `14px` | Captions, metadata |

#### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `font-regular` | `400` | Body text, descriptions |
| `font-medium` | `500` | Navigation links, subtle emphasis |
| `font-semibold` | `600` | Subheadings, card titles |
| `font-bold` | `700` | Hero headline, section headers |

#### Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `leading-tight` | `1.2` | Headings (h1, h2) |
| `leading-normal` | `1.5` | Body text, UI elements |
| `leading-relaxed` | `1.6` | Long-form content |

#### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | `-0.02em` | Hero headlines (64px+) |
| `tracking-normal` | `0` | Standard text |

### 2.3 Spacing System (8-Point Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `space-2` | `8px` | Tight inline spacing (icon + text) |
| `space-4` | `16px` | Standard element spacing |
| `space-6` | `24px` | Related group spacing |
| `space-8` | `32px` | Card padding (minimum) |
| `space-12` | `48px` | Section internal spacing |
| `space-16` | `64px` | Section boundaries |
| `space-24` | `96px` | Hero section spacing |
| `space-32` | `128px` | Dramatic spacing (rare) |

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-button` | `12px` | Buttons, small elements |
| `radius-card` | `16px` | Cards, containers |
| `radius-modal` | `24px` | Modals, large overlays |
| `radius-full` | `9999px` | Circular elements (avatar) |

### 2.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Resting cards |
| `shadow-card-hover` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Hovered cards |
| `shadow-modal` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` | Modals, prominent elements |

### 2.6 Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `200ms` | Button clicks, quick interactions |
| `duration-normal` | `250ms` | Standard transitions |
| `duration-slow` | `300ms` | Modals, section reveals |
| `easing-default` | `ease-out` | 90% of animations |
| `easing-smooth` | `ease-in-out` | Elegant transitions |

---

## 3. Component Specifications

### 3.1 Hero Section
**Structure:**
- Height: 500-600px
- Content centered in 6-8 column grid
- Headshot: 120-160px circular avatar with 4px white border + subtle shadow
- Headline: 64px (desktop) / 40px (mobile), Bold 700, -0.02em tracking
- Subheadline: 20px Body Large, Regular 400, neutral-700
- CTA button: Primary style (see §3.2)

**Tokens:**
- Padding vertical: `space-24` (96px)
- Avatar border: `4px solid white`, `shadow-card`
- Background: `bg-page` with optional subtle geometric pattern (5% opacity)

**States:**
- CTA hover: Scale(1.02) + lift -2px + `primary-600` background

**Note:** Avatar should "float" above the section with shadow for depth. Avoid flat placement.

---

### 3.2 Button (Primary CTA)
**Structure:**
- Height: 56px (desktop) / 48px (mobile)
- Padding: 24px horizontal
- Font: Semibold 600, 16px
- Border radius: `radius-button` (12px)

**Tokens:**
- Background: `primary-500`
- Text: `white`
- Hover background: `primary-600`
- Transition: `duration-fast` (200ms), `easing-default`

**States:**
- **Default:** `primary-500` background, white text
- **Hover:** `primary-600` background + `transform: translateY(-2px) scale(1.02)` + `shadow-card-hover`
- **Active:** `primary-900` background
- **Focus:** 2px `primary-500` focus ring (no border jump)

**Note:** All CTAs should have consistent height/padding. Use this spec for primary actions only (max 2-3 per viewport).

---

### 3.3 Card (Skill/Project/Achievement)
**Structure:**
- Padding: 32px (desktop) / 24px (mobile)
- Border radius: `radius-card` (16px)
- Background: `bg-surface` (white)
- Border: 1px solid `neutral-200`

**Tokens:**
- Shadow: `shadow-card` (resting)
- Hover shadow: `shadow-card-hover`
- Gap between cards: `space-6` (24px)

**States:**
- **Default:** Resting shadow, no transform
- **Hover:** `transform: translateY(-4px) scale(1.02)` + `shadow-card-hover` (250ms ease-out)

**Layout:**
- Desktop: 3-column grid (Projects), 4-column grid (Skills)
- Tablet: 2-column grid
- Mobile: 1-column stack

**Note:** Cards must "float" on `neutral-50` background (white on off-white = 5% lightness contrast). Never use white cards on white background.

---

### 3.4 Input Field
**Structure:**
- Height: 56px
- Padding: 16px horizontal
- Border radius: `radius-button` (12px)
- Font: Regular 400, 16px

**Tokens:**
- Border: 1px solid `neutral-200`
- Background: `white`
- Text: `neutral-900`
- Placeholder: `neutral-500`
- Focus ring: 2px `primary-500`

**States:**
- **Default:** `neutral-200` border
- **Focus:** Remove border, add 2px `primary-500` ring (offset 0)
- **Error:** 2px `error-500` ring, error text below in `error-500`

**Note:** Use consistent height across all form inputs (text, email, textarea). Textarea minimum 120px height.

---

### 3.5 Navigation Bar
**Structure:**
- Height: 72px
- Position: Sticky top-0
- Background: `white` with `backdrop-blur` (optional glassmorphism)
- Logo: Left-aligned, text "Moksh Dudeja" in 20px Semibold
- Nav links: Horizontal, 16px Medium 500, `neutral-700`
- CTA: Right-aligned, Secondary button (40px height)

**Tokens:**
- Padding horizontal: `space-8` (32px)
- Link spacing: `space-6` (24px) gap
- Scroll shadow: `shadow-card` (appears on scroll)

**States:**
- **Link default:** `neutral-700` text
- **Link hover:** `primary-500` text (250ms transition)
- **Link active:** `primary-600` text + 2px bottom border
- **Scroll state:** Add `shadow-card` when scrolled >50px

**Responsive (Mobile):**
- Logo only + Hamburger icon (24px) right-aligned
- Menu: Full-screen overlay, vertical links, 24px font size

**Note:** Logo should NOT be an image in nav (text-based for minimalism). Reserve logo image for hero avatar/footer.

---

### 3.6 Timeline (Experience Section)
**Structure:**
- Vertical line: 2px solid `neutral-200`, left-aligned
- Timeline nodes: 16px circle, `primary-500` fill, positioned on line
- Content cards: Offset 48px right of line
- Card padding: 24px
- Card background: `neutral-100` (subtle, not white)

**Tokens:**
- Line color: `neutral-200`
- Node size: 16px diameter
- Node color: `primary-500`
- Gap between items: `space-8` (32px)

**Layout:**
- Desktop: Vertical timeline, content cards right-aligned
- Mobile: Simplified vertical stack, thinner line (1px)

**Note:** Timeline should feel lightweight and clean. Avoid heavy decorations. Use subtle background (`neutral-100`) for timeline cards to differentiate from project/skill cards.

---

## 4. Layout & Interaction

### 4.1 SPA Structure & Flow

**Reference:** `docs/content-structure-plan.md` for section sequence

**Section Sequence (Smooth Scroll):**
1. **Hero/About** (500-600px) - First impression
2. **Skills** (auto height) - Technical competencies
3. **Experience** (auto height) - Professional timeline
4. **Projects** (auto height) - Portfolio showcase
5. **Education** (auto height) - Academic credentials
6. **Achievements/Certifications** (auto height) - Recognition
7. **Contact** (auto height) - Connection call-to-action

**Visual Hierarchy:**
- Hero prominence: Largest typography (64px), most vertical space (96px padding)
- Section headers: Consistent 48px titles, 64px top margin
- Content sections: Auto-height, breathe naturally with content

**Navigation Pattern:**
- Fixed header (72px) with smooth scroll anchor links
- Active section indicator: Underline on current section link
- Smooth scroll behavior: `scroll-behavior: smooth` (CSS) or JS with 800ms duration

**Transitions:**
- Smooth scroll to sections (800ms ease-in-out)
- Fade-in on scroll: Elements fade + translateY(20px) when entering viewport (300ms stagger)

**Responsive Strategy:**
- Desktop (1280px+): Full layout, 12-column grid
- Tablet (768-1279px): 8-column grid, 2-column cards
- Mobile (<768px): Single column stack, reduced spacing (64px → 48px sections)

---

### 4.2 Hero Section Pattern (Reference: content-structure-plan.md § Section 1)

**Layout Structure:**
- Height: 500-600px
- Content: Centered in 6-column grid (max-width 600px)
- Vertical centering: Flexbox align-items center

**Visual Hierarchy:**
1. **Avatar (primary focal point):** 120-160px circular image, top position
2. **Headline:** Name in 64px Bold below avatar
3. **Subheadline:** Title/role in 20px Regular, `neutral-700`
4. **Brief bio:** 16px Body, max 2-3 lines
5. **CTA:** Single primary button (Download Resume / Contact)

**Component Patterns Applied:**
- Avatar: Circular image with `radius-full`, `shadow-card`, 4px white border
- Button: Primary CTA spec (§3.2)
- Background: `bg-page` with optional subtle pattern overlay

---

### 4.3 Skills Section Pattern (Reference: content-structure-plan.md § Section 2)

**Grid Strategy:**
- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack
- Gap: `space-6` (24px)
- Container: Max-width 1200px, centered

**Component Patterns Applied:**
- Cards: Skill Card spec (§3.3)
- Icons: 32px SVG icons (Lucide/Heroicons), `primary-500` color
- Hover: Card lift + scale (§3.3 states)

**Visual Hierarchy:**
- Section title: 48px Bold, centered, 64px top margin
- Category icons: Visual anchor for each card
- Skill names: 20px Semibold list items

---

### 4.4 Experience/Projects/Achievements Section Patterns

**Experience (Timeline Pattern - §3.6):**
- Vertical timeline with offset content cards
- Apply Timeline component spec (§3.6)
- Company logos: 32-40px height, positioned top-right of cards

**Projects (Card Grid Pattern):**
- 3-column desktop → 2-column tablet → 1-column mobile
- Apply Card spec (§3.3) with 16:9 aspect ratio images
- Hover: Card lift + scale + shadow increase

**Achievements (Data Card Grid):**
- 3-column grid of metric cards
- Large numbers: 48px Bold `primary-500`
- Labels: 16px Regular `neutral-700`
- Card background: `neutral-100` (subtle differentiation)

**Content to Pattern Mapping:** See content-structure-plan.md for which content sections map to which patterns.

---

### 4.5 Responsive Breakpoints

| Breakpoint | Width | Grid | Container Max-Width | Spacing Reduction |
|------------|-------|------|---------------------|-------------------|
| `mobile` | <640px | 1 col | 100% (24px padding) | 30% (96px → 64px) |
| `tablet` | 640-1023px | 2 col | 100% (32px padding) | 20% (96px → 80px) |
| `desktop` | 1024-1279px | Varies | 1024px | 10% (96px → 88px) |
| `desktop-lg` | 1280px+ | Varies | 1200px | Full (96px) |

**Grid Column Counts by Breakpoint:**
- Skills: 4 cols (desktop) → 2 cols (tablet) → 1 col (mobile)
- Projects: 3 cols → 2 cols → 1 col
- Achievements: 3 cols → 2 cols → 2 cols (mobile stays 2)

**Touch Targets (Mobile):**
- Buttons: 48px minimum height
- Nav links: 44px minimum tap area
- Form inputs: 56px height (comfortable thumb reach)

---

## 5. Animation & Interaction Standards

### 5.1 Animation Durations
- **Fast interactions** (button hover, link color): `duration-fast` (200ms)
- **Standard transitions** (card hover, reveals): `duration-normal` (250ms)
- **Entrance animations** (scroll reveals, modals): `duration-slow` (300ms)
- **Smooth scroll navigation**: 800ms (custom JS timing)

### 5.2 Easing Functions
- **Default** (90% usage): `ease-out` - Natural deceleration
- **Smooth movements** (modals, drawers): `ease-in-out` - Gentle start/end

### 5.3 Performance (GPU-Accelerated Only)

**✅ Allowed:**
```
transform: translateX() translateY() translateZ() scale() rotate()
opacity: 0-1
```

**❌ Forbidden (causes layout reflow):**
```
width, height, margin, padding, top, left, right, bottom
```

### 5.4 Micro-Animations Inventory

| Element | Animation | Timing |
|---------|-----------|--------|
| **Button hover** | `translateY(-2px) scale(1.02)` + shadow increase | 200ms ease-out |
| **Card hover** | `translateY(-4px) scale(1.02)` + shadow increase | 250ms ease-out |
| **Link hover** | Color change to `primary-500` | 200ms ease-out |
| **Scroll reveal** | Fade in + `translateY(20px)` | 300ms ease-out, 100ms stagger |
| **Modal open** | Fade in + `scale(0.95 → 1)` | 300ms ease-out |

### 5.5 Accessibility (Reduced Motion)

**Respect `prefers-reduced-motion: reduce`:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

All animations should have instant fallbacks for users who prefer reduced motion.

---

## Document Metadata

**Version:** 1.0  
**Created:** 2025-10-30  
**Style Guide:** Modern Minimalism (Premium)  
**Word Count:** ~2,400 words  
**Target Platform:** Web (responsive, all devices)

**Design Philosophy:** Professional restraint through generous whitespace, subtle interactions, and restrained color palette. Every element serves a purpose. No decoration without function.

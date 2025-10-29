# Content Structure Plan - Lt Col (Dr) Santosh Khadsare Portfolio

## 1. Material Inventory

**Content Files:**
- `docs/santosh_profile_research.md` (195 lines, ~4800 words)
  - Sections: Executive Summary, Professional Summary, Career Timeline, Education, Achievements, Publications, Memberships, Speaking, Current Role, Training, Mentorship, Contact, Gaps, Appendix

**Visual Assets:**
- `user_input_files/` (9 images)
  - IMG-20251012-WA0076.jpg (Military portrait, snow setting - hero candidate)
  - IMG-20251012-WA0078.jpg (CERT-In presentation, conference speaking)
  - IMG-20251012-WA0067.jpg (CERT-In office portrait with logo)
  - IMG-20251012-WA0079.jpg (Office setting, DFIR poster background)
  - IMG-20251012-WA0065.jpg (Conference networking)
  - IMG-20251012-WA0066.jpg (Conference with EY branding)
  - IMG-20251012-WA0069.jpg (InfoSec Summit Asia 2016)
  - IMG-20251012-WA0068.jpg (Professional meeting handshake)

**Data Files:**
- None (content extracted from research.md)

**Charts:**
- None (timeline will be custom visualization)

## 2. Website Structure

**Type:** SPA (Single-Page Application)

**Reasoning:** 
- Portfolio format with single narrative arc (career progression story)
- 5 primary sections with cohesive flow
- <2500 words of displayable content (research.md provides source material)
- Single audience (professional peers, clients, collaborators)
- Single goal: Establish credibility and showcase expertise
- Perfect for smooth scroll storytelling of 25+ year career

## 3. Page/Section Breakdown

### Single Page: Portfolio (`/`)

**Purpose:** Comprehensive professional portfolio showcasing cybersecurity expertise, military service, and career achievements

**Content Mapping:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset (Content ONLY) |
|---------|------------------|----------------|-------------------|------------------------------|
| Hero | Full-Screen Dark Hero | `docs/santosh_profile_research.md` L1-11 | Name, title "Lt Col (Dr)", tagline "25+ years Cyber Security & DFIR", current role "CBO/CTO SysTools" | `IMG-20251012-WA0076.jpg` |
| About | 2-Column Layout (Text + Image) | `docs/santosh_profile_research.md` L13-24 | Professional summary paragraph, core themes (operational rigor, capability building, ecosystem development), military background overview | `IMG-20251012-WA0067.jpg` |
| Experience Timeline | Vertical Timeline Pattern | `docs/santosh_profile_research.md` L26-50 | Table 1 data (4 career phases): 25+ years overview, 23 years Army, 2019-2021 CERT-In, Current SysTools role with responsibilities | - |
| Achievements & Awards | 3-Column Card Grid | `docs/santosh_profile_research.md` L66-83 | Table 2 data: Army awards, NIA recognition, CERT-In awards. Institutional contributions: DRONA product line, CII Task Force, CHFI Committee, Digital4N6Journal founding | `IMG-20251012-WA0078.jpg` |
| Publications & Research | Mixed Layout (Featured + List) | `docs/santosh_profile_research.md` L85-93 | Digital4N6Journal (founder), publication focus areas (evidence collection, incident response, reporting standards), speaking engagements at C0C0N and HAKON | `IMG-20251012-WA0079.jpg` |
| Professional Impact | Stats Grid (4 metrics) | `docs/santosh_profile_research.md` L140-155 | Training metrics: International LEA programs, "hundreds of cyber enthusiasts" mentored, FDP delivery at prestigious institutes, 4+ years CHFI Committee | - |
| Contact | Centered Contact Card | `docs/santosh_profile_research.md` L157-160 | Current role: CBO/CTO SysTools, professional inquiry note, reference to Digital4N6Journal | - |

## 4. Content Analysis

**Information Density:** High
- Comprehensive career spanning military, government, and corporate sectors
- Multiple award categories, publications, speaking engagements
- Rich timeline data with specific roles and dates
- Extensive mentorship and training records

**Content Balance:**
- Images: 9 files (professional portraits, conferences, military service)
- Data/Charts: 0 files (will use timeline visualization)
- Text: ~4800 words source material (will condense to ~1500-2000 words for display)
- Content Type: **Mixed** (biographical text + career data + achievement records + visual storytelling)

**Information Architecture:**
- Linear narrative flow: Who → Career Journey → Achievements → Thought Leadership → Connect
- Emphasis on credibility markers: military rank, government position, corporate leadership
- Visual reinforcement through professional photography across career phases
- Timeline as central organizing principle for 25+ year span

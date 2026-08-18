# DECISIONS.md — SignalFlow Architectural & Design Rationale

**Candidate**: Senior Frontend Engineer / UX Architect  
**Challenge**: Acdyon Technologies Frontend Challenge — Part 2: The Premium Home Page  
**Project**: **SignalFlow** (*"Turn scattered work into a clear next move."*)

---

### 1. Why this approach over the obvious alternative you rejected?

**Decision**: A **product-led interactive experience** over a generic, copy-heavy marketing landing page.

**Rationale**:
Generic SaaS landing pages rely on vague claims, stock illustrations, and unverified social proof ("Join 100,000+ happy teams"). In contrast, modern high-craft SaaS products (e.g. Linear, Raycast, Vercel) succeed by showing the **actual product interface** within 3 seconds of page load.

Instead of writing passive claims about AI capabilities, SignalFlow puts a functional, interactive dashboard UI right at the center of the experience. Users can run real-time signal queries, toggle priority queue states, and inspect contextual detail panels directly in their browser. This immediately communicates product value and builds trust without resorting to fabricated testimonials or fake metrics.

---

### 2. One trade-off made under the time limit, and what you would do with a real week.

**Trade-Off Made**:
Used **deterministic local React state** (`src/data/dashboardData.ts`) for the interactive signal query engine and dashboard state rather than building a live backend persistence layer or WebSocket stream.

**What I Would Do With a Real Week**:
1. **Real Data Connectors**: Build live OAuth connectors for Jira, Linear, and Slack APIs to ingest real workplace webhooks.
2. **Optimistic Local Indexing**: Implement Web Workers with IndexedDB to store and perform semantic vector clustering locally on client devices for zero-latency queries.
3. **End-to-End Test Suite**: Add Playwright visual regression tests for exact viewport validation across 390px, 768px, 1024px, and 1440px breakpoints, alongside Vitest unit specs for the state transitions.

---

### 3. Where did you use AI tools, and what did you personally verify or change afterward?

**AI Utilization**:
AI assistance (Antigravity AI) was utilized for code scaffolding acceleration, rapid component boilerplate drafting, and layout idea brainstorming.

**Personal Verification & Human Engineering**:
- **Design Taste & Layout Calibration**: Hand-tuned typography hierarchy (`Plus Jakarta Sans` + `Inter`), custom glassmorphism borders (`glass-panel`), card padding, and subtle ambient radial glows to prevent visual clutter or generic gradient sprawl.
- **Responsive Viewport Refinement**: Personally audited and engineered layout behavior for 390px mobile screens (collapsing multi-column dashboard cards into stacked touch-friendly vertical compositions with zero horizontal overflow).
- **Accessibility & Reduced Motion**: Hand-added semantic HTML tags, keyboard accessibility controls, and explicit `@media (prefers-reduced-motion: reduce)` overrides.
- **Logic & Integrity**: Ensured 100% honesty across all marketing copy — zero fabricated metrics, fake logos, or fake testimonials. Built the hidden Konami Code Easter egg (`↑ ↑ ↓ ↓ ← → ← → B A`) with careful key-buffering logic.

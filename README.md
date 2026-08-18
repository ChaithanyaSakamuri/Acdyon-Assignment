# SignalFlow — Know What Matters Next

> **Acdyon Technologies Frontend Challenge — Part 2: The Premium Home Page**  
> Tagline: *Turn scattered work into a clear next move.*

SignalFlow is a product-led SaaS landing page built with React, TypeScript, Vite, and Tailwind CSS. It communicates the value of an AI-powered operational workspace through an interactive dashboard UI, real-time signal queries, and zero fabricated claims.

---

## 🌟 Key Features

- **Product-Led Visual Centerpiece**: Realistic interactive dashboard showing live priority queues, signal summaries, next move spotlight, and activity streams.
- **Interactive Signal Query Demo**: Real-time frontend query simulator where users can filter and inspect high, medium, and low urgency operational signals.
- **100% Honest Presentation**: Zero fake testimonials, zero fake user metrics, zero fabricated customer logos. All social proof is replaced with real product evidence.
- **Deliberately Responsive**: Built for pixel-perfect display on **390px** mobile, **768px** tablet, **1024px** laptop, and **1440px** desktop viewports with zero horizontal scrolling.
- **Micro-Interactions & Reduced Motion**: Restrained motion using Framer Motion with full `@media (prefers-reduced-motion: reduce)` accessibility support.
- **Easter Egg Bonus**: Keyboard Konami Code listener (`↑ ↑ ↓ ↓ ← → ← → B A`) that activates an engineering status banner.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (Custom dark editorial tokens & glassmorphism)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono

---

## 🚀 Running Locally

```bash
# Clone or navigate to project directory
cd D:\placements\Acdyon

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production

```bash
# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Install Vercel CLI or import repository in [vercel.com](https://vercel.com).
2. Set Framework Preset to **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`

### Deploying to Netlify
1. Connect repository in [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📋 Assessment Verification Matrix

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Part 2 Selected** | Premium home page for SignalFlow | ✅ |
| **Hero Section** | Value proposition + primary CTA + mini command preview | ✅ |
| **Product Preview** | Realistic interactive SignalFlow dashboard | ✅ |
| **Interactive Demo** | React state query simulator + signal inspector | ✅ |
| **Problem → Solution** | Scattered sources (3 cards) converging into 1 signal | ✅ |
| **Workflow Section** | 01 Capture -> 02 Understand -> 03 Prioritize -> 04 Act | ✅ |
| **Honesty Requirement** | Zero fake testimonials, fake logos, or fake user counts | ✅ |
| **390px Mobile & 1440px Desktop** | Verified layout scaling with zero overflow | ✅ |
| **Easter Egg Bonus** | Konami Code listener (`↑ ↑ ↓ ↓ ← → ← → B A`) | ✅ |
| **DECISIONS.md** | 1-page max technical & design explanation | ✅ |
| **Deployment Ready** | Clean production build with Vite | ✅ |

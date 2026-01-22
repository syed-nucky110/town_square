# Town Square - Premium Commercial Real Estate

A luxury, investor-focused commercial real-estate website built with React and GSAP animations.

## Tech Stack

- **React 18** - Functional components with hooks
- **GSAP 3** - Advanced animations with ScrollTrigger
- **Vite** - Modern build tooling
- **CSS Modules** - Scoped component styling

## Features

- Premium commercial real-estate design
- Advanced GSAP animations (fade, slide, scale, parallax)
- ScrollTrigger-based scroll animations
- Fully responsive (desktop-first)
- Luxury aesthetic with gold accents
- Smooth, soft, elegant animations

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # All React components
│   ├── Header/
│   ├── Hero/
│   ├── ProjectOverview/
│   ├── Highlights/
│   ├── Brands/
│   ├── LocationAdvantage/
│   ├── InvestmentBenefits/
│   ├── Amenities/
│   ├── Lifestyle/
│   ├── GalleryPreview/
│   ├── LeadForm/
│   └── Footer/
├── styles/          # Global styles
├── App.jsx          # Main app component
└── index.jsx        # Entry point
```

## Design Language

- **Colors**: White/off-white base with dark grey and subtle gold accents
- **Typography**: Inter font family, generous spacing
- **Animations**: Soft, slow, premium (power2.out easing)
- **Philosophy**: Calm, confident, investor-focused UI

## GSAP Animation Patterns

All components follow GSAP best practices:
- `useRef` + `useEffect` pattern
- `gsap.context()` for automatic cleanup
- ScrollTrigger for scroll-based animations
- Elegant timing with `ease: "power2.out"`

---

Built with ❤️ for premium real estate experiences

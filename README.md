# Elementum - Strategic Design Agency

A modern, high-performance landing page for a strategic design agency. Built with React and animated using GSAP and Lenis for a premium, award-winning (Awwwards-style) user experience.

## Features

- **Smooth Scrolling:** Powered by [Lenis](https://lenis.studiofreight.com/) for a buttery smooth navigation experience.
- **Advanced Animations:** Utilizes [GSAP](https://greensock.com/gsap/) and `ScrollTrigger` for high-performance, scroll-linked animations.
- **Dynamic Text Reveals:** Implemented using `split-type` for elegant line-by-line and character-by-character text reveals.
- **Premium Aesthetics:** Custom glassmorphism, subtle micro-interactions, parallax effects, and smooth hover states.
- **Responsive Design:** Fully fluid and responsive layout utilizing `clamp`, `vw`, and `vh` CSS techniques for perfect scaling across all devices.
- **Accessibility:** Built-in `prefers-reduced-motion` support to automatically disable heavy animations for users who prefer minimal movement.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Vanilla CSS
- **Animation:** GSAP, `@gsap/react`, ScrollTrigger
- **Scroll Smoothing:** `@studio-freight/react-lenis`
- **Typography Splitting:** `split-type`

## Getting Started

### Prerequisites

Ensure you have Node.js (v18+ recommended) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd webdashboard
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:5173/` in your browser to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

You can preview the built app using:

```bash
npm run preview
```

## Structure

```text
src/
├── assets/         # Images, icons, and static assets
├── components/     # Reusable UI components (e.g., Navbar)
├── sections/       # Major page sections (Hero, Features, Services, etc.)
├── styles/         # Global and component-specific CSS files
├── App.jsx         # Main application component & Lenis provider
└── main.jsx        # React entry point
```

## License

[MIT](LICENSE)

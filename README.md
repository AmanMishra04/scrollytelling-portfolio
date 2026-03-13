# 🚀 Aman Mishra's Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

<br />

A high-end, visually stunning personal portfolio built with **Next.js**, featuring advanced **Scrollytelling** and **HTML5 Canvas image sequence animations**. Designed to be a highly interactive, premium digital experience.

---

## ✨ Features

- **🎬 Canvas Sequence Animations:** Apple-style smooth scroll-bound image sequence animations using HTML5 `<canvas>`.
- **⚡ Highly Optimized Concurrent Loading:** Uses parallel asynchronous fetching (`Promise.all`) for 120+ high-res frames with a sleek progress bar.
- **✨ Smooth Scrolling:** Seamless, fluid scrolling powered by Lenis for an immersive experience.
- **🎭 Parallax & Framer Motion:** Beautiful scroll-triggered text reveals, parallex effects, and dynamic component rendering.
- **💅 Modern Aesthetics:** A dark-mode first design with glassmorphism, precise typography, and vibrant visual accents.
- **📱 Fully Responsive:** Carefully crafted to perform beautifully across all device sizes.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Core Library:** [React 18](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Scroll Hijacking (Smooth):** [Lenis](https://github.com/studio-freight/lenis)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmanMishra04/Aman-Mishra-portfolio.git
   cd Aman-Mishra-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📂 Project Structure Highlights

- `components/ScrollyCanvas.tsx`: The core logic for the scroll-bound image sequence animation mapping scroll progress to 120 image frames.
- `components/Overlay.tsx`: Interactive, scroll-aware text component overlaid on top of the canvas.
- `components/SmoothScroll.tsx`: Wrapper for smooth scrolling functionality using Lenis.
- `public/portfolio/`: Directory containing all the sequenced frames for the canvas animation.

## 👨‍💻 Author

**Aman Mishra**
- GitHub: [@AmanMishra04](https://github.com/AmanMishra04)

---
<div align="center">
  <i>Built with ❤️ by Aman Mishra</i>
</div>

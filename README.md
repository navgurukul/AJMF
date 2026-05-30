# Anish Jadhav Memorial Foundation (AJMF) — Website Frontend

A clean, responsive frontend for the Anish Jadhav Memorial Foundation (AJMF) Skilling Institute website built with React and Tailwind CSS.

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run the Development Server](#run-the-development-server)
- [Project Structure](#project-structure)
- [Design & Customization](#design--customization)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

## Project Overview
This repository contains the frontend source code for the AJMF website. The site showcases the foundation's mission, programs, campus, and other resources with an attractive, responsive UI.
https://anish-project-5srn.vercel.app/
## Key Features
- Responsive design using React + Tailwind CSS
- Visual campus photo gallery with interactive effects
- Reusable components (cards, headers, footers)
- Clean routing for pages like Home, About, Campus, etc.

## Getting Started

### Prerequisites
- Node.js (>= 16 recommended)
- npm (or Yarn)
- Git

### Install
Clone the repository and install dependencies:
```bash
git clone https://github.com/renukachouhan-24/Anish_Project.git
cd Anish_Project/AJMF_WEBSITE_FRONTEND
npm install
# or with Yarn
# yarn install
```

### Run the Development Server
Start the dev server (Vite):
```bash
npm run dev
# or with Yarn
# yarn dev
```
The site will typically open at http://localhost:5173/ (or another port shown by Vite).

## Project Structure
A high-level view of the frontend layout:
```
AJMF_WEBSITE_FRONTEND/
├── public/
│   ├── images/         # Static assets (AJMF.jpeg, classroom.jpeg, ...)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── reusable/   # SectionHeader, FeatureCard, RoutineStep, ...
│   │   └── specific/   # Page-specific components (e.g., Hero.jsx)
│   ├── pages/          # Main route components (Home.jsx, Campus.jsx, About.jsx)
│   ├── App.css         # Global styles (Tailwind imports + custom classes)
│   └── App.jsx         # Routes and app setup
├── index.html
└── package.json
```

## Design & Customization
- Tailwind CSS controls most styling; custom classes and variables live in `src/App.css` and Tailwind config.
- Example custom classes: `.text-ajmf-primary`, `.bg-ajmf-primary` (add these to your Tailwind config or CSS variables).

## Contributing
We welcome contributions!
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit changes with clear messages.
4. Push to your fork and open a Pull Request.

Please follow existing code style and add tests for new functionality where appropriate.

## License & Contact
- Add a LICENSE file to clarify the project's license (e.g., MIT).
- Maintainer / contact: renukachouhan-24 (on GitHub)

---

Notes
- I fixed formatting, corrected typos, organized content into clear sections, and added code blocks for commands so the README displays cleanly on the main page.
- Next, if you want, I can: 1) open a PR that replaces the current README with this version, or 2) add a LICENSE file and GitHub templates. Tell me which you'd prefer and which branch to use (or I can create a branch for you).

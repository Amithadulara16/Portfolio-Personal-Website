<h1 align="center">
  <br>
  🧑‍💻 devbyamith
  <br>
</h1>

<h4 align="center">A modern, full-featured developer portfolio built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, TypeScript & Tailwind CSS.</h4>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.2.2-black?style=flat-square&logo=next.js&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-folder-structure">Folder Structure</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-future-improvements">Future Improvements</a> •
  <a href="#-author">Author</a>
</p>

---

## 📌 Overview

**devbyamith** is a professionally designed personal portfolio website built to showcase my work, skills, and experience as a software developer. It features a sleek dark-themed UI with smooth animations, interactive components, and a fully functional contact form — all optimized for performance and responsiveness across all devices.

---

## ✨ Features

- 🌑 **Dark-Themed Modern UI** — Elegant dark color palette with carefully crafted visual hierarchy
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop screens
- 🧭 **Multi-Page Navigation** — Seamless routing across Home, About, Skills, Projects, CV, and Contact pages
- 🎬 **Animated Home Page** — Scroll-based entrance animations and dynamic text effects
- 🖱️ **Custom Cursor Dot** — Interactive cursor animation that enhances user experience
- 👤 **About Section** — Personal introduction, journey, and professional goals
- 🛠️ **Skills Section** — Visual showcase of technical skills and tools
- 💼 **Projects Section** — Gallery of key projects with descriptions and links
- 📄 **CV Page** — Downloadable curriculum vitae
- 📬 **Contact Form** — Functional email form powered by EmailJS / API integration
- 🔗 **Social Links** — Direct links to GitHub and LinkedIn profiles

---

## 🛠️ Tech Stack

| Category        | Technology                              |
|-----------------|-----------------------------------------|
| **Framework**   | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language**    | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling**     | [Tailwind CSS 4](https://tailwindcss.com/) |
| **UI Library**  | [React 19](https://react.dev/)          |
| **Icons**       | [Lucide React](https://lucide.dev/)     |
| **Email**       | [EmailJS](https://www.emailjs.com/) / Next.js API Routes |
| **Linting**     | [ESLint](https://eslint.org/)           |
| **Font**        | Google Fonts / Custom CSS               |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** `>= 18.x` — [Download here](https://nodejs.org/)
- **npm** `>= 9.x` (comes with Node.js)
- **Git** — [Download here](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Amithadulara16/devbyamith.git
```

**2. Navigate into the project directory**

```bash
cd devbyamith
```

**3. Install dependencies**

```bash
npm install
```

**4. Set up environment variables** *(if using EmailJS or API-based contact form)*

Create a `.env.local` file in the root of the project and add your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## ▶️ How to Run the Project

### Development Server

Start the local development server with hot-reloading:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

### Start Production Server

To serve the production build locally:

```bash
npm start
```

### Lint the Code

To check for code quality issues:

```bash
npm run lint
```

---

## 📁 Folder Structure

```
devbyamith/
├── app/                        # Next.js App Router root
│   ├── about/                  # About page
│   │   └── page.tsx
│   ├── contact/                # Contact page
│   │   └── page.tsx
│   ├── cv/                     # CV / Resume page
│   │   └── page.tsx
│   ├── projects/               # Projects page
│   │   └── page.tsx
│   ├── skills/                 # Skills page
│   │   └── page.tsx
│   ├── components/             # Shared reusable components
│   │   ├── CursorDot.tsx       # Custom cursor animation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── ProjectCard.tsx     # Project card component
│   │   └── SkillCard.tsx       # Skill card component
│   ├── globals.css             # Global styles & Tailwind directives
│   ├── layout.tsx              # Root layout (metadata, fonts, providers)
│   └── page.tsx                # Home page
├── public/                     # Static assets (images, icons, CV PDF)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📸 Screenshots

> Screenshots will be added here once the project is deployed.

| Page        | Preview |
|-------------|---------|
| Home        | _Coming soon_ |
| About       | _Coming soon_ |
| Skills      | _Coming soon_ |
| Projects    | _Coming soon_ |
| Contact     | _Coming soon_ |

---

## 🔮 Future Improvements

- [ ] **Blog Section** — Add a personal blog to share articles and tutorials
- [ ] **Dark / Light Mode Toggle** — Allow users to switch between themes
- [ ] **Project Filtering** — Filter projects by technology or category
- [ ] **Animations Library** — Integrate Framer Motion for richer transitions
- [ ] **CMS Integration** — Connect to a headless CMS (e.g., Sanity, Contentful) to manage content dynamically
- [ ] **Multilingual Support** — Add support for multiple languages using `next-intl`
- [ ] **Performance Audit** — Achieve 100/100 Lighthouse score across all pages
- [ ] **Deployment** — Host on Vercel with a custom domain

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <b>Amitha Dulara Barnad</b><br/>
      <i>Software Developer</i><br/><br/>
      <a href="https://github.com/Amithadulara16">
        <img src="https://img.shields.io/badge/GitHub-Amithadulara16-181717?style=flat-square&logo=github" />
      </a>
      <br/>
      <a href="https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/">
        <img src="https://img.shields.io/badge/LinkedIn-Amitha_Dulara_Barnad-0077B5?style=flat-square&logo=linkedin" />
      </a>
      <br/>
      <a href="mailto:amithadulara2002@gmail.com">
        <img src="https://img.shields.io/badge/Email-amithadulara2002@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Amithadulara16">Amitha Dulara Barnad</a>
</p>

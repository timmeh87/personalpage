# Personal Portfolio Website 🚀

This repository contains the source code for my personal portfolio website.

The goal of this project was to build a modern, lightweight portfolio site that showcases my engineering experience, hardware projects, software projects, photography, and homelab work while also serving as an example of my frontend development skills.

This site was developed using a combination of traditional software engineering practices and AI-assisted development tools. AI was used to accelerate implementation, explore design ideas, debug issues, and iterate quickly while maintaining full control over the architecture, technical decisions, and final implementation. 🤖

## Features ✨

* Responsive portfolio website built with Next.js
* Static site generation for simple and reliable hosting
* Project and experience sections
* Image galleries with:

  * Thumbnail optimization
  * Separate full-resolution images
  * Gallery pages
  * Lightbox viewing
  * Keyboard navigation
* Responsive navigation with mobile menu
* Dark mode support
* Printable resume page
* Hardware/PCB project showcase
* Photography gallery

## Technology Stack 🛠️

* **Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Image handling:** Next.js Image component with pre-generated thumbnails
* **Deployment:** Static export hosted through nginx and Cloudflare

## Architecture 🏗️

The site is built as a statically exported Next.js application.

Rather than running a Node.js server, the application is compiled into static HTML, CSS, and JavaScript files:

```text
Next.js source
      |
      v
npm run build
      |
      v
Static export
      |
      v
nginx hosting
      |
      v
Cloudflare proxy
```

This keeps hosting simple, fast, and inexpensive while still allowing the site to use modern React-based development tools.

## Gallery System 🖼️

The gallery system was designed to handle larger collections of images without loading unnecessary data.

Each gallery image has:

* A thumbnail version for grid views
* A full-resolution version for the lightbox
* Metadata such as title, description, ordering, and featured status

Example:

```text
images/
 └── projects/
      └── board-design.webp

thumbs/
 └── projects/
      └── board-design.webp
```

The gallery metadata is stored separately so images can be regenerated or reorganized without rewriting the application.

## Development 💻

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The generated static files will be placed in the output directory.

## Deployment ☁️

The site is deployed as a static export.

The generated files are copied to the web server and served through nginx. Cloudflare provides HTTPS, caching, and additional security features.

## AI-Assisted Development 🤖


This project was developed with the assistance of AI tools, using only the free versions of ChatGPT and Claude.

AI was used to accelerate development, explore solutions, debug issues, and iterate on design ideas. All code was manually reviewed, adapted, and integrated into the project. No automated coding agents or tools were used to directly generate and modify project files.

The architecture, technical decisions, implementation, testing, and final review were developer-directed.

Examples include:

* Exploring component architecture and design patterns
* Generating implementation ideas and boilerplate
* Debugging build and deployment issues
* Improving responsive layouts and user experience
* Iterating rapidly on features such as galleries and navigation
* Writing this readme

## About 👋

This project was created as both a personal portfolio and a demonstration of modern web development practices.

It combines frontend development with practical engineering considerations including static hosting, asset optimization, responsive design, maintainable data-driven components, and AI-assisted software development workflows.

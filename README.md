# VonTech Case Studies

A modern, responsive website showcasing VonTech Group's case studies and success stories.

## Features

- Responsive design with Tailwind CSS
- Modern React components with TypeScript
- Case studies showcase
- Customer testimonials
- Mobile-first approach

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
cd vontech-case-studies
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type safety and better development experience
- **React** - Component-based UI library
- **shadcn-ui** - High-quality, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Header.tsx      # Site header with navigation
│   ├── Hero.tsx        # Hero section
│   ├── CaseStudies.tsx # Case studies showcase
│   ├── Testimonials.tsx# Customer testimonials
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## License

This project is private and confidential.

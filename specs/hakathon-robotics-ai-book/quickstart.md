# Quickstart: Hakathon Robotics AI Book

## Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)
- Git
- A code editor (VS Code recommended)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd hakathon-robotics-ai-book
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

This command starts a local development server and opens the documentation site in your default browser at `http://localhost:3000`.

### 4. Begin Editing Content
- Documentation files are located in the `docs/` directory
- Each module has its own subdirectory
- Edit markdown files to update content
- Changes will automatically reload in your browser

## Adding New Content

### Create a New Documentation Page
1. Navigate to the appropriate module directory in `docs/`
2. Create a new `.md` file with a descriptive name
3. Add frontmatter with metadata:
   ```markdown
   ---
   title: Your Page Title
   sidebar_position: 1
   description: Brief description of the page
   ---
   ```
4. Write your content using Markdown syntax

### Create a New Module
1. Create a new directory in `docs/` with the module name
2. Add an `index.md` file as the module's landing page
3. Update `sidebars.js` to include the new module in navigation

## Key Configuration Files

- `docusaurus.config.js`: Site configuration, navigation, plugins
- `sidebars.js`: Navigation structure and organization
- `src/pages/`: Custom React pages if needed
- `static/`: Static assets like images and documents

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The built site will be available in the `build/` directory and can be served from any static hosting service.

## Deployment

The site is configured for GitHub Pages deployment. After building, the `build/` directory contains the complete static site ready for deployment.
# Vietnam India Services — React + Vite + Bun + Tailwind CSS

## 🚀 Quick Start

### 1. Install dependencies (using Bun)

```bash
bun install
```

### 2. Start development server

```bash
bun run dev
```

The app opens at **http://localhost:5173**

### 3. Build for production

```bash
bun run build
```

Output goes to the `dist/` folder — ready to deploy.

### 4. Preview production build locally

```bash
bun run preview
```

---

## 📁 Project Structure

```
vietnam-india-project/
├── index.html                      # Vite HTML entry point (root level)
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration (ESM)
├── postcss.config.js               # PostCSS configuration (ESM)
├── package.json                    # Bun-compatible package manifest
├── src/
│   ├── main.jsx                    # Vite/React entry point
│   ├── App.jsx                     # Root component — routing & state
│   ├── index.css                   # Tailwind directives + global styles
│   └── components/
│       ├──Navigation/NavBar.jsx
│       ├──Home/Home.jsx
│       ├──Services/Services.jsx
│       ├──Investment/Investment.jsx
│       ├──Trading/Trading.jsx
│       ├──Contact/Contact.jsx
│       └──Footer/Footer.jsx
└── .gitignore
```

> **Note:** There is no `public/` folder. Vite requires `index.html` at the project root.
> Static assets (images, favicons) go in a `public/` folder alongside `index.html` if needed.

---

## ⚡ Why Vite + Bun?

| Feature         | CRA (`react-scripts`)                | Vite + Bun                           |
| --------------- | ------------------------------------ | ------------------------------------ |
| Dev server      | Webpack (slow cold start)            | Native ESM (instant HMR)             |
| Build tool      | Webpack                              | Rollup (fast, small output)          |
| Package manager | npm                                  | Bun (up to 30× faster installs)      |
| Config format   | Hidden / ejected                     | Plain `vite.config.js` (ESM)         |
| Entry point     | `src/index.js` + `public/index.html` | `index.html` (root) + `src/main.jsx` |

---

## 🎨 Tailwind Configuration

### `tailwind.config.js` (ESM)

- **Content paths**: `./index.html` and `./src/**/*.{js,jsx,ts,tsx}`
- **Custom colours**: `vietnam-red`, `india-orange`, `india-green`, `brand-blue`
- **Custom shadows**: `shadow-card`, `shadow-card-hover`
- **Font**: Inter (loaded via Google Fonts in `index.css`)

### `src/index.css`

Uses `@layer` to define reusable component classes shared across all components.

---

## 🛠 How Tailwind Was Configured for Vite

```bash
# Install Tailwind and PostCSS peers
bun add -d tailwindcss postcss autoprefixer

# Generate config files
bunx tailwindcss init -p
```

Then in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Both `tailwind.config.js` and `postcss.config.js` use **ESM `export default`** syntax
(required because `"type": "module"` is set in `package.json`).

---

## ✏️ Customisation Guide

### Update contact info

Edit `src/components/Contact.jsx` — replace `[Your Office Address]`, `[Your Phone Number]`, etc.

### Add a new page

1. Create `src/components/NewPage.jsx`
2. Import it in `src/App.jsx`
3. Add `{ id: 'new-page', label: 'New Page' }` to the `navigation` array
4. Add `'new-page': <NewPage />` to the `pages` object

---

## 📦 Dependencies

| Package                | Purpose                            |
| ---------------------- | ---------------------------------- |
| `react`                | UI library                         |
| `react-dom`            | DOM rendering                      |
| `lucide-react`         | Icon library                       |
| `vite`                 | Build tool & dev server            |
| `@vitejs/plugin-react` | JSX transform + React Fast Refresh |
| `tailwindcss`          | Utility-first CSS framework        |
| `postcss`              | CSS transformation                 |
| `autoprefixer`         | Vendor prefix automation           |

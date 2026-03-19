# utility-hub

# 🛠️ Utility Hub (Ember.js)

A modern, responsive **Utility Hub** built using Ember.js that provides quick access to essential web tools like a To-Do List, QR Code Generator, and Currency Converter — all in one place.

---

## ✨ Features

- 📌 Centralized Dashboard for multiple utilities
- 🎯 Clean & Responsive UI using CSS Grid
- 🧩 Reusable Components (Utility Cards)
- 🔁 Data-driven Rendering using Ember routes and templates
- 🔗 External App Integration via deployed GitHub Pages links
- 🎨 Modern UI/UX with hover effects and smooth transitions
- 🖼️ Consistent Card Layout with equal height and image handling

---

## 🧠 Concepts Used (Ember.js)

- Routes & `model()` for data fetching
- Dynamic rendering using `{{#each}}`
- Component-based architecture
- Data flow: Route → Template → Component
- Static asset handling via `public/`
- SCSS integration using `ember-cli-sass`

---

## 🏗️ Project Structure

utility-hub/
│
├── app/
│ ├── components/
│ │ └── utility-card.hbs
│ ├── routes/
│ │ └── index.js
│ ├── templates/
│ │ └── index.hbs
│ └── styles/
│ └── app.scss
│
├── public/
│ └── assets/
│ └── (images)
│
└── config/

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd utility-hub`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

---

## 🧩 Utilities Included

- To-Do List
- QR Code Generator
- Currency Converter
- Quote of the Day
- Weather App

Each utility is deployed separately and linked within the hub.

---

## 🎨 UI Highlights

- Responsive CSS Grid layout
- Equal height cards using Flexbox
- Image consistency using `object-fit` / `aspect-ratio`
- Hover animations with `transform` and `box-shadow`
- Fully clickable cards for better UX

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/YOUR_USERNAME/utility-hub.git
cd utility-hub
npm install
ember serve
```

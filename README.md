# Hanji Joji Esmael | Portfolio

A professional personal portfolio website built for a 2nd-year BSIT student at the Polytechnic University of the Philippines.

## 🚀 Features
- **Modern Dark UI**: Sleek dark mode design with vibrant blue accents.
- **Responsive Design**: Fully functional on mobile, tablet, and desktop.
- **Filtering System**: Interactive categorization for activities and quizzes.
- **Scroll Animations**: Smooth fade-in effects using Intersection Observer API.
- **Performance Optimized**: Built with Vite for lightning-fast development and builds.

## 🛠️ Tech Stack
- **Framework**: Vite + React
- **Data Store**: Centralized JSON (`src/data/portfolioData.json`)
- **Styling**: Vanilla CSS (Separate component-level styles)
- **Icons**: Font Awesome (CDN)
- **Fonts**: Poppins & Inter (Google Fonts)

## 📂 Data Customization
To update your personal information, activities, or social links:
1. Navigate to `src/data/portfolioData.json`.
2. Edit the fields inside the JSON file.
3. The website will automatically update with your new content!

## 📦 Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run developement server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment
This project is configured for easy deployment on **Vercel**. 
- `vite.config.js` uses `base: './'` for proper asset pathing.
- `vercel.json` provides SPA routing support to prevent 404s on page refresh.

---
© 2025 Hanji Joji Esmael | BS Information Technology – OOP Final Activity

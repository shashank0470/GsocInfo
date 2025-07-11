📝 Overview
GSoC Learn Hub is a comprehensive documentation website designed to help students navigate the Google Summer of Code (GSoC) program. The platform provides structured learning resources, from basic concepts to advanced preparation strategies, all presented in an engaging, easy-to-digest format.

✨ Features
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices

Modern UI: Clean, dark-themed interface with glassmorphism effects

Sidebar Navigation: Persistent on desktop, collapsible hamburger menu on mobile

Organized Content: Well-structured information about GSoC fundamentals

Interactive Elements: Hover effects, smooth transitions, and intuitive navigation

🛠️ Tech Stack
Frontend: React + Vite

Styling: Tailwind CSS

Icons: React Icons (Font Awesome)

Routing: React Router DOM

📂 Project Structure

gsocinfo/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable components
│   │   ├── Sidebar.jsx   # Navigation sidebar
│   │   ├── Header.jsx    # Page header
│   │   └── ContentCard.jsx # Content card component
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Homepage
│   │   ├── WhatIsGsoc.jsx # What is GSoC page
│   │   ├── GettingStarted.jsx # Getting started guide
│   │   ├── Timeline.jsx # GSoC timeline
│   │   ├── Projects.jsx # Project archives
│   │   ├── Glossary.jsx # Terminology glossary
│   │   └── Faq.jsx      # Frequently Asked Questions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration


🎨 Customization
You can easily customize the color scheme by modifying the CSS variables in src/index.css:


:root {
  --primary: #00f5c3;
  --bg: #0a0f1a;
  --card-bg: rgba(255, 255, 255, 0.06);
  --glass: rgba(255, 255, 255, 0.04);
  --text-light: #f1f5f9;
  --text-dim: #94a3b8;
}


🙏 Acknowledgments
Google Summer of Code for inspiring this project

Vite and Tailwind CSS teams for amazing developer tools

React community for continuous innovation


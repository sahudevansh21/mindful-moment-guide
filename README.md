# Mindful Moment Guide

Welcome to Mindful Moment Guide, a simple, self-contained web application designed to help you integrate mindfulness practices into your daily life. This Next.js 14 App Router project offers short, guided exercises and a personal reflection journal, all available instantly within your browser.

## Problem Solved

Many individuals struggle to incorporate regular mindfulness due to complex techniques or the need for external guidance. Mindful Moment Guide provides an accessible solution by offering on-demand, calming exercises and reflective prompts, eliminating external dependencies.

## Solution Overview

This website features:
- A curated collection of short, guided mindfulness exercises and breathing techniques.
- An integrated timer for each activity.
- A personal journal to privately record reflections, stored locally in your browser.

## Features

- **Guided Practices**: Select from various short exercises like Deep Breathing, Body Scan, or Mindful Observation.
- **Interactive Timer**: Follow along with on-screen instructions and a customizable timer.
- **Reflection Journal**: Document your experiences and insights, fostering self-awareness.
- **Stunning UI**: Dark theme, vibrant gradients, and glassmorphic elements for a serene user experience.
- **Client-Side Only**: No external APIs or databases; all data for the journal is stored locally in your browser's `localStorage`.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd mindful-moment-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production:

```bash
npm run build
```

This command creates an optimized production build in the `.next` directory.

### Running the Production Server

To start the production server after building:

```bash
npm run start
```

## Project Structure

- `app/`: Contains all App Router pages and layouts.
  - `layout.js`: Root layout with navigation and global styling import.
  - `page.js`: Home page.
  - `globals.css`: Global styles, including design system variables and responsive rules.
  - `guided-practice/page.js`: Client component for interactive mindfulness exercises.
  - `reflection-journal/page.js`: Client component for the personal journal with local storage.
- `public/`: Static assets.

## Technologies Used

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18
- HTML5, CSS3

## Design Principles

- **Dark Background**: Deep dark tones (`#0a0a0f`) for a calming experience.
- **Vibrant Gradients**: Purple, blue, and cyan accents for visual interest.
- **Glassmorphic Cards**: Semi-transparent, blurred elements for a modern, sophisticated look.
- **Smooth Transitions**: Micro-animations on hover/focus for a polished feel.
- **Modern Typography**: System font stack for readability and aesthetic appeal.
- **Responsive Layout**: Adapts to various screen sizes using CSS Flexbox and Grid.

Enjoy your mindful moments!

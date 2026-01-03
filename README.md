# Chilling Customs - Automobile Workshop Website

A modern, responsive website for Chilling Customs, an automobile workshop specializing in repairs and custom modifications.

## Features

- **Modern Design**: Sleek, dark theme with gradient accents
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Before/After Gallery**: Interactive gallery showcasing transformations with modal view
- **Smooth Animations**: Engaging user experience with smooth transitions
- **Professional Header**: Sticky navigation with logo integration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Project Structure

```
chillingcustoms/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── chilling.png (logo)
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Gallery.js
│   │   ├── Gallery.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Adding Your Own Images

Replace the placeholder images in `src/components/Gallery.js`:

1. Add your before/after images to `src/assets/` or a public folder
2. Update the `galleryItems` array in `Gallery.js` with your image paths
3. Update titles and descriptions to match your work

### Updating Contact Information

Edit the contact details in `src/components/Footer.js` to match your business information.

### Styling

All component styles are in their respective `.css` files. The color scheme uses:
- Primary: `#64aaff` (light blue)
- Background: Dark gradients from `#0a0a0a` to `#1a1a2e`
- Text: White and light gray tones

## Technologies Used

- React 18
- CSS3 (with modern features like gradients, animations, and grid)
- Responsive design principles

## License

This project is private and proprietary to Chilling Customs.


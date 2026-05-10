const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');

const files = [
  'headshot.jpeg',
  // Experience Sliders
  'experience-1.jpg', 'experience-2.jpg', 'experience-3.jpg',
  // Project Sliders
  'indoorace-1.jpg', 'indoorace-2.jpg', 'indoorace-3.jpg',
  'footy-insights-1.jpg', 'footy-insights-2.jpg', 'footy-insights-3.jpg',
  'health-sync-1.jpg', 'health-sync-2.jpg', 'health-sync-3.jpg',
  // NUST Award Sliders
  'nust-award-1.jpg', 'nust-award-2.jpg', 'nust-award-3.jpg',
  // Certs
  'google-cert.jpg',
  'meta-cert.jpg',
];

const svg = (name) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect fill="#f8fafc" width="800" height="600"/>
  <rect fill="#ffffff" x="40" y="40" width="720" height="520" rx="20" stroke="#e2e8f0" stroke-width="2"/>
  <text x="400" y="280" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="#0284c7" text-anchor="middle">${name}</text>
  <text x="400" y="330" font-family="Arial,sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Click arrows to slide • Replace in /public/images/</text>
  <circle cx="400" cy="450" r="40" fill="#e0f2fe" />
  <path d="M385 450 L415 450 M400 435 L400 465" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
</svg>`;

files.forEach(f => {
  const name = f.split('.')[0].replace(/-/g, ' ').toUpperCase();
  fs.writeFileSync(path.join(dir, f), svg(name));
  console.log(`Created placeholder: ${f}`);
});

console.log('All professional placeholders created! Replace them in /public/images/ with your real files.');

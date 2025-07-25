// Load saved theme and font size on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'brown') {
    document.documentElement.classList.add('theme-brown');
  }

  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    document.documentElement.style.setProperty('--font-size', `${savedFontSize}px`);
    document.querySelector('.font-toggle input[type="range"]').value = savedFontSize;
  }
});

// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('theme-brown');
  const theme = document.documentElement.classList.contains('theme-brown') ? 'brown' : 'purple';
  localStorage.setItem('theme', theme);
});

// Font Size Toggle
const fontToggle = document.querySelector('.font-toggle');
const fontButton = fontToggle.querySelector('button');
const fontSlider = fontToggle.querySelector('input[type="range"]');

fontButton.addEventListener('click', () => {
  fontToggle.classList.toggle('active');
});

fontSlider.addEventListener('input', (e) => {
  const fontSize = e.target.value;
  document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  localStorage.setItem('fontSize', fontSize);
});
const colors = ['color-1', 'color-2', 'color-3']; // Glow color classes
const container = document.getElementById('stars-container');

// Generate stars
const createStars = () => {
  const starCount = 100; // Adjust the number of stars
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
    container.appendChild(star);

    // Add click event for toggling glow
    star.addEventListener('click', () => {
      if (star.classList.contains('glow')) {
        star.classList.remove('glow', ...colors);
      } else {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.classList.add('glow', randomColor);
      }
    });
  }
};

// Add twinkle animation
const addStarAnimation = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);
};

// Initialize stars
addStarAnimation();
createStars();

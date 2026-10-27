// Select the elements once, before the user starts scrolling.
const water = document.getElementById('water');
const bubbles = document.getElementById('bubbles');
const title = document.getElementById('title');
const fish1 = document.getElementById('fish-1');
const fish2 = document.getElementById('fish-2');
const fish3 = document.getElementById('fish-3');
const fish4 = document.getElementById('fish-4');
const fish5 = document.getElementById('fish-5');

// Like the template: scrolling calls one function.
window.addEventListener('scroll', parallaxScroll);

function parallaxScroll() {
  const scrolled = window.scrollY;

  // Different multipliers make the layers move at different speeds.
  water.style.top = scrolled * 0.25 + 'px';
  bubbles.style.top = -scrolled * 0.15 + 'px';
  title.style.top = 'calc(38% + ' + scrolled * 0.1 + 'px)';

  // Subtract the section's starting position to keep each image nearby.
  fish1.style.transform = 'translateY(' + (scrolled - fish1.parentElement.offsetTop) * 0.08 + 'px)';
  fish2.style.transform = 'translateY(' + (scrolled - fish2.parentElement.offsetTop) * 0.12 + 'px)';
  fish3.style.transform = 'translateY(' + (scrolled - fish3.parentElement.offsetTop) * 0.1 + 'px)';
  fish4.style.transform = 'translateY(' + (scrolled - fish4.parentElement.offsetTop) * 0.15 + 'px)';
  fish5.style.transform = 'translateY(' + (scrolled - fish5.parentElement.offsetTop) * 0.08 + 'px)';
}

// Also update after refreshing halfway down the page or resizing the window.
window.addEventListener('load', parallaxScroll);
window.addEventListener('resize', parallaxScroll);

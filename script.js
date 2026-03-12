const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

let activeSection = null;

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection = entry.target.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + activeSection
      );
    });
  },
  { rootMargin: '-20% 0px -60% 0px' }
);

sections.forEach(s => observer.observe(s));

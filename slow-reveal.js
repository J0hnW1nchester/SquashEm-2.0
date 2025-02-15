document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate-on-scroll'); /// If you want to apply the appearing on scroll effect on some other elements, just add .animate-on-scroll class to them.
  const heroTitle = document.querySelector('#hero-title');

  /// Observer for elements with .animate-on-scroll class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 700); /// Adjust the appearance delay time of the element
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  /// Observer for #hero-title
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 1000); /// Adjust the appearance delay time for #hero-title
      }
    });
  });

  if (heroTitle) {
    heroObserver.observe(heroTitle);
  }
});

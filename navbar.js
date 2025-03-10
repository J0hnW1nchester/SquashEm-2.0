/// Get all navbar links
const navLinks = document.querySelectorAll('nav ul li a');

/// Function to highlight current section
function highlightCurrentSection() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');

  /// Find the visible section
  let visibleSection;
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    if (
      sectionRect.top <= window.innerHeight / 2 &&
      sectionRect.bottom >= window.innerHeight / 2
    ) {
      visibleSection = section;
    }
  });

  /// Update the active class
  navLinks.forEach((link) => {
    const sectionId = link.getAttribute('href').substring(1);
    if (visibleSection && visibleSection.id === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/// Call the function on page load, on scroll, and on hash change
window.addEventListener('load', highlightCurrentSection);
window.addEventListener('scroll', highlightCurrentSection);
window.addEventListener('hashchange', highlightCurrentSection);

/// Get all navbar links
const navLinks = document.querySelectorAll('nav ul li a');

/// Function to highlight current section
function highlightCurrentSection() {
  /// Remove the 'active' class from all links
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  /// Get the current scroll position
  const scrollPosition = window.scrollY;

  /// Loop through all sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    /// Get the section ID
    const sectionId = section.id;

    /// Get the navbar link that corresponds to this section
    let link;
    navLinks.forEach((navLink) => {
      if (navLink.getAttribute('href').substring(1) === sectionId) {
        link = navLink;
      }
    });

    /// Check if the section is in view
    const sectionRect = section.getBoundingClientRect();
    if (
      sectionRect.top <= window.innerHeight / 2 &&
      sectionRect.bottom >= window.innerHeight / 2
    ) {
      /// Remove 'active' class from all links
      navLinks.forEach((navLink) => navLink.classList.remove('active'));

      /// Add the 'active' class to the link to highlight it
      link.classList.add('active');
    }
  });
}

/// Call the function on page load, on scroll, and on hash change
window.addEventListener('load', highlightCurrentSection);
window.addEventListener('scroll', highlightCurrentSection);
window.addEventListener('hashchange', highlightCurrentSection);



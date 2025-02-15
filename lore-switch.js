const loreButton = document.querySelector('#lore-button');
const aboutButton = document.querySelector('#about-button');
const aboutContainer = document.querySelector('.about-container');
const loreContainer = document.querySelector('.lore-container');
const aboutPage = document.querySelector('#about-page');
const aboutLoreText = document.querySelector('#about-lore');

loreButton.addEventListener('click', () => {
  aboutContainer.style.display = 'none';
  loreContainer.style.display = 'block';
  aboutLoreText.textContent = 'Lore';
  if (window.innerWidth < 568) {
    aboutPage.scrollIntoView({ behavior: 'smooth' });
    aboutPage.style.marginBottom = '900px';
  } else if (window.innerWidth > 1024) {
    loreContainer.style.display = 'flex';
  }
});

aboutButton.addEventListener('click', () => {
  loreContainer.style.display = 'none';
  aboutContainer.style.display = 'flex';
  aboutPage.style.marginBottom = '0px';
  aboutLoreText.textContent = 'About';
  aboutPage.scrollIntoView({ behavior: 'smooth' });
});

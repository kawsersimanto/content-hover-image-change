const navigationLinks = document.querySelectorAll('.navigation-links a');
const images = document.querySelectorAll('.image-group > img');

navigationLinks.forEach((link) => {
  link.addEventListener('mouseenter', (e) => {
    const targetElement = link.getAttribute('data-link');
    if (targetElement) {
      images.forEach((image) => {
        image.style.opacity = 0;
      });

      const targetImage = document.querySelector(
        `img[data-image=${targetElement}]`
      );
      if (targetImage) {
        targetImage.style.opacity = 1;
      }
    } else {
      console.warn(`No data attribute for ${link.textContent} was found`);
    }
  });
  link.addEventListener('mouseout', () => {
    images.forEach((image) => {
      image.style.opacity = 0;
    });
    const defaultImage = document.querySelector('img[data-image="default"]');
    defaultImage.style.opacity = 1;
  });
});

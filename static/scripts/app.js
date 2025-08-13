const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); 
    menuLinks.classList.toggle('active'); 
})

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.services__info-box');
  const heading = document.querySelector('.services h1');
  const experienceImages = document.querySelectorAll('.experience__img');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkVisibility() {
    boxes.forEach(box => {
      if (isInViewport(box)) {
        box.classList.add('visible');
      }
    });

    if (heading && isInViewport(heading)) {
      heading.classList.add('visible');
    }

    experienceImages.forEach((img, index) => {
      if (isInViewport(img)) {
        // Add staggered delay for each image
        setTimeout(() => {
          img.classList.add('visible');
        }, index * 200); // 200ms delay between each image
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check
  checkVisibility();
});


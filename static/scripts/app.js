const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); 
    menuLinks.classList.toggle('active'); 
})

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.services__info-box');
  const heading = document.querySelector('.services h1');
  const paragraph = document.querySelector('.services p');
  const experienceImages = document.querySelectorAll('.experience__img');
  const servicesCards = document.querySelectorAll('.services__card');

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

    if (paragraph && isInViewport(paragraph)) {
      paragraph.classList.add('visible');
    }

    experienceImages.forEach((img, index) => {
      if (isInViewport(img)) {
        // Add staggered delay for each image
        setTimeout(() => {
          img.classList.add('visible');
        }, index * 200); // 200ms delay between each image
      }
    });

    servicesCards.forEach((card, index) => {
      if (isInViewport(card)) {
        // Add staggered delay for each card
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200); // 200ms delay between each card
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check
  checkVisibility();

  // Contact page: toggle services card details on button click
  const contactCards = document.querySelectorAll('.services__card');
  contactCards.forEach((card) => {
    const toggleButton = card.querySelector('button');
    const detailsOverlay = card.querySelector('.services__details');
    if (toggleButton) {
      toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        card.classList.toggle('active');
      });
    }
    if (detailsOverlay) {
      // When active, clicking the overlay closes (returns to initial state)
      detailsOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        if (card.classList.contains('active')) {
          card.classList.remove('active');
        }
      });
    }
  });
});


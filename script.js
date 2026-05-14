// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// IMAGE POPUP GALLERY
const galleryImages = document.querySelectorAll('.artworks img');

const popup = document.createElement('div');
popup.classList.add('popup-gallery');

popup.innerHTML = `
  <span class="close-popup">&times;</span>
  <img class="popup-img" src="">
`;

document.body.appendChild(popup);

const popupImg = document.querySelector('.popup-img');
const closePopup = document.querySelector('.close-popup');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// SCROLL ANIMATION
const hiddenElements = document.querySelectorAll(
  '.card, .artworks img, .quote-box, .cta'
);

hiddenElements.forEach(el => {
  el.classList.add('hidden');
});

window.addEventListener('scroll', () => {
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// DARK MODE BUTTON
const darkBtn = document.createElement('button');

darkBtn.innerHTML = '🌙';
darkBtn.classList.add('dark-btn');

document.body.appendChild(darkBtn);

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// TYPING EFFECT
const heroTitle = document.querySelector('.hero h1');

if (heroTitle) {

  const text = heroTitle.innerText;

  heroTitle.innerHTML = '';

  let i = 0;

  function typingEffect() {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 60);
    }
  }

  typingEffect();
}

// HOVER TILT EFFECT
const tiltItems = document.querySelectorAll(
  '.artworks img, .card'
);

tiltItems.forEach(item => {

  item.addEventListener('mousemove', e => {

    const x = e.offsetX;
    const y = e.offsetY;

    const rotateX = -(y / 25);
    const rotateY = x / 25;

    item.style.transform =
      `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  });

  item.addEventListener('mouseleave', () => {
    item.style.transform =
      'perspective(500px) rotateX(0deg) rotateY(0deg)';
  });

});

// INSTAGRAM BUTTON AUTO OPEN
const instaText = document.querySelector('.hero p strong');

if (instaText) {

  instaText.style.cursor = 'pointer';

  instaText.addEventListener('click', () => {

    window.open(
      'https://instagram.com/nivedha_tea_artist',
      '_blank'
    );

  });

}

// COUNTER EFFECT
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
      +counter.getAttribute('data-target');

    const count =
      +counter.innerText;

    const increment = target / 100;

    if (count < target) {

      counter.innerText =
        Math.ceil(count + increment);

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// LOADER
window.addEventListener('load', () => {

  const loader = document.createElement('div');

  loader.classList.add('loader');

  loader.innerHTML = `
    <h1>Tea Palette</h1>
  `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.remove();
    }, 500);

  }, 1000);

});

// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {

  btn.addEventListener('click', function (e) {

    const ripple =
      document.createElement('span');

    ripple.classList.add('ripple');

    ripple.style.left =
      `${e.offsetX}px`;

    ripple.style.top =
      `${e.offsetY}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});

// AUTO IMAGE GLOW
let currentImage = 0;

setInterval(() => {

  galleryImages.forEach(img => {
    img.style.opacity = '0.6';
  });

  if (galleryImages[currentImage]) {

    galleryImages[currentImage].style.opacity = '1';

    currentImage++;

    if (currentImage >= galleryImages.length) {
      currentImage = 0;
    }

  }

}, 2000);

// QUOTE REVEAL
window.addEventListener('scroll', () => {

  const quote =
    document.querySelector('.quote-box');

  if (quote) {

    const position =
      quote.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

      quote.classList.add('active');

    }

  }

});
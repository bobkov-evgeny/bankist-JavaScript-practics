'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
   e.preventDefault();

   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
   }
});

//////////////////////////////

const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
   'We use cookies for improved functionality and analytics.';
message.innerHTML =
   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
header.append(message);

document
   .querySelector('.btn--close-cookie')
   .addEventListener('click', function () {
      message.remove();
   });

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
   e.preventDefault();
   const s1coords = section1.getBoundingClientRect();
   e.target.getBoundingClientRect();

   //console.log('current scroll', window.pageYOffset + s1coords.top);

   //console.log(
   //  'height/width vievport',
   //  document.documentElement.clientHeight,
   //  document.documentElement.clientWidth
   //);

   // Scrolling
   //window.scrollTo(
   //  s1coords.left + window.pageXOffset,
   //  s1coords.top + window.pageYOffset
   //);

   // OLD METHOD
   //window.scrollTo({
   //  left: s1coords.left + window.pageXOffset,
   //  top: s1coords.top + window.pageYOffset,
   //  behavior: 'smooth',
   //});

   // MODERN METHOD
   section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////
// Page navigation

//document.querySelectorAll('.nav__links').forEach(function (el) {
//  el.addEventListener('click', function (e) {
//    e.preventDefault();
//    const id = this.getAttribute('href');
//    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//  });
//});

// 1. Add Event listener to common parent element
// 2. determine what element originated the element

document.querySelector('.nav__links').addEventListener('click', function (e) {
   e.preventDefault();

   // Matching strategy
   if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
   }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
   const clicked = e.target.closest('.operations__tab');

   // Guard clause
   if (!clicked) return;

   // Active tab
   tabs.forEach(t => t.classList.remove('operations__tab--active'));
   clicked.classList.toggle('operations__tab--active');

   // Activate content area
   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
   document
      .querySelector(
         `.operations__content--${clicked.getAttribute('data-tab')}`
      )
      .classList.toggle('operations__content--active');
});

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const img = link.closest('.nav').querySelector('img');
    siblings.forEach(s => {if(s !== link) s.style.opacity = this});
    img.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// sticky navigation
/*
const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords.top);

window.addEventListener('scroll', function() {

  console.log(initialCoords.top, window.scrollY)

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky');

})
*/

// Reveal sections

//const allSections = document.querySelectorAll('.section');

const sectionFadeIn = function(entries, observer) {
  const entry = entries[0];
  console.log(entry)
  
  if(entry.isIntersecting) {
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);
  };
};

const sectionObserver = new IntersectionObserver(sectionFadeIn, {root: null, threshold: 0.05})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})

///////////////////////////////////////

const lazyImg = document.querySelectorAll('img[data-src');

const imgReveal = function(entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function() {
      entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target);
  }
  
}
const lazyImgObserver = new IntersectionObserver(imgReveal, {root: null, threshold: 0})
lazyImg.forEach(img => lazyImgObserver.observe(img))


//
//
//
//
//
//


//
//
//
//
//
//
//
/*

*/
///////////////////////////////////
//////////////////////////////////
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src')); // Absolure version
console.log(logo.src); // Relative version

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
console.log(logo.classList.contains('c')); // = includes

// Don't use
logo.classList = 'jonas';
*/

/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//h1.onmouseenter = function (e) {
//  alert('addEventListener: Great! You are reading the heading :D');
//};

// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
  // Stor propagation
  //e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINKS', e.target);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target);
});


const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});


const observerCallback = function(entries, observerObj) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver(observerCallback, observerOptions)
*/
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {

  const entry = entries[0];

  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});

headerObserver.observe(header);



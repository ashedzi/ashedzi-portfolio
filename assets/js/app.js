'use strict';
import * as utils from './utils.js';

const nextSection = utils.select('.about');
const scrollIndicator = utils.select('.scroll-indicator');
const heroSection = utils.select('.hero-section');
const cursor = utils.select(".cursor");

  // Function to scroll to the next section
  function scrollToNextSection() {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }

//   scrollIndicator.addEventListener('click', scrollToNextSection);
  utils.listen('click', scrollIndicator, scrollToNextSection);

document.addEventListener("DOMContentLoaded", function () {
    let options = {
      strings: ["UI/UX Designer", "Software Developer"], 
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };
    let typedInstance = new Typed(".dynamic-text", options); 
  });
  
  document.addEventListener("mousemove", function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });
  
  window.addEventListener('scroll', function () {    
    if (window.scrollY > heroSection.offsetHeight) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
  });

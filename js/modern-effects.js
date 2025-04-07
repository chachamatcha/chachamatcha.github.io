/**
 * Modern Effects JavaScript
 * Inspired by GitHub Copilot website
 * 
 * This script adds interactive elements and animations to enhance 
 * the user experience with modern effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // Add the background gradient element to the body
  addBackgroundGradient();
  
  // Enhance cards with hover effects
  enhanceCards();
  
  // Add scroll animations
  initScrollAnimations();
  
  // Add typing effect to hero section
  initHeroTypingEffect();
  
  // Initialize floating elements
  initFloatingElements();
});

/**
 * Adds a background gradient element to the body for the subtle color effects
 */
function addBackgroundGradient() {
  const gradientElement = document.createElement('div');
  gradientElement.className = 'background-gradient';
  document.body.prepend(gradientElement);
}

/**
 * Enhances cards with additional hover effects and animations
 */
function enhanceCards() {
  const cards = document.querySelectorAll('.card-style-common, .skill-item, .project-card');
  
  cards.forEach(card => {
    // Add subtle movement on mouse movement for 3D effect
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Calculate rotation based on mouse position
      const dx = (x - xc) / 10;
      const dy = (y - yc) / 10;
      
      this.style.transform = `perspective(1000px) rotateY(${dx}deg) rotateX(${-dy}deg) translateZ(10px)`;
    });
    
    // Reset card position when mouse leaves
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    });
  });
}

/**
 * Initializes animations that trigger on scroll
 */
function initScrollAnimations() {
  // Animate elements when they enter the viewport
  const animateOnScroll = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Add .animate-on-scroll class to elements we want to animate
  const elements = document.querySelectorAll('h1, h2, .card-style-common, .project-card, .skill-item');
  elements.forEach(el => {
    // Add the animate-on-scroll class if it doesn't already have an animation class
    if (!el.classList.contains('animate-fadeIn') && 
        !el.classList.contains('animate-slideUp')) {
      el.classList.add('animate-on-scroll');
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    }
  });
  
  // Add the CSS for the animation
  const style = document.createElement('style');
  style.textContent = `
    .animate-on-scroll.animate-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Adds a typing effect to the hero section headline with cursor following the last character
 */
function initHeroTypingEffect() {
  const heroHeading = document.querySelector('#hero h1');
  
  if (heroHeading) {
    const text = heroHeading.textContent;
    
    // Create a container for the typing effect
    const container = document.createElement('span');
    container.className = 'typing-container';
    
    // Create a span for the typed text
    const typedTextSpan = document.createElement('span');
    typedTextSpan.className = 'typed-text';
    
    // Create a span for the cursor
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    cursorSpan.innerHTML = '|';
    cursorSpan.style.color = 'var(--color-accent-purple)';
    cursorSpan.style.fontWeight = 'bold';
    cursorSpan.style.animation = 'blink 0.75s step-end infinite';
    
    // Add the CSS for cursor blinking animation
    if (!document.querySelector('#cursor-animation-style')) {
      const style = document.createElement('style');
      style.id = 'cursor-animation-style';
      style.textContent = `
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Append elements to the DOM
    container.appendChild(typedTextSpan);
    container.appendChild(cursorSpan);
    
    // Clear the heading and add our container
    heroHeading.innerHTML = '';
    heroHeading.appendChild(container);
    
    let i = 0;
    const typingSpeed = 50; // milliseconds per character
    
    function typeWriter() {
      if (i < text.length) {
        typedTextSpan.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Remove the cursor when typing is complete (optional)
        setTimeout(() => {
          cursorSpan.style.display = 'none';
        }, 1000);
      }
    }
    
    // Slight delay before starting the animation
    setTimeout(typeWriter, 500);
  }
}

/**
 * Creates floating elements that move slightly when the user scrolls
 * for a parallax-like effect
 */
function initFloatingElements() {
  // Add floating decoration elements
  const decorElements = [
    { class: 'decor-circle', size: '100px', color: 'rgba(137, 87, 229, 0.1)', position: { top: '15%', left: '5%' } },
    { class: 'decor-circle', size: '150px', color: 'rgba(88, 166, 255, 0.08)', position: { top: '60%', right: '5%' } },
    { class: 'decor-square', size: '80px', color: 'rgba(63, 185, 80, 0.08)', position: { top: '80%', left: '15%' } }
  ];
  
  // Only add decoration on larger screens
  if (window.innerWidth > 768) {
    decorElements.forEach(elem => {
      const el = document.createElement('div');
      el.className = elem.class + ' floating-element';
      
      Object.assign(el.style, {
        position: 'absolute',
        width: elem.size,
        height: elem.size,
        backgroundColor: elem.color,
        borderRadius: elem.class === 'decor-circle' ? '50%' : '15%',
        zIndex: '-1',
        ...elem.position,
        transition: 'transform 0.5s ease-out',
        opacity: '0.7',
        filter: 'blur(40px)'
      });
      
      document.body.appendChild(el);
    });
    
    // Move elements on scroll to create parallax effect
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        document.querySelectorAll('.floating-element').forEach((el, index) => {
          // Different elements move at different rates and directions
          const translateY = scrollY * (0.05 * ((index % 2) ? 1 : -1));
          const translateX = scrollY * (0.02 * ((index % 3) ? 1 : -1));
          el.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      }, 10);
    });
  }
}

/**
 * Enhances links with hover effects
 */
document.querySelectorAll('a').forEach(link => {
  if (!link.querySelector('i') && !link.classList.contains('button-base')) {
    link.classList.add('link-underline-hover');
  }
});
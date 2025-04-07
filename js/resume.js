// Skills visualization and interaction functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle tab switching
  const tabs = document.querySelectorAll('.skill-tab');
  const skillSets = document.querySelectorAll('.skills-honeycomb');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Hide all skill sets
      skillSets.forEach(set => set.classList.remove('active'));

      // Show the corresponding skill set
      const category = this.getAttribute('data-category');
      document.getElementById(`${category}-skills`).classList.add('active');
    });
  });

  // Add hover effects and interactions for hexagons
  const hexagons = document.querySelectorAll('.hexagon');

  hexagons.forEach(hex => {
    hex.addEventListener('mouseenter', function() {
      // Show tooltip
      const tooltip = this.querySelector('.skill-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
      }

      // Animate skill dots
      const dots = this.querySelectorAll('.skill-dot');
      dots.forEach((dot, index) => {
        setTimeout(() => {
          dot.style.transform = 'scale(1.3)';
          setTimeout(() => {
            dot.style.transform = 'scale(1)';
          }, 200);
        }, index * 100);
      });
    });

    hex.addEventListener('mouseleave', function() {
      // Hide tooltip
      const tooltip = this.querySelector('.skill-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
      }
    });
  });

  // Simplified animation for hexagons - all appear at once on scroll
  function animateHexagons() {
    const hexWrappers = document.querySelectorAll('.hexagon-wrapper');
    const container = document.querySelector('.skills-honeycomb-container');

    if (!container) return; // Exit if container not found

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hexWrappers.forEach(wrapper => {
            // Apply initial state if not already visible
            if (wrapper.style.opacity !== '1') {
              wrapper.style.opacity = '0'; // Ensure initial state is hidden
              wrapper.style.transform = 'scale(0.8)'; // Start smaller
            }
            // Trigger animation
            setTimeout(() => { // Add slight delay for effect
              wrapper.style.opacity = '1';
              wrapper.style.transform = 'scale(1)'; // Scale to final size
            }, 100); // Adjust delay as needed
          });
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    observer.observe(container);
  }

  animateHexagons();
});
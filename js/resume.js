// Skills visualization and interaction functionality
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced tab switching with animations
  const tabs = document.querySelectorAll('.skill-tab');
  const skillSets = document.querySelectorAll('.skills-grid');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // If already active, do nothing
      if (this.classList.contains('active')) return;
      
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab with smooth animation
      this.classList.add('active');

      // Get the target skill set
      const category = this.getAttribute('data-category');
      const targetSkillSet = document.getElementById(`${category}-skills`);
      
      if (!targetSkillSet) return; // Safety check
      
      // Hide currently visible skill set with transition
      const currentActiveSet = document.querySelector('.skills-grid.active');
      if (currentActiveSet) {
        currentActiveSet.style.opacity = '0';
        currentActiveSet.style.transform = 'translateY(20px)';
        currentActiveSet.style.pointerEvents = 'none';
        
        // After transition completes, remove active class
        setTimeout(() => {
          currentActiveSet.classList.remove('active');
          
          // Show the new skill set with animation
          targetSkillSet.classList.add('active');
          setTimeout(() => {
            targetSkillSet.style.opacity = '1';
            targetSkillSet.style.transform = 'translateY(0)';
            targetSkillSet.style.pointerEvents = 'auto';
            targetSkillSet.style.alignSelf = 'center';
            targetSkillSet.style.margin = '0 auto';
            
            // Apply staggered animations to the cards in the new active set
            const cards = targetSkillSet.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              card.style.animation = 'none';
              card.offsetHeight; // Force reflow
              card.style.setProperty('--card-index', index);
              card.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
            });
          }, 50); // Small delay for smoother transition
        }, 300); // Match this to the CSS transition time
      } else {
        // If no current active set, just show the new one
        targetSkillSet.classList.add('active');
        targetSkillSet.style.opacity = '1';
        targetSkillSet.style.transform = 'translateY(0)';
        targetSkillSet.style.pointerEvents = 'auto';
        targetSkillSet.style.alignSelf = 'center';
        targetSkillSet.style.margin = '0 auto';
      }
    });
  });

  // Add hover effects and interactions for skill cards
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
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

    card.addEventListener('mouseleave', function() {
      // Hide tooltip
      const tooltip = this.querySelector('.skill-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
      }
    });
  });

  // Enhanced animation for skill cards with staggered effects
  function animateSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    const container = document.querySelector('.skills-grid-container');

    if (!container) return; // Exit if container not found

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply staggered animations to cards in the active grid
          const activeGrid = document.querySelector('.skills-grid.active');
          if (activeGrid) {
            const cards = activeGrid.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              // Reset any previous animations
              card.style.animation = 'none';
              card.offsetHeight; // Force reflow
              
              // Set custom property for staggered animation delay
              card.style.setProperty('--card-index', index);
              
              // Apply the animation
              card.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
            });
          }
          
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    observer.observe(container);
  }

  // Initialize by activating the first tab and its skill set
  function initializeSkills() {
    // If no tab is active, activate the first one
    const tabs = document.querySelectorAll('.skill-tab');
    const skillSets = document.querySelectorAll('.skills-grid');
    
    if (tabs.length > 0 && !document.querySelector('.skill-tab.active')) {
      tabs[0].classList.add('active');
      
      // Show the corresponding skill set
      const category = tabs[0].getAttribute('data-category');
      const targetSkillSet = document.getElementById(`${category}-skills`);
      if (targetSkillSet) {
        skillSets.forEach(set => set.classList.remove('active'));
        targetSkillSet.classList.add('active');
        targetSkillSet.style.opacity = '1';
        targetSkillSet.style.transform = 'translateY(0)';
        targetSkillSet.style.pointerEvents = 'auto';
        targetSkillSet.style.alignSelf = 'center';
        targetSkillSet.style.margin = '0 auto';
      }
    }
    
    // Initialize animations
    animateSkillCards();
  }

  // Run initialization
  initializeSkills();
});
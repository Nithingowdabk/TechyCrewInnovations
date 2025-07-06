// Typewriter Effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.isDeleting = false;
        this.currentText = '';
        this.type();
    }

    type() {
        const current = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.currentText = current.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = current.substring(0, this.currentText.length + 1);
        }

        this.element.innerHTML = `${this.currentText}<span class="typewriter-cursor">|</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.currentText === current) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        if (this.wordIndex >= this.words.length) {
            this.wordIndex = 0;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    const words = [
        'AI/AR Solutions 🚀',
        'IOT Systems 🔧',
        'Web Apps 🌐',
        'Mini & Mega Projects 🎓'
    ];
    
    new TypeWriter(typewriterElement, words, 2500);
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButtons = document.querySelectorAll('.btn-primary');
    const contactButtons = document.querySelectorAll('.btn-secondary');
    
    getStartedButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to services section
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Enhanced Cyberpunk Effects
document.addEventListener('DOMContentLoaded', function() {
    // Add glowing effect to service cards on hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.5)';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.3)';
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });

    // Add pulsing effect to contact icons
    const contactIcons = document.querySelectorAll('.contact-icon');
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Add enhanced effects to social media contact icons
    const contactIconLinks = document.querySelectorAll('.contact-icon-link');
    contactIconLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(98, 162, 211, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.marginLeft = '-50%';
            ripple.style.marginTop = '-50%';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Add typing effect to terminal code
    const terminalCode = document.querySelector('.terminal-body code');
    if (terminalCode) {
        const originalText = terminalCode.innerHTML;
        let index = 0;
        
        const typeCode = () => {
            if (index < originalText.length) {
                terminalCode.innerHTML = originalText.substring(0, index + 1);
                index++;
                setTimeout(typeCode, 50);
            }
        };
        
        // Start typing effect when terminal comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeCode, 1000);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(terminalCode);
    }
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add cyberpunk glow effect
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.3)';
                }
            }
        });
    }, observerOptions);

    // Observe service cards and contact cards
    const cards = document.querySelectorAll('.service-card, .contact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s, box-shadow 0.8s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add parallax effect to floating card
document.addEventListener('DOMContentLoaded', function() {
    const floatingCard = document.querySelector('.floating-card');
    
    if (floatingCard) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            floatingCard.style.transform = `translateY(${rate}px)`;
        });
    }
});

// Enhanced terminal hover effects
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal');
    
    if (terminal) {
        terminal.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(56, 189, 248, 0.6)';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        terminal.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.2)';
            this.style.transform = 'scale(1)';
        });
    }
});

// Header is now fixed with clean design - no scroll effects needed

// Add CSS animations for cyberpunk effects
document.addEventListener('DOMContentLoaded', function() {
    // Add pulse animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5)); }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.8)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5)); }
        }
        
        @keyframes neonGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.4); }
            50% { box-shadow: 0 0 30px rgba(56, 189, 248, 0.8); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .service-card:hover .service-icon {
            animation: pulse 1s infinite;
        }
        
        .contact-card:hover .contact-icon {
            animation: pulse 1s infinite;
        }
    `;
    document.head.appendChild(style);
});

// Add typing animation to code block
document.addEventListener('DOMContentLoaded', function() {
    const codeContent = document.querySelector('.terminal-body code');
    
    if (codeContent) {
        const originalText = codeContent.innerHTML;
        let index = 0;
        
        const typeCode = () => {
            if (index < originalText.length) {
                codeContent.innerHTML = originalText.substring(0, index + 1);
                index++;
                setTimeout(typeCode, 30);
            }
        };
        
        // Start typing effect when code section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeCode, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(codeContent);
    }
});

// === Premium Cyberpunk Glowing Cursor System - Desktop Only ===
(function() {
  // Only create cursor on desktop devices with mouse support
  const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 769px)').matches;
  
  if (isDesktop && !document.querySelector('.cursor-glow')) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);
    
    // Follow mouse movement with smooth positioning
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }
  
  // Remove cursor on window resize if switching to mobile view
  window.addEventListener('resize', () => {
    const isNowDesktop = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 769px)').matches;
    const existingCursor = document.querySelector('.cursor-glow');
    
    if (!isNowDesktop && existingCursor) {
      existingCursor.remove();
    } else if (isNowDesktop && !existingCursor) {
      const cursor = document.createElement('div');
      cursor.classList.add('cursor-glow');
      document.body.appendChild(cursor);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }
  });
})();

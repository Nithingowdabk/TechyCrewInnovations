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
        'AI Projects 🧠',
        'IOT Systems 🔧',
        'Web Apps 🌐',
        'Final Year Solutions 💸'
    ];
    
    new TypeWriter(typewriterElement, words, 2000);
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
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
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
    const getStartedButtons = document.querySelectorAll('.btn-primary, .nav-cta');
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
            }
        });
    }, observerOptions);

    // Observe service cards and contact cards
    const cards = document.querySelectorAll('.service-card, .contact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
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

// Add glow effect on terminal hover
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal');
    
    if (terminal) {
        terminal.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(14, 165, 233, 0.3)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        terminal.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }
});

// Mobile menu toggle (for future enhancement)
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu functionality if needed
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Add typing animation to code block
document.addEventListener('DOMContentLoaded', function() {
    const codeContent = document.querySelector('.terminal-body code');
    
    if (codeContent) {
        const originalText = codeContent.innerHTML;
        let index = 0;
        
        // Function to simulate typing effect when code block comes into view
        const typeCode = () => {
            if (index < originalText.length) {
                // Simple character-by-character reveal
                codeContent.innerHTML = originalText.substring(0, index + 1);
                index++;
                setTimeout(typeCode, 50);
            }
        };
        
        // Observer for code block
        const codeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    codeContent.innerHTML = '';
                    index = 0;
                    setTimeout(typeCode, 1000); // Delay before starting
                    codeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        codeObserver.observe(codeContent);
    }
});

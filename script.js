// Global Variables
const LOADING_DURATION = 2500; // 2.5 seconds loading animation

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website Function
function initializeWebsite() {
    // Initialize loading animation
    initLoadingAnimation();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Page-specific initializations
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initHomePage();
            break;
        case 'project':
            initProjectPage();
            break;
        case 'about':
            initAboutPage();
            break;
        case 'skills':
            initSkillsPage();
            break;
        case 'contact':
            initContactPage();
            break;
    }
    
    // Initialize social media links
    initSocialLinks();
}

// Get Current Page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('project')) return 'project';
    if (path.includes('about')) return 'about';
    if (path.includes('skills')) return 'skills';
    if (path.includes('contact')) return 'contact';
    return 'index';
}

// Loading Animation
function initLoadingAnimation() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }, LOADING_DURATION);
}

// Navigation Functionality
function initNavigation() {
    // Navigation scroll effect
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    }
    
    // Mobile menu toggle (if exists)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenuBtn && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Home Page Initialization
function initHomePage() {
    console.log('Initializing Home Page...');
    // Home page specific functionality can be added here
}

// Project Page Initialization
function initProjectPage() {
    console.log('Initializing Project Page...');
    
    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, 100);
                    } else {
                        card.classList.remove('visible');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const viewProjectButtons = document.querySelectorAll('.view-project, .project-link');
    
    if (modal && modalClose) {
        // Project Data
        const projects = {
            1: {
                title: "E-Commerce Dashboard",
                category: "Web Development",
                description: "A comprehensive e-commerce management system with real-time analytics, inventory management, customer insights, order processing, and payment integration. The dashboard provides merchants with complete control over their online store with intuitive UI and powerful analytics tools.",
                tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Chart.js"],
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/658077ca-5b88-4ee8-9199-46e953d91a34.png",
                date: "December 2023",
                live: "#",
                github: "#"
            },
            2: {
                title: "Fitness Tracker App",
                category: "Mobile App",
                description: "A comprehensive fitness tracking application that helps users monitor workouts, set personalized goals, track progress with detailed analytics, and connect with fitness communities. Includes features like workout plans, calorie tracking, social sharing, and integration with health devices.",
                tags: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit", "Push Notifications"],
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3311538d-d1e9-4e68-b43b-0b4953a69db5.png",
                date: "October 2023",
                live: "#",
                github: "#"
            },
            3: {
                title: "Corporate Website Redesign",
                category: "UI/UX Design",
                description: "Complete redesign of a corporate website focusing on modern design principles, improved user experience, accessibility, and performance optimization. The project involved user research, wireframing, prototyping, and implementation with a mobile-first approach.",
                tags: ["Figma", "Adobe XD", "Prototyping", "User Testing", "Accessibility", "Responsive Design"],
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df7d1269-d0f8-4af1-a6a0-066b5650e3ee.png",
                date: "August 2023",
                live: "#",
                github: "#"
            }
        };

        // Open modal
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-project');
                const project = projects[projectId];
                
                if (project) {
                    document.getElementById('modalImage').src = project.image;
                    document.getElementById('modalCategory').textContent = project.category;
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalDescription').textContent = project.description;
                    document.getElementById('modalDate').textContent = project.date;
                    
                    // Set tags
                    const modalTags = document.getElementById('modalTags');
                    modalTags.innerHTML = '';
                    project.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'modal-tag';
                        tagElement.textContent = tag;
                        modalTags.appendChild(tagElement);
                    });
                    
                    // Set links
                    document.getElementById('modalLive').href = project.live;
                    document.getElementById('modalGithub').href = project.github;
                    
                    // Show modal
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// About Page Initialization
function initAboutPage() {
    console.log('Initializing About Page...');
    
    // Download CV functionality
    const downloadCvBtn = document.getElementById('downloadCv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulate download (would be replaced with actual download link)
            alert('CV download started! In a real implementation, this would download your CV file.');
            
            // Create and trigger download
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual CV file URL
            link.download = 'Your_CV.pdf';
            link.click();
        });
    }
    
    // Skill bar animations
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width') || entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 100);
                }
            });
        }, {
            threshold: 0.5
        });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
}

// Skills Page Initialization
function initSkillsPage() {
    console.log('Initializing Skills Page...');
    
    // Skills filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCategories = document.querySelectorAll('.skills-category');
    
    if (filterButtons.length && skillCategories.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                skillCategories.forEach(categoryElement => {
                    if (category === 'all' || categoryElement.getAttribute('data-category') === category) {
                        categoryElement.style.display = 'block';
                        setTimeout(() => {
                            categoryElement.classList.add('visible');
                        }, 100);
                    } else {
                        categoryElement.classList.remove('visible');
                        setTimeout(() => {
                            categoryElement.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Skill bar animations
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 100);
                }
            });
        }, {
            threshold: 0.5
        });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // Certification links
    const certificationLinks = document.querySelectorAll('.certification-link');
    certificationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This would open the certification details or verification page.');
        });
    });
}

// Contact Page Initialization
function initContactPage() {
    console.log('Initializing Contact Page...');
    
    // Form Validation and Submission
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    if (form && submitBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('.form-input');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        input.classList.add('error');
                        isValid = false;
                    }
                }
            });

            if (isValid) {
                // Change form action to use FormSubmit.co
                form.action = 'https://formsubmit.co/viosdevsonic@gmail.com';
                form.method = 'POST';
                
                // Add necessary hidden fields for FormSubmit.co
                const redirectField = document.createElement('input');
                redirectField.type = 'hidden';
                redirectField.name = '_next';
                redirectField.value = window.location.href + '?success=true';
                form.appendChild(redirectField);
                
                const captchaField = document.createElement('input');
                captchaField.type = 'hidden';
                captchaField.name = '_captcha';
                captchaField.value = 'false';
                form.appendChild(captchaField);
                
                const templateField = document.createElement('input');
                templateField.type = 'hidden';
                templateField.name = '_template';
                templateField.value = 'table';
                form.appendChild(templateField);
                
                // Submit the form
                form.submit();
                
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending...';
                
                // If FormSubmit fails, show success message anyway after delay
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        form.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = 'Send Message <span>→</span>';
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 5000);
                    }
                }, 2000);
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('error');
                }
                
                if (this.type === 'email' && this.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.classList.remove('error');
                    }
                }
            });
        });
    }
    
    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true' && successMessage) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
            // Remove success parameter from URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
    }
}

// Social Media Links
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link, .social-link-contact, .social-link-footer');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            let url = '#';
            
            switch(platform) {
                case '📘':
                    url = 'https://facebook.com/yourprofile';
                    break;
                case '🐦':
                    url = 'https://twitter.com/yourprofile';
                    break;
                case '📸':
                    url = 'https://instagram.com/yourprofile';
                    break;
                case '💼':
                    url = 'https://linkedin.com/in/yourprofile';
                    break;
                case '🎥':
                    url = 'https://youtube.com/yourchannel';
                    break;
            }
            
            window.open(url, '_blank');
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize on window load
window.addEventListener('load', function() {
    // Re-initialize animations if loader is already hidden
    if (document.getElementById('loader')?.style.display === 'none') {
        initScrollAnimations();
        
        // Initialize page-specific functionality based on current page
        const currentPage = getCurrentPage();
        switch(currentPage) {
            case 'project':
                initProjectPage();
                break;
            case 'about':
                initAboutPage();
                break;
            case 'skills':
                initSkillsPage();
                break;
            case 'contact':
                initContactPage();
                break;
        }
    }
});

// Export functions for global access (if needed)
window.Website = {
    init: initializeWebsite,
    initProjectPage,
    initAboutPage,
    initSkillsPage,
    initContactPage
};

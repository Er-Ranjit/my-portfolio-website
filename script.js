document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Pure JavaScript Typing Animation Logic ---
    const words = ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Designer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000; // Word badalne ka wait time
    
    const typingTextSpan = document.getElementById("typing-text");

    function type() {
        if (!typingTextSpan) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Text delete ho rha hai
            typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Text type ho rha hai
            typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Word complete ho gya, break lo phir delete shuru karo
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else if (isDeleting && charIndex === 0) {
            // Word khatam, agla word pick karo
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            // Continue typing or erasing
            setTimeout(type, isDeleting ? erasingDelay : typingDelay);
        }
    }

    // Start Typing Process
    if(typingTextSpan) {
        setTimeout(type, 1000);
    }


    // --- 2. Mobile Menu Toggle Action ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            menuToggle.classList.toggle('is-active');
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('is-active');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    

    // --- 3. Interactive Premium Light Particles Engine ---
    // FIXED: Ab ye block DOMContentLoaded ke andar hai aur colors light theme ke liye optimized hain
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { 
                    "value": 75, 
                    "density": { "enable": true, "value_area": 500 } 
                },
                "color": { 
                    "value": "#1ae6cb" /* Light background par visibility ke liye deep indigo color */
                },
                "shape": { "type": "circle" },
                "opacity": { 
                    "value": 0.15, /* Soft contrast taaki text focus me rahe */
                    "random": false 
                },
                "size": { "value": 3.5, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#fb00f3", /* Connecting lines ka color */
                    "opacity": 0.1,
                    "width": 1.2
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.35 } }
                }
            },
            "retina_detect": true
        });
    } else {
        console.log("Particles library not loaded yet.");
    }

}); // DOMContentLoaded yahan perfect close ho rha hai


    // --- 4. Premium Projects Grid Shuffle Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Active class shuffle on buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const targetFilter = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (targetFilter === 'all' || cardCategory === targetFilter) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }


        // --- 6. Contact Form Success Response Trigger ---
    const contactForm = document.getElementById('portfolioContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents instant reload page
            
            // Temporary sweet response alert simulation
            alert("Thank you, message sent successfully! Ranjit will connect with you soon.");
            contactForm.reset(); // Clears all visual inputs boxes fields
        });
    }

        // --- 7. Automated Copyright Year Synchronization Hook ---
    const yearSpan = document.getElementById('copyrightYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


        // --- AUTOMATED SPA 404 URL ROUTER ENGINE ---
    const errorPageModal = document.getElementById('errorPage404');
    const goHomeErrorBtn = document.getElementById('goHomeErrorBtn');

    if (errorPageModal) {
        // Path checking: Check karega ki base root URL ke bad kuch extra subfolder toh nahi likha hai
        const currentPathname = window.location.pathname;

        // Port 5500 validation index tracker rule
        // Agar pathname "/" ya "/index.html" ke alawa kuch bhi aur hai (jaise /service), toh error active hoga
        if (currentPathname !== '/' && currentPathname !== '/index.html' && !currentPathname.endsWith('.html')) {
            errorPageModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop scrolling background components
        }

        // Back to home action button loop reset tracker mapping
        if (goHomeErrorBtn) {
            goHomeErrorBtn.addEventListener('click', () => {
                errorPageModal.classList.remove('active');
                // URL back coordinates parameters clean reset execution
                window.location.href = window.location.origin; 
            });
        }
    }


    
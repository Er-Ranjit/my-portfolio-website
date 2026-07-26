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


/*=========================================
        PREMIUM NAVBAR JS
=========================================*/

const header = document.querySelector(".header");
const menuToggle = document.getElementById("mobile-menu");
const mobileMenu = document.getElementById("mobileMenu");

/* =========================
      Mobile Menu Toggle
========================= */

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("open");

});

/* =========================
      Close Outside Click
========================= */

document.addEventListener("click", (e) => {

    if (
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");

    }

});

/* =========================
      Stop Closing
========================= */

mobileMenu.addEventListener("click", (e) => {

    e.stopPropagation();

});

/* =========================
      Close After Click Link
========================= */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");

    });

});

/* =========================
      Navbar Scroll Effect
========================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* =========================
      Active Navigation
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const mobileNavLinks = document.querySelectorAll(".mobile-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

    mobileNavLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =========================
      Smooth Scroll
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 90,

                behavior: "smooth"

            });

        }

    });

});

    

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


    fetch("/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Ranjit",
        email: "ranjit@gmail.com",
        message: "Hello, I want to hire you."
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

/* ==========================================
        PREMIUM AI ASSISTANT
========================================== */

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userMessage");
const chatBox = document.getElementById("chatBox");

/* ==========================================
        SEND MESSAGE
========================================== */

async function sendMessage(message = null){

    const text = message || userInput.value.trim();

    if(text === "") return;

    if(!message){
        userInput.value = "";
    }

    addUserMessage(text);

    showTyping();

    try{

        const response = await fetch("/chat",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                message:text
            })

        });

        const data = await response.json();

        removeTyping();

        addBotMessage(data.reply);

    }

    catch(error){

        removeTyping();

        addBotMessage("❌ Unable to connect with AI Assistant.");

    }

}

/* ==========================================
        USER MESSAGE
========================================== */

function addUserMessage(text){

    const div=document.createElement("div");

    div.className="user-message";

    div.innerHTML=`${text}`;

    chatBox.appendChild(div);

    scrollBottom();

}

/* ==========================================
        BOT MESSAGE
========================================== */

function addBotMessage(text){

    const div=document.createElement("div");

    div.className="bot-message";

    div.innerHTML=`
        <p class="msg-txt">${text}</p>
    `;

    chatBox.appendChild(div);

    scrollBottom();

}

/* ==========================================
        TYPING EFFECT
========================================== */

function showTyping(){

    removeTyping();

    const typing=document.createElement("div");

    typing.className="typing-indicator";

    typing.id="typing";

    typing.innerHTML=`

        <div class="dot"></div>

        <div class="dot"></div>

        <div class="dot"></div>

    `;

    chatBox.appendChild(typing);

    scrollBottom();

}

function removeTyping(){

    const typing=document.getElementById("typing");

    if(typing){

        typing.remove();

    }

}

/* ==========================================
        AUTO SCROLL
========================================== */

function scrollBottom(){

    setTimeout(()=>{

        chatBox.scrollTo({

            top:chatBox.scrollHeight,

            behavior:"smooth"

        });

    },100);

}

/* ==========================================
      BUTTON CLICK
========================================== */

sendBtn.addEventListener("click",()=>{

    sendMessage();

});

/* ==========================================
        ENTER KEY
========================================== */

userInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        e.preventDefault();

        sendMessage();

    }

});

/* ==========================================
      QUICK SUGGESTION CLICK
========================================== */

function handleSuggestionClick(text){

    sendMessage(text);

}

window.handleSuggestionClick=handleSuggestionClick;

/* ==========================================
        AUTO FOCUS
========================================== */

window.addEventListener("load",()=>{

    userInput.focus();

});

/* ==========================================
      BUTTON ANIMATION
========================================== */

sendBtn.addEventListener("mousedown",()=>{

    sendBtn.style.transform="scale(.90)";

});

sendBtn.addEventListener("mouseup",()=>{

    sendBtn.style.transform="scale(1)";

});

sendBtn.addEventListener("mouseleave",()=>{

    sendBtn.style.transform="scale(1)";

});

/* ==========================================
      INPUT PLACEHOLDER ANIMATION
========================================== */

const placeholders=[

"Ask about Skills...",

"Ask about Projects...",

"Ask about Experience...",

"Ask about Education...",

"Ask anything..."

];

let index=0;

setInterval(()=>{

    userInput.setAttribute(

        "placeholder",

        placeholders[index]

    );

    index++;

    if(index>=placeholders.length){

        index=0;

    }

},2500);

/* ==========================================
        END
========================================== */
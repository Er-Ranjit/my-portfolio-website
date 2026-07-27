/*=========================================
        PREMIUM NAVBAR JS
=========================================*/

const header = document.querySelector(".header");
const menuToggle = document.getElementById("mobile-menu");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
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
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
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

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Pure JavaScript Typing Animation Logic ---
  const words = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Designer",
    "Problem Solver",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 100;
  const erasingDelay = 50;
  const newWordDelay = 2000;

  const typingTextSpan = document.getElementById("typing-text");

  function type() {
    if (!typingTextSpan) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, newWordDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? erasingDelay : typingDelay);
    }
  }

  if (typingTextSpan) {
    setTimeout(type, 1000);
  }

  // --- 2. Mobile Responsive Navbar Navigation Logic ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");
      navLinks.classList.toggle("open");
    });

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuToggle.classList.remove("is-active");
        navLinks.classList.remove("open");
      });
    });
  }

  // --- 3. Interactive Standalone Cyber Trailing Canvas Engine ---
  const canvas = document.getElementById("cyber-matrix-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let dots = [];
    const isMobileDevice = window.innerWidth < 768;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let pointer = { x: null, y: null, active: false };

    if (!isMobileDevice) {
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;

        if (Math.random() < 0.4) {
          dots.push({
            x: pointer.x,
            y: pointer.y,
            size: Math.random() * 2.5 + 1,
            color: Math.random() > 0.5 ? "#6366f1" : "#06b6d4",
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
            alpha: 1,
            decay: Math.random() * 0.02 + 0.01,
          });
        }
      });
      window.addEventListener("mouseleave", () => {
        pointer.active = false;
      });
    }

    for (let i = 0; i < (isMobileDevice ? 15 : 45); i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        color: "rgba(99, 102, 241, 0.25)",
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.2,
        decay: 0,
      });
    }

    function animateCyberGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        let d = dots[i];
        ctx.save();
        ctx.globalAlpha = d.alpha;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        d.x += d.speedX;
        d.y += d.speedY;

        if (d.decay === 0) {
          if (d.x < 0 || d.x > canvas.width) d.speedX *= -1;
          if (d.y < 0 || d.y > canvas.height) d.speedY *= -1;
        } else {
          d.alpha -= d.decay;
          if (d.alpha <= 0) {
            dots.splice(i, 1);
            i--;
          }
        }
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          let dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 80 && dots[i].decay > 0 && dots[j].decay > 0) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * dots[i].alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateCyberGrid);
    }
    animateCyberGrid();
  }

  // --- 4. Interactive Particles Library Framework Engine ---
  if (
    document.getElementById("particles-js") &&
    typeof particlesJS !== "undefined"
  ) {
    const isMobile = window.innerWidth < 768;
    particlesJS("particles-js", {
      particles: {
        number: {
          value: isMobile ? 30 : 65,
          density: { enable: true, value_area: 600 },
        },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.12, random: true },
        size: { value: isMobile ? 2 : 3.5, random: true },
        line_linked: {
          enable: true,
          distance: isMobile ? 100 : 130,
          color: "#06b6d4",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !isMobile, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: { grab: { distance: 130, line_linked: { opacity: 0.25 } } },
      },
      retina_detect: true,
    });
  }
});

// --- 6. Elite High-Interaction Skills 3D Tilt & Magnetic Track Engine ---
const isMobileUI = window.innerWidth < 768;

if (!isMobileUI) {
  const skillCards = document.querySelectorAll(".skill-grid-card");

  skillCards.forEach((card) => {
    // Mouse move parameters tracker function
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      // Track dynamic mouse relative coordinates variables inside cards for CSS gradients
      const xGlow = e.clientX - rect.left;
      const yGlow = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${xGlow}px`);
      card.style.setProperty("--mouse-y", `${yGlow}px`);

      // 3D Perspective Angular Matrix Multipliers Calculations
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      // Bending values parameters calculations limit angle
      const rotateX = -(mouseY / height) * 15; // Vertical bend angle percentage multiplier
      const rotateY = (mouseX / width) * 15; // Horizontal bend angle percentage multiplier

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    // Mouse reset state execution layout trigger when cursor exits cards surface mapping
    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.setProperty("--mouse-x", `0px`);
      card.style.setProperty("--mouse-y", `0px`);
    });
  });
}

// --- 7. Interactive Premium Tab Project Filter Router Engine ---
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active states from other filtering triggers
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const activeFilterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        // Filter switching fade routing conditions checks logic mapping
        if (activeFilterValue === "all" || cardCategory === activeFilterValue) {
          card.classList.remove("hide");
          // Optional adding smooth fade scale triggers
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transition = "opacity 0.4s ease";
          }, 10);
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
}

// --- 9. Dynamic Footer Year Configuration Auto Stamp ---
const copyrightYearSpan = document.getElementById("copyrightYear");
if (copyrightYearSpan) {
  copyrightYearSpan.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("portfolioContactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const message = document.getElementById("userMessage").value;

    try {
      const response = await fetch(
        "https://my-portfolio-website-il0g.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("✅ Message Sent Successfully!");
        contactForm.reset();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server Error");
    }
  });
}
// --- 7. Automated Copyright Year Synchronization Hook ---
const yearSpan = document.getElementById("copyrightYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- AUTOMATED SPA 404 URL ROUTER ENGINE ---
const errorPageModal = document.getElementById("errorPage404");
const goHomeErrorBtn = document.getElementById("goHomeErrorBtn");

if (errorPageModal) {
  // Path checking: Check karega ki base root URL ke bad kuch extra subfolder toh nahi likha hai
  const currentPathname = window.location.pathname;

  // Port 5500 validation index tracker rule
  // Agar pathname "/" ya "/index.html" ke alawa kuch bhi aur hai (jaise /service), toh error active hoga
  if (
    currentPathname !== "/" &&
    currentPathname !== "/index.html" &&
    !currentPathname.endsWith(".html")
  ) {
    errorPageModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Stop scrolling background components
  }

  // Back to home action button loop reset tracker mapping
  if (goHomeErrorBtn) {
    goHomeErrorBtn.addEventListener("click", () => {
      errorPageModal.classList.remove("active");
      // URL back coordinates parameters clean reset execution
      window.location.href = window.location.origin;
    });
  }
}



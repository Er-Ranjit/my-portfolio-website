/* ==========================================
        PREMIUM AI ASSISTANT
========================================== */

const API_URL = "https://my-portfolio-website-il0g.onrender.com";

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userMessage");
const chatBox = document.getElementById("chatBox");

/* ==========================================
        SEND MESSAGE
========================================== */

async function sendMessage(message = null) {
  const text = message || userInput.value.trim();

  if (text === "") return;

  if (!message) {
    userInput.value = "";
  }

  addUserMessage(text);
  showTyping();

  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    removeTyping();

    if (data.success) {
      addBotMessage(data.reply);
    } else {
      addBotMessage(data.message || "AI Error");
    }
  } catch (error) {
    console.error("AI Error:", error);
    removeTyping();
    addBotMessage("❌ Unable to connect with AI Assistant.");
  }
}

/* ==========================================
        USER MESSAGE
========================================== */

function addUserMessage(text) {
  const div = document.createElement("div");
  div.className = "user-message";
  div.innerHTML = text;
  chatBox.appendChild(div);
  scrollBottom();
}

/* ==========================================
        BOT MESSAGE
========================================== */

function addBotMessage(text) {
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerHTML = `<p class="msg-txt">${text}</p>`;
  chatBox.appendChild(div);
  scrollBottom();
}

/* ==========================================
        TYPING EFFECT
========================================== */

function showTyping() {
  removeTyping();

  const typing = document.createElement("div");
  typing.className = "typing-indicator";
  typing.id = "typing";

  typing.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;

  chatBox.appendChild(typing);
  scrollBottom();
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

/* ==========================================
        AUTO SCROLL
========================================== */

function scrollBottom() {
  setTimeout(() => {
    chatBox.scrollTo({
      top: chatBox.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
}

/* ==========================================
        BUTTON CLICK
========================================== */

if (sendBtn) {
  sendBtn.addEventListener("click", () => sendMessage());
}

/* ==========================================
        ENTER KEY
========================================== */

if (userInput) {
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
}

/* ==========================================
      QUICK SUGGESTION CLICK
========================================== */

function handleSuggestionClick(text) {
  sendMessage(text);
}

window.handleSuggestionClick = handleSuggestionClick;

/* ==========================================
        AUTO FOCUS
========================================== */

window.addEventListener("load", () => {
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 100);
});

/* ==========================================
      BUTTON ANIMATION
========================================== */

if (sendBtn) {
  sendBtn.addEventListener("mousedown", () => {
    sendBtn.style.transform = "scale(.90)";
  });

  sendBtn.addEventListener("mouseup", () => {
    sendBtn.style.transform = "scale(1)";
  });

  sendBtn.addEventListener("mouseleave", () => {
    sendBtn.style.transform = "scale(1)";
  });
}

/* ==========================================
      INPUT PLACEHOLDER ANIMATION
========================================== */

const placeholders = [
  "Ask about Skills...",
  "Ask about Projects...",
  "Ask about Experience...",
  "Ask about Education...",
  "Ask anything...",
];

let index = 0;

setInterval(() => {
  if (userInput) {
    userInput.setAttribute("placeholder", placeholders[index]);
    index = (index + 1) % placeholders.length;
  }
}, 2500);
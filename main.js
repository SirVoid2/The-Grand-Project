// ======================
// UI Panel + Theme Toggles
// ======================
const assistantPanel = document.getElementById("assistantPanel");
const iframePanel = document.getElementById("iframePanel");

document.getElementById("toggleAssistant").onclick = () => {
  playClick();
  assistantPanel.classList.toggle("visible");
  iframePanel.classList.remove("visible");
};

document.getElementById("toggleIframe").onclick = () => {
  playClick();
  iframePanel.classList.toggle("visible");
  assistantPanel.classList.remove("visible");
};

document.getElementById("themeToggle").onclick = () => {
  playClick();
  document.body.classList.toggle("light-theme");
  document.getElementById("themeToggle").textContent =
    document.body.classList.contains("light-theme") ? "☀️" : "🌙";
};

// ======================
// Click Sounds
// ======================
const clickSound = new Howl({
  src: ["https://actions.google.com/sounds/v1/buttons/button_click.mp3"],
  volume: 0.3,
});

function playClick() {
  clickSound.play();
}

document.querySelectorAll("button, .sidebar a").forEach((el) => {
  el.addEventListener("click", playClick);
});

// ======================
// Chatbot Logic (with memory)
// ======================
const chatlog = document.getElementById("chatlog");
const userInputForm = document.getElementById("userInput");
const userText = document.getElementById("userText");

let conversationHistory = [];

function addMessage(text, sender, isTyping = false) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${sender}`;
  if (isTyping) {
    msgDiv.classList.add("typing");
    msgDiv.textContent = "🤖 typing…";
  } else {
    msgDiv.textContent = text;
  }
  chatlog.appendChild(msgDiv);
  chatlog.scrollTop = chatlog.scrollHeight;
  return msgDiv;
}

async function botReply(message) {
  const typingMsg = addMessage("", "bot", true);

  // Add user message to history
  conversationHistory.push({ role: "user", content: message });

  try {
    // Pass full history to AI
    const response = await puter.ai.chat(conversationHistory);

    // Add bot reply to history
    conversationHistory.push({ role: "assistant", content: response });

    // Streaming word-by-word
    typingMsg.textContent = "";
    typingMsg.classList.remove("typing");
    const words = response.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      typingMsg.textContent += words[i] + " ";
      i++;
      chatlog.scrollTop = chatlog.scrollHeight;
      if (i >= words.length) clearInterval(interval);
    }, 100);
  } catch (e) {
    typingMsg.textContent = "⚠️ Error: AI service not available.";
    typingMsg.classList.remove("typing");
  }
}

userInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = userText.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userText.value = "";
  setTimeout(() => botReply(text), 400);
});

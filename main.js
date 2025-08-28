// ======================
// AI + HAHA
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
// Chatbot Logic (NO persistence)
// ======================
const chatlog = document.getElementById("chatlog");
const userInputForm = document.getElementById("userInput");
const userText = document.getElementById("userText");
const clearChatBtn = document.getElementById("clearChatBtn");

// In-memory structures (reset on refresh)
let conversationHistory = [];
let chatlogMessages = [];

// ---- UI rendering ----
function addMessage(text, sender, isTyping = false) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${sender}`;
  msgDiv.textContent = isTyping ? "🤖 typing…" : text;
  chatlog.appendChild(msgDiv);
  chatlog.scrollTop = chatlog.scrollHeight;

  if (!isTyping) chatlogMessages.push({ sender, text });
  return msgDiv;
}

function renderChatlog() {
  chatlog.innerHTML = "";
  for (const m of chatlogMessages) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `msg ${m.sender}`;
    msgDiv.textContent = m.text;
    chatlog.appendChild(msgDiv);
  }
  chatlog.scrollTop = chatlog.scrollHeight;
}

// ---- Bot interaction ----
async function botReply(message) {
  const typingMsg = addMessage("", "bot", true);

  conversationHistory.push({ role: "user", content: message });

  try {
    // Example: HuggingFace free inference (replace with your own model if needed)
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: message }),
    });

    const data = await response.json();
    const reply = data?.generated_text || "⚠️ No reply from AI.";

    typingMsg.textContent = reply;
    typingMsg.classList.remove("typing");

    chatlogMessages.push({ sender: "bot", text: reply });
    conversationHistory.push({ role: "assistant", content: reply });
  } catch (e) {
    typingMsg.textContent = "⚠️ Error: AI service not available.";
    typingMsg.classList.remove("typing");
    chatlogMessages.push({ sender: "bot", text: typingMsg.textContent });
  }
}

// ---- Form submit ----
userInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = userText.value.trim();
  if (!text) return;
  addMessage(text, "user");
  conversationHistory.push({ role: "user", content: text });
  userText.value = "";
  setTimeout(() => botReply(text), 300);
});

// ---- Clear Chat ----
clearChatBtn.addEventListener("click", () => {
  playClick();
  conversationHistory = [];
  chatlogMessages = [];
  renderChatlog();
});

// ---- Initialize ----
renderChatlog();

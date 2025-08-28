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
// Chatbot Logic (with memory + persistence)
// ======================
const chatlog = document.getElementById("chatlog");
const userInputForm = document.getElementById("userInput");
const userText = document.getElementById("userText");

// Storage keys
const LS_KEY_HISTORY = "grand_project_conversation_history_v1";
const LS_KEY_CHATLOG = "grand_project_chatlog_v1";

// In-memory structures
let conversationHistory = [];   // [{role:"user"|"assistant", content:string}, ...]
let chatlogMessages = [];       // [{sender:"user"|"bot", text:string}...]

// ---- Helpers: Save / Load ----
function saveState() {
  // Cap history to avoid localStorage bloat (last 60 turns = 120 role messages)
  const MAX_TURNS = 60;
  const trimmedHistory =
    conversationHistory.length > MAX_TURNS * 2
      ? conversationHistory.slice(conversationHistory.length - MAX_TURNS * 2)
      : conversationHistory;

  const MAX_MSGS = 200;
  const trimmedChatlog =
    chatlogMessages.length > MAX_MSGS
      ? chatlogMessages.slice(chatlogMessages.length - MAX_MSGS)
      : chatlogMessages;

  try {
    localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(trimmedHistory));
    localStorage.setItem(LS_KEY_CHATLOG, JSON.stringify(trimmedChatlog));
  } catch (e) {
    // If storage is full, drop oldest half and try once more
    try {
      const halfHistory = trimmedHistory.slice(Math.floor(trimmedHistory.length / 2));
      const halfChatlog = trimmedChatlog.slice(Math.floor(trimmedChatlog.length / 2));
      localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(halfHistory));
      localStorage.setItem(LS_KEY_CHATLOG, JSON.stringify(halfChatlog));
    } catch (_) {
      // Give up silently (still functions without persistence)
    }
  }
}

function loadState() {
  try {
    const h = JSON.parse(localStorage.getItem(LS_KEY_HISTORY) || "[]");
    const c = JSON.parse(localStorage.getItem(LS_KEY_CHATLOG) || "[]");
    if (Array.isArray(h)) conversationHistory = h;
    if (Array.isArray(c)) chatlogMessages = c;
  } catch {
    conversationHistory = [];
    chatlogMessages = [];
  }
}

// ---- UI rendering ----
function addMessage(text, sender, isTyping = false) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${sender}`;
  if (isTyping) {
    msgDiv.classList.add("typing");
    msgDiv.textContent = "🤖 typing…";
  } else {
    msgDiv.textContent = text;
    // only store non-typing messages to chatlogMessages
    chatlogMessages.push({ sender, text });
    saveState();
  }
  chatlog.appendChild(msgDiv);
  chatlog.scrollTop = chatlog.scrollHeight;
  return msgDiv;
}

function renderChatlogFromState() {
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

  // Add user message to AI history
  conversationHistory.push({ role: "user", content: message });
  saveState();

  try {
    // Send full history to AI (Puter.js supports simple chat calls)
    const response = await puter.ai.chat(conversationHistory);

    // Record assistant reply in history
    conversationHistory.push({ role: "assistant", content: response });
    saveState();

    // Streaming word-by-word to replace typing indicator
    typingMsg.textContent = "";
    typingMsg.classList.remove("typing");

    const words = response.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      // Append word
      typingMsg.textContent += (i > 0 ? " " : "") + words[i];
      chatlog.scrollTop = chatlog.scrollHeight;
      i++;
      if (i >= words.length) {
        clearInterval(interval);
        // persist the final assistant message into chatlogMessages
        chatlogMessages.push({ sender: "bot", text: typingMsg.textContent });
        saveState();
      }
    }, 60);
  } catch (e) {
    typingMsg.textContent = "⚠️ Error: AI service not available.";
    typingMsg.classList.remove("typing");
    chatlogMessages.push({ sender: "bot", text: typingMsg.textContent });
    saveState();
  }
}

// ---- Form submit ----
userInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = userText.value.trim();
  if (!text) return;
  addMessage(text, "user");
  conversationHistory.push({ role: "user", content: text }); // mirror user text in history immediately
  saveState();
  userText.value = "";
  setTimeout(() => botReply(text), 300);
});

// ---- Initialize from localStorage ----
loadState();
renderChatlogFromState();

// If there is previous history but the last entry is user (no bot reply), optionally nudge:
// (disabled by default; uncomment to auto-continue pending bot reply)
// const last = conversationHistory[conversationHistory.length - 1];
// if (last && last.role === "user") botReply(last.content);

// Optional: expose a clear function (use from console or wire to a button)
// window.clearChat = function () {
//   conversationHistory = [];
//   chatlogMessages = [];
//   saveState();
//   renderChatlogFromState();
// };

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI + HAHA Chat</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #1e1e1e;
      color: white;
      margin: 0;
      display: flex;
      height: 100vh;
    }
    body.light-theme {
      background: #f2f2f2;
      color: black;
    }
    .sidebar {
      width: 200px;
      background: #333;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .sidebar button {
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 8px;
    }
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    #assistantPanel, #iframePanel {
      display: none;
      flex: 1;
      padding: 10px;
      overflow-y: auto;
    }
    #assistantPanel.visible, #iframePanel.visible {
      display: block;
    }
    #chatlog {
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      border: 1px solid #444;
      margin-bottom: 10px;
    }
    .msg {
      padding: 5px 8px;
      margin-bottom: 6px;
      border-radius: 6px;
    }
    .msg.user {
      background: #4caf50;
      color: white;
      text-align: right;
    }
    .msg.bot {
      background: #555;
      color: white;
      text-align: left;
    }
    .msg.typing {
      font-style: italic;
      opacity: 0.8;
    }
    #userInput {
      display: flex;
      gap: 5px;
    }
    #userText {
      flex: 1;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #aaa;
    }
    #clearChatBtn {
      margin-top: 5px;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
</head>
<body>
  <!-- Sidebar -->
  <div class="sidebar">
    <button id="toggleAssistant">Toggle Assistant</button>
    <button id="toggleIframe">Toggle Iframe</button>
    <button id="themeToggle">🌙</button>
    <button id="clearChatBtn">Clear Chat</button>
  </div>

  <!-- Main -->
  <div

    // === Mega AI Assistant JS ===

    const chatlog = document.getElementById("chatlog");
    const userInput = document.getElementById("userInput");
    const userText = document.getElementById("userText");

    const slangDict = {
      u: "you", r: "are", ur: "your", pls: "please", thx: "thanks",
      idk: "I don't know", imo: "in my opinion", btw: "by the way",
      lol: "laughing out loud", brb: "be right back", wtf: "what the heck",
      omg: "oh my god", lmk: "let me know", smh: "shaking my head"
    };
    function normalizeInput(input) {
      return input.toLowerCase().split(/\s+/).map(word => slangDict[word] || word).join(" ");
    }

    function factorial(n) {
      if (n < 0) return "Factorial undefined for negative numbers.";
      if (n === 0) return 1;
      let f = 1;
      for (let i = 1; i <= n; i++) f *= i;
      return f;
    }
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6)
        if (num % i === 0 || num % (i + 2) === 0) return false;
      return true;
    }
    function fibonacci(n) {
      if (n < 0) return "No negative index in Fibonacci.";
      let a = 0, b = 1;
      for (let i = 0; i < n; i++) [a, b] = [b, a + b];
      return a;
    }

    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "There are 10 types of people: those who understand binary and those who don't.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why was the math book sad? Because it had too many problems."
    ];
    function getRandomJoke() {
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    const socialResponses = {
      sad: "I'm sorry to hear that. Talking to someone you trust might help.",
      happy: "That's great! What made you feel happy?",
      tired: "You might need some rest or a quick break.",
      love: "Love is a powerful and meaningful emotion.",
      lie: "Lying can damage trust. Honesty is usually the best policy.",
      kind: "Kindness makes the world better for everyone.",
    };

    const historyFacts = {
      civilWar: "The American Civil War (1861–1865) was fought over states' rights and slavery.",
      ww1: "World War I (1914–1918) involved trench warfare and started with the assassination of Archduke Franz Ferdinand.",
      ww2: "World War II (1939–1945) was the deadliest conflict in history, involving the Axis and Allied powers.",
      coldWar: "The Cold War (1947–1991) was a geopolitical standoff between the US and the Soviet Union."
    };

    const scienceFacts = {
      rocket: "Rocket science is based on Newton’s Third Law: For every action, there is an equal and opposite reaction.",
      physics: "Physics is the study of matter, energy, and their interactions."
    };

    const catholicFaith = {
      prayer: "The Lord's Prayer is central: 'Our Father, who art in heaven...'",
      sacraments: "The seven sacraments: Baptism, Eucharist, Confirmation, Reconciliation, Anointing of the Sick, Marriage, and Holy Orders.",
      pope: "The Pope is the Bishop of Rome and the leader of the worldwide Catholic Church."
    };

    const spanishDict = {
      hello: "hola", goodbye: "adiós", please: "por favor", thank: "gracias",
      yes: "sí", no: "no", friend: "amigo", love: "amor"
    };
    function translateToSpanish(phrase) {
      return phrase.toLowerCase().split(/\s+/).map(word => spanishDict[word] || `[${word}]`).join(" ");
    }

    function generateReply(input) {
      const normalized = normalizeInput(input);

      if (/hello|hi|hey/.test(normalized)) return "Hello! How can I assist you today?";
      if (normalized.includes("help")) {
        return `I can help with:
- Math (factorial, prime, Fibonacci, basic math)
- History, science, Catholic faith
- Spanish translation
- Social reasoning
- Jokes, code, and more!`;
      }

      // Math: arithmetic
      try {
        if (/[\d\s\+\-\*\/\^\(\)\.]+/.test(normalized)) {
          const result = math.evaluate(normalized);
          if (!isNaN(result)) return `Math result: **${result}**`;
        }
      } catch (e) {}

      if (normalized.includes("joke")) return getRandomJoke();

      let factMatch = normalized.match(/factorial of (\d+)/);
      if (factMatch) return `Factorial of ${factMatch[1]} is ${factorial(+factMatch[1])}.`;

      let primeMatch = normalized.match(/is (\d+) prime/);
      if (primeMatch) return isPrime(+primeMatch[1]) ? `${primeMatch[1]} is a prime number.` : `${primeMatch[1]} is not prime.`;

      let fibMatch = normalized.match(/fibonacci (?:number )?(\d+)/);
      if (fibMatch) return `Fibonacci number #${fibMatch[1]} is ${fibonacci(+fibMatch[1])}.`;

      if (/translate (.+) to spanish/.test(normalized)) {
        const phrase = normalized.match(/translate (.+) to spanish/)[1];
        return `In Spanish: **${translateToSpanish(phrase)}**`;
      }

      if (/civil war/.test(normalized)) return historyFacts.civilWar;
      if (/world war i|ww1/.test(normalized)) return historyFacts.ww1;
      if (/world war ii|ww2/.test(normalized)) return historyFacts.ww2;
      if (/cold war/.test(normalized)) return historyFacts.coldWar;

      if (/rocket science/.test(normalized)) return scienceFacts.rocket;
      if (/physics/.test(normalized)) return scienceFacts.physics;

      if (/catholic prayer/.test(normalized)) return catholicFaith.prayer;
      if (/sacrament/.test(normalized)) return catholicFaith.sacraments;
      if (/pope/.test(normalized)) return catholicFaith.pope;

      for (let key in socialResponses) {
        if (normalized.includes(key)) return socialResponses[key];
      }

      if (normalized.includes("homework")) return "Try breaking your homework into small steps. I can help with math, science, or writing advice.";

      return "Sorry, I didn't get that. Try typing 'help' for ideas!";
    }

    function addMessage(text, sender = "bot") {
      const div = document.createElement("div");
      div.classList.add("msg", sender);
      div.innerHTML = DOMPurify.sanitize(sender === "bot" ? marked.parse(text) : text);
      chatlog.appendChild(div);
      chatlog.scrollTop = chatlog.scrollHeight;
    }

    userInput.addEventListener("submit", e => {
      e.preventDefault();
      const query = userText.value.trim();
      if (!query) return;
      addMessage(query, "user");
      userText.value = "";
      userText.disabled = true;
      addMessage("...", "bot");

      setTimeout(() => {
        const lastBotMsg = chatlog.querySelector(".msg.bot:last-child");
        if (lastBotMsg && lastBotMsg.textContent === "...") chatlog.removeChild(lastBotMsg);

        const reply = generateReply(query);
        addMessage(reply, "bot");
        userText.disabled = false;
        userText.focus();
      }, 700);
    });

    addMessage("👋 Hi! I'm your Mega AI Assistant. Type 'help' to get started.");
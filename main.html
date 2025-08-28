// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggle.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

const log = document.getElementById("chatlog");
const input = document.getElementById("userText");
const sendBtn = document.getElementById("sendBtn");

function addMsg(type, textOrNode) {
  const el = document.createElement("div");
  el.className = `msg ${type}`;
  if (typeof textOrNode === "string") {
    el.textContent = textOrNode;
  } else {
    el.appendChild(textOrNode);
  }
  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}

function getTime() {
  return new Date().toLocaleTimeString();
}

function getDate() {
  return new Date().toLocaleDateString();
}

// -----------------------
// CODE EXPLANATIONS
// -----------------------
function explainCodeLang(code, lang) {
  const keywords = {
    python: {
      def: "Defines a function.",
      import: "Imports a module.",
      class: "Defines a class.",
      return: "Returns a value from a function.",
      for: "Starts a for loop.",
      if: "Conditional statement.",
      elif: "Else if conditional.",
      else: "Else conditional block."
    },
    javascript: {
      function: "Defines a function.",
      const: "Declares a constant variable.",
      let: "Declares a block-scoped variable.",
      var: "Declares a variable.",
      return: "Returns a value from a function.",
      if: "Conditional statement.",
      else: "Else conditional block.",
      for: "Starts a for loop.",
      class: "Defines a class."
    },
    swift: {
      func: "Defines a function.",
      let: "Declares a constant.",
      var: "Declares a variable.",
      return: "Returns a value.",
      if: "Conditional statement.",
      else: "Else block.",
      class: "Defines a class.",
      enum: "Defines an enumeration.",
      protocol: "Defines a protocol."
    }
  };
  const explanations = keywords[lang.toLowerCase()];
  if (!explanations) return `Sorry, I don't have explanations for ${lang}.`;

  // Find first keyword in code
  const words = code.match(/\b\w+\b/g);
  if (!words) return "No keywords detected.";
  for (const word of words) {
    if (explanations[word]) {
      return `Keyword "${word}": ${explanations[word]}`;
    }
  }
  return "No recognized keywords found in code.";
}

// -----------------------
// TRANSLATIONS (simple word-based)
// -----------------------
const dictionaries = {
  french: {
    hello: "bonjour",
    world: "monde",
    how: "comment",
    are: "êtes",
    you: "vous",
    thank: "merci",
    yes: "oui",
    no: "non",
    please: "s'il vous plaît",
    goodbye: "au revoir"
  },
  german: {
    hello: "hallo",
    world: "welt",
    how: "wie",
    are: "bist",
    you: "du",
    thank: "danke",
    yes: "ja",
    no: "nein",
    please: "bitte",
    goodbye: "auf wiedersehen"
  },
  chinese: {
    hello: "你好",
    world: "世界",
    how: "怎么",
    are: "是",
    you: "你",
    thank: "谢谢",
    yes: "是",
    no: "不",
    please: "请",
    goodbye: "再见"
  },
  italian: {
    hello: "ciao",
    world: "mondo",
    how: "come",
    are: "sei",
    you: "tu",
    thank: "grazie",
    yes: "sì",
    no: "no",
    please: "per favore",
    goodbye: "arrivederci"
  }
};

function translatePhrase(phrase, lang) {
  lang = lang.toLowerCase();
  if (!dictionaries[lang]) return `Sorry, I don't support translation to ${lang}.`;

  const dict = dictionaries[lang];
  const words = phrase.toLowerCase().split(/\s+/);
  let result = words.map(w => dict[w] || w).join(' ');
  return `Translation (${lang}): ${result}`;
}

// -----------------------
// MATH CAPABILITIES
// -----------------------
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n < 0) return "No factorial for negative numbers";
  if (n === 0) return 1;
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function matrixInverse(mat) {
  try {
    const m = math.matrix(mat);
    const inv = math.inv(m);
    return inv.toString();
  } catch {
    return "Invalid matrix or non-invertible.";
  }
}

function calculateMathQuery(query) {
  query = query.toLowerCase();

  // factorial n
  let fMatch = query.match(/factorial\s+(\d+)/);
  if (fMatch) {
    const n = parseInt(fMatch[1]);
    return `Factorial of ${n} is ${factorial(n)}`;
  }

  // prime check
  let pMatch = query.match(/is\s+(\d+)\s+prime/);
  if (pMatch) {
    const n = parseInt(pMatch[1]);
    return isPrime(n) ? `${n} is prime.` : `${n} is not prime.`;
  }

  // fibonacci n
  let fibMatch = query.match(/fibonacci\s+(\d+)/);
  if (fibMatch) {
    const n = parseInt(fibMatch[1]);
    return `Fibonacci number at position ${n} is ${fibonacci(n)}`;
  }

  // mean of numbers
  let meanMatch = query.match(/mean\s+of\s+([\d\s,]+)/);
  if (meanMatch) {
    const nums = meanMatch[1].split(/[,\s]+/).map(Number);
    const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
    return `Mean is ${mean}`;
  }

  // median of numbers
  let medianMatch = query.match(/median\s+of\s+([\d\s,]+)/);
  if (medianMatch) {
    const nums = medianMatch[1].split(/[,\s]+/).map(Number).sort((a,b)=>a-b);
    const mid = Math.floor(nums.length / 2);
    const median = nums.length % 2 !== 0 ? nums[mid] : (nums[mid-1] + nums[mid])/2;
    return `Median is ${median}`;
  }

  // mode of numbers
  let modeMatch = query.match(/mode\s+of\s+([\d\s,]+)/);
  if (modeMatch) {
    const nums = modeMatch[1].split(/[,\s]+/).map(Number);
    const freq = {};
    nums.forEach(n => freq[n] = (freq[n]||0) + 1);
    let maxFreq = 0, modes = [];
    for (const n in freq) {
      if (freq[n] > maxFreq) {
        maxFreq = freq[n];
        modes = [n];
      } else if (freq[n] === maxFreq) {
        modes.push(n);
      }
    }
    return `Mode(s): ${modes.join(", ")}`;
  }

  // matrix inverse [[a,b],[c,d]]
  let matMatch = query.match(/matrix inverse\s*\[\[([^\]]+)\]\]/);
  if (matMatch) {
    try {
      const matStr = "[[" + matMatch[1] + "]]";
      const mat = JSON.parse(matStr);
      return "Matrix inverse:\n" + matrixInverse(mat);
    } catch {
      return "Invalid matrix format.";
    }
  }

  // Default to mathjs eval
  try {
    const res = math.evaluate(query);
    return `Result: ${res}`;
  } catch {
    return "Sorry, I couldn't parse that math expression.";
  }
}

// -----------------------
// JOKES & FUN RESPONSES
// -----------------------
const jokes = {
  tech: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "Debugging: Being the detective in a crime movie where you are also the murderer."
  ],
  puns: [
    "I would tell you a UDP joke, but you might not get it.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "CSS walks into a bar, sees HTML and says, 'You look good today!'"
  ],
  dad: [
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
  ],
  encouragement: [
    "Keep pushing forward, you're doing great!",
    "Mistakes are proof that you are trying.",
    "Every expert was once a beginner."
  ],
  facts: [
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
    "Octopuses have three hearts."
  ]
};

function getRandomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// -----------------------
// CODE ANALYSIS
// -----------------------

// Simple Python linting (detect missing colons in control structures)
function lintPython(code) {
  const lines = code.split('\n');
  const errors = [];
  const keywords = ['if', 'for', 'while', 'def', 'class', 'elif', 'else', 'try', 'except', 'with'];

  lines.forEach((line, idx) => {
    for (const kw of keywords) {
      if (line.trim().startsWith(kw) && !line.trim().endsWith(':')) {
        errors.push(`Line ${idx + 1}: Missing colon after '${kw}'`);
      }
    }
  });
  if (errors.length === 0) return "No linting errors found.";
  return errors.join('\n');
}

// Run JavaScript code safely (basic sandbox using Function)
function runJSCode(code) {
  try {
    let result = Function('"use strict";return (' + code + ')')();
    return `JavaScript Result: ${result}`;
  } catch (e) {
    return `JavaScript Error: ${e.message}`;
  }
}

// -----------------------
// MAIN BOT REPLY FUNCTION
// -----------------------
function botReply(msg) {
  const lower = msg.toLowerCase();

  if (lower.includes("help")) {
    return `You can ask me to:
- Explain code (e.g. "Explain this python code: def foo():")
- Do math (e.g. "factorial 5", "is 17 prime?", "mean of 1,2,3,4")
- Translate (e.g. "translate hello world to french")
- Tell a joke (e.g. "tell me a tech joke")
- Analyze code (e.g. "lint this python code", "run this js code")`;
  }

  // Code explanation
  let explainMatch = msg.match(/explain (?:this )?(\w+) code:([\s\S]+)/i);
  if (explainMatch) {
    const lang = explainMatch[1];
    const code = explainMatch[2].trim();
    return explainCodeLang(code, lang);
  }

  // Translation
  let transMatch = msg.match(/translate ([\w\s]+) to (\w+)/i);
  if (transMatch) {
    const phrase = transMatch[1].trim();
    const lang = transMatch[2].trim();
    return translatePhrase(phrase, lang);
  }

  // Jokes
  if (lower.includes("joke")) {
    if (lower.includes("tech")) return getRandomFrom(jokes.tech);
    if (lower.includes("pun")) return getRandomFrom(jokes.puns);
    if (lower.includes("dad")) return getRandomFrom(jokes.dad);
    if (lower.includes("encouragement")) return getRandomFrom(jokes.encouragement);
    if (lower.includes("fact")) return getRandomFrom(jokes.facts);
    return getRandomFrom([...jokes.tech, ...jokes.puns, ...jokes.dad, ...jokes.encouragement, ...jokes.facts]);
  }

  // Lint Python code
  let lintMatch = msg.match(/lint this python code:([\s\S]+)/i);
  if (lintMatch) {
    const code = lintMatch[1].trim();
    return lintPython(code);
  }

  // Run JS code
  let runJsMatch = msg.match(/run this js code:([\s\S]+)/i);
  if (runJsMatch) {
    const code = runJsMatch[1].trim();
    return runJSCode(code);
  }

  // Math queries
  if (lower.match(/factorial|prime|fibonacci|mean|median|mode|matrix inverse|[\d+\-\/*\^()]/)) {
    return calculateMathQuery(msg);
  }

  // Greetings
  if (lower.includes("hi") || lower.includes("hello")) {
    return "Hello there! 👋 How can I help you today?";
  }

  if (lower.includes("date")) {
    return `Today's date is ${getDate()}`;
  }

  if (lower.includes("time")) {
    return `Current time is ${getTime()}`;
  }

  return "Sorry, I didn't understand that. Try asking for help.";
}

// -----------------------
// USER INTERACTION
// -----------------------
sendBtn.onclick = () => {
  const val = input.value.trim();
  if (!val) return;
  addMsg("user", val);
  input.value = "";
  setTimeout(() => {
    addMsg("bot", botReply(val));
  }, 500);
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Initial greeting
addMsg("bot", "Hi! I can explain code, do math, translate, tell jokes, and analyze code. Type 'help' for ideas.");

// === Knowledge Base with detailed topics ===
const knowledgeBase = [
  // History
  {
    category: "History",
    keywords: ["civil war", "american civil war", "usa civil war", "north", "south", "1860s"],
    title: "American Civil War",
    snippet: `The American Civil War (1861–1865) was a pivotal conflict between the Northern states (Union) and the Southern states (Confederacy) primarily over slavery, states' rights, and economic differences.
- Key battles: Gettysburg, Antietam, Fort Sumter.
- Resulted in abolition of slavery (13th Amendment) and major social transformation.
- Notable figures: Abraham Lincoln, Robert E. Lee, Ulysses S. Grant.
[Learn more](https://en.wikipedia.org/wiki/American_Civil_War)`,
    url: "https://en.wikipedia.org/wiki/American_Civil_War"
  },
  {
    category: "History",
    keywords: ["world war 1", "ww1", "first world war", "trench warfare", "assassination of Archduke Ferdinand"],
    title: "World War I",
    snippet: `World War I (1914–1918) involved global powers divided mainly between the Allies and Central Powers.
- Triggered by the assassination of Archduke Franz Ferdinand of Austria.
- Known for trench warfare, chemical weapons, and massive casualties.
- Led to geopolitical changes, the fall of empires (Ottoman, Austro-Hungarian).
- Set the stage for WWII due to Treaty of Versailles' harsh terms.
[Learn more](https://en.wikipedia.org/wiki/World_War_I)`,
    url: "https://en.wikipedia.org/wiki/World_War_I"
  },
  {
    category: "History",
    keywords: ["world war 2", "ww2", "second world war", "nazi germany", "allies", "axis powers"],
    title: "World War II",
    snippet: `World War II (1939–1945) was the deadliest conflict in history, involving the Axis Powers led by Nazi Germany, Italy, and Japan versus the Allies led by the US, USSR, UK, and others.
- Notable events: Holocaust, D-Day, Hiroshima & Nagasaki atomic bombings.
- Massive technological advancements in warfare (tanks, aircraft, radar).
- Redrew global political landscape; led to Cold War.
[Learn more](https://en.wikipedia.org/wiki/World_War_II)`,
    url: "https://en.wikipedia.org/wiki/World_War_II"
  },

  // Science
  {
    category: "Science",
    keywords: ["rocket science", "rocket propulsion", "spaceflight", "orbital mechanics", "aerospace"],
    title: "Rocket Science & Aerospace",
    snippet: `Rocket science involves the design, testing, and use of rockets for space travel.
- Key principles: Newton’s Third Law, propulsion, thrust-to-weight ratio.
- Important fields: propulsion systems (liquid, solid fuels), guidance systems, aerodynamics.
- Notable programs: Apollo missions, SpaceX reusable rockets.
[Learn more](https://en.wikipedia.org/wiki/Rocket_science)`,
    url: "https://en.wikipedia.org/wiki/Rocket_science"
  },
  {
    category: "Science",
    keywords: ["electronics", "electric circuits", "resistors", "capacitors", "semiconductors", "digital logic"],
    title: "Electronics Fundamentals",
    snippet: `Electronics studies the control of electric current via components.
- Passive components: resistors, capacitors, inductors.
- Active components: transistors, diodes, integrated circuits.
- Applications: microprocessors, communication devices, sensors.
- Digital electronics includes logic gates and microcontrollers.
[Learn more](https://en.wikipedia.org/wiki/Electronics)`,
    url: "https://en.wikipedia.org/wiki/Electronics"
  },

  // Religion
  {
    category: "Religion",
    keywords: ["catholic faith", "catholicism", "pope", "sacraments", "vatican"],
    title: "Catholic Faith Overview",
    snippet: `Catholicism is the largest Christian denomination with over 1.3 billion adherents.
- Central beliefs: Trinity, Jesus Christ, sacraments (Baptism, Eucharist, Confirmation).
- Leadership: The Pope, headquartered in Vatican City.
- Rich traditions in liturgy, theology, and social teachings.
[Learn more](https://en.wikipedia.org/wiki/Catholic_Church)`,
    url: "https://en.wikipedia.org/wiki/Catholic_Church"
  },

  // Languages
  {
    category: "Languages",
    keywords: ["spanish", "spanish language", "español", "romance languages", "grammar", "vocabulary"],
    title: "Spanish Language Insights",
    snippet: `Spanish is a Romance language originating from the Iberian Peninsula.
- Spoken by 460+ million native speakers worldwide.
- Features gendered nouns, verb conjugations, and rich vocabulary.
- Variations include Latin American Spanish and Castilian.
[Learn more](https://en.wikipedia.org/wiki/Spanish_language)`,
    url: "https://en.wikipedia.org/wiki/Spanish_language"
  },

  // Music
  {
    category: "Music",
    keywords: ["music theory", "scales", "chords", "harmony", "melody"],
    title: "Music Theory Essentials",
    snippet: `Music theory explores the language and notation of music.
- Includes understanding scales, chord progressions, rhythm patterns.
- Foundation for composing and performing music.
- Important for all genres from classical to pop.
[Learn more](https://en.wikipedia.org/wiki/Music_theory)`,
    url: "https://en.wikipedia.org/wiki/Music_theory"
  },
  {
    category: "Music",
    keywords: ["lyrical composition", "songwriting", "lyrics", "poetry", "rhyme"],
    title: "Lyrical Composition",
    snippet: `Lyrical composition is crafting the words of a song.
- Techniques include rhyme schemes, meter, storytelling.
- Often reflects emotions, social commentary, or narratives.
- Collaborates closely with musical melody and rhythm.
[Learn more](https://en.wikipedia.org/wiki/Songwriting)`,
    url: "https://en.wikipedia.org/wiki/Songwriting"
  },

  // Cooking
  {
    category: "Cooking",
    keywords: ["recipe", "cooking", "ingredients", "pancakes", "baking", "breakfast"],
    title: "Classic Pancake Recipe",
    snippet: `To make fluffy pancakes:
- Mix 1 cup flour, 1 tbsp sugar, 1 tsp baking powder, 1 cup milk, 1 egg.
- Stir until smooth; cook on hot griddle 2-3 mins per side.
- Serve with syrup, butter, or fruit.
[Learn more](https://en.wikipedia.org/wiki/Pancake)`,
    url: "https://en.wikipedia.org/wiki/Pancake"
  },

  // Video Games
  {
    category: "Video Games",
    keywords: ["video games", "game developers", "modding", "steam", "epic games", "game platforms", "gaming industry"],
    title: "Video Games Industry Overview",
    snippet: `Video games have grown into a global entertainment industry worth billions.
- Major developers: Nintendo, Rockstar Games, Valve Corporation, Epic Games.
- Platforms: PC (Steam, Epic Games Store), consoles (PlayStation, Xbox, Nintendo Switch).
- Modding communities enable players to customize games with new content and mechanics.
- Steam offers features like multiplayer, cloud saves, and game workshops.
- Epic Games Store is known for exclusive titles and free game giveaways.
- Esports and streaming have massively influenced gaming culture.
[Learn more](https://en.wikipedia.org/wiki/Video_game_industry)`,
    url: "https://en.wikipedia.org/wiki/Video_game_industry"
  },
  {
    category: "Video Games",
    keywords: ["steam", "valve", "steam workshop", "game mods"],
    title: "Steam Platform & Mods",
    snippet: `Steam is a digital distribution platform by Valve Corporation.
- Features include a massive library, community forums, multiplayer matchmaking.
- Steam Workshop allows players and developers to share mods, maps, and skins.
- Supports achievements, trading cards, and cloud saves.
- Popular for games like Half-Life, Portal, Dota 2.
[Learn more](https://en.wikipedia.org/wiki/Steam_(service))`,
    url: "https://en.wikipedia.org/wiki/Steam_(service)"
  },
  {
    category: "Video Games",
    keywords: ["epic games", "epic games store", "unreal engine", "free games", "exclusive titles"],
    title: "Epic Games & Unreal Engine",
    snippet: `Epic Games is a major developer and publisher known for Fortnite and Unreal Engine.
- Epic Games Store competes with Steam, offering exclusive titles and weekly free games.
- Unreal Engine powers high-end AAA and indie games with advanced graphics and physics.
- Supports cross-platform play and development tools.
[Learn more](https://en.wikipedia.org/wiki/Epic_Games)`,
    url: "https://en.wikipedia.org/wiki/Epic_Games"
  },

  // Jokes
  {
    category: "Jokes",
    keywords: ["joke", "funny", "prank", "laugh"],
    title: "Why don’t scientists trust atoms?",
    snippet: "Because they make up everything!",
    url: ""
  },

  // Ham Radio and FCC basics
  {
    category: "Ham Radio",
    keywords: ["ham radio", "amateur radio", "fcc", "licenses", "transmitters", "frequencies"],
    title: "Ham Radio and FCC Licensing",
    snippet: `Ham radio (amateur radio) is a hobby involving non-commercial radio communication.
- Requires FCC licensing in the US (Technician, General, Extra classes).
- Uses frequencies allocated for amateurs worldwide.
- Operators communicate locally and globally via radio waves, satellites, and repeaters.
- Great for emergency communication, electronics experimentation, and community building.
[Learn more](https://en.wikipedia.org/wiki/Amateur_radio)`,
    url: "https://en.wikipedia.org/wiki/Amateur_radio"
  },

  // AI Detection (basic overview)
  {
    category: "AI",
    keywords: ["ai detection", "artificial intelligence", "machine learning", "deepfake", "text generation"],
    title: "AI Content Detection Basics",
    snippet: `Detecting AI-generated content involves analyzing linguistic patterns, syntax, and semantic consistency.
- Tools use statistical models to differentiate human writing from AI.
- Challenges include evolving AI models and human-AI collaboration.
- Important for education, media verification, and cybersecurity.
[Learn more](https://en.wikipedia.org/wiki/AI_text_detection)`,
    url: "https://en.wikipedia.org/wiki/AI_text_detection"
  }
];

// === Fuse.js setup ===
const fuseOptions = {
  keys: ['keywords', 'title', 'snippet', 'category'],
  threshold: 0.3,
  includeScore: true,
  ignoreLocation: true,
};

const fuse = new Fuse(knowledgeBase, fuseOptions);

// === Chat and Search handling ===
const chatlog = document.getElementById("chatlog");
const userInput = document.getElementById("userInput");
const userText = document.getElementById("userText");

function addMessage(text, sender = "bot") {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("msg", sender);
  msgDiv.innerHTML = text;
  chatlog.appendChild(msgDiv);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function searchKnowledgeBase(query) {
  const results = fuse.search(query);
  if (results.length === 0) {
    return "Sorry, I couldn't find anything on that topic.";
  }
  // Compose response from top 1-2 results
  let response = "";
  const maxResults = Math.min(2, results.length);
  for (let i = 0; i < maxResults; i++) {
    const item = results[i].item;
    response += `<strong>${item.title}</strong> (${item.category})<br>${item.snippet}<br>`;
    if(item.url) response += `<a href="${item.url}" target="_blank">Learn more</a><br><br>`;
  }
  return response;
}

userInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = userText.value.trim();
  if (!query) return;
  addMessage(query, "user");

  // Simple commands could go here, e.g. math evaluation, but for now:
  let answer = searchKnowledgeBase(query);

  addMessage(answer, "bot");
  userText.value = "";
});

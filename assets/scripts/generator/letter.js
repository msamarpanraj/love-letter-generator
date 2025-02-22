// Identify letter type from buttons
const platonic = document.getElementById("Platonic")
const romantic = document.getElementById("Romantic")
const polyamorous = document.getElementById("Polyamorous")
const monogamous = document.getElementById("Monogamous")

// Attach event listener to Submit and get letterType and buttonToHighLight
document.getElementById('loveLetterForm').addEventListener('submit', (event) => {
  event.preventDefault(),scroll(); // Prevent form submission and scroll
  // Collect Letter Type
  const letterType = document.getElementById('letter-type').value;
  const buttonToHighlight = document.getElementById(letterType);
  generateLoveLetter(letterType);
  highlightButton(buttonToHighlight);
  reset();
});

// Attach event listeners to each letter type button
platonic.addEventListener('click', () => {
  generateLoveLetter('Platonic');
  highlightButton(platonic);
  reset();
});

romantic.addEventListener('click', () => {
  generateLoveLetter('Romantic');
  highlightButton(romantic);
  reset();
});

polyamorous.addEventListener('click', () => {
  generateLoveLetter('Polyamorous');
  highlightButton(polyamorous);
  reset();
});

monogamous.addEventListener('click', () => {
  generateLoveLetter('Monogamous');
  highlightButton(monogamous);
  reset();
});

function generateLoveLetter(id) {
  // Collect user input
  const partnerName = capitalize(document.getElementById('partnerName').value.toLowerCase());
  const noun1 = document.getElementById('noun1').value.toLowerCase();
  const noun2 = document.getElementById('noun2').value.toLowerCase();
  const eyeColor = document.getElementById('eyeColor').value.toLowerCase();
  const adjective1 = document.getElementById('adjective1').value.toLowerCase();
  const adjective2 = document.getElementById('adjective2').value.toLowerCase();
  const yourName = capitalize(document.getElementById('yourName').value.toLowerCase());

  // Prepare/Generate the letter according to type
  // Platonic letter
  const platonicLetter = `My dearest ${partnerName},

  Whenever I think of you, my heart swells with joy. Your eyes, as ${eyeColor} as the deep ocean, remind me of the serenity of a calm sea. They are like ${noun1}, full of life and beauty.

  You possess a ${adjective1} spirit that lights up any room and a ${adjective2} heart that shows your true kindness. It's the way that you care about the little things, like ${noun2}, that makes me love you even more.

  Every moment with you is a treasure, and I look forward to making countless more memories together.

  All my love,
  ${yourName}`;

  // Romantic letter
  const romanticLetter = `My beloved ${partnerName},

  As I sit down to write this ${adjective1} letter, my heart overflows with love and admiration for you. From the moment our eyes met, I knew there was something special about you. Your ${eyeColor} eyes captivated me, drawing me in with their warmth and depth.

  Every day spent with you feels like a dream come true. Your ${noun1} fills my life with joy, laughter, and boundless happiness. I cherish the moments we share together, whether we're exploring new adventures or simply basking in each other's company.

  Your kindness, compassion, and unwavering support mean more to me than words can express. You are my ${noun2}, my confidant, and my ${adjective2} love. With you by my side, I feel invincible, ready to take on the world and conquer any obstacle that comes our way.

  I am grateful for the love we share, and I promise to cherish and honor it for eternity. You are the light of my life, the beat of my heart, and the one I want to spend forever with.

  Forever and always,
  ${yourName}`

  // Polyamorous letter
  const polyamorousLetter = `My lovely ${partnerName},

  With each passing day, my heart overflows with gratitude for the love and connection we share. The bond we've formed, woven together by trust, ${noun1}, and affection, is a testament to the beauty of polyamory and the depth of our collective love.

  Each of you brings a unique light into my life, illuminating our journey with warmth and tenderness. Together, we navigate love's complexities with grace and compassion, embracing our polyamorous relationship with open hearts and minds.

  Your love is a beacon of light in my ${adjective1} moments and a source of strength through life's challenges. Every shared moment, whether intimate, conversational, or simply spent in each other's company, is a cherished gift. Your eyes, as ${eyeColor} as the sky remind me of the serenity of a calm sea.

  As we continue to explore our ${noun2}, I'm filled with excitement for the adventures ahead. Together, we create a space where every voice is heard, every heart is valued, and every love is celebrated without reservation.

  My heart belongs to each of you, bound by our shared experiences and the depth of our affection. With you by my side, I am whole, complete, and endlessly grateful for the privilege of sharing this journey with such ${adjective2} souls.

  With all my love and devotion,
  ${yourName}`

  // Monogamous letter
  const monogamousLetter = `My amazing ${partnerName},

  As I embark on this ${adjective1} letter, my heart swells with an abundance of ${noun1} for you. From the moment we met, I knew that you were the one I had been waiting for, my one true love.

  Every day spent by your side fills my life with joy, happiness, and a sense of completeness that I have never known before. Your presence brings warmth to my soul, and your love brightens even the darkest of days.

  In your ${eyeColor} eyes, I see a reflection of our shared dreams, hopes, and aspirations. You are my confidant, my rock, and my greatest ${noun2}. With you, I feel safe, cherished, and truly loved.

  Your love is a gift that I treasure above all else. It is the foundation upon which we build our ${adjective2} life together, a bond that grows stronger with each passing moment. I am grateful for every laugh we share, every tear we shed, and every memory we create together.

  As we journey through life hand in hand, I am filled with excitement for the future that awaits us. With you by my side, I know that anything is possible. You are my everything, my heart, and my soul.

  Forever yours only,
  ${yourName}`

  // Display the letter
  const letterOutput = document.getElementById('letterOutput');

  // Switch statement based on letter type
  switch(id) {
    case 'Platonic':
        letterOutput.innerText = platonicLetter;
        break;
    case 'Romantic':
        letterOutput.innerText = romanticLetter;
        break;
    case 'Polyamorous':
        letterOutput.innerText = polyamorousLetter;
        break;
    case 'Monogamous':
        letterOutput.innerText = monogamousLetter;
        break;
  }
};

function highlightButton(selectedLetterType) {
  // Reset the bg + color of all buttons
  const buttons = document.querySelectorAll('.letter-type-button');
  buttons.forEach(button => {
    button.style.backgroundColor = '';
    button.style.color = "#250408";

  // Apply a CSS style to change button's color
  if (selectedLetterType) {
    selectedLetterType.style.backgroundColor = '#250408';
    selectedLetterType.style.color = '#EEFAFB';
  }
  });
}

// Function to randomize words
const randomizeWord = (inputId, wordType) => {
  // Valentine-themed nouns
  const nouns = [
    "heart", "rose", "cupid", "chocolate", "love", "kiss", "valentine", "passion",
    "arrow", "candle", "hug", "date", "promise", "flame", "jewel", "gift", "song",
    "poem", "dream", "whisper"
  ];
  // Valentine-themed adjectives
  const adjectives = [
    "loving", "romantic", "passionate", "sweet", "adorable", "charming", "affectionate", "tender",
    "warm", "gentle", "joyful", "radiant", "magical", "enchanting", "alluring", "breathtaking",
    "devoted", "elegant", "graceful", "precious"
  ];
  let randomWord;

  if (wordType === 'noun') {
    randomWord = nouns[Math.floor(Math.random() * nouns.length)];
  } else if (wordType === 'adjective') {
    randomWord = adjectives[Math.floor(Math.random() * adjectives.length)];
  }

  document.getElementById(inputId).value = randomWord;
};

// Attach event listeners to buttons for randomizing using arrow functions
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('randomizeNoun1').addEventListener('click', () => randomizeWord('noun1', 'noun'));
  document.getElementById('randomizeNoun2').addEventListener('click', () => randomizeWord('noun2', 'noun'));
  document.getElementById('randomizeAdjective1').addEventListener('click', () => randomizeWord('adjective1', 'adjective'));
  document.getElementById('randomizeAdjective2').addEventListener('click', () => randomizeWord('adjective2', 'adjective'));
});

//reset function
function reset() {
  let fields = [partnerName, noun1, noun2, eyeColor, adjective1, adjective2, yourName];

  for (field in fields){
   fields[field].value = "";
  }
}

//scroll function
welcomeBtn = document.getElementById("welcome-btn");
welcomeBtn.addEventListener("click",scroll)

function scroll(){
    window.scrollBy(0,200)
}

//Capitalise function for your and partner name
function capitalize(str) {
  // Check if the input is a valid string
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  // Capitalize the first letter and concatenate the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
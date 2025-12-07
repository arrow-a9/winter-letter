const VALID_USERNAME = "whatIWantToHear?";
const VALID_PASSWORD = "iwannafuckyou"

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorEl = document.getElementById("error");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // Hide login, show main content
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // Clear any previous error
    errorEl.innerText = "";

    // Start typewriter + music
    startEverything();
  } else {
    errorEl.innerText = "Invalid username or password!";
  }
}

// Allow pressing Enter to submit login
window.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        login();
      }
    });
  }
});

// =============================
// 💌 Typewriter + Music
// =============================

// 💌 Put your real letter here (keep \n for new lines)
const fullText = `My Winterbloom Ritu 🖤,

I am writing this letter to remind you that you are the poem that gods placed inside my heart — the hymn that plays through every second of my life.
Tonight the air is cold, yet I am warm, only because the thought of you wraps around me like a soft, warm shawl.

This winter breeze has brought back the memory of our first meeting at the River Front.
I remember those innocent, bright, impossibly gorgeous eyes when I saw you for the very first time.
You were tinier than I had imagined, and oh God, I still cannot forget how unbelievably cute you looked that day.

Even now, when I think of that moment, I just want to grab you, kiss you like I’ve never kissed you before, and hold you in my arms so tightly that the world disappears.
I want your silky hair to fall all over me, the way it falls when I sit behind you on your scooty.
I want to slip our hand into my jacket pocket and hold your cold fingers while we ride through winter nights.
I want to be embraced in your arms, in your warmth, in your soft bosom, and never come out again.
Baby, I miss every second of those winters we lived together.

I miss your tiny hands wrapped around me, the soft chill of your lips on mine.
I miss the warmth of last February — the beginning of my real life, the life that will always revolve around you.

From your anger to your tenderness,
from the way you care about the smallest things,
to the way you push me to see the good in the world,
to the way you ask me about my day,
to the way you hide your frustration when I am not okay —
everything you do melts my heart.

I remember how you tease me, how you cry when we part after our small meetups, how much you hate this distance between us, how much you worry about that you haven’t cooked for me anything, how deeply you trust me, how you look for me first whenever you need anything.
And each time, I feel so warm knowing that I’m the first person who comes to your mind.

You asked me to write what I like and dislike about you.
But the truth is, my love — you are everything I need in this life.
You are the sweet breeze of my summers and the warm sunshine of my winters.

तुम गर्मियों की छाँव हो,
तुम सर्दियों की धूप हो।

There is nothing about you that I don’t like.
Even your anger — the thing I always complain about — I love that too.
Sometimes I tease you on purpose just to make you angry, because when you scold me, it feels like you’re claiming me as your own.
I love how you calm down holding me, how you melt into me. One more thing which i like the most, the way you ride me 😈.

Baby, I love you so, so much.
I want to do anything and everything that brings a smile to your face.
I miss you terribly — the feeling of not being with you hurts more than I can say.

In these winter evenings, when the world grows quiet and every sound softens, I find your warmth in the silence.
You are not just lovely; you are the soft calm after a long storm.
You are the warmth that teaches winter how to be gentle.

Forever yours,
Arun`;

let letterEl;
let cursorEl;
let letterBox;
let index = 0;
const TYPING_SPEED = 60; // ms per character (lower = faster)

function startEverything() {
  // Get elements after main-content is visible
  letterEl = document.getElementById("letter");
  cursorEl = document.querySelector(".cursor");
  letterBox = document.querySelector(".letter-box");

  if (!letterEl || !cursorEl || !letterBox) {
    console.error("One of the elements was not found:", {
      letterEl,
      cursorEl,
      letterBox,
    });
    return;
  }

  index = 0;
  letterEl.innerHTML = "";
  cursorEl.classList.remove("cursor-stop");

  // Start typing
  typeChar();

  // Handle background music
  const music = document.getElementById("bg-music");
  if (music) {
    music.muted = false;
    music.volume = 0.3; // 0.0 - 1.0
    music.play().catch(() => {
      // If browser blocks, ignore silently
    });
  }
}

function typeChar() {
  if (!letterEl || index >= fullText.length) {
    if (cursorEl) {
      cursorEl.classList.add("cursor-stop");
    }
    return;
  }

  const char = fullText[index];

  if (char === "\n") {
    letterEl.innerHTML += "<br>";
  } else {
    letterEl.innerHTML += char;
  }

  index++;

  // If your letter becomes long and you want auto-scroll, uncomment:
  autoScroll();

  setTimeout(typeChar, TYPING_SPEED);
}

// Optional: auto-scroll if the text goes beyond visible area
function autoScroll() {
  if (!letterBox || !letterEl) return;

  const cursorPos = letterEl.offsetHeight;
  const boxHeight = letterBox.clientHeight;
  const threshold = boxHeight * 0.7;

  if (cursorPos > threshold) {
    letterBox.scrollTop = cursorPos - threshold;
    // Or smooth:
    // letterBox.scrollTo({ top: cursorPos - threshold, behavior: "smooth" });
  }
}

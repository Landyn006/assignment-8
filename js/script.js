// script.js

console.log("script.js connected!");

// Store user answers
const userAnswers = {};

// Map answers to sports personality points
const scoringMap = {
  A: "Soccer Fanatic ⚽",
  B: "Basketball Enthusiast 🏀",
  C: "Tennis Aficionado 🎾",
  D: "Swimming Pro 🏊"
};

// Track button clicks and highlight selection
const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove selected class from all buttons in this block
      buttons.forEach(btn => btn.classList.remove("selected"));

      // Highlight the clicked button
      button.classList.add("selected");

      // Save the user's answer
      userAnswers[`question${index + 1}`] = button.dataset.answer;
    });
  });
});

// Calculate and display quiz result
function displayResult() {
  if (Object.keys(userAnswers).length < questionBlocks.length) {
    alert("Please answer all questions before seeing your result!");
    return;
  }

  // Count the answers
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(userAnswers).forEach(ans => {
    if (counts[ans] !== undefined) counts[ans]++;
  });

  // Find the most frequent answer
  let maxCount = 0;
  let finalAnswer = "No sport selected";
  for (const [key, value] of Object.entries(counts)) {
    if (value > maxCount) {
      maxCount = value;
      finalAnswer = scoringMap[key];
    }
  }

  // Update the DOM
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  resultText.textContent = `Your Sport Personality: ${finalAnswer}`;
  resultContainer.style.display = "block";
}

// Attach to result button
document.getElementById("show-result").addEventListener("click", displayResult);
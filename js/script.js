console.log("script.js connected!");

console.log("script.js connected!");

// Object to store user answers
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove selected class from all buttons in this block
      buttons.forEach(btn => btn.classList.remove("selected"));
      
      // Add selected class to the clicked button
      button.classList.add("selected");
      
      // Store the user's answer
      userAnswers[`question${index + 1}`] = button.dataset.answer;
      
      console.log(userAnswers); // For debugging
    });
  });
});
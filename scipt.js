// Function to check if the student passed or failed
function checkPassFail() {
    let score = document.getElementById("score").value; // Get the student's score from input field
    
    // Convert the score to a number
    score = Number(score);
    
    // Use a conditional statement to check if the score is valid
    if (isNaN(score)) {
      document.getElementById("result").textContent = "Please enter a valid score.";
    } else {
      // Assuming passing score is 50 or above
      if (score >= 50) {
        document.getElementById("result").textContent = "The student has passed.";
      } else {
        document.getElementById("result").textContent = "The student has failed.";
      }
    }
  }
  
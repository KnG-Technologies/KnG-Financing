// Dark Mode toggle
document.getElementById("darkModeBtn").onclick = function() {
  document.body.classList.toggle("dark-mode");
};

// Apply button interaction
document.getElementById("applyBtn").onclick = function() {
  alert("Thank you for choosing K & G Financing! Our team will contact you soon.");
};

// Learn More button interaction
document.getElementById("learnBtn").onclick = function() {
  window.location.href = "#about";
};

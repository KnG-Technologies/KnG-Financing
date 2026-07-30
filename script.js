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

// Loan Calculator
function calculate() {
  let amount = document.getElementById('amount').value;
  let rate = document.getElementById('rate').value / 100 / 12;
  let months = document.getElementById('months').value;
  if(amount && rate && months) {
    let payment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById('result').innerText =
      "Monthly Payment: N$" + payment.toFixed(2);
  } else {
    document.getElementById('result').innerText = "Please fill in all fields.";
  }
}

// Testimonials Carousel (auto-slide)
let carousel = document.querySelector('.carousel');
if (carousel) {
  let index = 0;
  let quotes = carousel.querySelectorAll('p');
  setInterval(() => {
    quotes.forEach((q, i) => q.style.display = i === index ? 'block' : 'none');
    index = (index + 1) % quotes.length;
  }, 4000);
}

// Stats Counter
const counters = document.querySelectorAll('.stat');
counters.forEach(counter => {
  let update = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText.split(" ")[0] || 0;
    let increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment) + " " +
        counter.innerText.split(" ").slice(1).join(" ");
      setTimeout(update, 20);
    }
  };
  update();
});

// FAQ Accordion
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}

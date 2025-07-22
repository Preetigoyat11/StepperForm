const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
      formSteps[currentStep].classList.remove("active");
      steps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");
      steps[currentStep].classList.add("active");
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      formSteps[currentStep].classList.remove("active");
      steps[currentStep].classList.remove("active");
      currentStep--;
      formSteps[currentStep].classList.add("active");
      steps[currentStep].classList.add("active");
    }
  });
});

document.getElementById("stepper-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted!");
});
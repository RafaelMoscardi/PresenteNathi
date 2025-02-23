// Configurações do slideshow
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  // Oculta todos os slides
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });

  // Mostra o slide atual
  slides[currentSlide].classList.add("active");

  // Move para o próximo slide
  currentSlide = (currentSlide + 1) % slides.length;
}

// Inicializa o carrossel
showSlide();
setInterval(showSlide, 2000); // Troca de slide a cada 3 segundos

// Contador de tempo
const startDate = new Date("2024-01-10T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) % 4;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("weeks").textContent = weeks;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);

// Revelação da cartinha
const revealBtn = document.getElementById("reveal-btn");
const letter = document.getElementById("letter");

revealBtn.addEventListener("click", () => {
  letter.style.display = "block";
});

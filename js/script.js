/* --- Carrossel de Projetos --- */
const grid = document.querySelector(".projects-grid");
const btnLeft = document.querySelector(".projects-carousel-button.left");
const btnRight = document.querySelector(".projects-carousel-button.right");

btnRight.addEventListener("click", () => {
  const card = document.querySelector(".projects-card");
  const cardWidth = card.offsetWidth;
  // Pega o gap real definido no CSS (15px no mobile)
  const gap = parseInt(window.getComputedStyle(grid).gap) || 0;
  
  grid.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  const card = document.querySelector(".projects-card");
  const cardWidth = card.offsetWidth;
  const gap = parseInt(window.getComputedStyle(grid).gap) || 0;
  
  grid.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
});

/* --- Formulário AJAX (Formspree) --- */
const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  status.innerHTML = "Enviando...";

  const response = await fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    status.innerHTML = "✨ Mensagem enviada com sucesso!";
    status.style.color = "#ff1493";
    form.reset();
  } else {
    status.innerHTML = "❌ Ops! Algo deu errado.";
    status.style.color = "red";
  }
});

/* --- Controle de Música --- */
const audio = document.getElementById("bg-audio");
const musicBtn = document.getElementById("play-music");

musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    audio.pause();
    musicBtn.innerHTML = '<i class="bi bi-music-note-beamed"></i>';
  }
});
const menuMobileBtn = document.querySelector(".menu-mobile-btn");
const menuNav = document.querySelector(".menu-de-navegacao");

menuMobileBtn.addEventListener("click", () => {
  menuNav.classList.toggle("active");
  // Troca o ícone para feedback visual
  const icon = menuMobileBtn.querySelector("i");
  if (menuNav.classList.contains("active")) {
    icon.classList.replace("bi-list", "bi-x");
  } else {
    icon.classList.replace("bi-x", "bi-list");
  }
});



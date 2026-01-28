/* =========================================================
   PORTFÓLIO - SCRIPT PRINCIPAL
   Autor: Ketlyn Araújo
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveMenuOnScroll();
  initProjectsCarousel();
  initProgressAnimation();
  initMusicPlayer();
});

/* =========================================================
   MENU MOBILE (HAMBÚRGUER)
   ========================================================= */
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-mobile-btn");
  const navMenu = document.querySelector(".menu-de-navegacao");
  const menuLinks = document.querySelectorAll(".menu-de-navegacao a");

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
}

/* =========================================================
   MENU ATIVO CONFORME SCROLL (SCROLL SPY)
   ========================================================= */
function initActiveMenuOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu-de-navegacao a");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

/* =========================================================
   CARROSSEL DE PROJETOS
   ========================================================= */
function initProjectsCarousel() {
  const container = document.querySelector(".projects-grid");
  const btnLeft = document.querySelector(".projects-carousel-button.left");
  const btnRight = document.querySelector(".projects-carousel-button.right");

  if (!container || !btnLeft || !btnRight) return;

  const scrollAmount = () => {
    const card = container.querySelector(".projects-card");
    return card ? card.offsetWidth + 30 : 300;
  };

  btnRight.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });

  btnLeft.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });
}

/* =========================================================
   ANIMAÇÃO DAS BARRAS DE SKILLS
   ========================================================= */
function initProgressAnimation() {
  const progresses = document.querySelectorAll("progress");

  if (!progresses.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const value = progress.getAttribute("value");

          progress.value = 0;
          setTimeout(() => {
            progress.value = value;
          }, 200);

          observer.unobserve(progress);
        }
      });
    },
    { threshold: 0.5 }
  );

  progresses.forEach(progress => observer.observe(progress));
}

/* =========================================================
   PLAYER DE MÚSICA (BOTÃO FLUTUANTE)
   ========================================================= */
function initMusicPlayer() {
  const playBtn = document.getElementById("play-music");
  if (!playBtn) return;

  const audio = new Audio("assets/songs/lofisong.mp3");
  audio.loop = true;

  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
      audio.play();
      playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
    isPlaying = !isPlaying;
  });
}

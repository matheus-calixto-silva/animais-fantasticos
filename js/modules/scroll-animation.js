export default function startScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.6) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
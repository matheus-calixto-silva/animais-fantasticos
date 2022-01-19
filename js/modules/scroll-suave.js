export default function scrollSuave() {
  const linksInternos = Array.from(document.querySelectorAll('[data-menu="suave"] a[href^="#"]'));
  linksInternos.pop();

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

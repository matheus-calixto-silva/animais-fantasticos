(function initTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('[data-tab=content] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo', tabContent[index].dataset.anime);
      });
      tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
    }

    tabMenu.forEach((item, index) => {
      console.log(tabContent[index].dataset.anime);
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
})();

(function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
})();

(function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
})();

(function startScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.6) {
          section.classList.add('ativo');
        }
      });
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
})();
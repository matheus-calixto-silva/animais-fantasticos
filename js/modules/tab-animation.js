export default function tabAnimation() {
  const tabMenu = document.querySelectorAll("[data-tab=menu]  li");
  const tabContent = document.querySelectorAll("[data-tab=content] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo", tabContent[index].dataset.anime);
      });
      tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

tabAnimation();
import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisJson = await (await fetch(url)).json();
      const numerosGrid = document.querySelector('.numeros-grid');

      function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3>`;
        div.innerHTML += `<span data-numero>${animal.total}</span>`;
        return div;
      }

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais('../../animaisapi.json');
}

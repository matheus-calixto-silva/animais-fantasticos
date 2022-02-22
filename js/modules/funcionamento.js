export default function initFuncionamento() {
  const convertStrToArray = (str) => str.split(',').map(Number);

  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = convertStrToArray(funcionamento.dataset.semana);
  const horarioSemana = convertStrToArray(funcionamento.dataset.horario);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

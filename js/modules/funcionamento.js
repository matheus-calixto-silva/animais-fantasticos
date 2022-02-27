export default class Funcionamento {
  constructor(funcionamento, activeClass = 'aberto') {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    const convertStrToArray = (str) => str.split(',').map(Number);
    this.diasSemana = convertStrToArray(this.funcionamento.dataset.semana);
    this.horarioSemana = convertStrToArray(this.funcionamento.dataset.horario);
  }

  dadosAgora() {
    const dataAgora = new Date();
    this.diaAgora = dataAgora.getDay();
    this.horaAgora = dataAgora.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horaAgora >= this.horarioSemana[0] && this.horaAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto
  }

  ativaAberto() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

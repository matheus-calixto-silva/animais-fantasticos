import ScrollSuave from './modules/scroll-suave.js';
import scrollAnimation from './modules/scroll-animation.js';
import accordion from './modules/accordion.js';
import tabAnimation from './modules/tab-animation.js';
import modal from './modules/modal.js';
import tooltip from './modules/tooltip.js'
import dropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/mobile-menu.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import getBtcValue from './modules/fetch-btc.js'

const scrollSuave = new ScrollSuave(document.querySelectorAll('[data-menu="suave"] a[href^="#"]'));
scrollSuave.init();

scrollAnimation();
accordion();
tabAnimation();
modal();
tooltip();
dropdownMenu();
menuMobile();
initFuncionamento();
initFetchAnimais();
getBtcValue();
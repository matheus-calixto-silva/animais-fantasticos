import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js'
import dropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/mobile-menu.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fethcBtc from './modules/fetch-btc.js';
import scrollAnimation from './modules/scroll-animation.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab=menu]  li', '[data-tab=content] section');
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
dropdownMenu();
menuMobile();
initFuncionamento();
fethcBtc('https://www.blockchain.com/ticker', '.btc-preco');
scrollAnimation();
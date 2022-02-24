import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import modal from './modules/modal.js';
import tooltip from './modules/tooltip.js'
import dropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/mobile-menu.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import getBtcValue from './modules/fetch-btc.js'
import scrollAnimation from './modules/scroll-animation.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
const tabNav = new TabNav('[data-tab=menu]  li', '[data-tab=content] section');
tabNav.init()


modal();
tooltip();
dropdownMenu();
menuMobile();
initFuncionamento();
initFetchAnimais();
getBtcValue();
scrollAnimation();
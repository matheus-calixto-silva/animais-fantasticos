import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js'
import DropDownMenu from './modules/dropdown-menu.js';
import MobileMenu from './modules/mobile-menu.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fethcBtc from './modules/fetch-btc.js';
import ScrollAnimation from './modules/scroll-animation.js';
import SlideNav from './modules/slide.js'

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

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]', 'ativo', ['touchstart', 'click']);
dropDownMenu.init();

const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]', ['touchstart', 'click']);
mobileMenu.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fethcBtc('https://www.blockchain.com/ticker', '.btc-preco');

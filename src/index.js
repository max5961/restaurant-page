import './style.css';
import {createHome} from './homepage.js';
import {createMenu} from './menu.js';
import {clear} from './clear.js';

const home = document.querySelector('.home');
home.addEventListener('click', createHome);

const menu = document.querySelector('.menu');
menu.addEventListener('click', createMenu);

const contact = document.querySelector('.contact');
contact.addEventListener('click', clear);

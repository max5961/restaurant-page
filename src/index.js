import './index.css';
import './reservations.css';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { createHome } from './homepage.js';
import { createMenu } from './menu.js';
import { createReservations } from './reservations';

createHeader();
createFooter();
createHome();

const home = document.querySelector('.home');
home.addEventListener('click', createHome);

const menu = document.querySelector('.menu');
menu.addEventListener('click', createMenu);

const reservations = document.querySelector('.reservations');
reservations.addEventListener('click', createReservations);
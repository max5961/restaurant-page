import './style.css';
import { createHome } from './homepage.js';
import { createMenu } from './menu.js';
import { createReservations } from './reservations';



const home = document.querySelector('.home');
home.addEventListener('click', createHome);

const menu = document.querySelector('.menu');
menu.addEventListener('click', createMenu);

const reservations = document.querySelector('.reservations');
reservations.addEventListener('click', createReservations);
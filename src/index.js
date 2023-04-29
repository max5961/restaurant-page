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
home.addEventListener('click', (e) => {
    styleClicked(e);
    createHome();
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => {
    styleClicked(e);
    createMenu();
});

const reservations = document.querySelector('.reservations');
reservations.addEventListener('click', (e) => {
    styleClicked(e);
    createReservations();
});

function styleClicked(e){
    const buttons = document.querySelectorAll('.hero-links button');
    buttons.forEach(button => button.style.borderBottom = 'none');

    e.target.style.borderBottom = '2px solid #b29775'; 
}
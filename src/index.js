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

window.addEventListener('resize', maxWidth);

let targeted = [];

function styleClicked(e){

    targeted = [];

    const buttons = document.querySelectorAll('.hero-links button');

    buttons.forEach(button => {
        button.style.borderBottom = 'none';
        button.style.backgroundColor = '';
    });

    if(window.innerWidth > 550){
        e.target.style.borderBottom = '2px solid #b29775';
        targeted.push(e.target);
    } else {
        e.target.style.backgroundColor = '#1a2631';
        targeted.push(e.target);       
    }
}

function maxWidth(){

    const buttons = document.querySelectorAll('.hero-links button');

    if(window.innerWidth < 550){

        buttons.forEach(button => {
            button.style.border = 'none';
            button.style.backgroundColor = '#223245';
            if(targeted.includes(button)){
                button.style.backgroundColor = '#1a2631';
            }
        });
    }

    if(window.innerWidth > 550){

        buttons.forEach(button => {
            button.style.backgroundColor = 'rgba(255,255,255,0)';
            if(targeted.includes(button)){
                button.style.borderBottom = '2px solid #b29775';
            }
        });

    }
}      
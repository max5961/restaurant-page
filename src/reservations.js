import { clear } from "./clear";
import { structureForm } from "./reservationsForm";

function structureMessage(){
    const message = document.createElement('div');
    message.classList.add('message');

    const h1 = document.createElement('h1');
    h1.classList.add('reservations-title');
    h1.textContent = 'Reservations';

    const thankYouMessageTop = document.createElement('div');
    thankYouMessageTop.classList.add('thank-you-message');
    thankYouMessageTop.textContent = 'Thank you for your interest in dining at My Restaurant.  We are not affiliated with My Pillow.';

    const thankYouMessageBottom = document.createElement('div');
    thankYouMessageBottom.classList.add('thank-you-message');
    thankYouMessageBottom.textContent = 'To make a reservation please fill out the form below.';

    [h1, thankYouMessageTop, thankYouMessageBottom].forEach(el => message.appendChild(el));

    return message;
}

export function createReservations(){
    clear();

    const reservationsContainer = document.createElement('div');
    reservationsContainer.classList.add('reservations-container');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('res-content');

    contentContainer.appendChild(structureMessage());
    contentContainer.appendChild(structureForm());

    reservationsContainer.appendChild(contentContainer);

    const content = document.getElementById('content');
    const footer = document.querySelector('.footer');
    content.insertBefore(reservationsContainer, footer);

}

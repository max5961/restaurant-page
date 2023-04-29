import {clear} from './clear.js';

function createStructure(){
    const homeContent = document.createElement('div');
    homeContent.classList.add('homepage');

    homeContent.appendChild(createLeftStructure());

    return homeContent;
}

function createLeftStructure(){
    const left = document.createElement('div');
    left.classList.add('left');

    const leftTop = document.createElement('div');
    leftTop.classList.add('left-top');
    fillLeftTop(leftTop);

    const leftBottom = document.createElement('div');
    leftBottom.classList.add('left-bottom');
    fillLeftBottom(leftBottom);

    left.appendChild(leftTop);
    left.appendChild(leftBottom);

    return left;
}

function fillLeftTop(leftTop){
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.textContent = 'Welcome to my restaurant!';
    p2.textContent = 'We take great pride in serving delicious, high-quality food made with fresh, locally-sourced ingredients. Our menu features a wide range of dishes inspired by flavors from around the world, with something for everyone to enjoy.';
    p3.textContent = "At our restaurant, we believe that great food and great service go hand in hand. Come visit us and see for yourself why we're one of the top dining destinations in town.";

    [p1, p2, p3].forEach(p => leftTop.appendChild(p));
}

function fillLeftBottom(leftBottom){
    const location = document.createElement('div');
    location.classList.add('location');
    fillLocation(location);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    fillHours(hours);

    leftBottom.appendChild(location);
    leftBottom.appendChild(hours);
    leftBottom.appendChild(getMap());
}

function fillLocation(location){
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    p1.classList.add('title');
    p1.textContent = 'Location';
    p2.textContent = '123 Something Street';
    p3.textContent = 'New York, New York';
    p4.textContent = '123-456-7890';

    [p1,p2,p3,p4].forEach(p => location.appendChild(p));
}

function fillHours(hours){
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Hours';

    const text = document.createElement('p');
    text.textContent = 'Opens 5:00pm Wed-Sun';

    [title, text].forEach(p => hours.appendChild(p));
}

function getMap(){
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1748439951734!2d-74.00763190548504!3d40.71416734314788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21feb2d2d9%3A0x9d49208205bc1571!2sChambers%20St%2FBroadway!5e0!3m2!1sen!2sus!4v1682381173953!5m2!1sen!2sus');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    return iframe;
}

function createHome(){
    clear();
    const content = document.querySelector('#content');
    const footer = document.querySelector('.footer');
    
    content.insertBefore(createStructure(), footer);
}

export { createHome };
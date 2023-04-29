function createStructure(){
    const hero = document.createElement('hero');
    hero.classList.add('hero');

    hero.appendChild(createH1());
    hero.appendChild(createLinks());
    
    console.log(hero);
    return hero;  
}


function createH1(){
    const h1 = document.createElement('h1');
    h1.classList.add('restaurant-name');
    h1.textContent = 'My Restaurant';

    return h1;
}

function createLinks(){
    const heroLinks = document.createElement('div');
    heroLinks.classList.add('hero-links');

    const btn1 = document.createElement('button');
    btn1.classList.add('home');
    btn1.textContent = 'Home';

    const btn2 = document.createElement('button');
    btn2.classList.add('menu');
    btn2.textContent = 'Menu';

    const btn3 = document.createElement('button');
    btn3.classList.add('reservations');
    btn3.textContent = 'Reservations';

    [btn1, btn2, btn3].forEach(btn => heroLinks.appendChild(btn));
    
    return heroLinks;
}

function createHeader(){
    const content = document.getElementById('content');
    const footer = document.querySelector('.footer');
    const hero = createStructure();
    content.appendChild(hero);
}

export { createHeader }


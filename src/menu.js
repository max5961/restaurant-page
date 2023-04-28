import {getMenu} from './itemClass';
import {clear} from './clear.js';

const menuItems = getMenu();

function createStructure(menuItems){
    // menu container
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    //menu child
    const h1 = document.createElement('h1');
    h1.classList.add('menu-title');
    h1.textContent = 'Menu';

    //menu child
    const itemGridContainer = document.createElement('div');
    itemGridContainer.classList.add('item-grid-container');
    //children of grid container
    for(let i = 0; i < menuItems.length; i++){
        itemGridContainer.appendChild(getMenuElements(menuItems)[i]);
    }

    menuContent.appendChild(h1);
    menuContent.appendChild(itemGridContainer);

    return menuContent;
}

function createItem(){
    const item = document.createElement('div');
    item.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('item-name');

    const p1 = document.createElement('p');
    p1.classList.add('desc');

    const p2 = document.createElement('p')
    p2.classList.add('ingredients');
    p2.textContent = 'Ingredients';

    const span = document.createElement('span');
    span.classList.add('ingredients');

    p2.appendChild(span);

    [h1, p1, p2].forEach(el => item.appendChild(el));

    return item;
}

function getMenuElements(menuItems){

    let menuElements = []

    for(let i = 0; i < menuItems.length; i++){
        let item = createItem();
        item.childNodes[0].textContent = menuItems[i].name;
        item.childNodes[1].textContent = menuItems[i].desc;
        item.childNodes[2].childNodes[0].textContent = menuItems[i].ingredients;
        menuElements.push(item);
    }

    return menuElements;
}

function _createMenu(menuItems){
    const content = document.getElementById('content');
    const footer = document.querySelector('.footer');

    content.insertBefore(createStructure(menuItems), footer);
}

function createMenu(){
    clear();
    _createMenu(menuItems);
}

export {createMenu};
class Item {
    constructor(
        name,
        desc
    ) {
        this.name = name;
        this.desc = desc;
        this.ingredients = this.getIngredients();
    }

    getIngredients(){

        let string = "";

        for(let i = 0; i < Math.floor(Math.random() * 8 + 2); i++){
            string += `${ingredients[i]}, `
        }

        function shuffle(array){
            for(let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i+1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffle(ingredients);

        return string;
    } 
}

let ingredients = [
    'Tomatoes',
    'Onions',
    'Olive Oil',
    'Garlic',
    'Onions',
    'Salt',
    'Pepper',
    'Butter',
    'Flour',
    'Pork',
    'Chicken',
    'Avocado',
]

const names = [
    'Truffle Mushroom Risotto',
    'Seared Scallops',
    'Butternut Squash Ravioli',
    'Lobster Bisque',
    'Veggie Burger with Sweet Potato Fries',
    'BBQ Pulled Pork Sandwich with Coleslaw',
    'Baked Mac and Cheese',
    'Grilled Chicken Caesar Salad',
]

function getMenu(){

    let menuItems = [];

    for(let i = 0; i < names.length; i++){
        const item = new Item(`${names[i]}`, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        menuItems.push(item);
    }

    return menuItems;
}

export {getMenu};





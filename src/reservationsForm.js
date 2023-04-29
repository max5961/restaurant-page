export function structureForm(){

    const form = document.createElement('form');

    let children = [
        createFName(),
        createLName(),
        createEmail(),
        createPhone(),
        createSelect(),
        createDate(),
        createTime(),
        createSubmit(),
    ]

    children.forEach(child => form.appendChild(child));

    return form;
}

function createFName(){
    //create label and input
    const fNameLabel = document.createElement('label');
    fNameLabel.for = 'first-name';
    fNameLabel.textContent = 'First name';
    const fNameInput = document.createElement('input');
    fNameInput.type = 'text';
    fNameInput.id = 'first-name';
    fNameInput.placeholder = 'First name';

    //create container and append label and input
    const fNameContainer = document.createElement('div');
    fNameContainer.classList.add('label-input-container');
    fNameContainer.appendChild(fNameLabel);
    fNameContainer.appendChild(fNameInput);

    return fNameContainer;
}

function createLName(){
    //create label and input
    const lNameLabel = document.createElement('label');
    lNameLabel.for = 'last-name';
    lNameLabel.textContent = 'Last name'
    const lNameInput = document.createElement('input');
    lNameInput.type = 'text';
    lNameInput.id = 'first-name';
    lNameInput.placeholder = 'Last name';

    //create container and append label and input
    const lNameContainer = document.createElement('div');
    lNameContainer.classList.add('label-input-container');
    lNameContainer.appendChild(lNameLabel);
    lNameContainer.appendChild(lNameInput);

    return lNameContainer;
}

function createEmail(){
    //create label and input
    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'email';

    //create container and append label and input
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('label-input-container');
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);

    return emailContainer;
}

function createPhone(){
    //create label and input
    const phoneLabel = document.createElement('label');
    phoneLabel.for = 'tel';
    phoneLabel.textContent = 'Phone Number';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'tel'
    phoneInput.name = 'tel';
    preventInvalidChars(phoneInput);

    //create container and append label and input
    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('label-input-container');
    phoneContainer.appendChild(phoneLabel);
    phoneContainer.appendChild(phoneInput);

    return phoneContainer;
}

    function preventInvalidChars(phoneInput){
        phoneInput.addEventListener('input', (e) => {
            const validChars = /^[\d()-]*$/;
            if(!validChars.test(e.target.value)){
                e.target.value = e.target.value.slice(0,-1);
            }
        })
    }

function createSelect(){
    const select = document.createElement('select');
    select.name = 'people';

    for(let i = 1; i <= 20; i++){
        const option = document.createElement('option');
        option.value = `${i}`;

        if(i === 1){
            option.textContent = `${i} person`
        } else {
            option.textContent = `${i} people`;
        }
        
        if(i === 2){
            option.selected = true;
        }

        select.appendChild(option)
    }

    return select;
}

function createDate(){
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    date.name = 'date';
    
    return date;
}

function createTime(){
    const time = document.createElement('input');
    time.type = 'time';
    time.id = 'time';
    time.name = 'time';
    time.min = '05:30';
    time.max = '10:00';

    return time;
}

function createSubmit(){
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';
    submit.addEventListener('click', e => e.preventDefault());

    return submit;
}
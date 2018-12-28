const userNameContainer = document.querySelector('.user-name');
const userNameInput = userNameContainer.querySelector('input');
const userName = document.querySelector('.user-text');

const Name_LS = 'userName';
function saveName(name) {
    localStorage.setItem(Name_LS, name);
}

function handleSubmit(e) {
    e.preventDefault();
    //console.log(userNameInput.value);
    const nameValue = userNameInput.value;
    if (nameValue.length !== 0) {
        saveName(nameValue);
        paintUser(nameValue);
    }
}

function paintUser(name) {
    userNameInput.style.display = 'none';
    userName.style.display = 'block';
    userName.innerText = `Hello ${name}`;
}

function askForUser() {
    userNameContainer.style.display = 'block';
    userNameContainer.addEventListener('submit', handleSubmit);
}

function loadName() {
    const saveName = localStorage.getItem(Name_LS)
    if (saveName === null) {
        askForUser();
    } else {
        paintUser(saveName);
    }
}

function init() {
    loadName();
}

init();

//object.querySelector('')
//localStorage.setItem('KEY','VALUE')
//localStorate.getItem('KEY')
//event.preventDefault()
//object.value
//object.style.display = ''
//object.innerText = `STRING ${function}`
//object.addEventListner('EVENT', function)
//if...else
//===
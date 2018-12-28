const userNameContainer = document.querySelector('.user-name');
const userNameInput = userNameContainer.querySelector('input');
const userGreeting = document.querySelector('.user-greeting');
const userName = document.querySelector('.user-text');
const btnReset = userGreeting.querySelector('.btn-reset');

const Name_LS = 'userName';

function handleClickReset() {
    localStorage.removeItem(Name_LS);
    userNameInput.value = '';
}

function resetName() {
    btnReset.addEventListener('click', function () {
        handleClickReset();
        askForUser();
    });
}

function saveName(name) {
    localStorage.setItem(Name_LS, name);
}

function handleSubmitName(e) {
    e.preventDefault();
    //console.log(userNameInput.value);
    const nameValue = userNameInput.value;
    if (nameValue.length !== 0) {
        saveName(nameValue);
        paintUser(nameValue);
    }
}

function paintUser(name) {
    userNameContainer.style.display = 'none';
    userGreeting.style.display = 'block';
    userName.innerText = `Hello ${name}`;
}

function askForUser() {
    userGreeting.style.display = 'none';
    userNameContainer.style.display = 'block';
    userNameContainer.addEventListener('submit', handleSubmitName);
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
    resetName();
}

init();

// object.querySelector('')
// localStorage.setItem('KEY','VALUE')
// localStorate.getItem('KEY')
// event.preventDefault()
// object.value
// object.style.display = ''
// object.innerText = `STRING ${function}`
// object.addEventListner('EVENT', function)
// if...else
// ===
const userFormContainer = document.querySelector('.user-name');
const userInput = userFormContainer.querySelector('input');
const userText = document.querySelector('.user-name-text');


const USER_LS = 'currentUser';
//chrome application local storage 확인

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function hadleSubmit(e) {
    e.preventDefault(); //submit이 일어나니깐 console이 안됨 >  submit막음, 각 태그의 이벤트동작을 막음
    // console.log(e);
    const currentValue = userInput.value;
    // console.dir(userInput);
    // console.log(currentValue);
    paintUser(currentValue);
    saveName(currentValue);
}

function paintUser(name) {
    userFormContainer.style.display = 'none';
    userText.style.display = 'block';
    userText.innerText = `Hello ${name}`;
}

function askForUser(){
    userFormContainer.style.display ='block';
    userFormContainer.addEventListener('submit', hadleSubmit);
   // userFormContainer.removeEventListener('submit', hadleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForUser();
    } else {
        paintUser(currentUser);
    }
}

function init() {
    loadName();
}

init();

//파일이 달라도 변수명은 달라야함
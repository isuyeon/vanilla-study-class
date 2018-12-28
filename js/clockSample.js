const clockContainer = document.querySelector('.clock');
// querySelector
// querySelectorAll 다중
// clockContainer[0]
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    //console.log(date);
    // date.setHours(7);
    // date.setMinutes(1);
    // date.setSeconds();
    const minutes = lengthCheck(date.getMinutes());
    const hours = lengthCheck(date.getHours());
    const seconds = lengthCheck(date.getSeconds());
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
};

function lengthCheck(str) {
    return str < 10 ? `0` + str : str;
}

function init() {
    getTime();
    const i = setInterval(getTime, 1000);

    setTimeout(function() {
        clearInterval(i);
    }, 3000); //function바로 실행되지 않기 위해서 다시 담음
};

// (function init() {
//     console.log('init');

// })();
// 즉시실행함수

init();
//clockTitle.innerText = 'a';
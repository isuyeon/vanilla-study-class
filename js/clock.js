// const clock = document.querySelector('.clock h1');
const clockContainer = document.querySelector('.clock')
const clock = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const hours = lengthCheck(date.getHours());
    const minutes = lengthCheck(date.getMinutes());
    const seconds = lengthCheck(date.getSeconds());

    //clock.innerText = hours + ':' + minutes + ':' + seconds
    clock.innerText = `${hours}:${minutes}:${seconds}`
    
}

function lengthCheck(str) {
    return str < 10 ? '0' + str : str
}

function init() {
    getTime();
    return setInterval(getTime, 1000);
    // i = setInterval(getTime, 1000);
    // setTimeout(function() {
    //     clearInterval(i)},3000
    // );
}

init();

// object.querySelector('')
// new Date()
// getHours(), getMinutes(), getSeconds()
// object.innerText = `string ${function}`
// setInterval(func, seconds)
// setTimeout(func, seconds)
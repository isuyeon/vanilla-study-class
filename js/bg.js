const bgImage = document.querySelector('.bg-image');

const IMG_NUMBER = 3; //이미지개수
function handleImgLoad(image){
    bgImage.style.backgroundImage = 'url('+ image.src + ')';
    bgImage.classList.add('fadeIn');
}

function padintImage() {
    //const image = new Image();
    const image = document.createElement('img');
    image.src = './img/' + getRandom(1, IMG_NUMBER) + '.jpg';
    image.addEventListener('load', function() {
        handleImgLoad(image);
    });
    //image.addEventListener('load', handleImgLoad);
    // image.src = `./img/1.jpg` // ../ 은 js기준 ./는 html기준
    // image.alt = '배경';
    //bgImage.appendChild(image);
    
    //bgImage.style.backgroundImage = 'url(./img/' + getRandom(1, IMG_NUMBER) + '.jpg)';
    
    // setTimeout(function() {
    //     bgImage.classList.add('fadeIn')
    // }, 3000)
    
    //addClass, removeClass를 담고있는 vanila 메서드
    //bgImage.style.backgroundImage = `url('./img/${getRandom(1, IMG_NUMBER)}.jpg')`;
    

    //console.log(image)
}

//Math.random()*2 //2미만 난수
//Math.floor(Math.random() * 2) //2미만 정수
function getRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function init() {
    padintImage();
}

init();

//init : initialize
//unsplash사이트 - 이미지 다운
const backGround = document.querySelector("body");

const createImg = (number) => {
    const img = document.createElement('img');

    img.src = `img/${number}.jpg`;
    img.alt='background images';
    img.classList.add('bgImg');

    backGround.prepend(img);
}

const getRandom = () => {
    const IMG_NUM = 3;

    let num = Math.floor(Math.random() * IMG_NUM);

    createImg(num);
}

getRandom();
const clickMeButton = document.querySelector('.clickMe');
// const body = document.querySelector('.body')

function clickHandler ()
{
    clickMeButton.removeEventListener('click', clickHandler);
};

// clickMeButton.addEventListener('click', clickHandler, {once:true});

function bgPink ()
{
    document.body.classList.toggle('pink')
    // document.body.style.backgroundColor = 'pink'
}

// clickMeButton.addEventListener('click', bgPink);

function bgPinkToggle () {
    if (document.body.classList.contains('pink')) {
        clickMeButton.innerHTML = 'Click Me!'
    }
    else{
        clickMeButton.innerHTML = 'Clicked'
    }
    document.body.classList.toggle('pink')
}

// clickMeButton.addEventListener('click', bgPinkToggle);

function updateImage () {
    const image = document.querySelector(".rotaryGif")
    image.setAttribute('src', './images/rotary.gif')
    image.setAttribute('height', '320')
    image.setAttribute('width', '240')
    image.setAttribute('alt', 'wankal rotary firing sequence gif')
}
clickMeButton.addEventListener('click', updateImage)

// src="./images/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab.gif" height="320" width="240" alt=""
const clickMeButton = document.querySelector(".clickMe");
// const body = document.querySelector(".body")

function clickHandler ()
{
    clickMeButton.removeEventListener("click", clickHandler);
};

// clickMeButton.addEventListener("click", clickHandler, {once:true});

function bgPink ()
{
    document.body.classList.toggle("pink")
    // document.body.style.backgroundColor = "pink"
}

clickMeButton.addEventListener("click", bgPink);
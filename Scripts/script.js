const clickMeButton = document.querySelector(".clickMe");

function clickHandler ()
{
    alert("Clicked!")
    // clickMeButton.removeEventListener("click", clickHandler);
};

clickMeButton.addEventListener("click", clickHandler, {once:true});


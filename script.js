function resize() {
    var desktopView = document.getElementById('desktopView');
    if (window.matchMedia("(orientation: landscape)").matches) {
        desktopView.src = window.location.href;
        desktopView.style.display = "block";
        desktopView.style.height = "100vh";
        desktopView.style.width = "50vw";
        desktopView.style.overflow = "visible";
        desktopView.scrollIntoView({behavior: "instant", block: "start"});
    
        const bodyWidth = document.body.clientWidth;
        const iframeWidth = desktopView.offsetWidth;
    
        desktopView.style.marginLeft = `${(bodyWidth - iframeWidth) / 2}px`;
        document.body.style.overflowY = "hidden";

        document.body.style.background = "url(images/desktopBg.png) repeat";
    } else {
        desktopView.style.display = "none";
        document.body.style.overflowY = "visible";
        document.body.style.background = "white";
    }
}

function removePlastic() {
    let plastic = document.getElementById("plastic");
    let opacity = 1;

    let fadeOut = setInterval(function() {
    if (opacity > 0) {
        opacity -= 0.3;
        plastic.style.opacity = opacity;
    } else {
        clearInterval(fadeOut);
        plastic.style.display = "none";
    }
    }, 100);
}

function removeGlass() {
    let glass = document.getElementById("glass");
    let opacity = 1;

    let fadeOut = setInterval(function() {
    if (opacity > 0) {
        opacity -= 0.3;
        glass.style.opacity = opacity;
    } else {
        clearInterval(fadeOut);
        glass.style.display = "none";
    }
    }, 100);
}

function share() {
    if (navigator.share) {
        navigator.share({
          title: 'O nosso Planeta',
          text: 'Descobre como podes ajudar o nosso planeta!',
          url: window.location.href,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
    }
};
  


document.getElementById("bulb_off").style.display = "none";
function bulb() {
    document.getElementById("bulb_off").style.display = "block";
    document.getElementById("bulb_on").style.display = "none";
}

window.addEventListener("resize", () => {
    resize();
});
resize();
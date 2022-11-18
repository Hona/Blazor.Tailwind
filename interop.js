indexScrollFunction = function () {
    /*Apply classes for slide in bar*/
    window.scrollpos = window.scrollY;

    if (window.scrollpos > 10) {
        window.header.classList.add("bg-white");
        window.navaction.classList.remove("bg-white");
        window.navaction.classList.add("gradient");
        window.navaction.classList.remove("text-gray-800");
        window.navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < window.toToggle.length; i++) {
            window.toToggle[i].classList.add("text-gray-800");
            window.toToggle[i].classList.remove("text-white");
        }
        window.header.classList.add("shadow");
        window.navcontent.classList.remove("bg-gray-100");
        window.navcontent.classList.add("bg-white");
    } else {
        window.header.classList.remove("bg-white");
        window.navaction.classList.remove("gradient");
        window.navaction.classList.add("bg-white");
        window.navaction.classList.remove("text-white");
        window.navaction.classList.add("text-gray-800");
        
        //Use to switch toggleColour colours
        for (var i = 0; i < window.toToggle.length; i++) {
            window.toToggle[i].classList.add("text-white");
            window.toToggle[i].classList.remove("text-gray-800");
        }

        window.header.classList.remove("shadow");
        window.navcontent.classList.remove("bg-white");
        window.navcontent.classList.add("bg-gray-100");
    }
}

window.loadIndex = function () {

    window.scrollpos = window.scrollY;
    window.header = document.getElementById("header");
    window.navcontent = document.getElementById("nav-content");
    window.navaction = document.getElementById("navAction");
    window.brandname = document.getElementById("brandname");
    window.toToggle = document.querySelectorAll(".toggleColour");

    document.addEventListener("scroll", indexScrollFunction);
    
}

window.unloadIndex = function () {
    // Remove event listeners
    document.removeEventListener("scroll", indexScrollFunction);
}
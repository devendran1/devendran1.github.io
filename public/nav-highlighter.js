function jumpToSection(h) {
    window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + h;
}
var setActiveLink = function () {
    var lnks = document.getElementsByClassName('nav-link');
    var activeFound = false;

    for (var i = 0; i < lnks.length; i++) {
        lnks[i].className = lnks[i].className.replace(' active', '');

        var currUrl = this.href == undefined ? document.URL : this.href;

        if (currUrl.endsWith(lnks[i].href)) {
            lnks[i].className += ' active';
            activeFound = true;
        }
    }

    if (activeFound === false) {
        // jumpToSection(lnks[0].hash);
        lnks[0].className += ' active';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setActiveLink();
    var lnks = document.getElementsByClassName('nav-link');
    for (i = 0; i < lnks.length; i++) {
        lnks[i].addEventListener('click', setActiveLink);
    }
});

document.addEventListener('scroll', (event) => {
    var currScrolTopPos = document.documentElement.scrollTop + 300;
    var lnks = document.getElementsByClassName('nav-link');

    for (i = 0; i < lnks.length; i++) {
        var currRef = document.getElementById(lnks[i].hash.replace('#', ''));
        if (currRef != null) {
            if (currRef.offsetTop <= currScrolTopPos &&
                currRef.offsetTop + currRef.getBoundingClientRect().height > (currScrolTopPos + 10)) {

                for (ii = 0; ii < lnks.length; ii++) {
                    lnks[ii].className = lnks[ii].className.replace(' active', '');
                }

                lnks[i].className += ' active';
            }
        }
    }
});
//Back to program button
var mybutton = document.getElementById("programBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//Pause audio when a new one starts playing
document.addEventListener('play', function (e) {
var audios = document.getElementsByTagName('audio');
for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
        audios[i].pause();
    }
}
}, true);

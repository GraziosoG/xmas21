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

function listenAllFunction() {
    var audios = document.getElementsByTagName('audio');
    for (i = 0; i < audios.length; i++) { audios[i].pause() };
    document.getElementById('allsongs').play();
}

function copyToClipboard() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        // Optional: Provide user feedback
        alert("Page URL Copied to Clipboard: " + url); 
    }).catch(err => {
        console.error('Failed to copy URL: ', err);
    });
}

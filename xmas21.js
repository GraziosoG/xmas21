//Retrieve program button and the overlay background of program div
var programButton = document.getElementById("program-btn");
var programPopup = document.getElementById("popup-overlay")


function showPopup() {
    programButton.style.display = "none";
    programPopup.style.display = "block";
    var audios = document.getElementsByTagName('audio');
    for (let i = 0, len = audios.length; i < len; i++) {
        audios[i].style.zIndex = -1;
    }
}

function closePopup() {
    programPopup.style.display = "none";
    programButton.style.display = "block";
    var audios = document.getElementsByTagName('audio');
    for (let i = 0, len = audios.length; i < len; i++) {
        audios[i].style.zIndex = 1;
    }
}

//Closes popup if user clicks even if outside of the popup div
window.onclick = function(event) {
    if (event.target == document.getElementById("popup-overlay")) {
        closePopup();
    }
};

//Pause audio when a new one starts playing
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);


//Copy the URL with the section hashtag truncated for users to share
function copyToClipboard() {
    const url = window.location.href;

    navigator.clipboard.writeText(url.split("#")[0]).then(() => {
        // Optional: Provide user feedback
        alert("Page URL Copied to Clipboard: " + url.split("#")[0]); 
    }).catch(err => {
        console.error('Failed to copy URL: ', err);
    });
}

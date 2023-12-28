function afficherMessage() {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = 'Bienvenue sur mon Portfolio !';

    messageElement.classList.add('animate__animated', 'animate__bounce');
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        
        document.getElementById("preloader").style.display = "none";

        
        document.getElementById("main-content").style.display = "block";
    }, 2500);
});
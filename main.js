function showEmailAdress() {
    var emailAdress = "brandon.valery301222@gmail.com"
    alert("Adresse e-mail : " + emailAdress);
}

function downloadCV() {
    var cvURL = "CV.pdf";
    var cvName = "CV.pdf";

    var link = document.createElement("a");
    link.href = cvURL;
    link.download = cvName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        
        document.getElementById("preloader").style.display = "none";

        
        document.getElementById("main-content").style.display = "block";
    }, 2500);
});

<?php


if ($_SERVER["REQUEST8METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    echo "Merci, votre message à été envoyé avec succès !";
}
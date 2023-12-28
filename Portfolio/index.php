<?php

$heure = date("H");
if ($heure < 12) {
    echo "Bonjour !";
} else {
    echo "Bon après-midi !";
}
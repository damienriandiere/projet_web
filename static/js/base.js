window.onscroll = function () {
    scrollFunction(); // Appel de la fonction scrollFunction
};

function scrollFunction() {
    var myButton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //Si l'utilisateur scroll de plus de 20px, le bouton apparait
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Faire defiler vers le haut lorsque le bouton est cliqué
function scrollTopFunction() {
    document.body.scrollTop = 0; // Pour les navigateurs Chrome, Firefox, IE et Opera
    document.documentElement.scrollTop = 0; // Pour le navigateur Edge et Safari
}

function goBack() {
    window.history.back(); // Retourne à la page précédente
}
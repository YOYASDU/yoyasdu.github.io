// Sélectionnez l'élément HTML avec l'ID "champSaisie"
var champSaisie = document.getElementById('champSaisie');

// Sélectionnez l'élément HTML avec l'ID "resultat"
var resultatContainer = document.getElementById('resultat');

// Ajoutez un écouteur d'événements au bouton de validation
document.getElementById('boutonValider').addEventListener('click', function() {
    // Obtenez la valeur saisie dans le champ de texte et convertissez-la en minuscules
    var motSaisie = champSaisie.value.toLowerCase();

    // Mettez le contenu du champ saisi dans le conteneur de résultat
    resultatContainer.innerHTML = motSaisie;
});

//window.location.href = "home.html" + encodeURIComponent(champSaisie);



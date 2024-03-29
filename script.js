function afficherResultat() {
    var motSaisi = document.getElementById('champSaisie').value.toLowerCase();
    var resultatContainer = document.getElementById('resultat');

    if (motSaisi === 'enzo') {
        resultatContainer.textContent = 'Bodin';
    } else if (motSaisi === 'thomas') {
        resultatContainer.textContent = 'Migneret';
    } else if (motSaisi === 'tolaini') {
        resultatContainer.textContent = 'meilleur prof';
    } else if (motSaisi === 'jeu') {
        document.location.href="index2.html";
    } else {
        document.resultatContainer.textContent = 'Aucun texte spécifique pour le mot saisi.';
    }
}

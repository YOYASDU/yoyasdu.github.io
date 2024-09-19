function afficherResultat() {
    var motSaisi = document.getElementById('champSaisie').value.toLowerCase();
    var resultatContainer = document.getElementById('resultat');


    // TEST
    if (motSaisi === 'enzo') {
        resultatContainer.textContent = 'Bodin';
    } else if (motSaisi === 'thomas') {
        resultatContainer.textContent = 'Migneret';
    }
    
        //Page 122 à 154 HISTOIRE - Renaissance

    // SALLE 6
    else if (motSaisi === 'Martin Luther') { //Dans la premiere boite - Fondateur de la Réforme protestante ? - Page 148
        resultatContainer.textContent = 'électricité';
    }else if (motSaisi === '1400/1600') { //tableau éléctrique - Dates de la Renaissances ? - Page 138
        resultatContainer.textContent = 'étiquette';
    }else if (motSaisi === '1475') { //étiquette d'énergie élèctrique - naissance de Michel Ange ? - Page 132
        resultatContainer.textContent = 'trousseau de clef';
    } 

        //Dates importantes

    //SALLE 5
    else if (motSaisi === '04/07/1776') { //dans la deuxieme boite - Déclaration de l'indépendance des Etats Unis ? - Page 210
        resultatContainer.textContent = 'Testeur de tension';
    }else if (motSaisi === '24/08/1572') { //multimetre - Massacre des chefs protestant lors de la Saint Barthelemy ? - Page 173
        resultatContainer.textContent = 'numérique';
    } else if (motSaisi === '21/11/1783') { //coupe - Date de la premiere ascension humaine en montgolfiere ? - Page 228
        resultatContainer.textContent = 'Office planer (tableau étiquette)';
    }    

    // EASTER EGG
    else if (motSaisi === 'tolaini') {
        resultatContainer.textContent = 'meilleur prof';
    } else if (motSaisi === 'jeu') {
        document.location.href="Astroders.py";
    }
    

    else {
        document.resultatContainer.textContent = 'Aucun texte spécifique pour le mot saisi.';
    } 

}


// Récupérez le paramètre d'URL contenant la valeur saisie
var params = new URLSearchParams(window.location.search);
var motSaisi = params.get('mot');

// Utilisez cette valeur comme vous le souhaitez
console.log(motSaisie);

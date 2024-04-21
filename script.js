function afficherResultat() {
    var motSaisi = document.getElementById('champSaisie').value.toLowerCase();
    var resultatContainer = document.getElementById('resultat');


    // TEST
    if (motSaisi === 'enzo') {
        resultatContainer.textContent = 'Bodin';
    } else if (motSaisi === 'thomas') {
        resultatContainer.textContent = 'Migneret';
    }
    
    // SALLE 6
    else if (motSaisi === '05/05/1789') { //Prise - Le commencement de la révolution francaise ?
        resultatContainer.textContent = 'étiquette';
    } else if (motSaisi === '14/07/1789') { //étiquette d'énergie élèctrique - La prise de la bastille ?
        resultatContainer.textContent = 'trousseau de clef';
    } 

    //SALLE 5
    else if (motSaisi === '01/09/1715') { // - Décés de LOUIS XIV ?
        resultatContainer.textContent = '';
    } else if (motSaisi === '1400/1600') { // - Dates de la Renaissances ?
        resultatContainer.textContent = 'Office planer (tableau étiquette)';
    }    

    // EASTER EGG
    else if (motSaisi === 'tolaini') {
        resultatContainer.textContent = 'meilleur prof';
    } else if (motSaisi === 'jeu') {
        document.location.href="jeu.html";
    } 
    

    else {
        document.resultatContainer.textContent = 'Aucun texte spécifique pour le mot saisi.';
    } 

}



// [SCAN] - (QUESTION)
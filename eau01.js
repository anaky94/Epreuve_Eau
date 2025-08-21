/*
COMBINAISON DE 3 CHIFFRES "
Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.
Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>
987 n’est pas là parce que 789 est présent.

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent.

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.
*/



//Gestion d'erreur 
function isValideArguments(arguments) {
    if (arguments.length === 0){ 
        return true;
    } else {
        console.error("Ce script ne nécessite pas d'arguments");
        return false; 
    };
}

//Utilitise
function getCumbin() {
    let result = [];
    for ( let i = 0; i <= 7; i++){
        for ( let j = i + 1; j <= 8; j++){
            for ( let k = j + 1; k <= 9; k++){
                 result.push (`${i}${j}${k}`)
            }
        }
    }
    return result.join(' , ');
}

//Résolution
function CreatCombin() {
const arguments = getArguments(); // récupération des arguments
    if (!isValideArguments(arguments)){//vérifis si les arguments sont invalide 
        return; // si invalide, arrête l'éxecution
    }
   
}
//Affichage :
function displayCombin() {
    //si les arguments sont valides (aucun argument dans ce cas,) execute combine
    const result = getCumbin();
    console.log(result); //affichage
};

displayCombin();

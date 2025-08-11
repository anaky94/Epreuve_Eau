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

//Parsing 
function getArguments () {
    const args = process.argv.slice(2);
    return args;
};

//gestion d'erreur 
function isValideArguments (args) {
    if (args.length === 0){ 
        return true;
    } else {
        console.error("Ce script ne nécessite pas d'arguments");
        return false; 
    };
}

function getcumbin(){
     let result = [];
    for ( let i = 0; i <= 9; i++){
        for ( let j = i + 1; j <= 9; j++){
            for ( let k = j + 1; k <= 9; k++){
                if (i ===7 && j===8 && k ===9){
                    result += `${i}${j}${k} `;
                }else

                result +=
            }
        }
    }
    return result.join(' , ');
}// la solution c'est d'edexer k / j 
//Résolution
function CreatCombin() {
    const args = getArguments(); // récupération des arguments
    if (!isValideArguments(args)){//vérifis si les arguments sont invalide 
        return; // si invalide, arrête l'éxecution
    }
   
}
//partis 4 affichage :
function displayCombin() {
    
    //si les arguments sont valides (aucun argument dans ce cas,) execute combine
    const result = combin();
    console.log(result); //affichage
};

display();
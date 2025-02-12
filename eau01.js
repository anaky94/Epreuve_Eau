/*
function genere_combinaison ():
    chiffre = [0,1,2,3,4,5,6,7,8,9];
    combinaison=[]
    pour i de 0 à longeur (chiffres) -3:
        pour j de i + 1 à longuer (chiffre )-2:
            pour k de j + 1 à longeur (chiffre)-1:
                combinaison)=[chiffre[i]], chiffres[j], chiffre[k]
                ajouter combinaison à combinaisons 
    retourner combinaison 
    Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.
*/
//Parsing 
const args = process.argv.slice(2);
//gestion d'erreur 
function errorArgv (){
    if (args.length > 0 ){ 
        console.error("Erreur:  L'argument n'est pas nécessaire pour ce script");
        process.exit();

    } else {
        
        console.log(combin());
    } 
    
}
//Résolution
function combin () {
    let result = "";
    for ( let i = 0; i <= 9; i++){
        for ( let j = i + 1; j <= 9; j++){
            for ( let k = j + 1; k <= 9; k++){
                result += `${i}${j}${k}, `;
            }
        }
    }
    return result.slice  (0, -1);
    };
//partis 4 affichage :
errorArgv();

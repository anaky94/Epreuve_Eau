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
const getArgument = () =>{
    const args = process.argv.slice(2);
    return args;
}

//gestion d'erreur 
const isValideArguments = (args) =>{
    if (args.length > 0 ){ 
        return args // True 
    } else {
        return console.error("Ce Script prend au moins 2 arguments en parametre.");//False
    } 
}

//Résolution
const combin = () => {
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
const display = () =>{
    if(isValideArguments()===true){
        return 
    }

}

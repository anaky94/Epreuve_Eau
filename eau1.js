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
// CAS EXCEPTIONEL
// ne pas afficher la combinaison des 3 chiffre similaire exp: 000 ou 111 ne pas afficher cela 
// 

function combinaisons(){
    let chiffre = [0,1,2,3,4];
    let combinaisons=[];
    // Première bucle : séléctionne d epremier chiffre 
    for (let i = 0; i < chiffre.length - 2; i++){
        // Deuxième boucle : sélectionne le deuxième chiffre 
        for(let j = i + 1; j < chiffre.length - 1; j++){
            //Troisième boucle: séléctionne le troisième chiffre
            for (let k = j + 1; k < chiffre.length; k++){
                // créer une combinaison de trois chiffres
                let combinaison = [chiffre[i], chiffre[j], chiffre[k]];
                // Ajoute la combinaison au tableau des combinaisons 
                combinaisons.push(combinaison)
            }
        }
    }
    return combinaisons;
}

let result = combinaisons();

console.log(result);

 
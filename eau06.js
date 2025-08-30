/*  String dans string
Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.
Exemples d’utilisation :
$> python exo.py bonjour jour
true
$> python exo.py bonjour joure
false
$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//le parsing
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments 
}

//Gestion d'erreur
function isValidateArguments(arguments) { 
    if (arguments.length !== 2 ){
        console.error("Erreur")
        return false
    }
    return true
} 
/* à faire pour la prochaine fois 

***vérifier tous les arguments pas seulement le 1er
***utiliser un e boucle pour traiter plusieurs
***utilisier "typeof" pour une vérification plus précise

*/
function validateArgumentsNotNumber() {
    if (!isNaN(Number(arguments))){
        console.error("Error")
        return false
    }
    return true
}

console.log(validateArgumentsNotNumber())

/* //Utilitises 
function resolve() {
    const args = getArguments();
    const {fullString, subString} = validateArguments(args);

    let found = false;

    for (let i = 0; i <= fullString.length-subString.length; i++){
        if (fullString[i] === subString[0]){
            found=true
            for (let j = 0; j<subString.length; j++){
            }
        }
        if(fullString.slice(i, i + subString.length)=== subString){
            found = true;
            break
        }
    }
    console.log(found);
}


//Resolution 



//Affichage 
function display() {
    const args = getArguments();
    if (!validateArguments(args)){
        return
    }
}
//Affichage 
function display() {
}

 */


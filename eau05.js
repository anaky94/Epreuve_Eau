/* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.
Exemples d’utilisation :
$> python exo.py 14
17
$>
Afficher -1 si le paramètre est négatif ou mauvais.
 */

//Parsing 
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments;
}

//gestiond'erreur
function isValidArguments(arguments) { 
    if (arguments.length <= 0 && arguments.length  > 1) {
        console.error("ce script nécéssite un argument")
    return false;  
    }
    return true;
}

function areAllNumbers (arguments){
    for (let i = 0; i < arguments.length; i++){
        if (isNaN(arguments[i])){
            console.error("ce script nécessite un  nombre en arguments")
            return false;
        }
    }
    return true;
}

// resolution 
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++){
        if  ( number % i === 0 ) return false;
            return false; // n'est divisible pas i donc pas premier
        
    }
    return true; //n ets premier
}

//trouver le ppremier nombre sup à n 
function firstNumberSuperior(number){
    let nombre = number + 1;
    while (true){
        if (nombrePremier(nombre)){
            return nombre; // retourne le premier nombre premier toruvé
        }
        nombre++; //pass eau nombre suivant
    }
}

// affichage
function displayNexfirstNumber (number){
    const arguments = getArguments();
    if (!isValidArguments(arguments) || (!areAllNumbers(arguments)))
        return;
    const n = Number(arguments[0]); //convertir l'argument en nombre 
    const resultat = displayNexfirstNumber(number);
    console.log(`le premier nombre premier supérieur à ${number} est : ${resultat}`);
}

displayNexfirstNumber();

// Remarque romain 
// renomer les 

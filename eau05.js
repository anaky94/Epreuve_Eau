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
    }
    return true; //n ets premier
}

//trouver le ppremier nombre sup à n 
function findNextPrime(number){
    let candidate = number + 1;
    while (true){
        if (isPrime(candidate)){
            return candidate; 
        }
        candidate++; //pass eau nombre suivant
    }
}

// affichage
function displayNextPrime() {
    const arguments = getArguments();
    if (!isValidArguments(arguments) || (!areAllNumbers(arguments))){
        return;   
    }
    const number = Number(arguments[0]); //convertir l'argument en nombre 
    const result = findNextPrime(number);
    console.log(`le premier nombre premier supérieur à ${number} est : ${result}`);
}

displayNextPrime();

// Remarque romain 
// renomer les 

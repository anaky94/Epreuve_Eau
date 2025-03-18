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
function isValidArguments(arguments) { // cet finction n'est pas reutilisable cette fonction fait 2 truc elle controla la taille des argument et controle si l'argumen est un nombre 
// crer une fonction pour le 2em if 
    if (arguments.length === 0){
    console.error("ce script nécéssite 1 argument")
    return false;
    } else {
        return true;

    }
}

function isNotNumber (){
    if (isNaN(arguments.length){
        console.error("L'argument doit être un nombre ");
        return false;
    }
}

// resolution 
function firstNumber(number) {
    if (number <= 1) {
        return false; // 1 et les nombre négatifs ne sont pas premiers 
    }

    for (let i = 2; i <= Math.sqrt(n); i++){
        if  (n % i === 0 ){
            return false; // n'est divisible pas i donc pas premier
        }
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
function displayNexfirstNumber (){
    const args = getArguments();
    if (!isValidArguments(args))
        return;
    const n = Number(args[0]); //convertir l'argument en nombre 
    const resultat = displayNexfirstNumber(number);
    console.log(`le premier nombre premier supérieur à ${n} est : ${resultat}`);
}

display();

// Remarque romain 
// renomer les 

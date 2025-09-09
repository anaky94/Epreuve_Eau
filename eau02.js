/* Paramètre à l'envers
Créez un programme qui affiche ses arguments reçus à l’envers.
Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis
$> python exo.py ha ho
ho
ha
$> python exo.py “Bonjour 36”
Bonjour 36
Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Parsing
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments;
}

//Gestion d'erreur 
function isValidArguments(arguments) {
    if (arguments.length < 2) {
        console.error("ce script nécessite minimum deux arguments");
        return false;
    }
    return true
}



function getReversedStrings(strings) { //la function renverse la chaine de caractère
    const reversedArray = [];
    for (let i = strings.length - 1; i >= 0; i--){
        getReversedStrings.push(strings[i]);
    }
    return reversedArray ;
}

//Résolution
function displayReversedArguments() {

  const arguments = getArguments();

  if (!isValidArguments(arguments)){
    return
  }

  const  reversedArguments = getReversedStrings(arguments) 
  return reversedArguments

}

function displayArray(array) {
    for(const element of array){
        console.log(element)
    }
}

displayArray(getReversedStrings())






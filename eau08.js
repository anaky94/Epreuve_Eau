//Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!

// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

//Parsing 
function getArguments(){
    const arguments = process.argv.slice(2)
    return arguments;
}

//Gestion d'erreur
function validateArguments(arguments) {
    if (arguments.length !== 1){
        console.error("ce script nécéssite un arguments")
        return false;
    }
    return true
}

function validateArgumentsNotNumber() {
    if (!isNaN(parseFloat(args[0]))) {
        console.error("Error")
        return false
    }
    return true
}

//Utilitaires
function beginWordWithUpperCase() {

    const separatorRegex = [' ' ,'/t' ,'/n']; //Detecte les espace et tabulation comme separateur 
    const words = str.split(separatorRegex); //separe les chaines en mots
    let 
    const processeWords = words.map(word => {
        if (!word) return ""; //ignore les mots 

        return word.charAt(0).toUpperCase() + word.slice(1).tolowerCase();
    })  
    return processeWords.join(" "); // recombine avec des espaces 
}

//Resolution 

//Display
function display() {
    const args = getArguments();
    validateArguments(args);
    beginWordWithUpperCase(args);
}

display();

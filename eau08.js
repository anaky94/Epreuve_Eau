//Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!

// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

//Parsing 
function getArguments() {
    const arguments = process.argv.slice(2)
    return arguments
}
//Gestion d'erreur
function isValidArguments(arguments) {
    if (arguments.length === 0){
        console.error("Erreur : ce script nécéssite 1 argument")
        return false
    }
    return true
}

function validateArgumentsNotNumber() {
   for(let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === "number"){
            console.error("error")
            return false
        }
   }
   return true
}

//Utilitaires
function beginWordWithUpperCase(string) {
    const separators = [' ' ,'/t' ,'/n']
    let newString = ""

    for (let i = 0; i < string.length; i++){
        if (separators.includes(string[i-1])){
            newString += string[i].toUpperCase
        } else {
            newString += string[i].tolowerCase
        }

    }

    return newString 
}

//Resolution 
function resolveWordWithUpperCase() {
    const args = getArguments()
    if (!isValidArguments(args)){
        return 
    }

    const string = args[0]

    console.log(beginWordWithUpperCase(string))
}

//Display
 resolveWordWithUpperCase()


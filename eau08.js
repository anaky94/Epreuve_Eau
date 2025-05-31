// Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!

// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

//parsing 
function getArguments() {
    return process.argv.slice(2);  
}

//gestion d'erreur
function validateArguments(args) {
    if (args.length ==! 1){
        console.error("ce script nécéssite un arguments")
        process.exit(1);
    }

    if (!isNaN(args[0]) && args[0].trim() !==""){
        console.error("error");
        process.exit(1);
    }

    if (typeof str !== 'string'){
        console.error ("L'argument doit êtr être une chaine de caractères")

    }
    if (str.trim() === ""){
        return "";
    }
}

//resolution 
function beginWordWithUpperCase() {

    const separatorRegex = /[\s\t]/; //Detecte les espace et tabulation comme separateur 
    const words = str.split(separatorRegex); //separe les chaines en mots
    
    const processeWords = words.map(word => {
        if (!word) return ""; //ignore les mots 

        return word.charAt(0).toUpperCase() + word.slice(1).tolowerCase();
    })  
    return processeWords.join(""); // recombine avec des espaces 
}


//Display
function display(){
    const args = getArguments();
    validateArguments(args);
     beginWordWithUpperCase(args);

}

display();

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
}

//resolution 
function beginWordWithUpperCase() {
    //1 premier lettre de chaque mot d'une chaine de caractère en  maj les autre en minuscule 
    //les mots ne sont délimité / un espace, une etabulation 
    const worduppercase = args[0];

    for (let i = 0; i < beginWordWithUpperCase.length; i++){
        
    }


}


//Display
function display(){

}

display();

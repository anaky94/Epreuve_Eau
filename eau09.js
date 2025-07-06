 
// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true

// $> python exo.py “Bonjour 36”
// false

// Afficher error et quitter le programme en cas de problèmes d’arguments.

//Parsing
function getArguments(){
    return process.argv.slice(2);
}

//Gestion d'erreur
function validateArguments(args){
    if (args.length ==! 1){
        console.error ("ce script nécéssite un agruments")
        process.exit(1);

    }
    
    if (!isNaN(args[0]) && args[0].trim() !==""){
        console.log("true");
        
    } else {
        console.log("false")
    }
    
    if  (typeof str === 'string'){
        console.error ("l'argument doit  être un nombre")
        process.exit(1);
    }
}


//affichage
function display(args){
    args = getArguments();
    validateArguments(args);
}



display();
// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true
// $> python exo.py “Bonjour 36”
// false

// Afficher error et quitter le programme en cas de problèmes d’arguments.

function getArguments(){
    return process.argv.slice(2);
}

//gestion d'erreur
function validateArguments(){

    if(args.length ==! 1){
        console.error("ce script nécéssite un arguments");
        process.exit(1);
    }

    if (!isNaN(args[0]) && args[0].trim() !==""){
        console.error("error");
        process.exit(1);
    }

    if (typeof str !== 'string'){
        console.error ("L'argument doit êtr être une chaine de caractères")

    }
}


//resolution 
function noNumber(){
    constargs =getArguments
    if (typeof str !== 'string'){
        console.log("true") 
    }else {
        console;log("false")

    }
    //Premièrement 
    //Si la l'argument est un mot et une lettre console.log("erreur") 
    // si l'argurment est dofferent d'une d'un mot console.log("true ") 

}

noNumber();
/* Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !

$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments */

//Parsing 
function getArguments(){
    return process.argv.slice(2); 
}

//Gestion d'erreur 
function validateArguments(args){ 
    if (args.length <= 0 && args.length > 1){
        console.error("ce script nécéssite un argument")
        process.exit(1); 
    }

    if (!isNaN(args[0]) && args[0].trim() !== ""){
        console.error("Erreur les chiffre sont interdit")
        process.exit(1);
    }
}



//Resolution 
function resolve(){

    /*premier idé c'est d créer une boucle qui parcours lettre / lettre l'argument ecrit dans le terminal et si il rencontre une voyelle returner la voyelle en sorti de ma boucle une majuscule */
    
}


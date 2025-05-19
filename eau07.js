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
    const args = getArguments();
    // console.log(args)

    const chaineComplete = args.join(" ")
    // console.log(chaineComplete);
    
    
    for ( const letter of chaineComplete){
        if (args[0].length<args[2]){
            console.log(letter.uppercase())
        }
        console.log (letter ) // je veux afficher une majuscule une lettre / 2 
        //  si la premier lettre est < a la deuxiemme console.log(uppercase() la lettre inférieur tout en affichant toute les lettre )
       
    }

    console.log(letter);
    
}
    /*premier idée c'est de créer une boucle qui parcours lettre part lettre l'argument ecrit dans le terminal et si il rencontre une voyelle returner la voyelle en sorti de ma boucle une majuscule */
    
resolve();

// Affichage 
/* 
function display(){
      const args = getArguments();
    if (!validateArguments(args)){
        return
    }

} */ 

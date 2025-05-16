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
        

        console.log (letter ) // je veux afficher une majuscule une lettre / 2 
       
    }

    console.log(args.slice());
    
    // for (let i=0; i < args.length; i++){
    //     console.log(args.length.slice());
        ; //objctif de la condition si mon argument par une lettre metre la lettre en mmajuscule 
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

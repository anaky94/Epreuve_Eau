/* Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !

$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments */

//Parsing 
function getArguments() {
    return process.argv.slice(2); 
}

//Gestion d'erreur 
function validateArguments(args) { 
    if (args.length ==! 1){
        console.error("ce script nécéssite un argument")
        process.exit(1); 
    }

    if (!isNaN(args[0]) && args[0].trim() !== ""){
        console.error("Erreur les chiffre sont interdit")
        process.exit(1);
    }
}

//Resolution 
function letterOneOutOfTwo() {
    const firstArgument = args[0];
    let compteur = []; 
    
    for (let i = 0; i < firstArgument.length; i++){
        const letter = mot[i];
        if ( i % 2 === 0 ){
            compteur.push(letter.toUpperCase())
        } else {
            compteur.push (letter.toLowerCase())
        }
    }

    console.log(resultat.join("" ))  
}

    
// Affichage 
function display() {
    const args = getArguments();
    validateArguments(args);
    letterOneOutOfTwo(args);

} 

display();

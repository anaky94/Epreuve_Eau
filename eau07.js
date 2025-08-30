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

}

//Utilitises  
function letterOneOutOfTwo(strings) {
    
    let finalString = ""; 
    
    for (let i = 0; i < strings.length; i++){
        const letter = strings[i];
        if ( i % 2 === 0 ){
            finalString += (letter.toUpperCase())
        } else {
            finalString += (letter.toLowerCase())
        }
    }
    return finalString
}

//Resolution 
function toUppercase (char){
    return char.chartAt((chartCodeAt(char) - 32))
    
}
    
//Resolution 
function displaystringdUpper() {
    const args = getArguments();
    if (!validateArguments(args)){
        return
    }
    const string = letterOneOutOfTwo(args)
    console.log(string)
} 
//Affichage
displaystringdUpper()

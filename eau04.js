/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/


//Parsing
function getArguments () {
    const arguments = process.argv.slice(2);
    return arguments;
}

//Gestion d'erreur
function isValidArguments (arguments) { 
    const num = Number(arguments[0])
    if (isNaN(num)){
    console.error("l'argument doit être un nombre.")
    return false;
}
    if (num < 0 ){
        console.error(-1)
        return false
    }
    return true 
} 

function validArgumentLength(arguments) {
    if (arguments.length < 1){
        console.error("Ce script nécessite 1 argument.")
        return false
    }
    return true; 
}



//Utilitaire
function fibonacci(index) {
    let a = 0,  b = 1;
    for (let i = 2; i <= index; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b; 
}

// Resolution 
function chekIfFibonacci(arguments){
    return fibonacci(arguments[0])
}


// Afficher les resultats 
function display() {
    const args = getArguments();
    if (!isValidArguments(args)){
        return;
    }
    if (!validArgumentLength){
        return;
    }
  
    const index = Number(args[0]);

    console.log(fibonacci(index));
}
display();
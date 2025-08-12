 
// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true

// $> python exo.py “Bonjour 36”
// false

// Afficher error et quitter le programme en cas de problèmes d’arguments.

//Utilitaires 
function isNumber(str) {
    if (str.startsWith('-')){
        str = str.substring(1)

    }

    let compteur = 0;
    for (let i=0; i < str.length; i++){
        if(parseInt(str[i])) {
            compteur++
        }

        return str.length > 0; 
    }

    if (compteur ===str.length){
        return true
    }else {
        return false
    }
}

//Parsing
function getArguments(){
    const arguments = process.argv.slice(2)
    return arguments;
}

//Gestion d'erreur
function isValidArguments (arguments){
    if (arguments.length < 1){
        console.error ("ce scrpipt nécéssite un argurment")
        return false
    }
    return true 
}

//Resolution 
function chekIfNumber(arguments) {
    return isNumber(arguments[0])   
}

//Afficher le resultat 
function displayResult() {
    const arguments = getArguments()
    if (!isValidArguments(arguments))
        return 
    
    const isNum = chekIfNumber(arguments)
    console.log(isNum)
}
displayResult()
  

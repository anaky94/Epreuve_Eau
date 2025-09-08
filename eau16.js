
/* Eau OK  */

function getArguments(){
    const arguments = process.argv.slice(2)
    return arguments
}


//Gestion d'erreur
function isValidArguments (validArgumentLength){
    if (!validArgumentLength){
        console.error("Ce script nécéssite au moins un arguments")
        return false
    }
    return true
}
//Utilitises 
function endEau (choice){
    console.log(`j'ai terminer les épreuve de l'eau s'etait ${choice}`)
    return[];
}

//Resolution 
function display (){
    arguments = getArguments();

    const hasvalidLength = arguments.length >= 1 

    if (!isValidArguments(hasvalidLength)){
        return
    }

}

display();

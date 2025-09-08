/* Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo
$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//Parsing
function getArguments()
{
    const arguments = process.argv.slice(2)
    return arguments
}

//Utilitises
function sortTheElements(arguments){
    for(let i = 0 ; i < arguments.length; i++){
        for (let j = 0; j < arguments.length - i - 1; j++ ){
            //comparez les codes ASCII des élément sadjacents 
            if (arguments[j] > arguments[j+1]){
                //echangez les éléments si nécessaiez 
                [arguments[j], arguments[j+1]] = [arguments[j + 1 ], arguments[j]]
            }
        }
    } 
    return arguments;
}


//Gestion d'erreur 
function isValidArguments (validArgumentsLength){
    if(!validArgumentsLength){
        console.error("Ce script nécéssite au moins un arguments")
        return false
    }
    return true
    
}

//Résolution
function getSortTheElements() {
    const arguments = getArguments()
    const validArgumentsLength = arguments.length < 1

    if (!isValidArguments(validArgumentsLength)){
        return 
    }

    return sortTheElements(arguments);
    
}

// Display
function displayArray(array) {
    if (!array) return 

    for (const element of array) {
        console.log(element)

    }
} 

displayArray(getSortTheElements())
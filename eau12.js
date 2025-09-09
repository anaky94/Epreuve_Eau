// """ Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.
// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_bubble_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }
// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6
// $> python exo.py test test test
// error
// Afficher error et quitter le programme en cas de problèmes d’arguments.
// Wikipedia vous présentera une belle description de cet algorithme de tri.


// Revoire la fonction sortList() mettre un arguments 
// Revoir la finction display() mettre un arguments aussi 
// Mettre un systeme pour convertis les chaines de caractère en nombre 


//Parsing
function getArguments(){
    const arguments = process.argv.slice(2);
    return arguments 

}


//Utilitises 
function sortList(numberOfList) {
    const sortedArray = numberOfList.map(Number)

    for (let i = 0; i < sortedArray.length; i++){
        for( let j = 0; j < sortedArray.length - i - 1; j++){
            if (sortedArray[j] > sortedArray[j+1]){
                [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]]
            }
        }   
    }
    return sortedArray
}


 //Gestion d'erreur 
function isValidArguments (validArgumentsLength) {
    if (!validArgumentsLength){
        console.error("Ce script nécéssite au moins trois arguments ");
        return false
    }
    return true 
}

function hasInvalidNumbers (validArguments) {
    for (const argument of validArguments){
        if (argument.trim() === "" || isNaN(Number(argument))){
            console.error(`Erreur : "${argument}" n'est pas un nombre Valide`);
            console.info("Exemple : node script.js 4 5 12");
            return true // <-- quand ya une erreur 

        } 
    } return false // <-- quand c'est vrai 
}

//Résolution 
function getArgumentsSortlist() {
    const arguments = getArguments()
    
    const validArgumentsLength = arguments.length >= 3

    const validArguments = arguments

    if (!isValidArguments(validArgumentsLength)){
        return
    }
    if (!hasInvalidNumbers(validArguments)){
        return 
    }

    
    return sortList(arguments)
 
}

//Afficher le resultat 
function displayArray(array) {
    if (!array) return

    for (const element of array) {
        console.log(element)
    }
}


displayArray(getArgumentsSortlist())

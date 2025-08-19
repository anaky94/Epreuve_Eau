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
    
    for (let i = 0; i < numberOfList.length; i++){
        for( let j = 0; j < numberOfList.length - i - 1; j++){
            if (numberOfList[j] > numberOfList[j+1]){
                [numberOfList[j], numberOfList[j+1]] = [numberOfList[j+1], numberOfList[j]];
            }
        }   
    }
    return sortList
}


 //Gestion d'erreur 
function validateArguments (validArgumentsLength) {
    if (!validArgumentsLength){
        console.log("ce script nécéssite au moins trois arguments ");
        return false
    }
    return true 
}

function areAllNumbers (arguments) {
    for (const arg of arguments){
        if (arg.trim() ===""|| (isNaN(Number(arg)))){
            console.error(`Erreur : "${arg}" n'est pas un nombre Valide`);
            console.info("Exemple : node script.js 4 5 12");
            return 
        }
    }
}

//Résolution 
function getArgumentsSortlist() {
    const arguments = getArguments()
    
    const validArgumentsLength = arguments.length > 3

    if (!isValidArguments(validArgumentsLength)){
        return
    }

    const argumentsSortlist = sortList(arguments)

    return argumentsSortlist

}

//Afficher le resultat 
function display(){

    if (!validateArguments(args));
    if (!areAllNumbers(args));
    
    const sorted = sortList(args);
    console.log("Resultats triés; ",sorted.join(" "));
    }
   


display();

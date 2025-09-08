/* 
Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

Exemples d’utilisation :
$> python exo.py 
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

//parsing
function getArguments(){
    const arguments = process.argv.slice(2)
    return arguments 
    

}

//Gestion d'erreur
function isvalidArguments(validArgumentLength){
    if (!validArgumentLength){
        console.log("ce script nécéssite minimum deux arguments")
        return validArgumentLength
    }

}


function findFirstIndex(){
    const arguments = getArguments();

    const lastIndex = arguments.length - 1
    const lastArg = arguments[lastIndex]
   
  
    for (let i = 0; i < lastIndex; i++){
        if (arguments[i] === lastArg){
            return i; //trouvé 
        }
    }
    return -1; // non trouvé

}



//Resolution 
function getfindFirstIndex(){
    const arguments = getArguments()

    const validArgumentLength = arguments.length === 0
    
    if (!validArgumentLength(arguments) ){
        return
    }
    const findFirstIndex = getfindFirstIndex((arguments))

    return findFirstIndex
}

//Affichage
function displayIndex(){
    console.log(findFirstIndex());

}

displayIndex();
































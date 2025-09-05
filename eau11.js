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
function validArguments(validArgumentLength){
    if (!validArgumentLength){
        console.log("ce script nécéssite minimum deux arguments")
        return validArgumentLength
    }

}


function findFirstIndex(){
    const arguments = getArguments();
    validateArguments(arguments);


        lastArg = arguments [arguments.length-1]
   
  
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] === lastArg(arguments)){
            return i; //trouvé 
        }
    }
    return -1; // non trouvé

}


//Resolution 


function getfindFirstIndex(){
    
    if (validArgumentLength === 0 ){
        return -1
    }
}

//Affichage
function display(){
    console.log(findFirstIndex());

}

display();
































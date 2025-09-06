
function  getArguments(){
    const arguments = process.argv.slice(2)
    return arguments
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


findFirstIndex()

/* 
Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.
 */
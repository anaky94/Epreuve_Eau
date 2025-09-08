/* Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo
$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

function getArguments()
{
    const arguments = process.argv.slice(2)
    return arguments
}
//faire une fonction qui trnasforme chaque chaine de caracter representer en code ascci 

//résolution 
function sortTheElements(arguments){
    for(let i = 0 ; i < arguments.length; i++){
        for (let j = 0; j < arguments.length - i - 1; j++ ){
            //comparez les codes ASCII des élément sadjacents 
            if (args[j].charCodeAt(0) > args[j+1].charCodeAt(0)){
                //echangez les éléments si nécessaiez 
                [args[j], args[j+1]] = [args[j + 1 ], args[j]]; 
            }
        }
    } 
    return args;
}


//gestion d'erreur 
function validateArguments (args){
    if(!args || args.length === 0){
        console.log("erreur: Aucun argument fourni");
        return [];
    }
}

function display (){
    args = getArguments();

    if (!validateArguments(args));
    // if (!areAllNumbers(args));

    const sorted =  sortTheElements(args);
    console.log(sorted.join(""));
}

display(); 
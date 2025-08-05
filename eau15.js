/* Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo
$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

function getArguments(){

    const args = process.argv.slice(2);
    return args; 
}


//résolution 
function sortTheElements(args){
    for(let i = 0 ; i < args.length; i++){
        for (let j = 0; j < args.length - i - 1; j++ ){
            //comparez les codes ASCII des élément sadjacents 
            if (args[j].charCodeAt(0) > args[j+1].charCodeAt(0) ){
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

// function areAllNumbers (args){
//     for (const arg of args){
//         if(arg.trim() === ""|| (isNaN(Number(arg)))){
//             console.error("Erreur ce n'est pas un nombre valide");
//             process.exit(1);
//         }
//     }
// }
function display (){
    args = getArguments();

    if (!validateArguments(args));
    // if (!areAllNumbers(args));

    const sorted =  sortTheElements(args);
    console.log(sorted.join(""));
}

display(); 
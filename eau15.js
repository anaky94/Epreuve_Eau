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

//gestion d'erreur 
// function isValideArguments(){
//     if (args.length === )
    
    
    
// }

//résolution 
function sortTheElements(args){
    for(let i= 0 ; i < args.length; i++){
        for (let j= 0; j < args.length - i - 1; j++ ){
            if (args[j].charCodeAt(0) < args[args.length].charCodeAt(0)){
            }
            if (args[j] ==! args[j+1].charCodeAt(0) ){
                args = j

            }
            
        }

    }

}

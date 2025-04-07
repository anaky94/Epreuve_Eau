/*  String dans string
Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.
Exemples d’utilisation :
$> python exo.py bonjour jour
true
$> python exo.py bonjour joure
false
$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


//le parsing
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments;
}

//la Gestion d'errer
function isValideArguments(arguments){
    if(arguments.length =! 1 ){
        console.error("ce script nécéssite 1 argument")
        return false;
    };
    return true 
} 


function areAlleNumbers() {
    for (let i = 0; i<arguments.length; i++){
        if(str(arguments[i])){
            console.error("ce script cécessite des lettre en arguments ")
            return false;
        }
    }
    return true;
}

function resolve(){
    while(true){
        const firstLetter = 0;
        const secondLetter = 0;
         for (let )
    
    }
}

// function bonjour (a,b){
//     const args = process.argv.slice(2);
//     if (args[0]===args[1])
//         console.log(args[0],args[1]);
//     else 
//         {
//             return args;
//         }
    
// }

// bonjour("bonjor","jour")

// //la résolution
//  //afficher les résultat 

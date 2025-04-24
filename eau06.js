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


// le parsing
// function getArguments() {
//     const args = process.argv.slice(2);
//     return args;
// }

// //la Gestion d'errer
// function isValideArguments(arguments){
//     if(arguments.length =! 1 ){
//         console.error("ce script nécéssite 1 argument")
//         return false;
//     };
//     return true 
// } 

// function areAlleNumbers() {
//     for (let i = 0; i < arguments.length; i++){
//         if (str(arguments[i])){
//             console.error("ce script cécessite des lettre en arguments ")
//             return false;
//         }
//     }
//     return true;
// }

// function resolve(args){

//         const firstArg = args[0];
//         const secondArg = args[1];
        
//         for ( let firstArg = 0; i <= firstArg.length; i++ ){
//             for(let secondArg = 0; i <= secondArg.length; i++ ){
//                 if(firstArg === secondArg) {
//                     return true
//                 } else false            
//             }
//         }  
    
// // };


// resolve();

// premier élément c'est savoir quand je parcours les lettre de l'argments[0] si ces lettre son similaire à l'arguments [1] afficher true sinon false

//voir pour faire une deuxiemme boucle
//

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

function getArguments() {
    const args = process.argv.slice(2);
    return args;
}

const args = getArguments();
const firstArgument = args[0] 
const secondArgument = args[1]

if (firstArgument && secondArgument && length.firstArgument === length.secondArgument)
    console.log (true)
    else{
        console.log(false )
    } 
    // console.log(firstArgument, secondArgument,); 




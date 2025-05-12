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
function getArguments() {
    const args = process.argv.slice(2);
    return args;
     
}

//la Gestion d'errer
function isValideArguments(args){
    if(args.length !== 2 ){
        console.error("Erreur : ce script nécéssite 2 arguments");
        process.exit(1);
    }
    const firstArgument = args[0]; 
    const secondArgument = args[1];

    return {firstArgument,secondArgument};
} 

//
function main (){
    // Etape 1: de recupération
    const rawArgs = getArguments();// ["hello" ,"ell" ] (non vérifiés)

    //Etape 2 : Validation/netoyage
    return {firstArgument,secondArgument} = isValideArguments(rawArgs);

    //Etape 3 : Logique principale
    if (firstArgument.incleudes(secondArgument)){
        console.log(true)
    }else{
        console.log(false)
    }
}   

function display (){

}




// resolve();

// premier élément c'est savoir quand je parcours les lettre de l'argments[0] si ces lettre son similaire à l'arguments [1] afficher true sinon false


// //la résolution
//  //afficher les résultat 


// determiner si la taille de la premier chaine est < à la taille de la 2eme chaine retourner false.

//dans une boucle determiner si la taille du premier arguments ets - que la taille du second arguments  + 1 avec un if : (qui consiste à dire que si l'index du premier argument == à l'index du 2em argument return true )





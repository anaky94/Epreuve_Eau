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
function getArgument(){
    const args = process.argv.slice(2);
    return args;
}

//la gestion d'errer
function isValideArguments(args){
    if(args.length != 1){
        console.error("ce script nécéssite 1 argument")
    };
} 
function bonjour (a,b){
    const args = process.argv.slice(2);
    if (args[0]===args[1])
        console.log(args[0],args[1]);
    else 
        {
            return args;

        }
    
}

bonjour("bonjor","jour")

//la résolution
 //afficher les résultat 

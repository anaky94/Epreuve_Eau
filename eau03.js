/* Paramètre à l'envers
Créez un programme qui affiche ses arguments reçus à l’envers.
Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis
$> python exo.py ha ho
ho
ha
$> python exo.py “Bonjour 36”
Bonjour 36
Afficher error et quitter le programme en cas de problèmes d’arguments.

 */
//parsing
const args = process.argv.slice(2);

if (errorArgs(args)){
    console.error("erreur ce script nécessite minimum 2 arguments")
}


if (not errorArgs){
    console.log()
}
// Gestion d'erreur 
function errorArgs(){
    if(args.length <= 1){
        console.error("ce script nécessite minimum 2 arguments");
        process.exit(); // Sujestion : diviser lla premier condition et le lancerment de la condition reverseArguments().join(" "); 
    }else {
         console.log(reverseArguments().join(" "));
    }
}

// résolution
function reverseArguments(){
    const reverseArgs=[];
    for(let i = args.length-1; i>=0; i--){
        reverseArgs.push(args[i]);
    }
    return reverseArgs;
    
}

//Affichage 
errorArgs();


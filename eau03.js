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
const getArgument = () => {
    const args = process.argv.slice(2);
    return args;
}

// Gestion d'erreur 
const  errorArgs = () => {
    if (args.length <= 1) {
        console.error("ce script nécessite minimum 2 arguments");
        process.exit(); 
    }
    return false;
}

// résolution
const reverseArguments = () => {
    const reverseArgs = [];
    for(let i = args.length-1; i>=0; i--){
        reverseArgs.push(args[i]);
    }
    return reverseArgs;
}

const main = () => {
    errorArgs();
    console.log(reverseArguments().join(" "));
}
//Afficher le resultat
main();


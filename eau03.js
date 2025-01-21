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
const arguments = process.argv.slice(2);

if(arguments.length ===0){
    console.log("Aucun argument");
}else {

        // console.log(arguments.join(' '));
      
        const argumentsInverses=[];
        for(let i = arguments.length-1; i>=0; i--){
            argumentsInverses.push(arguments[i]);
        }
    console.log(argumentsInverses.join(' '));
}



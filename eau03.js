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

function getArgument () {
    const args = process.argv.slice(2);
    return args;
}

// Gestion d'erreur 
function isValideArguments (args) {
    if (args.length >= 1) {
        return true;
    }else {
        console.error("ce script nécessite minimum 2 arguments");
        return false;

    }
}

// résolution
function resolve () {
    const args = process.argv.slice(2);//recupération des arguments

    if(!isValideArguments(args)){//vérification des arguments 
        return;
    }

    const reverseArgs = [];
    for (let i = args.length - 1; i >= 0; i--){
        reverseArgs.push(args[i]);
    }
    return reverseArgs;
}

// resolve();

//Afficher le resultat
function display() {
    const args = getArgument();
    if (!isValideArguments(args)){
        return;
    }

    const result = resolve();
    if (result) {
        console.log(result.join(" "));

    }
}
display();



// function secnAray (){
//     const array = ["je ", "suis", "drole","et"]
//     const Newarray =[];
//     for( let i=array.length-1; i>=0; i-- ){
//         Newarray.push(array[i]);
//         console.log(Newarray.join(', '));
//     }

// }

// secnAray(); 
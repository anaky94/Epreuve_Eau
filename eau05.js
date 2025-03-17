/* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.
Exemples d’utilisation :
$> python exo.py 14
17
$>
Afficher -1 si le paramètre est négatif ou mauvais.
 */

//Parsing 
function getArgument() {
    const args = process.argv.slice(2);
    return args;
}

//gestiond'erreur
function isValideArguments(args) {
    if (args.length === 0){
    console.error("ce script nécéssite 1 argument")
    return false;
    }
    if(isNaN(args[0])){
        console.error("L'argument doit être un nombre ");
        return false;
    }
    return true;
}

// resolution 
function nombrePremier(n) {
    if (n <= 1) {
        return false; // 1 et les nombre négatifs ne sont pas premiers 
    }

    for (let i = 2; i <= Math.sqrt(n); i++){
        if  (n % i === 0 ){
            return false; // n est divisible pas i donc pas premier
        }
    }
    return true; //n ets premier
}

//trouver le ppremier nombre sup à n 
function premierNombreSuperieur(n){
    let nombre = n + 1;
    while (true){
        if (nombrePremier(nombre)){
            return nombre; // retourne le premier nombre premier toruvé
        }
        nombre++; //pass eau nombre suivant
    }
}

// affichage
function display (){
    const args = getArgument();
    if (!isValideArguments(args))
        return;
    const n = Number(args[0]); //convertir l'argument en nombre 
    const resultat = premierNombreSuperieur(n);
    console.log(`le premier nombre premier supérieur à ${n} est : ${resultat}`);
}

display();

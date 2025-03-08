/* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.
Exemples d’utilisation :
$> python exo.py 14
17
$>
Afficher -1 si le paramètre est négatif ou mauvais.
 */
//Parsing 
function getArgument () {
    const args = process.argv.slice(2);
    return args;
}

//gestiond'erreur
function isValideArguments(args){
            if (args.length === 0){
                console.error("ce script nécéssite 1 argument")
                return false;
            }
    
}

// resolution 
function nombrePremier (n) {
    if (n === 1) {
        return("nombre")
    }; 

    if (n <= 0){
        return -1
    }
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if  (n%i === 0 ){
            console.log(n, "nest pas un nombre premier");
            console.log(i);
        }
    }
    console.log(n)
}
// affichage
function display (){
    const result = nombrePremier();
    return result
}

display();

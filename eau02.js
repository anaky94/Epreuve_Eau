/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/

//Parsing 
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments
}

//Gestion d'erreur : 
function isValideArguments (arguments) {
    if (arguments.length === 0){
        return true
    }else{
        console.error("ce script ne nécessite pas d'arguments")
        return false
    };
} 

//Utilitise
function getCumbin() {
    const combinanison = [];
    for (let i = 0; i <= 100; i++){
        for (let j = i + 1; j <= 100; j++){    
            combinanison.push( 
                `${i.toString().padStart(2, '0')} ${j.toString().padStart(2, '0')}`);
          }
    }
    return combinanison.join(', ');
}

//Résolution
function CreatCumbin() {
    const arguments = getArguments()
    if (!isValideArguments(arguments)){
        return
    }    
}

//Affichage
function display () {
 const result = getCumbin();
 console.log(result);
}
display(); 
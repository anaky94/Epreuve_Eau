/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
function getArguments () {
    const args = process.argv.slice(2);
    return args
}
// gestion d'erreur : 
function isValideArguments (args) {
    if (args.length === 0){
        return true
    }else{
        console.error("ce script ne nécessite pas d'arguments")
        return false
    };
} 
//Résolution
function geerateCombin (min=0, max=100) {
    const combinanison = [];
    // validation des paramètres 
    if (min < 0 || max > 100 || min >= max){
        console.error("Les paramètres doivent être entre 0 et 99, et min doit être inférieur à max");
        process.exit();
    }
    for (let i = min; i <= max; i++){
        for (let j = i + 1; j < max; j++){    
                    combinanison.push( 
                        `${i.toString().padStart(2, '0')} ${j.toString().padStart(2, '0')}`);
          }
    }
    return combinanison.join(', ');
}
//partis 4 affichage
function display () {
 const args = getArguments();
 if (!isValideArguments(args)){
    return args
}

 const result = geerateCombin();
 console.log(result);
}
display(); 
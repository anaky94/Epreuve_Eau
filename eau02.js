/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
//parsing
const args = process.argv.slice(2);
// gestion d'erreur : 
function errorArgv(){
    if (args.length>0){
        console.error("erreur l'argument n'est pas nécéssaire pour ce script");
        process.exit();
    }else {
        console.log(generationCombinaisons());
    }
}
//Résolution
function generationCombinaisons (min=0, max=100) {
    const combinanison = [];
    // validation des paramètres 
    if (min < 0 || max > 100 || min >= max){
        console.error("Les paramètres doivent être entre 0 et 99, et min doit être inférieur à max");
        process.exit();
    }
    for (let i= min; i <= max; i++){
        for (let j =i +1; j<max; j++){    
                    combinanison.push( 
                        `${i.toString().padStart(2, '0')} ${j.toString().padStart(2, '0')}`);
          }
    }
    return combinanison.join(', ');
}
//partis 4 affichage
errorArgv(); 
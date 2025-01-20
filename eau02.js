/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
const generationCombinaisons =(min=0, max=99) => {
    const combinanison = [];

}

// validation des paramètres 
if (min<0 || max > 99 || min >= max){
    console.log("Les paramètres doivent être entre 0 et 99, et min doit être inférieur à max")
}

//génération des combinaisons
for (let i= min; i <= max; i++){
    for (let j =i +1; j<max; j++)
        combinations.push( `${}`)
}git add 
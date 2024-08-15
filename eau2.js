/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
let a =0;
let b=0;
let c=0;
let d=0;
for(let a =0; a<10;){
    for(let b=0; b<10;){
        for(let c=0;c<10;){
            for(let d=0; d<10;){
                console.log(a&b, b&c)
            }

        }
    }
}
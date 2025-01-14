/* Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
// let a =0;
// let b=0;
// let c=0;
// let d=0;
// for(let a = 0; a < 10 ;){
//     for(let b=0; b<10;){
//         for(let c=0;c<10;){
//             for(let d=0; d<10;){
//                 console.log(a&b, b&c)
//             }

//         }
//     }
// }

const  Combin = () => {
    let result = "";
    for (let i=0; i<=10; i++){
        for (let j = i + 1; j <=10; j++){
                result += `${i}${j},`;
            
            
        }
        
    }
    return result.slice  (0,-1);
    
    const errreuAvecArgument = () => {
        if (process.argv[2]){
            console.log("Erreur ; L'argument n'est pas nécessaire pour ce script")
    
        }else {
            console.log(Combin())
        }
    };
}
console.log(Combin());
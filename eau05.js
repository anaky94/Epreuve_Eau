/* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.
Exemples d’utilisation :
$> python exo.py 14
17
$>
Afficher -1 si le paramètre est négatif ou mauvais.
 */
const arguments = process.argv.slice(2);

function nombrePremier(n){
    if (n<=1) {
        console.log("est un nombre premier")
    };
    for(let i =2; i <=Math.sqrt(n); i++){
        if  (n%i ===0 ){
            console.log(n, "nest pas un nombre premier");
            console.log(i);
        }
    }
    console.log(n)
}

nombrePremier(arguments[2]);


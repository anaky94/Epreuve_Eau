/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/
const arguments = process.argv.slice(2)

// gestion d'erreur
function errorArgs(){
    if (arguments.length ===0){
        console.log("veillez fournir un nombre  au dessus de zero");
    }else {
        const n = parseInt(arguments [0]);
        if (isNaN(n)){
            console.log("-1");
        }else if (n<0){
            console.log("-1");
        }
    }
}
//resolution 
function fibonacci (n){
    if (n<=1) return n
    return fibonacci(n-1) + fibonacci(n-2);
}
function main (n){
    errorArgs();
    // console.log("suite de Fibonacci: ");
    // for (let i=0; i<=n; i++){
        console.log(`F(${n}) =  ${fibonacci(n)}`);
        //}
    }
    
// afficher les resultats 
main();
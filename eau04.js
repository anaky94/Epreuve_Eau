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
if (arguments.length ===0){
    console.log("veillez fournir un nombre en argument");
}else {
    const n = parseInt(arguments [0]);
    
    if (isNaN(n)){
        console.log("veuillez fournir un  nombre valide");
    }else if (n<0){
        console.log("veuillez fournir un nombre positif");
    }else {
        // console.log("suite de Fibonacci: ");
        // for (let i=0; i<=n; i++){
            console.log(`F(${n}) =  ${fibonacci(n)}`);
            
        }
        // }
        
    }
    
    
    
    // resolution 
    function fibonacci (n){
        if (n<=1) return n
        return fibonacci(n-1) + fibonacci(n-2);
    }
    

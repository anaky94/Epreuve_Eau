/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/
const arguments = process.argv.slice(2)

function fibonacci (n){
    if (n<=1) return n 
    return fibonacci(n-1) + fibonacci(n-2)
}

// fibonacci(arguments(n))
console.log(fibonacci(1))
/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/
const getArguments = (args) => {
    const args = process.argv.slice(2);
    return args;
};

// gestion d'erreur
const isValdieArguments = () => {
    if (arguments.length <= 0){
        return -1
    }
       const n = parseInt(arguments [0]);
        if (isNaN(n)){
            console.log("-1");
        }else if (n<0){
            console.log("-1");
        }
    
};

//resolution 
const fibonacci = (n) => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// afficher les resultats 
const display = (n) => {
    const display = getArguments(args);
    if (!isValdieArguments(args)){
        return display;
    }
    // console.log("suite de Fibonacci: ");
    // for (let i=0; i<=n; i++){
    console.log(`F(${n}) =  ${fibonacci(n)}`);
        //}
    };

main();
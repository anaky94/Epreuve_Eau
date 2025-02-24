/*
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/
function getArguments () {
    const args = process.argv.slice(2);
    return args;
};

// gestion d'erreur
function isValdieArguments (args) {
    if (args.length <= 0){
        return -1
    }
    const n = parseInt(args [0]);
    if ( isNaN(n) ){
        console.log("-1");
    }else if ( n < 0 ){
        console.log("-1");
    }
    
};

//resolution 
function fibonacci  (n) {
    if (n <= 1) {
        return n
    }else {
        return fibonacci(n-1) + fibonacci(n-2);
    } 

    console.log()


    
    // const a = 0,  b = 1;
    // for (let i = 2; i<=n; i++ ){
    //     let c = a + b;
    //     a = b;
    //     b = c;
    // }
    // return b; 
};

// afficher les resultats 
function display (n) {
    const args = getArguments();
    if (!isValdieArguments(args)){
        return;
    }
    // console.log("suite de Fibonacci: ");
    // for (let i=0; i<=n; i++){
    console.log(fibonacci(n));
        //}
    };

display();
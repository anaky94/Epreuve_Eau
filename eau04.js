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
function isValiedArgumentOfNumber (argumentslength){

}

function (stringsNumbeer 
    if (isNaN(args[0])){
    console.error("l'argument doit être un nombre.")
    return false;
}

}
    if (args.length === 0){
        console.error("ce script nécéssite 1 argument")
    return false;
}    

return true;
}

//resolution 
function fibonacci (n) { 
    let a = 0,  b = 1;
    for (let i = 2; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b; 
};

// afficher les resultats 
function display () {
    const args = getArguments();
    if (!isValideArguments (args)){
        return;
    }
    // console.log("suite de Fibonacci: ");
    // for (let i=0; i<=n; i++){
        //}
    const n = Number(args[0]);

    console.log(`${fibonacci(n)}`);
}
display();
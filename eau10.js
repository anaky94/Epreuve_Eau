
// """
// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


// Exemples d’utilisation :
// $> python exo.py 20 25
// 20 21 22 23 24


// $> python exo.py 25 20
// 20 21 22 23 24

// $> python exo.py hello
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

// """
// # demander a l'utilisateur de rentré un chiffre 
// # l'utilisateur doit voir affichée toutes les valeurs comprise entre deux nombres dans l'ordre croissant min in clus et max inclus 
// # faire  une boucle qui aaffiche toute les valeurs entre deux nombre dans l'ordre croissant ou une condition ou les deux 

//parsing
function  getArguments(){
    return process.argv.slice(2);

}


//gestion d'erreur 
function validateArguments (args){
    if (args.length ==! 1){
        console.log("ce script nécéssite un arguments")
        precess.exit(1);
    }

    if (typeof str === 'string'){
        console.log("l'argument doit être un nombre")
        process.exit(1);
    }
    
}


//rsolution 
function digitalSeries() {
    let max=args[0]
    let min = args[1]
    for(let i = max; i <= min; i++){
        console.log(i)
    }

}

//résolution 
function display (args){
    args = getArguments();
    validateArguments(args);
    digitalSeries(args)
}


display();
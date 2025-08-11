
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


//parsing
function  getArguments(){
    return process.argv.slice(2);

}


//gestion d'erreur 
function validateArguments (args){
    if (args.length !== 2){
        console.log("ce script nécéssite deux arguments")
        process.exit(1);
    }


    const nums = args.map(Number);
    if (nums.some(isNaN )){
        console.error("erreur : arguments doivent être des nombres");
        process.exit(1);
    }
    return nums;

}


//Résolution 
function digitalSeries(num1, num2) {
    const [min,max] = [Math.min(num1, num2), Math.max(num1,num2)]
    for(let i = min; i <= max; i++){
        console.log(i);
    }

    retrun 

}

//Affichage
function display (){
    const [num1, num2] = validateArguments(getArguments());
    digitalSeries(num1,num2);
    return
}


display();
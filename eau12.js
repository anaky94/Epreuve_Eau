// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
// Exemples d’utilisation :
// $> python exo.py 5 1 19 21
// 2

// $> python exo.py 20 5 1 19 21

// $> python exo.py -8 -6 4
// # par la boucle for parcourir le tableau et afficher le le nombre mini dans ce tableau 
// # afficher le minimum entre lindex 3 du tableau et l'index 2
//      afficher le minimum
//     # afficher  le minimum entre lindex 1 du tableau et l'index 0
//         afficher le minimum
// afficher le minimum entre le resulta de l'index 3 et 2 et le result de l'index de l'index 1 et 0 

            

function getArguments (){
    return process.argv.slice(2);
}


//function
function findSpecialValue () {
    const nombres = getArguments();
    validateArguments(nombres); // ajout de la validation
    const tableauTrié = nombres.map(Number).sort((a,b) => a-b);
    let minDiff = Infinity;

    for (let i = 0; i < tableauTrié.length - 1; i++){
        const diff =  tableauTrié[i+1] - tableauTrié[i];
        if (diff < minDiff){
            minDiff = diff
        }    
    }
    return minDiff
 
}

//Gestion d'erreur
function validateArguments(arguments){
    if (arguments.length < 3){
        console.error("ce script nécéssite au moins  deux arguments");
        process.exit(1);
    }

    for (const arg of arguments){
        if (isNaN(Number(arg))){
            console.error(`Erreur  : "${arg}" n'est pas un nombre valide`);
            process.exit(1);
        }
    }
}


// //Affichage
function display(arguments){
    const args = getArguments();
    
    validateArguments(arguments);

    console.log(findSpecialValue());
}

display();

// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

// Exemples d’utilisation :
// $> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
// 6


// $> python exo.py test test test
// 0

// $> python exo.py test boom
// -1

// Afficher error et quitter le programme en cas de problèmes d’arguments.

// """
//parsing
function getArguments(){
    return process.argv.slice(2);
    

}

//gestion d'erreur
function validateArguments(args){
    if (args.length < 1){
        console.log("ce script nécéssite au moins 2 un arguments")
        process.exit(1);
    }

}


function findFirstIndex(){
     const args = getArguments();
    // 1 recupérer tout les arguments 
    validateArguments(args);

    const searchElement = args.pop();
    // 2 isoler le dernier mot Séparer le tableau et l'élément recherché 

    //3 parcourir le tableau 

    for (let i = 0; i < args.length; i++){
        if (args[i] === searchElement){
            return i; //trouvé 
        }
    }
    return -1; 

}

//Affichage
function display(){
    findFirstIndex();

}


display();
































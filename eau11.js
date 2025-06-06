
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
    const searchElement = args.pop(); 

}

//gestion d'erreur
function validateArguments(args){
    if (args.length !== 1){
        console.log("ce script nécéssite un argument")
        process.exit(1);
    }

}


function findFirstIndex(){
    // 1 recupérer tout les arguments 

    // 2 isoler le dernier mot Séparer le tableau et l'élément recherché 

    //3 parcourir le tableau 
    const rechercher = args
    for (let i = 0; i < tableau.length; i++){
        
        if(rechercher < tableau.length){
            return i; //trouvé 
        }
    }

}
































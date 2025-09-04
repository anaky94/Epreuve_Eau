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

            
//Parsing
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments 
}


//Utilitises
function findSpecialValue (Mindestunterschied) {
    const smallNumber = Mindestunterschied.map(Number).sort(a,b =>a-b)
    const minDiff = Infinity

    for (let i = 0; i < smallNumber.length - 1; i++){
        const diff =  smallNumber[i+1] - smallNumber[i];
        if (diff < minDiff){
            minDiff = diff
        }    
    }
    return smallNumber
}

//Gestion d'erreur
function validateArguments(validArgumentsLength){
    if (!validArgumentsLength){
        console.error("ce script nécéssite au moins  deux arguments");
        return false
    }
    return true 
}

function hasInvalidNumbers (validArguments){
    for (const argument of validArguments){
        if (argument.trim() === "" || isNaN(Number(argument))){
            console.error(`Erreur : "${arguments}" n'est pas un nombre valide`)
            console.info("Exemple : node script.js 4 5 12");
            return true
        }
    } return false
}


//Resolution 
function getArgumentsSpecialValue() {
    const arguments = getArguments()

    const validArgumentsLength = arguments.length >= 3

    const validArguments = arguments

    if(!validArguments(validArgumentsLength)){
        return
    }
    if(!hasInvalidNumbers(validArguments)){
        return 
    }

    return  findSpecialValue(arguments)
}

//Affichage
function displayArray(array) {
    if (!array) return 

    for (const element of array){
        console.log(element)
    }
}

displayArray(getArgumentsSpecialValue())
/* 
Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.

Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24
$> python exo.py 25 20
20 21 22 23 24
$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

//parsing
function  getArguments(){
    const arguments = process.argv.slice(2)
    return arguments
}


//Gestion d'erreur 
function isvalidArguments (validArgumentLength){
    if (!validArgumentLength){
        console.log("ce script nécéssite minimum deux arguments")
        return validArgumentLength;
    }

}

function isvalidArgumentsNotStrings() {
    for (let i =0; i < arguments.length; i++){
        if (typeof arguments[i] === "string"){
            console.error("error")
            return false
        }
    }
    return true
}

function digitalSeries(num1, num2) {
    const [min,max] = [Math.min(num1, num2), Math.max(num1,num2)]
    for(let i = min; i <= max; i++){
        console.log(i);
    }
    retrun 
}

//Résolution 
function getSeriesArguments() {
    const arguments = getArguments()

    const validArgumentLength = arguments.length < 2 

    if (!isvalidArguments(validArgumentLength)){
        return 
    }
    if (!isvalidArgumentsNotStrings(arguments)){
        return
    }
    const digitalSeriesArguments = getSeriesArguments(arguments)

    return digitalSeriesArguments
}

//Affichage
function displayDigitalSeries() {
    const [num1, num2] = validateArguments(getArguments());
    digitalSeries(num1,num2);
    return
}


displayDigitalSeries();
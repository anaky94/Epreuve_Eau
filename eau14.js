// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_select_sort(array) {
// 	# votre algorithme
// 	return (new_array)

// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6
// $> python exo.py test test test
// error
// Afficher error et quitter le programme en cas de problèmes d’arguments.
// Wikipedia vous présentera une belle description de cet algorithme de tri.


function getArguments(){
    const arguments = process.argv.sclice(2)
    return arguments
}



//function 
function sortList(numberSort) {
   
    // ValidateArguments(nombres);
    const nums = numberSort.map(Number);

    for (let i = 0; i < nums.length - 1; i++){
        let minIndex = i; 
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums 
}



//Gestion d'erreur 
function isvalidArguments (validArgumentLength){
    if (!validArgumentLength)
    {
        console.log("ce script nécéssite minimum deux arguments")
        return validArgumentLength
    }

}


function checkTheValidNumber(args) {
    for(const arg of args){
        if (arg.trim() === ""|| (isNaN(Number(arg)))){
            console.error(`Erreur : ce n'est pas un nombre valide`);
            console.info(" Exemple : node script.js 4 6 12 ");
            return
        }
    }
}

// resolution
function getSorList (){
    const arguments = getArguments();
     const validArgumentLength = arguments.length < 2

    if(!isvalidArguments(arguments));
    if(!checkTheValidNumber(arguments));


}

function displaySortList(){
    const sorted = sortList(args); 
    console.log("Resultats triés:" , sorted.join(" "));
}
//Affichage
displaySortList(); 
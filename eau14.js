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
    return process.argv.slice(2);

}

//function 
function sortList (){
    const nombres = getArguments();
    // ValidateArguments(nombres);

    const nums = nombres.map(Number);

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 0; j < nums.length - i - 1; j++){
            if(nums[j] > nums[j + 1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
}


//gestion d'erreur 
function validateArguments (args){
    if(args.length < 3 ){
        console.log("ce script nécéssite au moins trois arguments ");
        process.exit(1);
    }
}


function areAllNumbers(args) {
    for(const  arg of args){
        if (arg.trim() === ""|| (isNaN(Number(arg)))){
            console.error(`Erreur : "${arg}" n'est pas un nombre valide`);
            console.info(" Exemple : node script.js 4 6 12 ");
            process.exit(1);
        }
    }
}

function display (){
    args = getArguments();

    if(!validateArguments(args));
    if(!areAllNumbers(args));

    const sorted = sortList(args); 
    console.log("Resultats triés:" , sorted.join(" "));

}

//Affichage
display();
// """ Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.
// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_bubble_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }
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
    validateArguments(nombres);

    //conversion en nombre 
    const nums = nombres.map(Number)

    for (let j = 0; j < nums.length; j++){
        for( let j = 0; j < nums.length - i - 1; j++){
            if (nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }   
    }
    return nums;
}


console.log(sortList())


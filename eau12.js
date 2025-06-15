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

// def trie():
//     i = ["-13", "3", "7", "19" ]

//     for k in range(len(i) - i):
//         for j in range (k +1, len(i)):
//             if i[k] > i[j]:
//                 i[k], i[j] = i[j], i[k]
            

function getArguments (){
    return process.argv.slice(2);
}


//function
function sortElement (arr){

    const tabl = [...arr]; 
    for (let i=0; i<tabl.length; i++){
        for (let j = 0; j<tabl.length-i-i; j++){
            if()
            if()
        }
    }
    for (let i = 0;  i < tabl.legnth; i++ ){
        for(let j=0; j<tabl.length -i-1; j++){
            if(tabl[j] > tabl[j+1]) {
                let temp = tabl[j];
                tabl[j] = tabl[j+1];
                tabl[j+1] = temp;
            }
        }
    }
}
//gestion d'erreur
function validateArguments(){

}


//affichage
function display(){
    const args = getArguments();

    dif (!displayBetweenTwoElement(args)){
        return 
    }
    console.log(displayBetweenTwoElement(args))

}

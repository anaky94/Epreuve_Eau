
// const args = process.argv.slice(2)

// const  nombre = args[0];

// for (let i=0 ; i< nombre.length; i++){
//     if (nombre[i] % 2 == 0){
//         console.log(nombre[i] ,"est paire")
//     }else {
//         console.log(`${nombre[i]} est impaire`)
//     }
// }
const nombre  = [0,23,23,211];
let max= nombre[0];
let min = nombre[0] 

for (let i= 1; i < nombre.length; i++){
    if (nombre[i]>max){
        max = nombre[i]
        console.log(max)
    }
    if (nombre[i]<min){
        min = nombre[i]
        console.log(min )
    }
}

function  getArguments(){
    const arguments = process.argv.slice(2)
    return arguments
}



function findFirstIndex(){
    const arguments = getArguments();

    const lastIndex = arguments.length - 1
    const lastArg = arguments[lastIndex]
   
  
    for (let i = 0; i < lastIndex; i++){
        if (arguments[i] === lastArg){
            return i; //trouvé 
        }
    }
    return -1; // non trouvé

}


console.log(findFirstIndex("test", "boom"))


function nombrePremier (n) {
    if (n === 1) {
        return("nombre")
    }; 

    if (n <= 0){
        return -1
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if  (n%i === 0 ){
            n=n+1
            console.log(i);
        }
        if (n ===2){
            console.log("premier")

        }else 
        {
            console.log() // afficher ici 
        }
    }
    
}
nombrePremier(14)
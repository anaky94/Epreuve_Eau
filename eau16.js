


function getArguments(){
    return process.argv.slice(2);
}


// gestion d'erreur
function validateArguments (args){
    if (!args || args.length ===0){
        console.log("erreur : aucun agument fournis")
        exit(1);
    }
}

function endEau (choice){
    console.log(`j'ai terminer les épreuve de l'eau s'etait ${choice}`)
    return[];
}


function display (){
    args = getArguments();

    if (!validateArguments(args));

    const words = endEau(args);
    console.log(words);
}

display();

// Utilitaires
function getReversedStrings(strings) {
    const reversedStrings = [];
    for (let i = strings.length - 1; i >= 0; i--) {
        const string = strings[i];
        reversedStrings.push(string);
    }
    return reversedStrings;
}

// Gestion d'erreur 
function isValidArguments(validArgumentsLength) {
    if (!validArgumentsLength) {
        console.error("ce script nécessite minimum 2 arguments");
        return false;
    }

    return true;
}

// Parsing
function getArguments() {
    const arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
function getReversedArguments() {
    const arguments = getArguments()

    const validArgumentsLength = arguments.length > 1

    if (!isValidArguments(validArgumentsLength)) {
        return
    }

    const reversedArguments = getReversedStrings(arguments)

    return reversedArguments
}

//Afficher le resultat
function displayArray(array) {
    for (const element of array) {
        console.log(element);
    }  return y 

}

displayArray(getReversedArguments())

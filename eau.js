


function isvalidArgumentsNotStrings() {
    for (let i =0; i < arguments.length; i++){
        if (typeof arguments[i] === "string"){
            console.error("error")
            return false
        }
    }
    return true
}

isvalidArgumentsNotStrings(12
)
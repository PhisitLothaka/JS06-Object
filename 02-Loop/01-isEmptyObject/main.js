// Object => BOOL
function isEmptyObj(obj) {
    let isEmpty = true;
    
    for(let ket in obj) {
        isEmpty = false;
    }
    return isEmpty;
}



function get(obj,str){
    let array = str.split('.');
    let element = obj;

    for (let i = 0; i < array.length; i++) {
        element = element[array[i]];
        if( element === undefined){
            return element
        }
    }
    return element;

}



module.exports = get;
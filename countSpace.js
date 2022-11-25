function countSpace(str){
    var count = 0;
    for(var i = 0 ; i<str.length;i++){
        if(str[i] == " "){
            count+= 1;
        }
    }
    return count;
}

module.exports = countSpace;
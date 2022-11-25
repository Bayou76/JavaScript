function onlyDigits(str){
    for(let i =0; i<str.length;i++){
        if(str[i] >= '0' || str[i]<= '9' && str[i]<= ' '){
            return true
        }
        else{
            return false
    
        }
    }
}


module.exports = onlyDigits;
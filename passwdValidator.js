function passwdValidator(str){
        if (str.match( /[0-9]/) && 
                    str.match( /[A-Z]/) && 
                    str.match(/[a-z]/) &&
                    str.length >= 6){
                    return true
        }
        return false;
}


module.exports = passwdValidator;
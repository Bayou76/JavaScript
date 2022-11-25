function ageValidator(age){
    if(age.age >= 0 && age.age <= 150){
        return true;
    }
    else{
        return false;
    }
}

module.exports = ageValidator;
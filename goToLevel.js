function goToLevel(etageActuel,etageDest){
    result = 0;
    if(etageDest>etageActuel){
        result = etageActuel + etageDest;
    }
    if(etageDest<etageActuel){
        result = etageDest - etageActuel;
    }
    if(etageActuel<0 || etageActuel>20){
        result = 0
    }
        return result;
}


module.exports = goToLevel;
function displayDict(dict){

    for(const key in dict){
        console.log(key + " => " + dict[key]);
    }

}

module.exports = displayDict;
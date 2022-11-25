function insertDouble(str) {
    // let a = str.replace(/n/g , "nn");
    // let b = a.replace(/s/g , "ss");
    // let c = b.replace(/p/g , "pp");
    // let d = c.replace(/l/g , "ll");
    //  return  d;
    str = str.replace(/n/g, "nn").replace(/s/g, "ss").replace(/p/g, "pp").replace(/l/g, "ll");
    return str
 }

module.exports = insertDouble;
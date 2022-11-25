function upperInputEnd(str){

    maj = str.slice(0,-1) + str.charAt(str.length-1).toUpperCase();
       
   return maj;
}

module.exports = upperInputEnd;
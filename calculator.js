function calculator(nb1,nb2,op){
    let result = "The result of ";
    let cal = 0
    if(op == "+"){
        cal = nb1 + nb2;
    } 

    else if(op == "-"){
        cal = nb1 - nb2;
    } 

    else if(op == "/"){
        cal = nb1 / nb2;
    } 

    else if(op == "*"){
        cal = nb1 * nb2;
        
    } 
    
    result = nb1 + " " + op + " " + nb2 + " " + "= " + cal;
    return result ; 
}



module.exports = calculator;
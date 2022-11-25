function toCamelCase(snake_case){
    for(var i =0; i<snake_case.length;i++){
        snake_case = snake_case.replace('_',''.charAt(1).toUpperCase());
    }
    return snake_case;
}

module.exports = toCamelCase;
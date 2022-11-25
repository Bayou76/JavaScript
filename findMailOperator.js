function findMailOperator(mail){
    return mail.substr(mail.indexOf('@')+1,mail.indexOf('.')+1);
}

module.exports = findMailOperator;
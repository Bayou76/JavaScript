function extendsArray() {
    let element = 0;
    Array.prototype.sum = function () {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] == 'number') {
                element += this[i];
            }
        }
        return element;
    }
    Array.prototype.first = function(){
        for ( let i =0; i< this.length; i++){
            return this[0];
        }
    }

    Array.prototype.last = function(){
        for ( let i =0; i< this.length; i++){
            return this[this.length-1];
        }
    }

    Array.prototype.sum();
    Array.prototype.first();
    Array.prototype.last();
}


module.exports = extendsArray;

// extendsArray();    // ici la fonction modifie le prototype Array

// const allNum = [4, 12, 8, 2];
// const mixed = ["Hello", 20, -1, "!", 450]

// console.log(allNum.sum());      // retournera 26
// console.log(allNum.last());     // retournera 2
// console.log(allNum.first());    // retournera 4
// console.log(mixed.sum());       // retournera 469
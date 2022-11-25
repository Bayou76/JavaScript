let elevator ={
    floor:0,
    resetFloor: function(){
        this.floor = 0;
    },
    up: function(){
        this.floor++;
    },
    down: function(){
        this.floor--;
    },
    printFloor: function(){
        console.log(this.floor);
    }
} ;

module.exports = elevator;

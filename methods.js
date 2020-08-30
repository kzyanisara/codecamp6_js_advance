//6.6.1

let user = {
    name: "John",
    go: function() { alert(this.name) }
}

(user.go)()

//Ans ผลที่ออกมา Error
let user = {
    name: "John",
    go: function() { alert(this.name) }
}; // ต้องมี  ;

(user.go)()

//6.6.2
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name );

//Ans ref จะกลายเป็น window

//6.6.3
let calculator = {
    // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Ans
let calculator = {
    read(){
        this.number1 = Number(prompt("Enter first number"));
        this.number2 = Number(prompt("Enter second number"));
    },
    mul(){
        return this.number1 * this.number2
    },
    sum(){
        return this.number1 + this.number2
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//6.6.4
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // shows the current step
        alert( this.step );
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

//or
ladder.up().up().down().showStep(); // 1



// 7.4.1
function Calulator(){
    this.read = function () {
        this.number1 = Number(prompt("Enter first number: "))
        this.number2 = Number(prompt("Enter second number: "))
    }
    this.sum = function () {
        return this.number1 + this.number2
    }
    this.mul = function () {
        return this.number1 * this.number2
    }
}

// 7.4.2
function Acumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
        let temp = prompt("Enter Number");
        this.value += Number(temp);
    }
}
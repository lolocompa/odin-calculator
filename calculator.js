document.addEventListener("DOMContentLoaded", function(){ 

    let operator_count = 0;
    let operators = [];
    let numbers = []

    let total_str = ""    

    let numbers_selector = document.querySelectorAll(".number");
    numbers_selector.forEach(function(element) {
        element.addEventListener("click", function() {
            if (numbers[operator_count]) {
                numbers[operator_count] += this.textContent
            }
            else {
                numbers[operator_count] = this.textContent
            }
            show_screen(this.textContent)
            console.log(numbers)

        })
    });



    let operator_selector = document.querySelectorAll(".operator");
    operator_selector.forEach(function(element) {
        element.addEventListener("click", function() {
            if (numbers.length != 0 && numbers.length != operator_count) {
                operators[operator_count] = this.textContent;
                total_str += " "
                show_screen(this.textContent)
                operator_count++
                total_str += " "
            }
        })
    });




    let equal = document.querySelector(".equal");
    equal.addEventListener("click", function() {
        let parsed_num = []

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] != "") {
                parsed_num[i] = parseFloat(numbers[i], 10)
            }
        }
        show_result(parsed_num, operators);
    })




    let decimal = document.querySelector(".decimal")
    decimal.addEventListener("click", function() {
        let curent_number = numbers[numbers.length - 1]
        console.log(curent_number)
        if(!curent_number.includes(".")) {
            numbers[numbers.length - 1] += "."
            show_screen(".")
        }
        
    })




    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function() {
        numbers = []
        operators = []
        operator_count = 0
        total_str = "" 
        let clear_screen = document.querySelector(".screen");
        clear_screen.innerHTML = ""

    })



    function add(num1, num2) {
        var result = num1 + num2
        return result
    }

    function substract(num1, num2) {
        var result = num1 - num2
        return result
    }

    function multiply(num1, num2) {
        var result = num1 * num2
        return result
    }

    function divide(num1, num2) {
        var result = num1 / num2
        return result
    }


    function operate(num1, num2, operator) {
        if (operator === "+"){
            let adition = add(num1, num2);
            return adition
        }
        else if (operator === "-") {
            let substraction = substract(num1, num2)
            return substraction
        }
        else if (operator === "x") {
            let multiplication = multiply(num1, num2)
            return multiplication
        }
        else if (operator === "/") {
            let divition = divide(num1, num2)
            return divition
        }
        else {
            return console.log("invalid operator")
        }
    }



        
    function show_screen(num) {
        let screen = document.querySelector(".screen")
        let str = `${num}` 
        total_str += str 
        
        screen.innerHTML =` ${total_str}` 
    }


    function show_result(numbers, operators) {
        if (operator_count !== 0 && numbers.length > 1) {

            while (numbers.length !== 1) {
                for (let i = 0; i < numbers.length; i++) {
                    if (operators[i] === "x" || operators[i] === "/") {
                        let num1 = numbers[i]
                        let num2 = numbers[i + 1]
                        let operator = operators[i]
                        result = operate(num1, num2, operator)
                        numbers.splice(i + 1, 1);
                        operators.splice(i, 1);
                        numbers[i] = result
                        i--
                    }  
                }
                for (let i = 0; i < numbers.length; i++) {
                    if (operators[i] === "+" || operators[i] === "-") {
                        let num1 = numbers[i]
                        let num2 = numbers[i + 1]
                        let operator = operators[i]
                        result = operate(num1, num2, operator)
                        numbers.splice(i + 1, 1);
                        operators.splice(i, 1);
                        numbers[i] = result
                        i--
                    }  
                }
            }
            let screen_result = document.querySelector(".screen")
            screen_result.innerHTML = numbers[0]
        }
        else {
            let invalid_result = document.querySelector(".screen")
            invalid_result.innerHTML = "enter the first number, an operator and a second number"
        }

    }
    


});



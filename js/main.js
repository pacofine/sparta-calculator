

var calc = confirm("would you like to use The calculator?")

while (calc == true){

    var useCalc = prompt("Do you need Calculator Mode, Conversion Mode or BMI Mode")

    if (useCalc == "calculator"){

        function myFunction(x, y, operator) {
            var z;

            if (operator == "+") {
                z = x + y;
            }
            else if (operator == "/") {
                z = x / y;
            }
            else if (operator == "*") {
                z = x * y;
            }
            else if (operator == "-") {
                z = x - y;
            }

            return z;
        }
        var x, y, operator;
        x = parseFloat(prompt("Type a number"));     
        operator = prompt("Choose an operator");
        y = parseFloat(prompt("Type a number"));

        alert(myFunction(x, y, operator));
    }

    else if (useCalc == "conversion") {
    
        function herFunction(a) {
            var z;

            // x = 1.8;
            // y = 32;
            z = (a * 1.8 ) + 32;

            return z;
        }
        var a;
        a = parseFloat(prompt("Type a number"));
        
        alert(herFunction(a));
    }

    else if (useCalc == "BMI") {
    
        function hisFunction(x, y) {
            var z;

            z = x/(y^2)

            return z;
        }
        var x, y;
        x = parseFloat(prompt("Your Weight in Kilograms"));     
        y = parseFloat(prompt("Your Hight in Meters"));
        
        alert(hisFunction(x, y));
    }
}
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {

        if (output.includes('^')) {
            const parts = output.split('^');
            console.log(parts);
            if (parts.length === 2) {
                try {
                    output = Math.pow(parseFloat(parts[0]), parseFloat(parts[1])).toString();
                }
                catch (Error) {
                    output = "Error";
                    console.log(Error);
                }
            }
        }
        else if (output.includes("-^")) {  
            const parts = output.split('-^');
            let exponent = -parseFloat(parts[1]);
            if (parts.length == 2) {
                try {
                    output = Math.pow(parseFloat(parts[0]), exponent).toString();
                }
                catch {
                    output = "Error";

                }
            }

        }
        else {
            output = eval(output.replace("%", "/100"));
        }

    } else if (btnValue == "AC") {
        output = "";
    } else if (btnValue == "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue == "square") {
        output = output * output;
    }
    else if (btnValue == "log") {
        //log 
        output = Math.log10(parseFloat(output)).toString();
    }
    else if (btnValue == "√") {
        //sqrt
        output = Math.sqrt(parseFloat(output)).toString();
    }
    else if (btnValue == "ln") {
        //ln
        output = Math.LN2 (parseFloat(output),).toString();
    }
    else if (btnValue == "sin") {
        //sin
        output = Math.sin(parseFloat(output),).toString();
    }
    else if (btnValue == "cos") {
        //cos
        output = Math.cos(parseFloat(output),).toString();
    }
    else if (btnValue == "tan") {
        //tan
        output = Math.tan(parseFloat(output),).toString();
    }
    else if (btnValue == "10") {
        //get input 
        //separate the value into base,exponent
        //set  output
        output = Math.pow(parseFloat(output)).toString();
    }
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};


buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
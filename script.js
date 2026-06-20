let expression = ""
let secondmode = false
const screen = document.getElementById("screen")
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.innerText);
        const value = button.innerText;
        if ("0123456789".includes(value)) {
            expression += value
            screen.value = expression
        }
        else if (
            value === "+" || value === "-" || value === "/" || value === "x"
        ) {
            if (value === "x") {
                expression += "*"
            }
            else {
                expression += value
            }
        }
        else if(value = "ON/C")
        {
            expression = " "
            screen.value = "0"
        }
        screen.value = expression
    })
})

let buttons = document.querySelectorAll('button');
let buttonValues = [];
let display = document.getElementById('display');
display.focus()
let equalButton = document.getElementById('equal-button');
let resetButton = document.getElementById('reset-button');
let delButton = document.getElementById('del-button');



const showEquals = () => {
    display.value = eval(display.value);
}


for (let button of buttons) {
    button.value !==''? buttonValues.push(button):null

}

for (let button of buttonValues) {
    button.addEventListener('click', function() {
        display.value += button.value
        display.focus()
    })
}
equalButton.addEventListener('click', function() {
    showEquals()
    display.focus()

})
display.addEventListener('keydown', function(event) {
    event.keyCode ===13? showEquals(): console.log('diferente');
})


delButton.addEventListener('click', function() {
    display.value = display.value.slice(0, -1)
    display.focus()
})

resetButton.addEventListener('click', function() {
    display.value = '';
    display.focus()
})






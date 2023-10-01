// Step 1: Declare variables to hold values of inputs.

const fNumber = document.querySelector('#firstnumber')
const sNumber = document.querySelector('#secondnumber')

//Step 2: Create event listeners for each button of the calculator so that on click they run a function to add their value to the total

document.querySelector('#multiply').addEventListener('click', multiplyTogether)
document.querySelector('#add').addEventListener('click', addTogether)
document.querySelector('#subtract').addEventListener('click', subtractTogether)
document.querySelector('#divide').addEventListener('click', divideTogether)

function multiplyTogether(){
    let result = fNumber.value * sNumber.value
    document.querySelector('#placeToPutResult').innerText = result 

}

function addTogether(){
    let result = Number(fNumber.value) + Number(sNumber.value)
    document.querySelector('#placeToPutResult').innerText = result 

}

function subtractTogether(){
    let result = fNumber.value - sNumber.value
    document.querySelector('#placeToPutResult').innerText = result 

}

function divideTogether(){
    let result = fNumber.value / sNumber.value
    document.querySelector('#placeToPutResult').innerText = result 

}



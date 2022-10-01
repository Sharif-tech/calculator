// function for getting ids

let id = (id) => document.getElementById(id)

let numberOne = id('btn-1'),
    numberTwo = id('btn-2'),
    numberThree = id('btn-3'),
    numberFour = id('btn-4'),
    numberFive = id('btn-5'),
    numberSix = id('btn-6'),
    numberSeven = id('btn-7'),
    numberEight = id('btn-8'),
    numberNine = id('btn-9'),
    numberZero = id('btn-0'),
    point = id('btn-point'),
    reset = id('btn-reset'),
    output = id('display');

    // operator buttons

let  addition = id('addition'),
     multiplication = id('multiplication'),
     subtraction = id('subtraction'),
     division = id('division');


function inputs(key) {
  key.addEventListener('click', function(e){
    e.preventDefault();
    output.value = output.value + '' + key.value
    // output.value =  parseInt(output.value) + parseInt(key.value)
  })
}

inputs(numberOne)
inputs(numberTwo)
inputs(numberThree)
inputs(numberFour)
inputs(numberFive)
inputs(numberSix)
inputs(numberSeven)
inputs(numberEight)
inputs(numberNine)
inputs(numberZero)
inputs(point)

// operator buttons
inputs(addition)
inputs(multiplication)
inputs(subtraction)
inputs(division)

/* 
// Operator Function
let equal = document.querySelector('')
equal.addEventListener('click', function (operator) {

  if(operator === addition) {
    return a + b
  } else if (operator === multiplication) {
    return a * b
  } else if (operator === subtraction) {
    return a - b
  } else if (operator === division) {
    return a / b
  } else {
    return
  }

})

 */

/* 
Addition button
 */

addition = document.querySelector('#operator-btns #addition')

addition.addEventListener('click', function(e){
  e.preventDefault()
  output.value = output.value + addition.value
  // output.value = parseInt(a) + parseInt(b)
})


// Close button

let closBtn = document.getElementById('control-btns close')

closBtn.style.cursor = 'pointer'
closBtn.addEventListener('click', function(){
  window.close()
})

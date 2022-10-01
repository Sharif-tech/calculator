let numberBtns = document.querySelectorAll('#number-btns #number')
let output = document.querySelector('#display')
let operationBtns = document.querySelectorAll('#operator')

// Number Buttons

numberBtns.forEach(numbeBtn => {
  numbeBtn.addEventListener('click', function (e){
    e.preventDefault();
    output.value += numbeBtn.value
  })
});

// Operators Buttons

operationBtns.forEach(operationBtn => {
  operationBtn.addEventListener('click', function (e){
    e.preventDefault();
    output.value += operationBtn.value
  })
});

// Equal Button


/* 
let equal = document.getElementById('equal')

equal.addEventListener('click', function(e){
  if(e.target.className == 'addition') {
    
    let result = parseInt(num1) + parseInt(num2)
    output.value = result
  }

})
 */
// Reset Button

let resetBtn = document.querySelector('#btn-reset')
resetBtn.addEventListener('click', function(){
  output.value = ''
})


// Control Buttons
/*  
let ctrlBtns = document.querySelectorAll('#control-btns')
console.log(ctrlBtns)

for(i = 0; i < ctrlBtns.length; i++) {
  console.log(ctrlBtns[i].innerText)
}
 */

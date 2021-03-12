let colorChoice = '';
const colorField = document.querySelector('#color-field');
const form = document.querySelector('#form')
const brush = document.querySelector('.brush')
const body = document.body

// ES6 WITH E.TARGET
// const changeGreen = (e) => {
//     e.target.style.background = 'green'
// }

// ES5 USING THIS
function changeGreen() {
    this.style.background = 'green'
}

const generateSquares = () => {
    for(let i = 0; i < 20; i++) {
        let newSquare = document.createElement('div')
        newSquare.addEventListener('click', changeGreen)
        newSquare.classList.add('square')
        newSquare.style.background = colorChoice
        body.appendChild(newSquare)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    colorChoice = colorField.value
    brush.style.background = colorChoice
    generateSquares()
})





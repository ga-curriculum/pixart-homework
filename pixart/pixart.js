let colorChoice = '';
const colorField = document.querySelector('#color-field');
const form = document.querySelector('#form')
const brush = document.querySelector('.brush')
const body = document.body

const generateSquares = () => {
    for(let i = 0; i < 20; i++) {
        let newSquare = document.createElement('div')
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





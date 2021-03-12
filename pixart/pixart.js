let colorChoice = '';
const colorField = document.querySelector('#color-field');
const form = document.querySelector('#form')
const brush = document.querySelector('.brush')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    colorChoice = colorField.value
    brush.style.background = colorChoice
    console.log(colorChoice)
})

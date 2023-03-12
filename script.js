const input = document.querySelector('#converter')
const btnConv = document.querySelector('.conv')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const result = document.querySelector('.result')
let resultDeg

const convert = () => {
	if (one.textContent === '°C') {
		resultDeg = input.value * 1.8 + 32
		result.textContent = `${input.value}°C to ${resultDeg.toFixed(1)}°F`
		input.value = ''
	} else if (one.textContent === '°F') {
		resultDeg = (input.value - 32) / 1.8
		result.textContent = `${input.value}°F to ${resultDeg.toFixed(1)}°C`
		input.value = ''
	}
}
const reset = () => {
	result.textContent = ''
	input.value = ''
}
const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
		input.value = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
		input.value = ''
	}
}
const checkInput = () => {
	if (input.value === '') {
		result.textContent = 'Błąd, nie podałeś żadnej liczby'
	} else {
		convert()
	}
}

btnConv.addEventListener('click', checkInput)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', change)

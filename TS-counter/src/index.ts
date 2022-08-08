let count: number = 0;
const increase: any = document.getElementById('increase')
const reset: any = document.getElementById('reset')
const decrease: any = document.getElementById('decrease')
let number: any = document.getElementById('count')

increase.addEventListener('click', () => {
    count++
    number.textContent = count
    if (count>0) {
        number.style.color = 'green'
    }
})

decrease.addEventListener('click', () => {
    count--
    number.textContent = count
    if (count<0) {
        number.style.color = 'red'
    }
})

reset.addEventListener('click', () => {
    count = 0
    number.textContent = count
    number.style.color = 'black'
})
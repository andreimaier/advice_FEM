const id = document.querySelectorAll('.id')
const sfat = document.querySelectorAll('.sfat')
const button = document.querySelectorAll('.button')

async function getAdvice(e) {
    const response = await fetch("https://api.adviceslip.com/advice?t=" + Math.random());
    const advice = await response.json();


    const id = document.querySelector(`p[data-id="${e.id}"]`)
    const sfat = document.querySelector(`p[data-sfat="${e.id}"]`)

    id.textContent = `ADVICE #${advice.slip.id}`
    sfat.textContent = `"${advice.slip.advice}"`

    console.log(advice.slip);
    // console.log(e.id)

}

button.forEach(e => e.addEventListener('click', () => getAdvice(e)))

function select(e) {
    e.target.dataset['#'] ? console.log(e.target.dataset['#']) : 0
    return e.target.dataset['#']
}

document.querySelector('#number').addEventListener('click', select)

//try with inner html since that would be safe here.
//make a function that returns the html and inserts.
//run it a select() number of times


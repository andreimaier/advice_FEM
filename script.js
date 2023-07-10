const id = document.querySelector('#id')
const sfat = document.querySelector('#sfat')
const button = document.querySelector('#button')

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice?t=" + Math.random());
    const advice = await response.json();

    id.textContent = `ADVICE #${advice.slip.id}`
    sfat.textContent = `"${advice.slip.advice}"`

    console.log(advice.slip);
}

button.addEventListener('click', () => getAdvice())




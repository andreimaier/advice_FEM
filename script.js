const id = document.querySelector('#id')
const sfat = document.querySelector('#sfat')
const button = document.querySelector('#button')
let response = ''

async function getAdvice() {
    const request = await fetch("https://api.adviceslip.com/advice?t=" + Math.random());
    response = await request.json();

    console.log(response.slip);
}
async function giveAdvice() {
    await getAdvice()

    id.textContent = `ADVICE #${response.slip.id}`
    sfat.textContent = `"${response.slip.advice}"`
}

button.addEventListener('click', () => giveAdvice())




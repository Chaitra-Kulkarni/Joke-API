const jokeText = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    const data = await response.json()

    let joke = '';

    if (data.joke === undefined) {
        joke = `${data.setup} <br /> ${data.delivery}`
    } else {
        joke = data.joke;
    }

    jokeText.innerHTML = joke
}
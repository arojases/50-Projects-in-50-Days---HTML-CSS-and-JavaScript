const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//CLEAR VERSION USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()

    jokeEL.innerHTML = data.joke
}

//LONG VERSION USING .THEN
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEL.innerHTML = data.joke
//         })
// }
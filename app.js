const btnEl = document.getElementById("btn")
const apiKey = "vqJk82QiHq8KnSszxmoEY2BthtYtbsuELfbst87K";
const joke = document.getElementById("joke")
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokes() {
    try {
            joke.innerText = "Loading....";
            btnEl.disabled = true;
            btnEl.innerText = "loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";
        joke.innerText = data[0].joke;
    } catch (error) {
        joke.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";
    }
}

btnEl.addEventListener("click",getJokes)



console.log("API Time!")
const getBeers= async (e) => {
    e.preventDefault();
    console.log("Form Submitted")
    let number = e.target.number.value
    console.log(number)
   if (number == ' ')number = 1;
   console.log(number)
   const url = `https://random-data-api.com/api/v2/beers?size=7${number}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    const container = document.getElementById('container')
    container.innerHTML=``
    if (Array.isArray(data)){ // more than 1
        for (let beer of data){

        }
    }
    else {
        let card = `<div>
        <h3>${data.name} by ${data.brand}</h3>
        <h5>v${data.alcohol} alc</h5>
        </div>`
        // display single beer

        container.innerHTML += card
    }

    

}

const form = document.querySelector("form")
form.addEventListener("submit", getBeers)


// SYNTAX fetch(url,optional)
// fetch will return a promise
// options are an optional dictionary 
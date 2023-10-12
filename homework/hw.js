// PokeDex

console.log("PokeDex Time!")
const PokeDex = async (e) => {
    e.preventDefault(); 
    console.log(form)
    let name = e.target.name.value
    if (name == ' ') name = 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}` 
    const res = await fetch(url)
    const data = await res.json()
    const container = document.getElementById('container')
    container.innerHTML=''
  
    if (Array.isArray(data)){ // more than 1
        for (let pokemon of data){
            let card = `<div>
        
            <h3>${data.name} by <img src="${data.sprites.front_default}"/> </h3>
            </div>`
            container.innerHTML +=card
           
        }
    }
    else {
        let card = `<div>
        <h3>${data.name}  <img src="${data.sprites.front_default}"/> </h3>
        </div>`

        container.innerHTML = card
    }
    




    

}

const form = document.querySelector("form")
form.addEventListener("submit", PokeDex)
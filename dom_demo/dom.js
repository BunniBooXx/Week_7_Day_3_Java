console.log('DOM Demo!')


console.log(document)
console.log(document.body)
// default variable document is a refernence to the entire document 
// can access body by putting .body on document

const myTitle = document.getElementById('title')
console.log(myTitle)
myTitle.innerText = "NEW TITLE!"

// script tag for js in html is on bottom because they JS reads code from bottom to top?

const ps = document.getElementsByTagName('p')
console.log(ps)
for (let p of ps){
    p.innerText='replaced'

};

const found = document.getElementsByTagName('find-me')
console.log(found)
found[0].className= "text-primary"
myTitle.innerText='<p>New Title</p>'
myTitle.innerHTML='<p class= "text-danger">New Title</p>'


const imgs = document.getElementsByTagName('img')
console.log(imgs)
imgs[0].src = 'https//placeholder.com/150'


const input = document.getElementsById('pokemon')
input.value="Starting Val"

const changeColor = () => {
    const button = document.getElementById('color')
    if (button.className=='btn btn-primary'){
    button.className = 'btn btn-danger'
} else if (button.className == 'btn btn-danger'){

}
}



const button2 = document.createElement('button')
button2.innerText = "Click Me 2"
button2.className = 'btn btn-danger'
button2.onclick = changeColor

document.body.append(button2)

const button3 = document.createElement('button')
button3.innerText = "Click Me 3"
button3.className = "btn btn-success"
document.body.append(button3)
// button3.addEventListener(type_of_event, call back Func)
button3.addEventListener('click', changeColor)


const form = document.querySelector('form')
form.addEventListener('submit', (e)=> {
    // For Submit Events, you need to preventDefault()
    e.preventDefault()
    console.log(e);
    const myValue= e.target[0].value
    console.log(myValue)
    console.log(myValue2)
})
console.log(form)

button3.addEventListener('click', ()=> {
    const container = document.querySelector("div.container")
    const text = document.createElement('h3')
})





// .href or .target can do these as well 


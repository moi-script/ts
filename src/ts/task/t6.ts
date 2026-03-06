const h1 = document.getElementById("greeting") as HTMLHeadingElement;

if(h1) {
    h1.innerText = "Hello world"
}





// DOM 

// Document --> Entire html element
// HTMLElement --> Base type for all HTML element
// Element --> Parent type of HTML and SVG elements
// Node --> Lowest dom unit (text, elements, comments)
// NodeList --> Collection return by querySelectorAll
// HTMLCollection --> Live collection like children




const title : HTMLElement | null = document.getElementById("title");

//  | Type                  | HTML         |
// | --------------------- | ------------ |
// | `HTMLDivElement`      | `<div>`      |
// | `HTMLButtonElement`   | `<button>`   |
// | `HTMLInputElement`    | `<input>`    |
// | `HTMLFormElement`     | `<form>`     |
// | `HTMLImageElement`    | `<img>`      |
// | `HTMLAnchorElement`   | `<a>`        |
// | `HTMLSelectElement`   | `<select>`   |
// | `HTMLTextAreaElement` | `<textarea>` |



// const toClickBtn2 : HTMLButtonElement = document.getElementById('to-click')

// button 
const toClickBtn2 = document.querySelector("to-click") as HTMLButtonElement

function clickButton2() : void {
    toClickBtn2.addEventListener("click", (event : MouseEvent) => {
        console.log("Client x --> ", event.clientX)
    }) 
}

//  form 

const form = document.querySelector("form") as HTMLFormElement

function clickForm() : void { 
    form.addEventListener("submit", (e : SubmitEvent) => {
        e.preventDefault()
    })
}




// Conversion

const button = document.getElementById("loginBtn")

button.addEventListener("click", function () {
  console.log("Login clicked")
})
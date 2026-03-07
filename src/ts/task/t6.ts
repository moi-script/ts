const h1 = document.getElementById("greeting") as HTMLHeadingElement;

if (h1) {
    h1.innerText = "Hello world"
}





// DOM 

// Document --> Entire html element
// HTMLElement --> Base type for all HTML element
// Element --> Parent type of HTML and SVG elements
// Node --> Lowest dom unit (text, elements, comments)
// NodeList --> Collection return by querySelectorAll
// HTMLCollection --> Live collection like children




const title: HTMLElement | null = document.getElementById("title");

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

function clickButton2(): void {
    toClickBtn2.addEventListener("click", (event: MouseEvent) => {
        console.log("Client x --> ", event.clientX)
    })
}

//  form 

const form = document.querySelector("form") as HTMLFormElement

function clickForm(): void {
    form.addEventListener("submit", (e: SubmitEvent) => {
        e.preventDefault()
    })
}




// Conversion

// const button = document.getElementById("loginBtn")
const button = document.getElementById("loginBtn") as HTMLButtonElement
// button.addEventListener("click", function () {
//   console.log("Login clicked")
// })

function clickSimpleButton(): void {
    button.addEventListener("click", function () {
        console.log("BUtton clicked")
    })
}


// const input = document.querySelector("#username")

const input = document.querySelector("#username") as HTMLInputElement
// input.addEventListener("input", (e) => {
//   console.log(input.value)
// })

function clickInput(): void {
    input.addEventListener('submit', (e: SubmitEvent) => {
        console.log("Value ::  --> ", input.value)
    })
}





// // 1. Selecting elements
// const input = document.getElementById('task-input');
// const addButton = document.querySelector('.add-btn');
// const counterDisplay = document.querySelector('#counter-val');

const inputForm = document.getElementById('task-input') as HTMLInputElement
const addButton = document.querySelector('.add-btn') as HTMLButtonElement
const counterDisplay = document.querySelector('counter-val') as HTMLElement

let count = 0;
// let count = 0;

// // 2. Adding logic
// addButton.addEventListener('click', () => {
//   const taskName = input.value;

//   if (taskName.trim() !== "") {
//     count++;
//     counterDisplay.innerText = count;
//     input.value = ""; // Clear input
//     console.log(`Added task: ${taskName}`);
//   } else {
//     alert("Please enter a task name");
//   }
// });

function addCalc(): void {
    addButton.addEventListener('click', () => {
        if (!addButton || !input || !counterDisplay) return; // type safety 

        const taskName = input.value;
        if (taskName.trim() !== "") {
            count++
            let countToNum: string = (String(count))
            input.value = ""
            counterDisplay.innerText = countToNum
            console.log("Added task :: ", taskName);

        } else {
            alert("Please enter a task name")
        }
    })
}





// const listContainer = document.getElementById('item-list');
// const addListItemBtn = document.getElementById('add-item-btn');
// const statusText = document.querySelector('.status');

const listContainer = document.getElementById('item-list') as HTMLDivElement
const addListItemBtn = document.getElementById("add-item-btn") as HTMLButtonElement
const statusText = document.querySelector('.status') as HTMLParagraphElement


// let itemQuery = 0;
let itemQuery = 0


// addListItemBtn.onclick = function() {
//   itemQuery++;

//   // 1. Create the new element
//   const newItem = document.createElement('li');
//   newItem.className = 'list-group-item';
//   newItem.style.color = 'blue';

//   // 2. Set content
//   newItem.innerHTML = `<strong>Item #${itemQuery}</strong> - Added via JS`;

//   // 3. Add a delete feature inside the item
//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'X';
//   deleteBtn.onclick = () => {
//     newItem.remove();
//     statusText.textContent = `Removed item ${itemQuery}`;
//   };

//   newItem.appendChild(deleteBtn);
//   listContainer.appendChild(newItem);
// };


function addListItemBtnFn(): void {
    if (!listContainer || !addListItemBtn || !statusText) return
    addListItemBtn.onclick = function () {

        itemQuery++

        const newItem: HTMLLIElement = document.createElement("li")
        newItem.className = 'list-group-item';
        newItem.style.color = 'blue';


        newItem.innerHTML = `<strong>Item #${itemQuery}</strong> - Added via JS`;

        const deleteBtn = document.createElement('button') as HTMLButtonElement;
        deleteBtn.textContent = 'X';


        deleteBtn.onclick = () => {
            newItem.remove();
            statusText.textContent = `Removed item ${itemQuery}`;
        };


    }
}




const profileForm = document.getElementById('profile-form') as HTMLFormElement;
const nameInput = document.getElementById('username') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const isPublicCheckbox = document.getElementById('is-public') as HTMLInputElement;
const previewArea = document.getElementById('preview') as HTMLInputElement;



function submitProfile() : void {
    profileForm.onsubmit = (e : SubmitEvent) => {
        e.preventDefault();

        
      const name = nameInput.value;
      const age = ageInput.valueAsNumber; // Get value as a number directly
      const isPublic = isPublicCheckbox.checked;
      
      previewArea.innerHTML = `
        <h4>Preview:</h4>
        <p>Name: ${name}</p>
        <p>Age: ${age} (${age >= 18 ? 'Adult' : 'Minor'})</p>
        <p>Privacy: ${isPublic ? 'Public' : 'Private'}</p>
      ` as string;
      


    }
}

// profileForm.onsubmit = (event) => {
//   event.preventDefault();
  
//   const name = nameInput.value;
//   const age = ageInput.valueAsNumber; // Get value as a number directly
//   const isPublic = isPublicCheckbox.checked;

//   previewArea.innerHTML = `
//     <h4>Preview:</h4>
//     <p>Name: ${name}</p>
//     <p>Age: ${age} (${age >= 18 ? 'Adult' : 'Minor'})</p>
//     <p>Privacy: ${isPublic ? 'Public' : 'Private'}</p>
//   `;
// };
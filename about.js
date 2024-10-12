
//-----------------------------event delegation---------------------------------------------------

const tableEl = document.querySelector("table")
let selectedEl;


tableEl.addEventListener("click", (event) => {
const target = event.target
const targetParent = target.parentElement

    if(target.tagName.toLowerCase() === "th") return;

    
    if(selectedEl !== undefined){
        selectedEl.classList.remove("bg-blue")
    }
    selectedEl = targetParent

    targetParent.classList.add("bg-blue")

})

    // donate page

// const donateToggleButton = document.querySelector(".donate-toggle-btn")
// const donateSection = document.querySelector(".donate-section")

// donateToggleButton.addEventListener('click', () => {
//         if (donateSection.style.display === "block"){
//             donateSection.style.display = "none"
//         }
//         else{
//             donateSection.style.display = "block"
//         }
// })

        // by using event delegation

document.addEventListener('click', (event) => {
const donateToggleButton = document.querySelector(".donate-toggle-btn")
const target = event.target
const donateSection = target.nextElementSibling
    if(target != donateToggleButton) return;

    if (donateSection.style.display = "none"){
        donateSection.style.display = "block"
    }
    else return;  // only shows the donate section not hide it
    
} )

    //alerting donated amount

const donateInput = document.querySelector("#donate-input")
const donateButton = document.querySelector("#donate-btn")

donateButton.addEventListener("click", () => {

        alert(`Thank You for Donating  ₹${donateInput.value}`)
        
          
})
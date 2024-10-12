AOS.init();

let inputFood = document.getElementById("form-inputbox");
let inputSaveButton = document.getElementById("form-row-button");
let myLikedFood = document.getElementById("textbox");
let foodList = document.getElementById("food-list")

let alertSection = document.querySelector(".alert")

let handleInputSave = () => {

    if(inputFood.value.length > 15){
        alert('Name should not exceed more than 15 characters')
    }
    else if(!/^[a-zA-Z\s]+$/.test(inputFood.value)){
        alert("Enter a valid name (alphabets only)");
    }
    else{
        //creating a li element
        const foodDiv = document.createElement("div")
        foodDiv.className = "food-item-container"
        const listEl = document.createElement("li")
        listEl.className = "food-item"
        const textNode = document.createTextNode(inputFood.value)
        listEl.append(textNode)
        const trashIconDiv = document.createElement("div")
        trashIconDiv.className = "trash-icon"
        trashIconDiv.setAttribute("onclick", "removeItem(event)")
        trashIconDiv.innerHTML = `<i class="fa-solid fa-trash-can" style="color: #080f1c;"></i>`

        foodDiv.append(listEl)
        foodDiv.append(trashIconDiv)
        foodList.append(foodDiv)

        //or

        // foodList.innerHTML += `<div class="food-item-container">
        //                             <li class="food-item">${inputFood.value}</li>
        //                             <div onclick="removeItem(event)" class="trash-icon">
        //                                 <i class="fa-solid fa-trash-can" style="color: #080f1c;"></i>
        //                             </div>
        //                         </div>`

        // displaying alert

        alertSection.style.display = 'block'  //on clicking it is set to block
        setTimeout(() => {
            alertSection.style.display = 'none'  //on clicking after 3000ms it is set to none 
        }, 3000);

        
    } 

}
inputSaveButton.addEventListener('click', handleInputSave)

inputFood.addEventListener("keyup", (event) => {
    
    if(event.key === "Enter"){
        handleInputSave();
    }
    
})

//----------------------selecting food items----------



let selectedFoodItem;


const handleSelectFoodItem = (event) => {
    const target = event.target;
    const targetParent = target.parentElement
        if(target.tagName === "UL"){
            return;
        
        }
    
        if(selectedFoodItem !== undefined){
            selectedFoodItem.classList.remove("select")
            targetParent.classList.remove("select")
            
        }
    
        if(target.tagName === "LI"){
            selectedFoodItem = targetParent
            
        }
        else{
            selectedFoodItem = target
            
        }


        selectedFoodItem.classList.add("select")

       
        
    
        
        
        
    }
foodList.addEventListener("click", handleSelectFoodItem)




const alertCloseBtn = document.getElementById("close-icon")
const removeAlertCloseBtn = document.getElementById("remove-close-icon")

alertCloseBtn.addEventListener("click", () => {
        alertSection.style.display = 'none'
})
removeAlertCloseBtn.addEventListener("click", () => {
        removeAlert.style.display = 'none'
})




const removeAlert = document.querySelector(".removeAlert")


function removeItem(event){
    let existingList = event.target.parentNode.parentNode
    existingList.remove()



    removeAlert.style.display = 'block'  //on clicking it is set to block
    setTimeout(() => {
        removeAlert.style.display = 'none'  //on clicking after 3000ms it is set to none 
    }, 3000);
}

//-----------------------removing item on clicking del---------------------------------------

document.addEventListener("click", (event) => {
    const target = event.target
    if(target.classList.contains("food-item-container")){
        
        document.addEventListener("keyup", (event)=>{
           
           if(event.key === "Delete"){
            target.remove() 
           }


            
        })
    }else if(target.classList.contains("food-item")){
        
        document.addEventListener("keyup", ()=>{
            
            if(event.key === "Delete"){
                
                target.parentElement.remove()
        
            }
        })
    }
    
})





//---------------form validation and prevent default------------------


const form2 = document.querySelector("form")
const form2input = document.getElementById("form-validation-input")
const form2checkbox = document.getElementById("form-validation-checkbox")
const form2button = document.getElementById("form-validation-button")

const formInputAlert = document.querySelector(".form-input-alert")

form2.addEventListener("submit", (event) => {
    event.preventDefault();  //prevents default action of the browser on clicking the button

    // console.log(form2input.value,form2checkbox.checked);
    
    
    if(form2input.value.length > 20){

           formInputAlert.innerText = "*maximum 20 characters"
           
            
    }
    else if(form2input.value.length < 3 || !/^[a-zA-Z\s]+$/.test(form2input.value)){
            formInputAlert.innerText = "*enter a valid name"
            
    }
    else return formInputAlert.innerText = "";

    if(!form2checkbox.checked){
        alert("check Terms and conditions");
    }
    // console.log(event.submitter);   //shows the element with is performing submit
    
})

















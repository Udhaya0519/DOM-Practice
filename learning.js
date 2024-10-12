

//------------------------------------------toggle--------------------------------------------------------

let summaInput = document.querySelector(".summa-input-container")
let toggleBtn = document.querySelector(".toggle-button")


// method 1

toggleBtn.addEventListener("click", () => {
    if(summaInput.style.display === "none"){
        summaInput.style.display = "block"
        toggleBtn.innerText = "Hide"
    }
    else{
        summaInput.style.display = "none"
        toggleBtn.innerText = "Show"

    }
})


// method 2 using adding and removing class 

// no inline css should be applied to element


// toggleBtn.addEventListener("click", () => {
//     summaInput.classList.toggle("summa-input-container")

// })



//------------------------------------------------------event capturing bubbling and propagation---------------------------------------------------


// let formIn = document.querySelector("form")
// let formdiv = document.querySelector(".div")
// let formP = document.querySelector(".p")

// function alertClick (event){
//     alert("form")
//     // console.log(this);
    
// }
// function alertClick1 (){
//     alert("div")
//     // console.log(this);

// }
// function alertClick2 (){
//     alert("paragraph")
//     // console.log(this);

// }

// formIn.addEventListener("click",alertClick,true)       //capturing event true
// formdiv.addEventListener("click",alertClick1,true)
// formP.addEventListener("click",alertClick2,true)
// formIn.addEventListener("click",alertClick)         //capturing event false only bubbling event 
// formdiv.addEventListener("click",alertClick1)
// formP.addEventListener("click",alertClick2)


// for (let element of document.querySelectorAll("form,form * ")){   // query selector will give an array of mentioned elements
//         element.addEventListener("click", () => {
//             console.log('Capturing event of',element.tagName);
            
//         },true)   //default capture is set to false setting true means events will occur in capturing phase 
       
       
//         element.addEventListener("click", () => {
//             console.log('Bubbling event of',element.tagName);
            
//         })    //   bubbling phase will occur 
        
        
// }


//-----------------------------------------------prevent default----------------------------------------------------------------

// const form2 = document.querySelector("form")
// const form2input = document.getElementById("form-validation-input")
// const form2checkbox = document.getElementById("form-validation-checkbox")
// const form2button = document.getElementById("form-validation-button")

// const formInputAlert = document.querySelector(".form-input-alert")

// form2.addEventListener("submit", (event) => {
//     event.preventDefault();  //prevents default action of the browser on clicking the button

//     // console.log(form2input.value,form2checkbox.checked);
    
    
//     if(form2input.value.length > 20){

//            formInputAlert.innerText = "*maximum 20 characters"
//            setTimeout(() => {
//                 formInputAlert.innerText = ""
//            },2000)
            
//     }
//     else if(form2input.value.length < 3 || !/^[a-zA-Z\s]+$/.test(form2input.value)){
//             formInputAlert.innerText = "*enter a valid name"
//             setTimeout(() => {
//                 formInputAlert.innerText = ""
//            },2000)
//     }
//     else return formInputAlert.innerText = "";

//     if(!form2checkbox.checked){
//         alert("check Terms and conditions");
//         return;
//     }
//     // console.log(event.submitter);   //shows the element with is performing submit
    
// })



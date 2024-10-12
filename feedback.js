
const feedback = document.forms.feedbackForm
// const inputName = feedback.name_input
// const radialInput = feedback.type


const handleSubmitEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(feedback); //formdata constructs the data from the feedback form and into a neat representation of key value pair
                                            //here key is name and value is input value //form data has many methods like append,delete,values,etc
                                            //same as formdata event 
    

//const data = [...formData.entries()];  //here entries method is an iterator which gives name and its value using spread operator we can copy it
                                            // into an array
   
                                            
            //old way of doing

    // const dataString = data.map( (x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}` ).join("&") //here map returns an array of 
                                        //encoded elements the encodeuricomponent method encodes the whitespace in the string and join method
                                        //joins every element in the array with "&" and returns a single string 

    // const dataString = data.map( ([key,value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}` ).join("&") //here we are mentioning
                                        //that the array and its index[0] will be key and index[1] will be value and taking that variable name
                                        //and using it in the string
    // console.log(dataString);


            //new way of doing 

    //const dataString2= new URLSearchParams(formData).toString() //urlsearchparams returns object and to string object returns a string of query 
                                                                  // string which can be used in url 

    // console.log(dataString2);

        //------------structuring object------------------
        
                //method 1
        
        // const objectData = Object.fromEntries(formData) //returns the data in a object structure of key value pairs

        // console.log(objectData);

            // JSON method    //proper structure and in react,vue,angular we send data by object format

   
        // const jsonData = JSON.stringify(Object.fromEntries(formData)) //stringify converts js object into JSON strings and returns JSON format

        // console.log(jsonData);
    


        // Send data to backend

// 1. XMLHTTPREQUEST

// let xhr = new XMLHttpRequest();  //constructs XHR object used to retrieve any type of data // most used in 
// xhr.open("GET","https://reqres.in/api/users/2",true)  //sets a request method ,request URL, and Async true or false 
// xhr.onload = function (){
//         const obj = JSON.parse(xhr.responseText)   //gets the response text from api and parse converts JSON data into JS object structure
//         document.querySelector(".api-div").innerText = obj.data.first_name+ " " + obj.data.last_name //from retrieved data we can use the required
//                                                                                                      //data using object notation
// }
// xhr.send();  //initiates the request

    
    



// 2. fetch() 

// fetch("https://reqres.in/api/users/2",{
        // method: "POST",  // post method is for sending data and get method for retrieving data, PUT and DELETE is there//these are request method
        // headers: {
        //         "Content-Type": "application/json" //here we mentioned content typr is json
        //         //    "Content-Type": "application/x-www-form-urlencoded" //we should specify content type in header here it is form data 
        // },
        // // body: new FormData(feedback)  //sends the form data directly
        // body: jsonData  //sends data in json format which we have already converted by strigify method

// })



// fetch("https://reqres.in/api/users?page=2",{
//         method: "GET",  // get method for retrieving data
        
// })
//fetch is ASYNC which means if request is performed it will have some delay but it does not wait it starts 
                                //executing the below functions when there is a response it will execute the function inside its callback
                                //that callback can be achieved by using then  
                                //function inside then will execute when fetch is resolved or rejected

// .then((response) => response.json()) //here the response is converted in JS object format not json

// .then((data) => {     //data holds the parsed object  
//         document.querySelector(".api-div").innerText = data.data[0].email
        
// })
// }

// feedback.addEventListener('submit', handleSubmitEvent)

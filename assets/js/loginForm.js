const pwInput = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const unInput = document.getElementById("username");

// When the user clicks on the password field, show the message box
pwInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pwInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
pwInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(pwInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(pwInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  
  // Validate numbers
  let numbers = /[0-9]/g;
  if(pwInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pwInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// if(!x || !x.match(upperCaseLetters) || !x.match(numbers) || !x.length > 8)

// function userInfo() {
//   let x = document.getElementById("myForm").elements.input.value;
//   let y = document.getElementById("myForm").elements[1].value;
//   let emo = document.getElementById("errormessageOne");
//   let emt = document.getElementById("errormessageTwo");
  
  
//   let error=false;
  
//   emo.innerText = '';
//   emt.innerText = '';
  
//   if(!x){
//     emo.innerText ='Udfyld feltet';
    
//     error=true;
//   }
  
//   if(!y){
//     emt.innerText ='Udfyld feltet';
    
//     error=true;
//   }
  
//   if(!pwInput.value.match(upperCaseLetters)){
//       emt.innerText ='Kodeord opfylder ikke krav';

//       error=true;
//     }

//     if(!error){
//       // document.getElementById("userBox").style.display = "block";
//       document.getElementById("demo").innerHTML = 'Dit brugernavn er: '+x;
//       document.getElementById("demoTwo").innerHTML = 'Din adgangskode er: '+y;
        
//     }  
// }

function userInfo() {
   
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;

  let emo = document.getElementById("errormessageOne");
  let emt = document.getElementById("errormessageTwo");

  emo.innerText='';
  emt.innerText='';

let error=false;

if(!x){
    document.getElementById("myForm").elements[0];
    document.getElementById("errormessageOne").innerText ="Udfyld Feltet";

    error=true;

  }

  else{
    document.getElementById("errormessageOne").innerText ='';
  }

  if(!y){
    document.getElementById("myForm").elements[1];
    document.getElementById("errormessageTwo").innerText ="Udfyld feltet";
    error=true;

  }
  else{
    document.getElementById("errormessageTwo").innerText ='';
  }
  

  if(!error){
    document.getElementById("userBox").style.display = "block";
    document.getElementById("demo").innerText = "Dit brugernavn er: "+x;
    document.getElementById("demoTwo").innerText = "Din adgangskode er: "+y;
  }
}



// if (fullname.value === "" || !isValidAlpha(fullname.value))

// function isValidLength(){
//   if (length.value === null || !isValidAlpha(unInput.value))
// }

// function isValidUCL(){

// }

// function isValidLCL(){
//   let lowerCaseLetters = /[a-z]/g;
//   if(pwInput.value.match(lowerCaseLetters)) {  
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }

// }

// function isValidNum(){

// }

// function isValidPassword(value) { 
//   let pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"; 
//   return pattern.test(value); 
// }

// function validate(){
//   if(pwInput)
// }




document.querySelector("#myForm").addEventListener("submit",()=>{
event.preventDefault()

let form = document.querySelector("#myForm");
let subject = document.querySelector("#subject").value
let phone = document.querySelector("#phone").value
let error_message = document.querySelector("#error_message")
let name = document.querySelector("#name").value
let email = document.querySelector("#email").value
let message = document.querySelector("#message").value
let phone_pattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
let email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
let text;
error_message.style.padding="10px"

// Start The Domming //
if (name.length<5) {
     text = "Pls enter valid name";
     error_message.innerHTML=text;
     
     return false
}

 if (subject.length<10) {
      text = "Pls enter correct subject"
      error_message.innerHTML= text;
      
      return false
}
 if (!(phone.match(phone_pattern))) {
     text = "Pls enter valid phone number";
     error_message.innerHTML=text
     return false
}

 if (!(email.match(email_pattern))) {
     text = "Pls enter valid email";
     error_message.innerHTML=text
     return false
}

 if (message.length<50) {
     text = "Messege Could be 50 Character";
     error_message.innerHTML=text
     return false
}else
{
     text = "Registration Succesfull";
     error_message.style.backgroundColor="green"
     error_message.innerHTML=text
     window.location.href="RealPage/index.html"
}



})




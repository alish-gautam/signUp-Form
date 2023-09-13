let pw=document.getElementById("password")
let confirmpw=document.getElementById("confirmpass")
let userpass=document.querySelector(".userpassword")
if(pw.value!=confirmpw.value){
    let incorrect=document.createElement("h1")
    incorrect.innerText="Passwords do not match"
    body.appendChild(incorrect)
}

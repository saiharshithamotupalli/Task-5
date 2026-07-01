function validateForm(){

let name =
document.getElementById("name").value;

let mobile =
document.getElementById("mobile").value;

let email =
document.getElementById("email").value;

let namePattern =
/^[a-zA-Z ]{6,}$/;

let mobilePattern =
/^[0-9]{10}$/;

let emailPattern =
/^\S+@\S+\.\S+$/;

if(!namePattern.test(name)){
alert("Invalid Name");
return false;
}

if(!mobilePattern.test(mobile)){
alert("Invalid Mobile Number");
return false;
}

if(!emailPattern.test(email)){
alert("Invalid Email");
return false;
}

alert("Form Submitted Successfully");
return true;

}

function openSite(){

let sites=[
"https://www.linkedin.com",
"https://www.geeksforgeeks.org",
"https://www.kaggle.com",
"https://www.w3schools.com",
"https://www.coursera.org"
];

let random =
Math.floor(Math.random()*sites.length);

window.open(sites[random],"_blank");

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
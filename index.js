function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


let emailValue = document.querySelector('.emailValue');


console.log("hello");


let p = document.createElement('p');

let clicked = true;
document.getElementById('validation').addEventListener('click', function (event) {
    if((!validateEmail(emailValue.value))){
        p.classList.add('red');
        p.innerText = "Email is not Correct ,Please check your email";
        document.getElementById('error').appendChild(p);
    }
    else {
        p.classList.add('active');
        p.classList.remove('red');
        p.innerText = "Alright , email have been sent! ";
        document.getElementById('error').appendChild(p);
    }
});

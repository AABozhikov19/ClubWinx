function store(){

    var name = document.getElementById('name');
    var password = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please, enter your email');

    }
    else if(password.value.length == 0){
        alert('Please, enter your password');

    }
    else if(name.value.length == 0 && password.value.length == 0){
        alert('Please, enter your email and password');

    }
    else if(password.value.length > 8){
        alert('The maximum is out of 8');

    }
    else if(!password.value.match(numbers)){
        alert('Please, add at least 1 number');
    }
    else if(!password.value.match(upperCaseLetters) && !password.value.match(lowerCaseLetters)){
        alert('Please, add at least 1 letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been created');
    }
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedpassword = localStorage.getItem('password');

    var userName = document.getElementById('userName');
    var userpassword = document.getElementById('userpassword');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userpassword.value == storedpassword){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}
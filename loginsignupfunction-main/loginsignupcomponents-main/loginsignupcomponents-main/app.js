import { Loginfunction } from "./signup/firebase1.js"

const loginbutton = document.getElementById('loginbuttonID');



loginbutton.onclick = async () => {
    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');

    let gettingdata = await Loginfunction(email.value, password.value); /*fetching data from firebase*/
    console.log('///////////////////////////////////////////////////////////////////////////////////////');
    console.log('data from server:' + gettingdata.Email);
    localStorage.setItem('mydata',JSON.stringify(gettingdata));
    window.location.replace('./profile.html');
    alert(gettingdata)

}

// onAuthStateChangedfunction();















////////////////////////////////////////////EYE Function to show password/////////////////////////////////

const passeye = document.getElementById('passwordEye');
passeye.onmousedown = () => {
    console.log('clicked')
    document.querySelectorAll('input[type="password"]')[0].type = 'text';
    passeye.style.opacity = '1';

}
passeye.onmouseup = () => {
    console.log('clicked')
    document.querySelectorAll('input[type="text"]')[0].type = 'password';
    passeye.style.opacity = '0.3';
}
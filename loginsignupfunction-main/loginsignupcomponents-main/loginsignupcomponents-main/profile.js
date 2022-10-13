import { observer, userlogoutfunction } from './signup/firebase1.js';
let section1 = document.getElementById('section1ID');
var mydata = localStorage.getItem('mydata');
var mydata = JSON.parse(mydata);



let stateobserver = observer()
stateobserver.then(() => {
    document.getElementById('titleID').innerHTML += ` ${(mydata.Fullname).toUpperCase()}`;
    for (const key in mydata) {
        if (mydata.hasOwnProperty(key)) {
            section1.innerHTML += `<h3>${key}: ${mydata[key]}</h3>`;
        }
    }


}).catch(() => {
    let bodY = document.getElementById('sectionerrorheadingID');
    bodY.style.display = 'flex'
    bodY.innerHTML += '<h3 style="color:red;">Verification Error!</h3>';
    bodY.innerHTML += '<p style="font-size:0.7em">Email is not verified, a confirmation email has been sent check your inbox</p>';
    bodY.innerHTML += `<a style="font-size:0.6em;color:blue;text-decoration:underline;">${mydata.Email}</a>`
    bodY.innerHTML += '<p style="font-size:0.7em">https://loginsignup-eef41.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=vJrCtsOHFc_r773wX-MnjOEryV7lG3D5yOamb5En-</p>';
})



let logoutbuttonID = document.getElementById('logoutbuttonID');
logoutbuttonID.onclick = () => {
    userlogoutfunction();
}




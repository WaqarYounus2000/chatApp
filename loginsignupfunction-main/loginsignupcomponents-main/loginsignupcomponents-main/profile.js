import { observer, userlogoutfunction, getalldatafromfirbase } from './signup/firebase1.js';
let section1 = document.getElementById('section1ID');
let dropdownID = document.getElementById('dropdownID');
let all_chats_contactID = document.getElementById('all_chats_contactID');
var mydata = localStorage.getItem('mydata');
var mydata = JSON.parse(mydata);



let stateobserver = observer()
stateobserver.then(() => {

    let alldata = getalldatafromfirbase();
    alldata.then((data) => {
        data.forEach((doc) => {
            if (mydata.UserID != doc.id) {
                all_chats_contactID.innerHTML += `<li class='alluserfromDB'>${doc.id}==> ${doc.data().Fullname}</li>`;

            }
            
        });
    })





    document.getElementById('titleID').innerHTML += ` ${(mydata.Fullname).toUpperCase()}`;
    for (const key in mydata) {
        if (mydata.hasOwnProperty(key)) {
            if (key != "Password" && key != "Fullname") {

                dropdownID.innerHTML += `<li class="dropdownli">${key}: ${mydata[key]}</li>`;
                console.log(key + "++++----///")
            }
        }
    }


}).catch(() => {
    document.getElementById('main_containerID').style.display = 'none';
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








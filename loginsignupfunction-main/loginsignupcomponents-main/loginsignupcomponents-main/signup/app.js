import { signupfunction,getalldatafromfirbase } from './firebase1.js'




const signupbutton = document.getElementById('signupbuttonID');

signupbutton.onclick = () => {
    // signupbutton.innerHTML=`<img style="width:24px;" src="../images/loader.gif"></img>`
    let fullname = document.getElementById('fullname');
    let fathername = document.getElementById('fathernameID');
    let dateofbirth = document.getElementById('birthdate');
    let phonenumber = document.getElementById('phone');
    // let gender = document.getElementById('EmailID');

    let email = document.getElementById('EmailID');
    let password = document.getElementById('passID');
    console.log(email.value, password.value, fullname.value, fathername.value, dateofbirth.value, phonenumber.value)
    signupfunction(email.value, password.value, fullname.value, fathername.value, dateofbirth.value, phonenumber.value);
    let swlbutton=document.getElementsByClassName('swal-button')
    
    console.log(swlbutton.childNodes)

    
    // swlbutton.onclick = ()=>{
    //     console.log('hogya hai yahn per')
    //     alert('yah per b hogya hai')
    // }


}






getalldatafromfirbase();
/////////////////////////////////////////////////////////////////////////////////////////



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







const rightarrowbutton = document.getElementById('rightarrobutton');
rightarrowbutton.onclick = () => {
    document.getElementById('card2').style.display = 'none'
    document.getElementById('card1').style.display = 'flex';


}
const leftbuttonarrow = document.getElementById('leftarrowbutton');
leftbuttonarrow.onclick = () => {
    document.getElementById('card2').style.display = 'flex'
    document.getElementById('card1').style.display = 'none';


}
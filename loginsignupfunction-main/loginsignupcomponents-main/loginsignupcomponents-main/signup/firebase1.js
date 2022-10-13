import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { doc, setDoc, getDoc, getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBd4jTG7RWe6guSsNMwCESg-SmgEygcR2c",
    authDomain: "loginsignup-eef41.firebaseapp.com",
    projectId: "loginsignup-eef41",
    storageBucket: "loginsignup-eef41.appspot.com",
    messagingSenderId: "810934973982",
    appId: "1:810934973982:web:c9a33d2e3f2e75557b200f",
    measurementId: "G-QYQH4Z2T8V"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const database = getDatabase();
const db = getFirestore();
var users;

function signupfunction(email, password, fullname, fathername, dateofbirth, phonenumber) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            users = userCredential.user;
            // storing data to firestore database
            await setDoc(doc(db, "users", user.uid), {
                Fullname: fullname,
                FatherName: fathername,
                Email: email,
                Password: password,
                Dateofbirth: dateofbirth,
                Phonenumber: phonenumber,
            });
            swal("Congratulation!", "Your Account Has been Created Successfully!", "success");
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log("Email sent");
                })
                .catch((err) => console.log(err));


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Erro==> ", errorMessage)
            swal({
                icon: "error",
                title: errorCode
            });
            // ..
        });

}


function Loginfunction(email, password) {
    return new Promise(function (myResolve, myReject) {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                const user = userCredential.user;
                // swal("Log in successfull!", '', "success");
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("/////////////Document data:////////////////", docSnap.data());
                    let DATA = docSnap.data();
                    myResolve(DATA)

                } else {
                    console.log("No such document!");
                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                email = '';
                password = '';
                console.log(errorMessage)
                swal({
                    icon: "error",
                    title: errorCode
                });
                myReject(error)

            });
    })
}

function userlogoutfunction() {
    auth.signOut().then(() => {
        alert('user logging out...')
        window.location.replace('./index.html')
    })

}

async function getalldatafromfirbase() {

        const querySnapshot = await getDocs(collection(db, "users"));
        // console.log(querySnapshot)
        return querySnapshot
        
        
       

    



}



function observer() {
    return new Promise(function (myResolve, myReject) {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                const uid = users.uid;
                if (users.emailVerified === true) {
                    console.log(users.emailVerified)
                    console.log(users)
                    myResolve(() => {
                        return true
                    })

                }
                else {
                    console.log(users)
                    myReject(() => {
                        return false
                    })

                }


            }

        });

    }
    )
}












export { signupfunction, Loginfunction, observer, userlogoutfunction, getalldatafromfirbase }
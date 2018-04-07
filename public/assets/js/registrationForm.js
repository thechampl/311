// 'use strict';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDUKEzdKpJQ3aCrue8FDXIHolQV6iQC_EM",
    authDomain: "project2-d7753.firebaseapp.com",
    databaseURL: "https://project2-d7753.firebaseio.com",
    projectId: "project2-d7753",
    storageBucket: "project2-d7753.appspot.com",
    messagingSenderId: "92644411279"
};
firebase.initializeApp(config);
const auth = firebase.auth();

// To Dos in this file

    // =======

    // make function and invoke within the signup and log in funcs
    // on successful signup / login remove values within
    // probably just redirect the user to the home page with a 
    // get request to a route


// DOM hooks
const loginButton = document.querySelector("#loginButton");
const signUpButton = document.querySelector("#signUpButton");
const resetPassButton = document.querySelector("#emailReset");
const form = document.querySelector("#registerForm");
const email = document.querySelector('#emailInput');
const password = document.querySelector("#passwordInput");
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const street = document.querySelector('#street');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const zip = document.querySelector('#zip');
const homePhone = document.querySelector('#homePhone');
const workPhone = document.querySelector('#workPhone');

// Modal DOM hooks
const modal = document.getElementById('modal');
const passResetEmailButton = document.getElementById('passResetEmail');
const closeButton = document.getElementById('close');
const modalEmail = document.getElementById('modalEmailAddress');

// Button created for logged in users
const signOutButton = document.createElement("button");
const buttonText = document.createTextNode("Sign Out");

// Firebase detects if a users is currently logged in
const currentUser = firebase.auth().currentUser;


const inputElements = [email, firstName, lastName, street, state, city, zip, homePhone, workPhone, password];

inputElements.forEach((element) => {
    element.style.borderColor = 'red';
    element.addEventListener('input', inputValidator);
})



// Refactor this ugly shit
loginButton.addEventListener('click', e => {
    e.preventDefault();
    const emailVal = email.value.trim();
    console.log(email);
    const passwordVal = password.value.trim();
    const promise = auth.signInWithEmailAndPassword(emailVal, passwordVal);
    promise.catch(e => console.log(e.message));

    email.value = "";
    password.value = "";
})

// Sign up function
signUpButton.addEventListener('click', e => {
    e.preventDefault();
    const inputElements = [email, password, firstName, lastName, street, state, zip, homePhone, workPhone];
    const undefinedElements = [];
    const definedElements = [];
    for(var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === "") {
            undefinedElements.push(inputElements[i]);
        } else {
            definedElements.push(inputElements[i].value.trim());
        }
    }
    console.log(definedElements);
    [emailVal, passwordVal, firstNameVal, lastNameVal, streetVal, stateVal, zipVal, phoneNumVal, workPhoneVal] = definedElements;
    if (undefinedElements.length === 0) {
        const data = {
            emailVal,
            firstNameVal,
            lastNameVal,
            streetVal,
            stateVal,
            zipVal, 
            phoneNumVal,
            workPhoneVal
        };

        const promise = auth.createUserWithEmailAndPassword(emailVal, passwordVal)
            .then(() => {
                postUserInput(data);
            });
        promise.catch(e => console.log(e.message));
    } else {
        alert("Not all fields are completed");
        undefinedElements.forEach((element) => {
            console.log(element);
        })
    }

})

signOutButton.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
        console.log(currentUser);
        // hide the other buttons when a user is logged in
        loginButton.style.display = "none";
        signUpButton.style.display = "none";
        // Append signout button to form
        signOutButton.classList.add("btn");
        signOutButton.classList.add("btn-outline-danger");
        signOutButton.appendChild(buttonText);
        form.appendChild(signOutButton);
    } else {
        console.log("firebaseUser not logged in");
    }
});

// Send the user data back to our database for website usage and notifications
function postUserInput(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/userData", true);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
}

function inputValidator() {
    if (this.value === '') {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = '#ced4da';
    }
}
// reset email address

resetPassButton.addEventListener('click', (e) => {
    e.preventDefault();
    createModal();
})

const createModal = e => {
    modal.style.display = "block";
    closeButton.addEventListener('click', closeModal);
    passResetEmailButton.addEventListener('click', submitEmail);
}

const closeModal = e => {
    e.preventDefault();
    modal.style.display = "none";
}

const submitEmail = e => {
    e.preventDefault();
    const emailVal = modalEmail.value.trim();
    let emailPromise = new Promise(() => (resolve, reject) => {
        () => resolve(emailVal);
    }).then(
        auth.sendPasswordResetEmail(emailVal).then(function() {
            alert(`A reset email has been sent to ${emailVal}`);
          }).catch(function(error) {
            alert(error);
          }),
          modal.style.display = "none"
    )
}


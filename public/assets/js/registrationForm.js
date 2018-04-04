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

// To Dos in this file

    // =======

    // make function and invoke within the signup and log in funcs
    // on successful signup / login remove values within
    // probably just redirect the user to the home page with a 
    // get request to a route


// DOM hooks
const loginButton = document.querySelector("#loginButton");
const signUpButton = document.querySelector("#signUpButton");
const form = document.querySelector("#registerForm");

// Button created for logged in users
const signOutButton = document.createElement("button");
const buttonText = document.createTextNode("Sign Out");

const currentUser = firebase.auth().currentUser;

const email = document.querySelector('#emailInput');
const password = document.querySelector("#passwordInput");
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const county = document.querySelector('#county');
const zip = document.querySelector('#zip');
const phoneNum = document.querySelector('#phoneNum');

const inputElements = [email, firstName, lastName, county, zip, phoneNum, password];
inputElements.forEach((element) => {
    element.style.borderColor = 'red';
    element.addEventListener('input', inputValidator);
})

function inputValidator() {
    // not sure if need to pass event as param
    if (this.value === '') {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = '#ced4da';
    }
}

// Refactor this ugly shit
loginButton.addEventListener('click', e => {
    e.preventDefault();
    const auth = firebase.auth();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const promise = auth.signInWithEmailAndPassword(emailVal, passwordVal);
    promise.catch(e => console.log(e.message));

    email.value = "";
    password.value = "";
})

// Sign up function
signUpButton.addEventListener('click', e => {
    e.preventDefault();
    const auth = firebase.auth();
    const inputElements = [email, password, firstName, lastName, county, zip, phoneNum];
    const undefinedElements = [];
    const definedElements = [];
    for(var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === "") {
            undefinedElements.push(inputElements[i]);
        } else {
            definedElements.push(inputElements[i].value.trim());
        }
    }
    [emailVal, passwordVal, firstNameVal, lastNameVal, countyVal, zipVal, phoneNumVal] = definedElements;
    if (undefinedElements.length === 0) {
        const data = {
            emailVal,
            name: `${firstNameVal} ${lastNameVal}`,
            countyVal,
            zipVal, 
            phoneNumVal
        };

        // destructer the definedEles array and get the email and password
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


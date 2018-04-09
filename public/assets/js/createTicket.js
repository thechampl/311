
// inputs
const ticketStreet = document.querySelector("#ticketStreet");
const ticketCity = document.querySelector("#ticketCity");
const ticketState = document.querySelector("#ticketState");
const ticketZip = document.querySelector("#ticketZip");
const ticketComments = document.querySelector("#ticketComments");
const characters = document.querySelector("#remainingChars");


// submit button
const ticketSubmit = document.querySelector("#ticketSubmit");


// Events
ticketSubmit.addEventListener("click", nameLater);
ticketComments.addEventListener("keyup", remainingChars);


// Functions

function nameLater() {
    const ticketData = {
        comments: ticketComments.value.trim(),
        street: ticketStreet.value.trim(), 
        city: ticketCity.value.trim(),
        state: ticketState.value.trim(),
        zip: ticketZip.value.trim()
    };
    inputValidation(ticketData);
}


function ticketValidation(dataObj) {  
    let breakFlag = null;
    for(let property in dataObj) {
        // Validates that no symbols are in a property value
        if ( /[^a-zA-Z0-9\-\/\s\.]/.test( dataObj[property] )) {
            console.log("alphanumeric error");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        }; 
        // Validates that all input fields contain some value
        if (dataObj[property] === "" || undefined) {
            console.log("value error");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        };
    };
    if(breakFlag === true) {
        return;
    };
    postTicket(dataObj);
};


function remainingChars() {
    const defaultCharValue = 254
    let textLength = ticketComments.value.length;
    let charactersRemaining = parseInt(characters.textContent);
    let totalRemainingChars = defaultCharValue - textLength;
    characters.textContent = totalRemainingChars;
};

function postTicket(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/userTicket", true);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log("apples");
            console.log(this.responseText);
        };
    };
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
    $("#ticket-modal").modal("hide");
}



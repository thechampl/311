const form = {
    userInput: function() {
        // const userName = document.querySelector("#nameInput").value.trim();
        // const userEmail = document.querySelector("#emailInput").value.trim();
        // const userPassword = document.querySelector("#passwordInput").value.trim();
        let userName = 'a';
        let userEmail = 'b';
        let userPassword = 'c'
    
        const data = {
            userName,
            userEmail,
            userPassword
        };
    
        return data;
    }
}


// add event listener to button that will get all of our input data.
// use xhr to send data to server wrapped in an object
// allow 
module.exports = form
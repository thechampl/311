$(document).ready(function () {
    const characters = document.querySelector("#remainingChars");
    const ticketDept = document.querySelector("#deptDropdown");
    const ticketRequest = document.querySelector("#reqDropdown");
    const ticketQuestions = document.querySelector("#ticketQuestions");
    const ticketComments = document.querySelector("#ticketComments");

    // submit button
    const ticketSubmit = document.querySelector("#ticketSubmit");

    // Events
    ticketSubmit.addEventListener("click", ticketSubmitCallback);
    ticketComments.addEventListener("keyup", remainingChars);

    // Functions
    $("#open-ticket").on("click", getDepts);
    $("#deptDropdown").on("change", getReqs);
    $("#reqDropdown").on("change", getQuestions);

    function getDepts() {
        //AJAX call GET /api/departments
        $.ajax({
            url: "/api/departments",
            method: "GET"
        }).done(function (response) {
            $("#deptDefault").nextAll("option").remove();
            $("#reqDropdown").removeAttr("disabled");
            $("#reqDefault").nextAll("option").remove();
            $("#ticketQuestions").empty();
            response.forEach(function (dept) {
                var option = $("<option>").attr("value", dept.id).text(dept.name);
                $("#deptDropdown").append(option);
            })
        });
    }

    function getReqs() {
        //AJAX call GET /api/departments/:id
        $.ajax({
            url: "/api/departments/" + this.value,
            method: "GET"
        }).done(function (response) {
            $("#reqDropdown").removeAttr("disabled");
            $("#reqDefault").nextAll("option").remove();
            $("#ticketQuestions").empty();
            response.Requests.forEach(function (req) {
                var option = $("<option>").attr("value", req.id).text(req.name);
                $("#reqDropdown").append(option);
            })
        });
    }

    function getQuestions() {
        //AJAX call /api/questions/:id
        $.ajax({
            url: "/api/questions/" + this.value,
            method: "GET"
        }).done(function (response) {
            var ticketQuestions = $("#ticketQuestions");
            ticketQuestions.empty();
            response.forEach(function (question) {
                var formGroup = $("<div>").addClass("form-group");
                if (question.type === "text") {
                    var questionField = $("<input>").attr({
                        "type": "text",
                        "class": "form-control",
                        "data-question": question.id,
                        "placeholder": question.label
                    });
                } else if (question.type === "select") {
                    var selectChoices = question.choices.split(",");
                    var questionField = $("<select>").addClass("form-control");
                    var dropDefault = $("<option>").prop({
                        "disabled": true,
                        "selected": true
                    }).text(question.label);
                    questionField.append(dropDefault);
                    selectChoices.forEach(function (choice) {
                        var dropField = $("<option>").attr({
                            "data-question": question.id,
                        }).text(choice);
                        questionField.append(dropField);
                    })
                }
                formGroup.append(questionField);
                ticketQuestions.append(formGroup);
            })

        });
    }

    function ticketSubmitCallback() {
        //const department = ticketDept.options[ticketDept.selectedIndex].text;
        const requestId = ticketRequest.selectedIndex; //ticketRequest.options[ticketRequest.selectedIndex];
        const answers = [];
        const comments = ticketComments.value.trim();
        for(let i = 0; i < ticketQuestions.childNodes.length; i++) {
            let increment = i + 1;
            answers.push({question: increment, answer: ticketQuestions.childNodes[i].children[0].value});
            //answers["question " + increment] = ticketQuestions.childNodes[i].children[0].value;
        }
        const ticketData = {
            //firebaseId,
            requestId,
            answers,
            comments
        };
        //console.log(ticketData);
        ticketValidation(ticketData);
    }

    function ticketValidation(dataObj) {  
        let breakFlag = null;
        for(let property in dataObj) {
            // Validates that no symbols are in a property value
            if (typeof(dataObj[property]) !== 'object'){
                if ( /[^a-zA-Z0-9\-\/\s\.]/.test( dataObj[property] )) {
                    console.log("alphanumeric error");
                    $("#invalid-modal").modal("show");
                    breakFlag = true;
                    break;
                }; 
            }
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
                //console.log(this.responseText);
                $("#ticket-test form")[0].reset();
                $("#ticket-test").modal("hide");
            };
        };
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
        $("#ticket-modal").modal("hide");
    }
});



// REfactoring this regex. Please don't touch!!!!!!
// REfactoring this regex. Please don't touch!!!!!!
// REfactoring this regex. Please don't touch!!!!!!


// this error triggers because we pass an object as a value
// Use and if statement to check the type of each property

// function ticketValidation(dataObj) {  
//     let breakFlag = null;
//     for(let property in dataObj) {
//         // Validates that no symbols are in a property value
//         // this error triggers because we pass an object as a value
//         // Use and if statement to check the type of each property
//         if (typeof(dataObj[property]) == 'object') {
//             console.log("object ran", dataObj[property]);
//             if (/[^a-zA-Z0-9@:\-\/\s\.{}],*"*/.test( dataObj[property])) {
//                 console.log("alphanumeric object error");
//                 $("#invalid-modal").modal("show");
//                 breakFlag = true;
//                 break; 
//             }
//         } else if ( /[^a-zA-Z0-9\-\/\s\.]/.test( dataObj[property] )) {
//             console.log("alphanumeric error");
//             $("#invalid-modal").modal("show");
//             breakFlag = true;
//             break;
//         }; 
//         // Validates that all input fields contain some value
//         if (dataObj[property] === "" || undefined) {
//             console.log("value error");
//             $("#invalid-modal").modal("show");
//             breakFlag = true;
//             break;
//         };
//     };
//     if(breakFlag === true) {
//         return;
//     };
//     postTicket(dataObj);
// };

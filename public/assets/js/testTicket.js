// inputs
// const ticketStreet = document.querySelector("#ticketStreet");
// const ticketCity = document.querySelector("#ticketCity");
// const ticketState = document.querySelector("#ticketState");
// const ticketZip = document.querySelector("#ticketZip");
// const ticketComments = document.querySelector("#ticketComments");
// const characters = document.querySelector("#remainingChars");


// submit button
// const ticketSubmit = document.querySelector("#ticketSubmit");


// Events
// ticketSubmit.addEventListener("click", postTicket);
// ticketComments.addEventListener("keyup", remainingChars);
//Test Ticket button listener
//Dept dropdown select
//Req dropdown select


// Functions


// function postTicket() {
//     const ticketData = {
//         comments: ticketComments.value.trim(),
//         street: ticketStreet.value.trim(),
//         city: ticketCity.value.trim(),
//         state: ticketState.value.trim(),
//         zip: ticketZip.value.trim()
//     };

//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/userTicket", true);
//     xhr.onload = function() {
//         if (this.status === 200) {
//             console.log("apples");
//             console.log(this.responseText);
//         };
//     };
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.send(JSON.stringify(ticketData));
// }


// function remainingChars() {
//     const defaultCharValue = 255;
//     let textLength = ticketComments.value.length;
//     let charactersRemaining = parseInt(characters.textContent);
//     let totalRemainingChars = defaultCharValue - textLength;
//     characters.textContent = totalRemainingChars;
// }

// Create validation for this form
// Make sure users submit the required information
// make sure that users cannot submit symbols or other malicious characters that could inject our software

$(document).ready(function () {
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
});
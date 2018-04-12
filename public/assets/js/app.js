$.ajax({ url: "/api/tickets", method: "GET" }).done(data => {
    $("#open-dash").on("click", () => {
        $("#mainContent").empty();
        console.log(data)
        for(var i = 0; i< data.length; i++){
            var card= $("<div>").addClass("card text-white bg-info mb-3")
            var cardHeader = $("<div>").addClass("card-header") 
            var cardBody = $("<div>").addClass("card-body")
            var cardTitle = $("<div>").addClass("card-title")
            var cardText =$("<p>").addClass("card-text")
            $(cardText).text(data[i].Answers[i].Question.label + data[i].Answers[i].value);
            $(cardTitle).text(data[i].status).append(cardText)
            $(cardBody).append(cardTitle)
            $(cardHeader).text(data[i].votes).append(cardBody);
            $(card).append(cardHeader);
            $("#mainContent").append(card)
        }
    });
});
    
$(document).ready(function () {
  $("#sign-up").on("click", function () {
    $("#login-modal").modal("hide");
    $("#register-modal").modal("show");
  });

  $("#login").on("click", function () {
    $("#register-modal").modal("hide");
    $("#login-modal").modal("show");
  });

  $("#createTicket").on('click', () => {
    $("#ticket-modal").modal("show");
  });

  $("#resetPassword").on("click", function () {
    $("#login-modal").modal("hide");
    $("#reset-modal").modal("show");
  });

});



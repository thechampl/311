
// var card= $("<div>").addClass("card text-white bg-info mb-3")
// var cardHeader = $("<div>").addClass("card-header") 
// var cardBody = $("<div>").addClass("card-body")
// var cardTitle = $("<div").addClass("card-title")
// var cardText =$("<p>").addClass("card-text")
// for (each ticket) {
// $(cardTitle).text(TicketHeader).append(cardText)
// $(cardBody).text(TicketInfo).append(cardTitle)
// $(cardHeader).append(cardBody);
// $(card).append(cardHeader);
// $("#mainContent").append(card);}

$.ajax({
  url: "./api/tickets",
  method: "GET"
}).done(function(data) {
  $("#open-dash").on("click", function(){    
    console.log(data)
    $("#mainContent").empty();
        for (i=0; i< data.length; i++){
  $(cardText).text(data[i].answers.label + data[i].value);
 $(cardTitle).text(data[i].status).append(cardText)
$(cardBody).append(cardTitle)
$(cardHeader).text(data[i].votes).append(cardBody);
$(card).append(cardHeader);
  $("#mainContent").append(card)}
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



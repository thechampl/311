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
  })
});
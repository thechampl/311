$(document).ready(() => {
// ON CLICK: Sign-Up
    $("#sign-up").on("click", () => {
        $("#login-modal").modal("hide");
        $("#register-modal").modal("show");
    });
// ON CLICK: Login
    $("#login").on("click", () => {
        $("#register-modal").modal("hide");
        $("#login-modal").modal("show");
    });
// ON CLICK: Create Ticket
    $("#createTicket").on('click', () => {
        $("#ticket-modal").modal("show");
    });
// ON CLICK: Reset Password
    $("#resetPassword").on("click", () => {
        $("#login-modal").modal("hide");
        $("#reset-modal").modal("show");
    });
});

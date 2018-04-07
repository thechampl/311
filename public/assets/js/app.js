
$( document ).ready(function() {
    $(".deptbtn").on("click", function(){
        var deptid = $(this).data("dept-id");
        $.ajax({
            url: "/api/departments/" + deptid,
            method: "GET"
        }).done(function(response) {
            
        });
    })
    
});
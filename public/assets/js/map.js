function getCurrentLocation(event){
    event.preventDefault();
    var options = {
        enableHighAccuracy: true,
        timeout: 10000
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
    function success(position){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var key = "AIzaSyBxZmnFh3oQnm6_7lwt2vb7G1adlR__Poo";
        $.ajax({
            url:`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`, 
            type:"GET"
        }).done(results => {
            $("#address").val(`${results.results[0].address_components[0].short_name} ${results.results[0].address_components[1].short_name}`);
            $("#city").val(results.results[0].address_components[3].short_name);
            $("#state").val(results.results[0].address_components[6].short_name);
            $("#zip").val(results.results[0].address_components[8].short_name);
        });
    }
    function error(err){
        // DO SOMETHING
    }
}
$("#currentLocation").on("click", getCurrentLocation);
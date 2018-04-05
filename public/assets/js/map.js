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
        var key = "AIzaSyADJYcm4Ea5xC6QebdDDc_PEjr_iKuW-s4";
        $.ajax({
            url:`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`, 
            type:"GET"
        }).done(function(results){
            $("#county").val(results.results[0].address_components[5].short_name);
            $("#zip").val(results.results[0].address_components[8].short_name);
            //console.log(results.results[0].address_components);
            //console.log(results.results[0].formatted_address);
        });
    }
    function error(err){
        //console.log(err)
    }
}
$("#currentLocation").on("click", getCurrentLocation);
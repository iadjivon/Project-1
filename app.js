///////////////////////
//HEADER
////////////////////////



////////////////////////
//FIRST SECTION 
////////////////////////

$('.Submit').on('click', (event) => {
    event.preventDefault();
    // console.log( $('.input-bar').val() );
    const locations = $('.input-bar').val();

$.ajax({
    url: `https://api.ipgeolocation.io/astronomy?apiKey=b391913d2c124b18981c98030c6a73c2&location=${locations}`,
}).then((data)=>{
        // console.log(data);
        // console.log($("#specific-date")).value;
        // console.log($("#specific-date")).clientLeft;


        //  console.log($('input[type="date"]'))[0];
        // console.log(date);
        $('#city').html(data.location.location);
        $('#sunrise').html(data.sunrise);
        $('#sunset').html(data.sunset);
    },
    ()=>{
        console.log('bad request');
});
});



////////////////////////
//
////////////////////////






////////////////////////
//
////////////////////////
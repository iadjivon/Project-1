///////////////////////
//HEADER
////////////////////////



////////////////////////
//FIRST SECTION 
////////////////////////

$('.Submit').on('click', (event) => {
    event.preventDefault();

    console.log( $('.input-bar').val() );


  const locations = $('input').val();


$.ajax({
    url: `https://api.ipgeolocation.io/astronomy?apiKey=b391913d2c124b18981c98030c6a73c2&location=${locations}`,
    // url:`https://api.ipgeolocation.io/astronomy?apiKey=b391913d2c124b18981c98030c6a73c2&location=${locations}`, 
    success: (data)=>{
        console.log(data);
        $('#city').html(data.location.city);
        $('#sunrise').html(data.sunrise);
        $('#sunset').html(data.sunset);
    },
    error: ()=>{
        console.log('bad request');
    }

});
});



////////////////////////
//
////////////////////////






////////////////////////
//
////////////////////////
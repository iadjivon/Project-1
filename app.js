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
    // let calendar = $(".specific-date").val();
    const dateIn = $(".specific-date").val();


$.ajax({
    url: `https://api.ipgeolocation.io/astronomy?apiKey=b391913d2c124b18981c98030c6a73c2&location=${locations}&date=${dateIn}`,
}).then((data)=>{
        console.log(data);
        // console.log($(".specific-date").val());
        // calendar.html(data.date)
        // console.log($("#specific-date")).clientLeft;
        //  console.log($('input[type="date"]'))[0];
        // console.log(date);
        // $('.specific-date').html(data.date);
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
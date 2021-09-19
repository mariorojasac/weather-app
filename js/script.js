$(function () {
    // const Variables 
    const BASE_URL = "https://api.openweathermap.org/data/2.5/";
    const API_KEY = "f8b0e07161f016e957b95cd112443cdc";
    let weather;

    // cached Elements 
    const $city = $("#city");
    const $temp = $("#temp");
    const $feel = $("#feel");
    const $weather = $("#weather")
    const $form = $("form");
    const $input = $('input[type="text"]');


    // Event listners 
    $form.on("submit", handleGetData);

    // function deleteData() {
    //     $('#temp').remove()
    // }


    // functions
    function handleGetData(event) {

        event.preventDefault();
        const cityName = $input.val();
        $input.val("");

        // get api
        $.ajax(`${BASE_URL}weather?q=${cityName}&units=imperial&appid=${API_KEY}`).then(
            function (data) {
                weather = data;
                render();
            },

            // error function

            function (error) {
                // the failure callback
                console.log(error);
                alert("ERROR 404")

            })
    }


    // render  function 
    function render() {

        $city.text(weather.name);
        $temp.text(`${weather.main.temp} F`);
        $feel.text(`${weather.main.feels_like} F`);
        $weather.text(`${weather.weather[0].description}`)

        //   console.log(JSON.stringify())
        // console.log(typeof weather.main[0])
    }


});
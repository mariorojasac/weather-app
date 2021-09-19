$(function () {
    // const Variables 
    const BASE_URL = "https://api.openweathermap.org/data/2.5/";
    const API_KEY = "f8b0e07161f016e957b95cd112443cdc";
    let movieData;

    // cached Elements 
    const $city = $("#city");
    const $temp = $("#temp");
    const $feel = $("#feel");
    const $weather = $("#weather")
    const $form = $("form");
    const $input = $('input[type="text"]');


    // Event listners 
    $form.on("submit", handleGetData);
    
    
    // functions
    function handleGetData(event) {

        event.preventDefault();
        const cityName = $input.val();
        $input.val("");

        // get api
        $.ajax(`${BASE_URL}weather?q=${cityName}&units=imperial&appid=${API_KEY}`).then(
            function (data) {
                movieData = data;
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

        $city.text(movieData.name);
        $temp.append(`${movieData.main.temp} <span>&#8457;</span>`);
        $feel.append(`${movieData.main.feels_like} <span>&#8457;</span>`);
        $weather.text(`${movieData.weather[0].description}`)

        //   console.log(JSON.stringify())
        // console.log(typeof movieData.main[0])
    }


});
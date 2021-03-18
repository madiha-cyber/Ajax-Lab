"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
    //alert(results);
    $("#fortune-text").html(results);
}

function showFortune(evt) {
    $.get('/fortune', replaceFortune);

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// // PART 2: SHOW WEATHER

function replaceForecast(results) {
    //alert(results.forcast);
    // console.log(results);
    // console.log(results.forecast);
    $("#weather-info").html(results.forecast);
    //$("#fortune-text").html(results);
}

function showWeather(evt) {
    //alert('called');
    evt.preventDefault();

    let url = "/weather.json";
    let formData = { "zipcode": $("#zipcode-field").val() };

    $.get(url, formData, replaceForecast)


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// // PART 3: ORDER MELONS
function replacemelons(results) {
    //alert(results.forcast);
    console.log(results);
    if (results.code === "OK") {

        // console.log(results.forecast);
        $("#order-status").html(results.msg);
        $("#order-status").removeClass("order-error");
    } else {
        $("#order-status").html(results.msg);
        $("#order-status").addClass("order-error");


    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let url = '/order-melons.json';
    let formData = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val()
    };

    $.post(url, formData, replacemelons)

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



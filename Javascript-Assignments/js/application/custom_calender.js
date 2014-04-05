// JSON Pattern

(function(){
    "use strict";
    var ajaxRequest = $.ajax({
        type: "GET",
        url: "../json/calender_data.json"
    }).done(function(data) {

       for(var i= 0; i < data.length; i++){
            $(".calender-data li").append("<h3 class='day'>" + data[i].day +"</h3>");
            for(var j=0; j < data[i]["content"].length; j++){
                $(".calender-data li").append("<div class='content'>" +
                    "<span class='time'>" + data[i].content[j].time + "</span>" +
                    "<span class='text'>" + data[i].content[j].text + "</span>" +
                    "</div>");
               }
       };
    });
}());


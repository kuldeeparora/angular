// JSON Pattern

(function(){
    "use strict";
    for (var num=1; num<=5; num++ ){
        for (var seq=1; seq<=num; seq++ ){
            $(".loop1").append("<div style='float: left;'>" + num + "</div>");
        }
        $(".loop1").append("<br>");
    }

    for(var num=5; num>=1; num--){
        for(var seq=1; seq<=num; seq++){
            $(".loop2").append("<div style='float: left;'>" + num + "</div>");
        }
        $(".loop2").append("<br>");
    }

        for (var row1=1; row1<=11; row1++){
            var b = row1++;
            $(".row1").append("<div style='float: left;'>" + b + "</div>");
        }
        $(".row1").append("<br>");
        for(var i=1;i<=5;i++){
            for(var j=1;j<=6;j++){
                $(".row2").append(i*j);
            }
            $(".row2").append("<br>");
        }

    for(var i= 1;i<=5;i++){
        for(var j=i;j>=1;j--){
            $(".loop4").append(j);
        }
        for(var k=2; k<=i; k++){
            $(".loop4").append(k);
        }
        $(".loop4").append("<br>");
    }


}());


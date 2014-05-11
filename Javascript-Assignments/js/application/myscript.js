// JSON Pattern

(function () {
    "use strict";

    var started = new Date();
    var now = started.getTime();

    function cubeMe(initialiseNumber) {
        if (initialiseNumber == 1) {
            return "What are you doing";
        } else {
            return Math.pow(initialiseNumber, 3);
        }
    }

    var num = 2;
    var finalNum = cubeMe(num);
    if (isNaN(finalNum)) {
        console.log("You should know that 1 to any power is 1.");
        console.log("You should know that 1 to any power is 1.".length);
    } else {
        console.log("When cubed " + num + " is " + finalNum);
        var myString = "This is my string ";
        console.log("Use of Substring" + " \"" + myString.substring(3, 9) + "\"");
        console.log("Use of Slice with negative value" + " \"" + myString.slice(3, -4) + "\"");
        var concatMyString = myString.concat("with concat".toUpperCase());
        console.log(concatMyString);
    }

    var h = 0xe;
    var i = 0x2;
    var j = h * i;
    console.log(j);

    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    // note Only year and month are required arguments; the others are optional.
    var today = new Date();
    var then = new Date();
// January 1, 2014
    then.setFullYear(2014, 0, 1);
    var diff = then.getTime() - today.getTime();
    diff = Math.floor(diff / (1000 * 60 * 60 * 24));
    var dateLoc = document.getElementById("dateField");
    dateLoc.innerHTML = "There are " + diff + " days until 1/1/2014";


    var bottom = new Date();
    var diff1 = (bottom.getTime() - now) / 1000;
    var finaltime = diff1.toPrecision(5);
    var dateLoc1 = document.getElementById("dateField1");
    dateLoc1.innerHTML = "Page rendered in " + finaltime + " seconds.";

}());

function submitForm() {
    var xmlhttp;

    var userName = document.getElementsByClassName('username');
    var firstName = document.getElementsByClassName('firstname');
    var lastName = document.getElementsByClassName('lastname');
    var age = document.getElementsByClassName('age');
    var email = document.getElementsByClassName('email');
    var password = document.getElementsByClassName('password');

    var userNameLength = userName[0].value.length;
    var ageLength = age[0].value.length;
    var passwordLength = password[0].value.length;
    var regUserName = /^[a-zA-Z0-9]+$/;
    var regName = /^[a-zA-Z]+$/;
    var regEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var validUserName = !regUserName.test(userName[0].value);
    var validName = !regName.test(firstName[0].value);
    var validLastName = !regName.test(lastName[0].value);
    var validEmail = !regEmail.test(email[0].value);
    var validAge = (isNaN(age[0].value)) || (ageLength === 0);

    if ((userNameLength < 6) || (validUserName)) {
        console.log("User Name should be more than 6 & should be alpha numeric");
        userName[0].style.background = '#ccc';
    } else {
        userName[0].style.background = '#fff';
    }

    if (validName) {
        console.log('Please type Valid First Name without Number');
        firstName[0].style.background = '#ccc';
    } else {
        firstName[0].style.background = '#fff';
    }

    if (validLastName) {
        console.log('Please type Valid Last Name without Number');
        lastName[0].style.background = '#ccc';
    } else {
        lastName[0].style.background = '#fff';
    }

    if (validAge) {
        age[0].style.background = '#ccc';
        console.log('Please type Valid Age ' + age[0].value);
    } else {
        age[0].style.background = '#fff';
    }

    if (validEmail) {
        console.log('Please type Valid Email Address');
        email[0].style.background = '#ccc';
    } else {
        email[0].style.background = '#fff';
    }

    if (passwordLength < 6) {
        console.log('Please enter valid password');
        password[0].style.background = '#ccc';
    } else {
        password[0].style.background = '#fff';
    }

    if(!validUserName && !validName && !validLastName && !validAge && !validEmail && !(passwordLength < 6)){
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var data = JSON.parse(xmlhttp.responseText);
                    var ul = document.getElementById('showData');
                    for(var i = 0; i < data.length; i++){
                        var li = document.createElement('li');x
                        var span = document.createElement('span');
                        li.setAttribute('class', 'class-day'+i);
                        li.appendChild(document.createTextNode(data[i].day));
                        ul.appendChild(li);
                        for(var j =0; j < data[i].content.length; j++){
                            span.setAttribute('class', 'class-time'+i);
                            span.appendChild(document.createTextNode(data[i].content[j].time))
                            li.appendChild(span);
                        }
                    }
                }
            };
            xmlhttp.open("GET", "../json/calender_data.json", true);
            xmlhttp.send();
        }
        console.log('all ok');
    }

}



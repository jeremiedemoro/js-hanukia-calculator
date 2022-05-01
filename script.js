var peopleNumber, dayNumber, basic, mehadrin, mmhSfarad, mmhAshkenaz;
var calculateButton = document.getElementById("calculator-btn");

calculateButton.onclick = function() {
    peopleNumber = document.getElementById("people-number").value;
    dayNumber = document.getElementById("hanuka-day").value;
    if (dayNumber < 1 || dayNumber > 8) {
        alert("Not in Chanuka");
    }
    else {
        basic = 1;
        mehadrin = peopleNumber;
        mmhSfarad = dayNumber;
        mmhAshkenaz = peopleNumber * dayNumber;

        document.getElementById("regular").innerText = basic;
        document.getElementById("mehadrin").innerText = mehadrin;
        document.getElementById("mmh-sfarad").innerText = mmhSfarad;
        document.getElementById("mmh-ashkenaz").innerText = mmhAshkenaz;
    }
} 
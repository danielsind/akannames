function mt() {
    alert("Thank you for your sumission");
    var m = parseInt(document.getElementsByTagName("select")[1].value);
    var d = parseInt(document.getElementsByTagName("select")[0].value);
    var y = parseInt(document.getElementsByTagName("input")[0].value);
    var g = document.getElementsByTagName("select")[2].value;
    var date = new Date(y, m, d);
    var day = date.getDay();
    var days = ["Thursday", "Friday", "Sartuday", "Sunday", "Monday", "Tuesday", "Wendesday"];
    var days2 = ["Friday", "Sartuday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    var days3 = ["Sartuday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var akanmale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanfem = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if (m == 4) {
        alert( "You were born on " +  days2[day]);
        document.getElementsById("result2").InnerHTML = "You were born on " + days2[day];
    }
    else if (m == 6) {
        alert( "Yoy were born on " + days2[day]);
        document.getElementsById("result2").InnerHTML = "You were born on " +  days2[day];
    }
    else if (m == 9) {
        alert( "You were born on " + days2[day]);
        document.getElementsById("result2").InnerHTML = "Your day is" + days2[day];
    }
    else if (m == 11) {
        alert( "You were born on " + days2[day]);
        document.getElementsById("result2").InnerHTML = days2[day];
    }
    else if (m == 2) {
        alert( "You were born on " + days3[day]);
        document.getElementsById("result2").innerHTML = days3[day];
    }
    else {
        alert( "You were born on " + days[day]);
        document.getElementsById("result2").innerHTML = days[day];
    }

}
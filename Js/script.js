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
    var am1 = ["Kwaku","Yaw","Kofi","Kwame","Kwasi","Kwadwo","Kwabena"];
    var am2 = ["Yaw","Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku"];
    var am3 = ["Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"];
    var af1 = ["Akua","Yaa","Afua","Ama","Akosua","Adwoa","Abenaa"];
    var af2 = ["Yaa","Afua","Ama","Akosua","Adwoa","Abenaa","Akua"];
    var af3 = ["Afua","Ama","Akosua","Adwoa","Abenaa","Akua","Yaa"];
    if ( g == 1){
    if (m == 4 ) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + am2[day]);
    }
    else if (m == 6 ) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + am2[day]);
    }
    else if (m == 9) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + am2[day]);
    }
    else if (m == 11) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + am2[day]);
    }
    else if (m == 2) {
        alert( "You were born on " +  days3[day] +  " and your Akan name is " + am3[day]);
    }
    else {
        alert( "You were born on " +  days[day] +  " and your Akan name is " + am1[day]);
    }

}
if ( g == 2){
    if (m == 4 ) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + af2[day]);
    }
    else if (m == 6 ) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + af2[day]);
    }
    else if (m == 9) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + af2[day]);
    }
    else if (m == 11) {
        alert( "You were born on " +  days2[day] +  " and your Akan name is " + af2[day]);
    }
    else if (m == 2) {
        alert( "You were born on " +  days3[day] +  " and your Akan name is " + af3[day]);
    }
    else {
        alert( "You were born on " +  days[day] +  " and your Akan name is " + af1[day]);
    }

}
else {
    alert (" please make sure you have selected something");
}
}
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
    var am1 = ["Yaw","Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku"];
    var am2 = ["Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"];
    var am3 = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    var af1 = ["Yaa","Afua","Ama","Akosua","Adwoa","Abenaa","Akua"];
    var af2 = ["Afua","Ama","Akosua","Adwoa","Abenaa","Akua","Yaa"];
    var af3 = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
    if ( y === "" ){
        alert("Ooops!!! invalid year entry");
    }
    else if ( g == 1){
    if (m == 4 ) {
        alert( "You were born on " +  days2[day] +  " and your Male Akan name is " + am2[day]);
    }
    else if (m == 6 ) {
        alert( "You were born on " +  days2[day] +  " and your Male Akan name is " + am2[day]);
    }
    else if (m == 9) {
        alert( "You were born on " +  days2[day] +  " and your Male Akan name is " + am2[day]);
    }
    else if (m == 11) {
        alert( "You were born on " +  days2[day] +  " and your Male Akan name is " + am2[day]);
    }
    else if (m == 2) {
        alert( "You were born on " +  days3[day] +  " and your Male Akan name is " + am3[day]);
    }
    else {
        alert( "You were born on " +  days[day] +  " and your Male Akan name is " + am1[day]);
    }

}
else if ( g == 2){
    if (m == 4 ) {
        alert( "You were born on " +  days2[day] +  " and your Female Akan name is " + af2[day]);
    }
    else if (m == 6 ) {
        alert( "You were born on " +  days2[day] +  " and your Female Akan name is " + af2[day]);
    }
    else if (m == 9) {
        alert( "You were born on " +  days2[day] +  " and your Female Akan name is " + af2[day]);
    }
    else if (m == 11) {
        alert( "You were born on " +  days2[day] +  " and your Female Akan name is " + af2[day]);
    }
    else if (m == 2) {
        alert( "You were born on " +  days3[day] +  " and your Female Akan name is " + af3[day]);
    }
    else {
        alert( "You were born on " +  days[day] +  " and your Female Akan name is " + af1[day]);
    }

}
else {
    alert (" please make sure you have selected something");
}
}
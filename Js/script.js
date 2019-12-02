function mt() {
    alert("Thank you for your sumission");
    var m = parseInt(document.getElementsByTagName("select")[1].value);
    var d = parseInt(document.getElementsByTagName("select")[0].value);
    var y = parseInt(document.getElementsByTagName("input")[0].value);
    var g = document.getElementsByTagName("select")[2].value;

    // get date for the months given//

    var date = new Date(y, m, d);

    //get day of the week//

    var day = date.getDay();

    // for months with 31 days//

    var days = ["Thursday", "Friday", "Sartuday", "Sunday", "Monday", "Tuesday", "Wendesday"];
    
    // for months with 30days//

    var days2 = ["Friday", "Sartuday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    // for months with 31//

    var days3 = ["Sartuday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // akan names for male born on months with 31 days//
    var am1 = ["Yaw","Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku"];

    // months with 30 days//
    var am2 = ["Kofi","Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"];

    // months feb //
    var am3 = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];

    // females born on months with 31 days//
    var af1 = ["Yaa","Afua","Ama","Akosua","Adwoa","Abenaa","Akua"];

    // months with 30 days //
    var af2 = ["Afua","Ama","Akosua","Adwoa","Abenaa","Akua","Yaa"];

    //february//
    var af3 = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];

    // validity ondition//
    if ( y === "" ){
        alert("Ooops!!! invalid year entry");
    }

    // if male//
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

// if female//
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
// else //
else {
    alert (" please make sure you have selected something");
}
}
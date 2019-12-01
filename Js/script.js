function mt(){
alert("Thank you for your sumission");
var m = parseInt(document.getElementsByTagName("select")[1].value);
alert("Your month is " + m);
var d = parseInt(document.getElementsByTagName("select")[0].value);
alert("yours date is " + d);
var y = parseInt(document.getElementsByTagName("input")[0].value);
alert("your year is " + y);
var g = document.getElementsByTagName("select")[2].value;
alert("yours gender is " + g);
var date = new Date(y,m,d);
var day = date.getDay();
alert(day);
var days = ["Thursday","Friday" , "Sartuday","Sunday" , "Monday" ,"Tuesday", "Wendesday"];
alert(days[day]);

}
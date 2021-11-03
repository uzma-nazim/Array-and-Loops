/// ARRAYS

// Question no:1

// var std =[];


// Question no:2

// var student = [
//     {}
// ];


// Question no:3

var fruits = ["apple ", "Mango ", "Grapes ", "Orange"];
alert(fruits)


// Question no:4

var number = [34, 56, 78, 90];
alert(number);

// Question no:5


var boolean = [true, false];
alert(boolean);


// Question no:6

var mixed = ["uzma ", 17, true];
alert(mixed);



// Question no:7


document.write("<h1>Qualifications:</h1>")
var EQIP = ["SSC ", "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M.phil. ", "phD"]
for (i = 0; i < EQIP.length; i++) {

    document.write(i + ")" + "&nbsp " + EQIP[i] + "<br>")
}


// Question no:8
document.write("<h1>Results</h1>")

var stdName = ["uzam ", "urooj ", "hammad "];
var score = [460, 420, 450];
var totalMark = 500;
var percentage1 = score[0] / totalMark * 100;
var percentage2 = score[1] / totalMark * 100;
var percentage3 = score[2] / totalMark * 100;
var percentage = [
    { percentage: percentage1 },
    { percentage: percentage2 },
    { percentage: percentage3 }
];

for (i = 0; i < stdName.length; i++) {
    document.write("Score of " + stdName[i] + "is " + score[i] + " " + "Percentage " + percentage[i].percentage + "%" + "<br>")
}

// Question no:9



document.write("<h1> Question no:9</h1>");


// part:a
var colorName = [" Red", " Blue", " Purple", " Black"];
document.write(colorName + "<br>");
var userColor = prompt("Enter a start  color ");
colorName.unshift(userColor);
document.write(colorName + "<br>");

// part:b

var endColor = prompt("Enter End color ");
colorName.push(endColor);
document.write(colorName + "<br>");


// part:c

colorName.unshift("Green ", "Yellow");
document.write(colorName + "<br>");


// part:d

colorName.shift();
// part:d
document.write(colorName + "<br>");


// part:e

colorName.pop();
document.write(colorName + "<br>");

// part:f

colorName.splice(prompt("enter index"), 0, "Brown", "Royal blue");
document.write(colorName + "<br>");


// part:g


colorName.splice(prompt("Enter delete index"), prompt("Enter quantity of delete"));
document.write(colorName);


// Question no:10

document.write("<h1>Student Score</h1>");

var stdScore = [320, 230, 480, 120];
document.write(stdScore + "<br>");
var order = stdScore.sort();
document.write(order);


// Question no:11

document.write("<h1>Cities</h1>");

var cities = ["karchi ", "lahore ", "islamabad ", "hyderabad"];
document.write(cities + "<br>");
var copyCity = cities.slice(1, 4);
document.write(copyCity);



// Question no:12


document.write("<h1>Array to string</h1>");


var array = ["This ", "is ", "my ", "cat "];
document.write(array + "<br>");
var str = array.join("");
document.write(str);



// Question no:13

document.write("<h1>(FIFO-First In First Out)</h1>");

document.write("<p><b>Devices</b></p>");
var store1 = ["keyboard ", "mouse", "printer", "monitor"];
document.write(store1 + "<br>" + "<br>");

for (a = 0; a < store1.length; a++) {
    document.write("out:<br>" + store1[a] + "<br>")

}








// Question no:14


document.write("<h1>(LIFO-LAst In First Out)</h1>");

document.write("<p><b>Devices</b></p>")
var store2 = ["keyboard ", "mouse", "printer", "monitor"];
document.write(store2 + "<br>" + "<br>");


for (i = 3; i >= 0; i--) {
    document.write("out;<br>" + store2[i] + "<br>");
}



// Question no:15
document.write("<h1>Phone Manufacturers </h1>");


var manufacture = ["Phone Manufacturers ", "Apple ", "Samsung ", "Motorola ", "Nokia ", "Sony ", "Haier "];

document.write("<select>")

document.write("<option>" + manufacture[0] + "</option>");
document.write("<option>" + manufacture[1] + "</option>");
document.write("<option>" + manufacture[2] + "</option>");
document.write("<option>" + manufacture[3] + "</option>");
document.write("<option>" + manufacture[4] + "</option>");
document.write("<option>" + manufacture[5] + "</option>");
document.write("<option>" + manufacture[6] + "</option>");
document.write("</select>");
document.write("<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");



document.write("<h1>ARRAYS AND LOOP</h1>");

// Question no:1

var array2 = [[]];
document.write(array2);


// Question no:2


var multiarray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]

];
for (i = 0; i < multiarray.length; i++) {

    document.write(multiarray[i] + "<br>");
}
document.write("<br>");

// Question no:3

for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");

}

document.write("<h1>Table</h1> ");

// Question no:4
var tableNumber = +prompt("Enter table Number")
var tableLength = +prompt("Enter table length")
for (i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " X " + i + " = " + tableNumber * i + "<br>")
}

// Question no:5

var fruits = ["apple", "banana", " mango", "orange", "strawberry"]
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}

document.write("<br><p><b>Counting:</b></p>")

// Question no:6
//part: a
for (i = 1; i <= 15; i++) {
    document.write(i + ", ")
}

document.write("<br><p><b>Reverse Counting:</b></p>")

//part: b

for (i = 10; i > 0; i--) {
    document.write(i + ", ")

}
document.write("<br><p><b>Even:</b></p>")
//part: c


for (i = 0; i<=20; i+=2){
    document.write(i + ", ");
}
//part: d

document.write("<br><p><b>Odd:</b></p>")

for (i = 1; i<=20; i+=2){
    document.write(i + ", ");
}

//part: e
document.write("<br><p><b>Series:</b></p>")

for (i = 2; i<=20; i+=2){
    document.write(i + "k, ");
}

document.write("<h1>Bakery</h1>")

// Question no:7

var flag = "yes";
var bakery = ["patties", "chips", "cookie", "apple pie", "cake"]
var costumer = prompt("Enter Items");
for (i = 0; i < bakery.length; i++) {

    if (costumer === bakery[i]){
        document.write(costumer + "is avaible at index " + [i] + " in our bakery");
        flag = "no"
    }
}
if (flag === "yes") {
    document.write("We are sorry " + costumer + " is not available in our bakery");
}


// Question no:8

document.write("<h1>Question no 8</h1>");
var largearr = [24, 53, 78, 91, 12];
document.write(largearr + "<br>");
largearr.sort(), largearr.reverse();
document.write("The largest number is " + largearr[0]);


// Question no:9


document.write("<h1>Question no 9</h1>");
var largearr = [24, 53, 78, 91, 12];
document.write(largearr + "<br>");
largearr.sort();
document.write("The smallest number is " + largearr[0]);


// Question no:10
document.write("<h1>Multiple of 5</h1>");


for (i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + "<br>");

    }
}

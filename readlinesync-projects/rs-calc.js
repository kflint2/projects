var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question("Please enter your first number? "));


var num2 = parseInt(readlineSync.question("Please enter your second number? "));


var operationToPerform = readlineSync.question("Please enter the operation to perform. i.e. add, sub, div, or mul. ");

var operationToPerformResult = operationToPerform.toLowerCase();


var addNumbers = function (numberToAdd1, numberToAdd2) {

    return num1 + num2;

};

var subNumbers = function (numberToSub1, numberToSub2) {

    return num1 - num2;
};

var mulNumbers = function (numberToMul1, numberToMul2) {

    return num1 * num2;
};

var divNumbers = function (numberToDiv1, numberToDiv2) {

    return num1 / num2;
};


if (operationToPerformResult === 'add') {

    console.log('Your add result is' + ' ' + addNumbers() + '!');


} else if (operationToPerformResult === 'sub') {

    console.log('Your sub result is' + ' ' + subNumbers() + '!');

} else if (operationToPerformResult === 'mul') {

    console.log('Your mul result is' + ' ' + mulNumbers() + '!');

} else {
    console.log('Your div result is' + ' ' + divNumbers() + '!');

};
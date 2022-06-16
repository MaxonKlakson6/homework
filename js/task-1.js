const isString = (str) => {
    return typeof str === 'string';
}

const isNumber = (value) => {
    return typeof value === 'number';
}

const messageNotString = 'Value should be string value';

// comment

// task 1

// -----------------------------------------------------------------------------------------------------------------------------

const arrowSayHello = (name) => {

    if(!isString(name)){
        return messageNotString;
    }

    const specialName = 'mark';
    const greating = name.toLowerCase() === specialName ? 'Hi' : 'Hello';

    return `${greating}, ${name}!`;
}

const functionalSayHello = function(name){

    if(!isString(name)){
        return messageNotString;
    }

    const specialName = 'mark';
    const greating = name.toLowerCase() === specialName ? 'Hi' : 'Hello';

    return `${greating}, ${name}!`;
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 2

// -----------------------------------------------------------------------------------------------------------------------------

const arrowCalculateHypotenuse = () => {
    const firstRectangleLeg = 3;
    const secondRectangleLeg = 4;

    return Math.sqrt(Math.pow(firstRectangleLeg, 2) + Math.pow(secondRectangleLeg, 2));
}

const functionalCalculateHypotenuse = function() {
    const firstRectangleLeg = 3;
    const secondRectangleLeg = 4;

    return Math.sqrt(Math.pow(firstRectangleLeg, 2) + Math.pow(secondRectangleLeg, 2));
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 3

// -----------------------------------------------------------------------------------------------------------------------------
const arrowFindSmallerValue = (firstValue, secondValue) => {

    if(!isNumber(firstValue) || !isNumber(secondValue)){
        return "One of the arguments isn't number";
    }
    if (firstValue === secondValue){
        return 'arguments are equal';
    }

    return firstValue < secondValue ? firstValue : secondValue;
}

const functionalFindSmallerValue = function(firstValue, secondValue) {

    if(!isNumber(firstValue) || !isNumber(secondValue)){
        return "One of the arguments isn't number";
    }
    if (firstValue === secondValue){
        return 'arguments are equal';
    }

    return firstValue < secondValue ? firstValue : secondValue;
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 4

// -----------------------------------------------------------------------------------------------------------------------------

const arrowIsEven = (value) => {
    return isNumber(value) ? value % 2 === 0 : 'Value is not a number';
}

const functionalIsEven = function(value){
    return isNumber(value) ? value % 2 === 0 : 'Value is not a number';
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 5

// -----------------------------------------------------------------------------------------------------------------------------

const arrowDeleteChars = (str) => {
    if(!isString(str)){
        return messageNotString;
    }
    return str.slice(1, -1);
}

const functionalDeleteChars = function(str){
    if(!isString(str)){
        return messageNotString;
    }
    return str.slice(1, -1);
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 6

// -----------------------------------------------------------------------------------------------------------------------------

const arrowMakeCapitalLetter = (str) => {
    if(!isString(str)){
        return messageNotString;
    }
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
}

const functionalMakeCapitalLetter = function(str){
    if(!isString(str)){
        return messageNotString;
    }
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 7

// -----------------------------------------------------------------------------------------------------------------------------


const arrowCheckLetterCase = (char) => {
    if(!isString(char)){
        return messageNotString;
    }

    if(char.length > 1){
        return 'Слишком много букв';
    }

    return char === char.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
}

const functionalCheckLetterCase = function(char){
    if(!isString(char)){
        return messageNotString;
    }

    if(char.length > 1){
        return 'Слишком много букв';
    }

    return char === char.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 8

// -----------------------------------------------------------------------------------------------------------------------------

const arrowConcatenate = (firstStr, secondStr) => {
    return `${firstStr} ${secondStr}`;
}

const functionalConcatenate = function(firstStr, secondStr) {
    return `${firstStr} ${secondStr}`;
}

// -----------------------------------------------------------------------------------------------------------------------------




// task 9

// -----------------------------------------------------------------------------------------------------------------------------

const checkArguments = (firstArgument, secondArgument) => {
    return isString(firstArgument) && isNumber(secondArgument);
}

const arrowCheckStringLength = (str, length) => {
    if(!checkArguments(str, length)) {
        return 'Arguments are wrong';
    }

    return str.length > length ? 'String is too long!' : str;
}

const functionalCheckStringLength = function(str, length){
    if(!checkArguments(str, length)) {
        return 'Arguments are wrong';
    }

    return str.length > length ? 'String is too long!' : str;
}

// -----------------------------------------------------------------------------------------------------------------------------
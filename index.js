/*
1. Accept user input of plain text or coded message.
2. Accept user input of the required key.
3. Accept user input for choice of encode or decode.
4. Given a coded message, the choice of key and choice of decode - produce decoded
plain text (decoded using the chosen key).
5. Given a plan test message, the choice of key and choice of encode - produced
coded message (encoded using the chosen key).
*/

let encodeNumber = 4;
let encodeDirection = "L";
let message = "caesar salad.£$%^";
let encodeSpecifics;
let inputArray = {};                                            //array of the message's letters/spaces

//let numberArray = Array.from(Array(26), (_, i) => i + 1);
let numberArray = {};                                           //array of message's letters/spaces converted into numbers/spaces
let applyEncodeArray = {};
let numbersToLettersArray = {};
let encodedStringArray = {};
let encodedString = "";

//create list1, a list of the message, containing each of its letters
//convert the list into numbers (e.g. A = 1, B = 2)
//create listAlpha, a list of the alphabet
//alter the numbers of each item in list1 by the encodeNumber. increase them if encodeDirection = R, decrease if it = L
//convert the numbers into letters
function posToNeg(num) {
    return -Math.abs(num);
}

//adjust for L/R direction
function createEncodeSpecifics(encodeDirection){
if (encodeDirection == "L"){
    encodeNumber = posToNeg(encodeNumber);
}
}
createEncodeSpecifics(encodeDirection, encodeNumber)

//creating array from input
function inputToArray(message) {
    inputArray = Array.from(message);
}
inputToArray(message);

//converting array to numbers
function convertToNumbers(inputArray) {
    numberArray = Array.from(inputArray);
    let i;
    for (i = 0; i < numberArray.length; i++) {
        switch (numberArray[i]) {
            case "a":
                numberArray[i] = "1";
                break;
            case "b":
                numberArray[i] = "2";
                break;
            case "c":
                numberArray[i] = "3";
                break;
            case "d":
                numberArray[i] = "4";
                break;
            case "e":
                numberArray[i] = "5";
                break;
            case "f":
                numberArray[i] = "6";
                break;
            case "g":
                numberArray[i] = "7";
                break;
            case "h":
                numberArray[i] = "8";
                break;
            case "i":
                numberArray[i] = "9";
                break;
            case "j":
                numberArray[i] = "10";
                break;
            case "k":
                numberArray[i] = "11";
                break;
            case "l":
                numberArray[i] = "12";
                break;
            case "m":
                numberArray[i] = "13";
                break;
            case "n":
                numberArray[i] = "14";
                break;
            case "o":
                numberArray[i] = "15";
                break;
            case "p":
                numberArray[i] = "16";
                break;
            case "q":
                numberArray[i] = "17";
                break;
            case "r":
                numberArray[i] = "18";
                break;
            case "s":
                numberArray[i] = "19";
                break;
            case "t":
                numberArray[i] = "20";
                break;
            case "u":
                numberArray[i] = "21";
                break;
            case "v":
                numberArray[i] = "22";
                break;
            case "w":
                numberArray[i] = "23";
                break;
            case "x":
                numberArray[i] = "24";
                break;
            case "y":
                numberArray[i] = "25";
                break;
            case "z":
                numberArray[i] = "26";
                break;
            case " ":
                numberArray[i] = " ";
            default:
                break
        }
    }
}


//altering numbers by encode specifics
function applyEncoding() {
    applyEncodeArray = Array.from(numberArray);
    let i;
    for (i = 0; i < applyEncodeArray.length; i++) {
        if (isNaN(applyEncodeArray[i]) == false){
        applyEncodeArray[i] = parseInt(applyEncodeArray[i]) + encodeNumber;
        if (applyEncodeArray[i] > 26){
            applyEncodeArray[i] -= 26
            //console.log("this entry", applyEncodeArray[i], "is a number")
        }
        if (applyEncodeArray[i] < 1){
            applyEncodeArray[i] += 26
            //console.log("this entry", applyEncodeArray[i], "is a number")
        }
        if (isNaN(applyEncodeArray[i])){
            applyEncodeArray[i] = " ";
        }
    }
    //else{console.log("this entry", applyEncodeArray[i], "is not a number")}
    }
}

//making numbers back into letters
function convertToLetters() {
    numbersToLettersArray = Array.from(applyEncodeArray);
    let i;
    for (i = 0; i < numbersToLettersArray.length; i++) {
        switch (numbersToLettersArray[i]) {
            case 1:
                numbersToLettersArray[i] = "a";
                break;
            case 2:
                numbersToLettersArray[i] = "b";
                break;
            case 3:
                numbersToLettersArray[i] = "c";
                break;
            case 4:
                numbersToLettersArray[i] = "d";
                break;
            case 5:
                numbersToLettersArray[i] = "e";
                break;
            case 6:
                numbersToLettersArray[i] = "f";
                break;
            case 7:
                numbersToLettersArray[i] = "g";
                break;
            case 8:
                numbersToLettersArray[i] = "h";
                break;
            case 9:
                numbersToLettersArray[i] = "i";
                break;
            case 10:
                numbersToLettersArray[i] = "j";
                break;
            case 11:
                numbersToLettersArray[i] = "k";
                break;
            case 12:
                numbersToLettersArray[i] = "l";
                break;
            case 13:
                numbersToLettersArray[i] = "m";
                break;
            case 14:
                numbersToLettersArray[i] = "n";
                break;
            case 15:
                numbersToLettersArray[i] = "o";
                break;
            case 16:
                numbersToLettersArray[i] = "p";
                break;
            case 17:
                numbersToLettersArray[i] = "q";
                break;
            case 18:
                numbersToLettersArray[i] = "r";
                break;
            case 19:
                numbersToLettersArray[i] = "s";
                break;
            case 20:
                numbersToLettersArray[i] = "t";
                break;
            case 21:
                numbersToLettersArray[i] = "u";
                break;
            case 22:
                numbersToLettersArray[i] = "v";
                break;
            case 23:
                numbersToLettersArray[i] = "w";
                break;
            case 24:
                numbersToLettersArray[i] = "x";
                break;
            case 25:
                numbersToLettersArray[i] = "y";
                break;
            case 26:
                numbersToLettersArray[i] = "z";
                break;
            case " ":
                numbersToLettersArray[i] = " ";
            default:
                break
        }
    }
}

//turning letters into string
function lettersToString(){
encodedStringArray = Array.from(numbersToLettersArray)
encodedString = encodedStringArray.join("")
}

function encodeMessage(message){
    createEncodeSpecifics(encodeDirection, encodeNumber)
    inputToArray(message);
    convertToNumbers(inputArray);
    applyEncoding();
    convertToLetters();
    lettersToString();
    console.log(encodedString)
}

encodeMessage(message)

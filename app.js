var celciusInput = document.querySelector("#celcius > input");
var farenheightInput = document.querySelector("#farenheight > input");
var kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
    return Math.round(num * 100)/100;
}

function celciusConvertor() {
    var celTemp = parseFloat(celciusInput.value);
    var FarenTemp = (celTemp * (9 / 5)) + 32;
    var KelTemp = celTemp + 273.15;
    farenheightInput.value = roundNum(FarenTemp);
    kelvinInput.value = roundNum(KelTemp);
}

function farenheightConvertor() {
    var farenTemp = parseFloat(farenheightInput.value);
    var celTemp = (farenTemp - 32) * (5/9);
    var KelTemp = (farenTemp + 459.67) * 5/9;  
    celciusInput.value = roundNum(celTemp);
    kelvinInput.value = roundNum(KelTemp);
}

function kevlinConvertor() {
    var kelTemp = parseFloat(kelvinInput.value);
    var celTemp = kelTemp - 273.15;
    var farenTemp = 9/5 * (kelTemp -273) + 32;
    celciusInput.value = roundNum(celTemp);
    farenheightInput.value = roundNum(farenTemp);
}

celciusInput.addEventListener('input', celciusConvertor)

farenheightInput.addEventListener('input', farenheightConvertor)

kelvinInput.addEventListener('input', kevlinConvertor)



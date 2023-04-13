var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector('#txt-input');

var outputDiv = document.querySelector('#output')


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error Occured", error)
    alert("Something Worng with server!!!")
}


function clickHandler() {
    // outputDiv.innerText = "Here is Translation " + textInput.value

    var inputText = textInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)   
};

btnTranslate.addEventListener("click", clickHandler)

var clearText = document.querySelector('#clear')

clearText.addEventListener('click', function () {
    textInput.value = '';
});
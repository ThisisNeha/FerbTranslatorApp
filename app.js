var btnTranslate = document.querySelector("button");
var txtInput = document.querySelector("#input-txt");
var txtOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickEventHandler() {

  const input = txtInput.value;
  const finalURL = constructUrl(input);

  fetch(finalURL)
    .then(response => response.json())
    .then((json) => {
      txtOutput.innerText = json.contents.translated;
    });
}

btnTranslate.addEventListener("click", clickEventHandler);

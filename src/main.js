import viewHandler from "./proxy/handler.js";
import RecordToFile from "./plugin/RecordToFile.js";
import FileToText from "./plugin/FileToText.js";
import AudioToText from "./AudioToText.js";
import { viewProxy } from "./proxy/proxy.js";

const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");
const buttonDark = document.querySelector(".buttonDark");
const buttonRecord = document.querySelector(".buttonMicrophone");
const buttonSend = document.querySelector(".buttonSend");
const buttonPaste = document.querySelector(".buttonPaste");
const buttonExport = document.querySelector(".buttonExport");
const rawText = document.querySelector(".rawText p");
const editableText = document.querySelector(".editableText");
const content = document.querySelector(".content");

const proxy = viewProxy();
const recorder = new AudioToText({
  writerPlugin: FileToText,
  recordPlugin: RecordToFile,
  keywords: Object.keys(proxy),
});
buttonRecord.addEventListener(
  "mousedown",
  () => {
    recorder.record();
  },
  false
);

let transcription;
buttonPaste.addEventListener(
  "mouseup",
  () => {
    transcription = recorder.transcription;
    rawText.textContent += transcription;
  },
  false
);

buttonSend.addEventListener(
  "click",
  () => {
    editableText.value += rawText.textContent;
    rawText.textContent = "";
  },
  false
);
buttonExport.addEventListener(
  "click",
  () => {
    // crea un nuevo div
    // y añade contenido
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(editableText.value);
    newDiv.appendChild(newContent); //añade texto al div creado.
    newDiv.style.backgroundColor = "aqua";
    // añade el elemento creado y su contenido al DOM
    content.appendChild(newDiv);
    editableText.value = "";
  },
  false
);
buttonPlus.addEventListener("click", viewHandler, false);
buttonLess.addEventListener("click", viewHandler, false);
buttonDark.addEventListener("click", viewHandler, false);

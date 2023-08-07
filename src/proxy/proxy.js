const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");
const buttonDark = document.querySelector(".buttonDark");
const body = document.querySelector("body");
const rawText = document.querySelector(".rawText p");
const editableText = document.querySelector(".editableText");

const setDark = () => {
    rawText.style.backgroundColor = "black";
    editableText.style.backgroundColor = "black";
    editableText.style.color = "white";
    body.style.color = "white";
    body.style.backgroundColor = "black";
}
const setLight = () => {
    rawText.style.backgroundColor = "white";    
    editableText.style.backgroundColor = "white";
    editableText.style.color = "black";
    body.style.color = "black";
    body.style.backgroundColor = "#E6D0DE";
}
const viewActions = {
    darkMode: () => (body.style.color === "white"? setLight() : setDark()),
    lessSize: () => body.style.fontSize = "large",
    plusSize: () => body.style.fontSize = "xx-large",
}

const viewHandler = {
    set(obj, prop, value) {
        if (value === "-"){
            value = "lessSize"
        }
        if (value === "+"){
            value = "plusSize"
        }
        obj[value]()
    
        return true;
      },
}


export const viewProxy = () => {
    return new Proxy(viewActions, viewHandler);
  };
const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");
const buttonDark = document.querySelector(".buttonDark");
const text = document.querySelector(".textBox");
const body = document.querySelector("body");

const setDark = () => {
    body.style.color = "white";
    body.style.backgroundColor = "black";
}
const setLight = () => {
    body.style.color = "black";
    body.style.backgroundColor = "#E6D0DE";
}
const viewActions = {
    darkMode: () => (body.style.color === "white"? setLight() : setDark()),
    lessSize: () => text.style.fontSize = "large",
    plusSize: () => text.style.fontSize = "xx-large",
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
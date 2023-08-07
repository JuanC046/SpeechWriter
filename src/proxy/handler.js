import { viewProxy } from "./proxy.js";

const proxy = viewProxy()

const viewHandler = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === ""){
        proxy.value = event.target.alt;
    }
    else{
        proxy.value = event.target.textContent;
    }
    
};


export default viewHandler;
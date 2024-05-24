import { dom } from "../dom.js";
import { addHandler } from "../handlers/addHandler.js";


export const addEvent = () => {
    dom.btn.addEventListener('click', (e) => {
        e.preventDefault();
        addHandler();
    });
};
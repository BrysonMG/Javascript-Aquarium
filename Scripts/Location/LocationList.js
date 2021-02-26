import { locationArr } from './LocationData.js';
import { locObj2HTML } from './Location.js';


export const add2HTML = () => {
    const selectHTML = document.querySelector('.fishLocations');
    const arr = locationArr();
    let converted = '';

    for (const eachObj of arr) {
        converted += locObj2HTML(eachObj);
    }

    selectHTML.innerHTML += `
    ${converted}
    `;

}
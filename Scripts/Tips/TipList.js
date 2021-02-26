/*Function that:
Pulls in the array of tips.
Selects HTML container that each tip will go into.
Loops over the array.
Runs each object through the conversion function (obj2HTML from Tip.js).
Save converted data as a variable.
with .innerhtml, apply converted data to the selected HTML container.
*/ 
import { giveTips } from './TipData.js';
import { obj2HTML } from './Tip.js'

export const busyFunction = () => {
    const selectHTML = document.querySelector('.tip-section');
    const objArr = giveTips();
    let converted = "";

    for (const eachTip of objArr) {
        converted += obj2HTML(eachTip)
    };
    selectHTML.innerHTML += converted
    ;

}
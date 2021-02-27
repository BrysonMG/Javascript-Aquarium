import { orderedFish } from './FishFilter.js';
import { Fish } from './Fish.js';

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const fishes = orderedFish
    let fishHTML = "";
    for (const fishItem of fishes) {
        fishHTML += Fish(fishItem)
    }
    
    contentElement.innerHTML += `
    ${fishHTML}
    `;
}
//
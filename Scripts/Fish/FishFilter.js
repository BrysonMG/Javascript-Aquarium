import { getFish } from './FishData.js';

let holySoldiers = [];
let holyFish = [];
let soldierFish = [];
let unworthyFish = [];
const fish = getFish();

const sortFish = (fishArr) => {

    for (const eachFish of fishArr) {
        
        if (eachFish.length % 3 === 0 && eachFish.length % 5 === 0) {
            holySoldiers.push(eachFish);

        } else if (eachFish.length % 3 === 0) {
            holyFish.push(eachFish);

        } else if (eachFish.length % 5 === 0) {
            soldierFish.push(eachFish);

        } else {
            unworthyFish.push(eachFish);
        };
    };
};

sortFish(fish);

export let orderedFish = holySoldiers.concat(holyFish, soldierFish, unworthyFish);
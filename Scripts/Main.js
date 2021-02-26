
//Fish JS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

import { getFish } from './Fish/FishData.js';
import { FishList } from './Fish/FishList.js';

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}
FishList();

//Tips JS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { busyFunction } from './Tips/TipList.js'

busyFunction();
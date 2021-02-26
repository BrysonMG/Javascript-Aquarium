import { getFish } from './FishData.js';

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishTank")
    const fishes = getFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}
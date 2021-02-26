export const locObj2HTML = (locationObj) => {
    return `<div class="locationCard">
                <h5>${locationObj.quote}</h5>
                <div class= "loc-info-container">
                    <img src="Images/${locationObj.image}" alt="${locationObj.alt}">
                    <div class="locationDetails">
                        <h3>${locationObj.title}</h3>
                        <p>${locationObj.description}</p>
                    </div>
                </div>
            </div>`
}
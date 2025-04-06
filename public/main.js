let abtButton = document.getElementById("abtButton");
let homeButton = document.getElementById("homeButton");

let sects = {
    home: document.getElementById("Home"),
    about: document.getElementById("About"),
}

function changeHelper(currentsect) {
    for (let section of Object.values(sects)) {
        if (section === currentsect) continue;

        section.style.display = "none";
    }
}

function changeSection(sect) {
    changeHelper(sect);

    sect.style.display = "flex";
    location.hash = sect.id;
}

abtButton.addEventListener("click", () => changeSection(sects.about));
homeButton.addEventListener("click", () => changeSection(sects.home));
const websiteTitle = "splice copy";
document.title = websiteTitle;

const logoText = document.getElementById("logo_text");
if (logoText) {
    logoText.textContent = websiteTitle;
}

// Add event listener to change logo text on button click
const changeLogoButton = document.getElementById("changeLogoButton");
if (changeLogoButton) {
    changeLogoButton.addEventListener("click", () => {
        logoText.textContent = "New Logo Text"; // Change the text
    });
}
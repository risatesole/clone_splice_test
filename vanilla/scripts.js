const websiteTitle = "splice copy";
document.title = websiteTitle;

const logoText = document.getElementById("logo_text");
if (logoText) {
    logoText.textContent = websiteTitle;
}

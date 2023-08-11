// Menyeleksi elemen
const CopyText = document.getElementById("copytext");
const PasteText = document.getElementById("pastetext");
const button = document.querySelector("button");
const tooltip = document.querySelector(".tooltip");


button.addEventListener("click", function() {
    CopyText.select();
    PasteText.value ="";
    tooltip.classList.add("show");
    setTimeout (function() {
        tooltip.classList.remove("show");
    },700);
    if(document.execCommand("copy")) {
        PasteText.focus();
    } else {
        alert("Something went wrong!");
    }
});
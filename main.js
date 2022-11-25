let para = document.getElementById("p1")
function total(ici) {
    if (ici.getAttribute("name") == "color") {
        para.style.backgroundColor = "rgb(" + (255 - ici.value) + "," + (255 - ici.value) + "," + (255 - ici.value) + ")";
    }
    if (ici.getAttribute("name") == "padding") {
        para.style.padding = ici.value + "px";
    }
    if (ici.getAttribute("name") == "height") {
        para.style.height = ici.value + "px";
    }
    if (ici.getAttribute("name") == "width") {
        para.style.width = ici.value + "px";
    }
    if (ici.getAttribute("name") == "radius") {
        para.style.borderRadius = ici.value + "px";
    }
    if (ici.getAttribute("name") == "rotation") {
        para.style.rotate = ici.value + "deg";
    }
}




function toggle_div(bouton, id) {
    var div = document.getElementById(id);
    if(div.style.display=="none") {
        div.style.display = "block";
        bouton.innerHTML8 = "Masquer";
    } else {
        div.style.display = "none";
        bouton.innerHTML8 = "Spoilers";
    }
}
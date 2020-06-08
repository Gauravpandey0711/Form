function copy() {
    if (document.getElementById("same").checked) {
        document.getElementById("Whatsapp").value = document.getElementById("Phone").value;
    } else {
        document.getElementById("Whatsapp").value = "";
    }
}

function check() {
    x = document.getElementById("E-mail").value;
    y = document.getElementById("E-mail2").value;
    if (x != y) {
        alert("Both emails must match !!!!");
        return false;
    }
}
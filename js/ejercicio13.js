function verificar() {
    var edad = document.getElementById("edad").value;

    if (edad === "") {
        alert("Ingresa tu edad");
        return;
    }

    if (isNaN(edad)) {
        alert("Ingresa solo números");
        return;
    }

    if (parseInt(edad) <= 0) {
        alert("Ingresa una edad positiva");
        return;
    }

    if (parseInt(edad) >= 18) {
        document.getElementById("resultado").value = "Puedes votar";
    } else {
        document.getElementById("resultado").value = "No puedes votar";
    }
}
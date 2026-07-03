function convertir() {
    var pesos = document.getElementById("pesos").value;
    var tasa = 0.055;

    if (pesos === "") {
        alert("Ingresa una cantidad en pesos");
        return;
    }

    if (isNaN(pesos)) {
        alert("solo números");
        return;
    }

    if (parseFloat(pesos) <= 0) {
        alert("Ingresa una cantidad positiva");
        return;
    }

    var dolares = parseFloat(pesos) * tasa;

    document.getElementById("dolares").value = dolares.toFixed(2);
}
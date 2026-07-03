function convertirtempera() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit");

    if (celsius === "") {
        alert("Ingresa un valor no puede estar vacio esto amigo");
        return;
    }

    if (isNaN(celsius)) {
        alert("Ingresa un valor numérico");
        return;
    }

    let resultado = (parseFloat(celsius) * 9 / 5) + 32;

    fahrenheit.value = resultado + " °F";
}
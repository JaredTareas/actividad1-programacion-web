function calcular() {
    var texto = document.getElementById("numeros").value;

    if (texto === "") {
        alert("Ingresa algunos números");
        return;
    }

    var arreglo = texto.split(",");
    var numeros = arreglo.map(Number);

    for (var i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            alert("ingresa solo números separados por comas");
            return;
        }
    }

    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);

    var suma = numeros.reduce(function(total, numero) {
        return total + numero;
    }, 0);

    var promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio;
}
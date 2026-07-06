const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const calcularOperacion = (operacion) => {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        Swal.fire("Error", "Llena los dos campos", "error");
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire("Error", "Ingresa solo números", "error");
        return;
    }

    var n1 = parseFloat(numero1);
    var n2 = parseFloat(numero2);
    var resultado;

    if (operacion === "suma") {
        resultado = sumar(n1, n2);
    }

    if (operacion === "resta") {
        resultado = restar(n1, n2);
    }

    if (operacion === "multiplicacion") {
        resultado = multiplicar(n1, n2);
    }

    if (operacion === "division") {
        if (n2 === 0) {
            Swal.fire("Error", "No se puede dividir entre cero", "error");
            return;
        }

        resultado = dividir(n1, n2);
    }

    document.getElementById("resultado").value = resultado;
};
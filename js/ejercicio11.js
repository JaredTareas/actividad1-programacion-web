 function convertir() {
            var kilometros = document.getElementById("kilometros").value;

            if (kilometros === "") {
                alert("ingresa una cantidad donde dice kilometros");
                return;
            }

            if (isNaN(kilometros)) {
                alert("solo números");
                return;
            }

            var millas = parseFloat(kilometros) * 0.621371;

            document.getElementById("millas").value = millas;
        }
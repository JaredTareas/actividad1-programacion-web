var estudiantes = [];

function agregarEstudiante() {
    var nombre = document.getElementById("nombre").value;
    var calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion === "") {
        alert("Llena todos los campos");
        return;
    }

    if (isNaN(calificacion)) {
        alert("La calificación debe ser un número");
        return;
    }

    var estudiante = {
        nombre: nombre,
        calificacion: parseFloat(calificacion)
    };

    estudiantes.push(estudiante);

    alert("Estudiante agregado");

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("Primero agrega estudiantes");
        return;
    }

    var suma = estudiantes.reduce(function(total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);

    var promedio = suma / estudiantes.length;

    var calificacionMayor = Math.max(...estudiantes.map(function(estudiante) {
        return estudiante.calificacion;
    }));

    var calificacionMenor = Math.min(...estudiantes.map(function(estudiante) {
        return estudiante.calificacion;
    }));

    var estudianteMayor = estudiantes.find(function(estudiante) {
        return estudiante.calificacion === calificacionMayor;
    });

    var estudianteMenor = estudiantes.find(function(estudiante) {
        return estudiante.calificacion === calificacionMenor;
    });

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("mayor").value = estudianteMayor.nombre;
    document.getElementById("menor").value = estudianteMenor.nombre;
}
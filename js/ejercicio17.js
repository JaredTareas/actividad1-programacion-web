const manejarTareas = (() => {

    const obtenerTareas = () => {
        let tareas = localStorage.getItem("tareas");

        if (tareas === null) {
            return [];
        }

        return JSON.parse(tareas);
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const agregar = (textoTarea) => {
        let tareas = obtenerTareas();

        let nuevaTarea = {
            tarea: textoTarea,
            completada: false
        };

        tareas.push(nuevaTarea);
        guardarTareas(tareas);
    };

    const eliminar = (indice) => {
        let tareas = obtenerTareas();

        tareas.splice(indice, 1);

        guardarTareas(tareas);
    };

    return {
        obtenerTareas,
        agregar,
        eliminar
    };

})();

function agregarTarea() {
    let texto = document.getElementById("tarea").value;

    if (texto === "") {
        Swal.fire("Error", "Escribe una tarea", "error");
        return;
    }

    manejarTareas.agregar(texto);

    document.getElementById("tarea").value = "";

    renderizarTareas();

    Swal.fire("Listo", "Tarea agregada correctamente", "success");
}

function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta tarea se borrará de la lista",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();

            Swal.fire("Eliminada", "La tarea fue eliminada", "success");
        }
    });
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    let tareas = manejarTareas.obtenerTareas();

    lista.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        lista.innerHTML += `
            <li>
                ${tarea.tarea}
                <button onclick="eliminarTarea(${indice})">Eliminar</button>
            </li>
        `;
    });
}

renderizarTareas();
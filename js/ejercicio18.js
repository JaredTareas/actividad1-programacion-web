const input = document.getElementById("nuevoelemento");
const lista = document.getElementById("lista");
const botonAgregar = document.getElementById("agregarboton");


function agregarElemento() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Escribe algo para agregar a la lista");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const textoNodo = document.createTextNode(texto);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");

    botonEliminar.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(textoNodo);
    li.appendChild(botonEliminar);

    lista.appendChild(li);

    input.value = "";
}

botonAgregar.addEventListener("click", agregarElemento);
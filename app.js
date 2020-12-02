window.onload = function () {

    PaginaCargada();
}

function PaginaCargada() {
    let toDos = [];
    let Myid = 0;

    toDos = JSON.parse(localStorage.getItem('array'));

    if (toDos !== null) {
        console.log(toDos);
        renderTheUI();
    }
    else
        toDos = [];

    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');

        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: Myid
        });

        //console.log(toDos);
        Myid++;
        newToDoText.value = '';

        renderTheUI();
    }

    function renderTheUI() {
        //Apunta al elemento ul
        const toDoList = document.getElementById('toDoList');
        //Limpas para que vuelva a dibujar.Sino los elementos de la lista se vana agregando una y otra vez
        toDoList.textContent = '';

        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteBtn = document.createElement("button");
            const icon = document.createElement("i");

            checkbox.type = "checkbox";
            checkbox.checked = toDo.complete;
            //deleteBtn.textContent = toDo.id;
            deleteBtn.setAttribute("class", "btn btn-danger px-3");

            icon.setAttribute("class", "fas fa-trash");
            icon.setAttribute("aria-hidden", "true");

            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteBtn);
            deleteBtn.appendChild(icon);

            checkbox.addEventListener('change', e => {
                //alert('Oprimiste el checkbox');
                toDo.complete = !toDo.complete;

                //console.log(toDo.complete);
                renderTheUI();
            });

            deleteBtn.addEventListener("click", e => {
                alert("Are you sure you want to delete " + toDo.id + "?");
                toDos = toDos.filter(function (item) {
                    return item.id !== toDo.id;
                })

                renderTheUI();
            });

            localStorage.setItem('array', JSON.stringify(toDos));
        });
    }

    addToDoForm.addEventListener('submit', e => {
        //Evita que se recargue la página en el Submit
        e.preventDefault();
        createNewToDo();
    });



    //renderTheUI();

}

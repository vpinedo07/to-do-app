function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
        //alert('Acabas de enviar los datos de tu formulario...');

        event.preventDefault();

        if (newToDoText.value !== '') {

            // get the text
            let title = newToDoText.value;
            //alert(title);

            // create a new li
            let newLi = document.createElement('li');

            // create a new input
            let checkbox = document.createElement('input');

            // set the input's type to checkbox
            checkbox.type = "checkbox";

            // Create a new delete button
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.setAttribute('class', 'btn deep-orange darken-4 white-text');

            deleteBtn.addEventListener('click', event => {
                //console.log(event);
                //console.log(deleteBtn.parentElement);
                toDoList.removeChild(deleteBtn.parentElement);
            })

            // set the title
            newLi.textContent = title;

            // attach the checkbox and delete button to the li
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteBtn);

            // attach the li to the ul
            toDoList.appendChild(newLi);

            //empty the input
            newToDoText.value = '';
        }
        else
            alert("La nota no debe estar vacía...");
    });


}

window.onload = function () {
    //alert("The window has loaded!");
    onReady();
}
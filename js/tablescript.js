const table = document.getElementById('myTable');
const rows = table.getElementsByTagName('tr');

function handleCellClick(event) {
    const cell = event.target;
    const row = cell.parentElement;

    for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('highlight');
    }

    row.classList.add('highlight');
}

table.addEventListener('click', handleCellClick);

function handleOutsideClick(event) {
    if (!table.contains(event.target)) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('highlight');
        }
    }
}

document.addEventListener('click', handleOutsideClick);
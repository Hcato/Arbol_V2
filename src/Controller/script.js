import Bst from "../Models/Tree/Bst.js";

// Crear instancia del árbol binario
const bst = new Bst();

document.getElementById('add').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const matricula = document.getElementById('matricula').value;
    const age = parseInt(document.getElementById('age').value, 10);

    if (name && matricula && !isNaN(age)) {
        const result = bst.addNode(name, matricula, age);
        if (result) {
            alert(`Estudiante agregado: Name: ${name}, Matricula: ${matricula}, Age: ${age}`);
        }
        else{
            alert(`El usuario: ${matricula} ya existe`);
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.getElementById('search').addEventListener('click', () => {
    const matricula = document.getElementById('search-matricula').value;
    const searchResult = bst.search(matricula);
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML = "";

    if (searchResult !== null) {
        consoleElement.innerHTML += `<p>Estudiante encontrado: Name: ${searchResult.value.name}, Matricula: ${searchResult.value.matricula}, Age: ${searchResult.value.age}</p>`;
    } else {
        consoleElement.innerHTML = `<p>Estudiante con matrícula ${matricula} no encontrado.</p>`;
    }
});

document.getElementById('print').addEventListener('click', () => {
    const students = bst.printInOrder();
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML = "";

    students.forEach((student) => {
        const studentInfo = `Name: ${student.name}, Matricula: ${student.matricula}, Age: ${student.age}`;
        consoleElement.innerHTML += `<p>${studentInfo}</p>`;
    });
});

document.getElementById('min').addEventListener('click', () => {
    const minNode = bst.printMin();
    if (minNode !== null) {
        alert(`El nodo más chico es: Name: ${minNode.value.name}, Matricula: ${minNode.value.matricula}, Age: ${minNode.value.age}`);
    } else {
        alert("El árbol está vacío.");
    }
});

document.getElementById('max').addEventListener('click', () => {
    const maxNode = bst.printMax();
    if (maxNode !== null) {
        alert(`El nodo más chico es: Name: ${maxNode.value.name}, Matricula: ${maxNode.value.matricula}, Age: ${maxNode.value.age}`);
    } else {
        alert("El árbol está vacío.");
    }
});

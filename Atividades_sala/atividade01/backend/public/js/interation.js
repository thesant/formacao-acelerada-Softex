const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', function () {
    dropdownContent.classList.toggle('hidden');
});


// mostrar/ocultar modal
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const myModal = document.getElementById('myModal');

openModalButton.addEventListener('click', function () {
    myModal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', function () {
    myModal.classList.add('hidden');
});


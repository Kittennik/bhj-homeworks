const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener('submit', (e) => {
	e.preventDefault();
    const formData = new FormData(form);
	const request = new XMLHttpRequest();
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.upload.onprogress = function(event) {
		progress.value = event.loaded / event.total;
    }
	request.upload.onload = function() {
        alert(`Загрузка данных завершена!`);
    }
	request.send(formData);
});
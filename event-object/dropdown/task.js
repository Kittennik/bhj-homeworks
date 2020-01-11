const text = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const menuList = document.querySelectorAll('.dropdown__item');

function dropdownListActive() {
    event.preventDefault();
    list.classList.toggle('dropdown__list_active');
}

text.addEventListener('click', dropdownListActive);

function dropdownItemActive() {
    event.preventDefault();
    list.classList.toggle('dropdown__list_active');     
    text.textContent = event.target.textContent;
}

for (let element of menuList) { 
    element.addEventListener('click', dropdownItemActive);
}
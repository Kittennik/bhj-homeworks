const arraySize = document.querySelectorAll('.font-size');

function changeSize(event) {   
    event.preventDefault();
    for (let i = 0; i < arraySize.length; i++) {
        if (arraySize[i].classList.contains('font-size_active')) {
            arraySize[i].classList.remove('font-size_active'); 
        }
    }
    this.classList.add('font-size_active'); 
    document.getElementById('book').className = 'book';
  
    if (this.classList.contains('font-size_small')){
        document.getElementById('book').classList.add('book_fs-small');
    }
    if (this.classList.contains('font-size_big')){
        document.getElementById('book').classList.add('book_fs-big');
    }
}

for (let size of arraySize) {
    size.addEventListener('click', changeSize);
}
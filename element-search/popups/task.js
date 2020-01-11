const winMain = document.getElementById('modal_main');
const winSuccess = document.getElementById('modal_success');
winMain.className = 'modal modal_active';

const elementsClose = document.getElementsByClassName('modal__close');
for ( i = 0; i < elementsClose.length; i++ ) {
  elementsClose[i].onclick = () =>  {
    winMain.className = 'modal';
    winSuccess.className = 'modal';
  }
}

const elementsSucces = document.getElementsByClassName('show-success');
elementsSucces[0].onclick = () => {
  winMain.className = 'modal';
  winSuccess.className = 'modal modal_active';
}
const arrayTab = document.querySelectorAll('.tab');
var arrayText = [];
const arrayTabContent = document.querySelectorAll('.tab__content');

function addActive() {
  for (tabNotActive of arrayTab) {
    tabNotActive.classList.remove("tab_active");
   }
  
   for (tabNotActive of arrayTabContent) {
    tabNotActive.classList.remove('tab__content_active');
   }
  this.classList.add('tab_active'); 
  arrayTabContent[arrayText.indexOf(this.textContent)].classList.add('tab__content_active');
}

for (let i = 0;  i < arrayTab.length; i++) {   
  arrayTab[i].addEventListener('click', addActive);
  arrayText[i] = arrayTab[i].textContent;
}
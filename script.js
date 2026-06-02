const selectedBtns = document.querySelectorAll('#select');
const inputForm = document.querySelector('#selected_cake');
const name = document.querySelector('#your_name');
const address = document.querySelector('#address');
const date = document.querySelector('#date');
const phone = document.querySelector('#phone_number');
const form = document.querySelector('.order_form');
const buyButton = document.getElementById('buy');

function formReset(){
 const inputs = document.querySelectorAll('form input');
 const textareas = document.querySelectorAll('form textarea');

 Array.from(inputs).forEach(input => {
  input.value = '';
 })
 Array.from(textareas).forEach(textarea => {
  textarea.value = '';
 })
}


Array.from(selectedBtns).forEach(selectBtn =>{
  selectBtn.addEventListener('click', function(event){
    const item = selectBtn.closest('.item');
    const cakeName = item.querySelector('h3');
    inputForm.value = cakeName.textContent;
  })
  })


 buyButton.addEventListener('click', function(event){
  event.preventDefault();


  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `<p>${name.value}, thanks for the order!</p>
  <p>Cake "${inputForm.value}" will be delivered on ${date.value} to ${address.value}.</p>`;


  form.insertAdjacentElement('afterend', message);

  formReset();


 })





 
 
  
  

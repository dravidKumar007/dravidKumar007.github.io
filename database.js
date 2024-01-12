const scriptURL = 'https://script.google.com/macros/s/AKfycbzxzJhGq3K-c-ypgGNKlNn4Ks-3x2mxsveQLCebLgkxPfz_BAPFURPOEm3jlp4LF9EE/exec'
const form = document.forms['database']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
function mesbut(){
    var button=document.getElementById('messagebutton');
    button.style.color = 'white';
    button.innerHTML='<span style="border: 2px solid white; border-radius: 50%; color: greenyellow; background-color: white;">&#10003;</span> Submited';
    button.style.backgroundColor=' rgb(138, 231, 0)';
    button.style.pointerEvents=`none`;
    console.log('check');

}

//seleziono nodo del dom
const listEl = document.querySelector('.list');
const buttonEl = document.querySelector('.btn')

//creazione endpoint in cui salvo l'indirizzo delle API di Boolean
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


buttonEl.addEventListener('click', function () {
  //ciclo for per generare 10 email casuali
  listEl.innerHTML = ''
  for (let i = 0; i < 10; i++) {
    //chiamata alle API con fetch
    fetch(endpoint)
      .then(result => result.json())
      .then(data => {
        //console.log(data);
        const email = data.response
        //console.log(email);
        const markup = `<li>${email}</li>`
        listEl.innerHTML += markup;
      }).catch(err => {
        console.log(err.message);
      }).finally(() => {
        console.log('end');
      })
  }
})
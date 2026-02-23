//seleziono nodo del dom
const listEl = document.querySelector('.list');

//creazione endpoint in cui salvo l'indirizzo delle API di Boolean
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'; 

//chiamata alle API con fetch
fetch(endpoint)
  .then(result => result.json())
  .then(data => {
    console.log(data);
    const email = data.response
    const markup = `<li>${email}</li>`
    listEl.innerHTML = markup
  }).catch(err => {
    console.log(err.message);
  }).finally(() => {
    console.log('end');
  })
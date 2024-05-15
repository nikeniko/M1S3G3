const inputBox = document.getElementById("input-box"); // qui andiamo a prendere l'id inputbox
const listContainer = document.getElementById("list-container"); // qui andiamo a prendere l'id list container
function addTask() {
  // qui stiamo stiamo iniziando una funzione quando si clicca ADD
  if (inputBox.value === "") {
    // qui stiamo dicendo se l'inputbox è vuoto mi fai uscire un alert con su scritto "devi scrivere qualcosa"
    alert("You must right something");
  } else {
    let li = document.createElement("li"); // se invece ci dovesse venir scritto qualcosa aggiungimi una li
    li.innerHTML = inputBox.value; // imposta il suo contenuto interno (innerHTML) con il valore dell'inputBox e lo aggiunge a listContainer
    listContainer.appendChild(li); // appendChild è utilizzato per aggiungere un nodo alla fine dell'elenco dei figli di un nodo padre specificato
    let span = document.createElement("span"); // Crea un elemento <span> con un simbolo "×" (utilizzato per rimuovere il compito) e lo aggiunge al nuovo elemento <li>
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // Svuota inputBox dopo l'aggiunta del compito
  saveData(); // andiamo a chiamare la funzione saveData per salvare l'html
}

listContainer.addEventListener(
  "click",
  function (
    e // Se un elemento <li> viene cliccato questo alterna la classe "checked" che cambierà visivamente il compito completato
  ) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Se il pulsante "×" (<span>) viene cliccato, rimuove l'elemento <li>
      e.target.parentElement.remove();
      saveData(); // andiamo a chiamare la funzione saveData per salvare l'html
    }
  },
  false
);

function saveData() {
  // Salva l'HTML interno in localStorage sotto data
  localStorage.setItem("data", listContainer.innerHTML); // nel caricare la pagina carica e mostra i compiti salvati precedentemente dal localStorage
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // quando la pagina è caricata, showTask viene chiamata per visualizzare i compiti che erano stati salvati in precedenza
}
showTask();

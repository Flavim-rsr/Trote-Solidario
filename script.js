// Mudança do site de escuro para claro
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/trote.png')
        img.setAttribute('alt', 'Logo do Trote Solidário 2023')
    } else {
        img.setAttribute('src', './assets/trote-fundo-branco.png')
        img.setAttribute('alt', 'Logo do Trote Solidário 2023 com escritas em branco')
    }
}

// Código para o botão menu mobile 
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'true');
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }
    else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu ');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Calculadora
function calcular_pontos() {
  let conjunto = Number(document.getElementById("conjunto-padrao").value)
  let total
  let kit = Number(document.getElementById("kit-alimentacao").value)
  let lata = Number(document.getElementById("suplemento").value)
  let arroz5 = Number(document.getElementById("arroz-5kg").value)
  let arroz1 = Number(document.getElementById("arroz-1kg").value)
  let feijao2 = Number(document.getElementById("feijao-2kg").value)
  let feijao1 = Number(document.getElementById("feijao-1kg").value)
  let macarrao = Number(document.getElementById("macarrao").value)
  let oleo = Number(document.getElementById("oleo").value)
  let sangue = Number(document.getElementById("sangueinput").value)
  if (conjunto >= 80) {
      total = 5000
      padrao = conjunto - 80
  }
  else if ((conjunto >= 64) && (conjunto < 80)) {
      total = 4000
      if (conjunto != 64 || conjunto != 80) {
          padrao = conjunto - 64
      }
  }
  else if ((conjunto >= 40) && (conjunto < 64)) {
      total = 2500
      if (conjunto != 40 || conjunto != 64){
          padrao = conjunto - 40
      }
  }
  else if ((conjunto >= 16) && (conjunto < 40)) {
      total = 1000
      if (conjunto != 16 || conjunto != 40){
          padrao = conjunto - 16
      }
  }
  else if ((conjunto >= 0) && (conjunto < 16)) {
      total = 0
      padrao = conjunto
  }
  let totalp = total + (padrao * 50) + (kit * 25) + (lata * 10) + (arroz5 * 5) + (arroz1 * 1) + (feijao2 * 2) + (feijao1 * 1) + (macarrao * 0.5) + (oleo * 1) + (sangue * 15)
  document.getElementById("comentario").textContent = "A quantidade de pontos que você acumulou foi de:  "
  document.getElementById("resposta").textContent = totalp;
}
// Slider

const containers = document.querySelectorAll('.slider-content');
let currentContainer = 0;
let intervalId;
let paused = false;

function showContainer(n) { 
  containers[currentContainer].classList.remove('active'); // remove a classe "active"
  containers[n].classList.add('active'); // adiciona a classe "active" para o próximo container
  currentContainer = n; // identifica o atual container
}

function nextContainer() {
  let nextContainer = currentContainer + 1; // identifica qual é o próximo container
  if (nextContainer >= containers.length) { // se o próximo container é maior que a quantidade
    nextContainer = 0;                      // de containers ele volta para o primeiro
  }
  showContainer(nextContainer); // ativa a function "showContainer" para mostrar o próximo container
}

function startSlider() {
    showContainer(0); // definir o slide default
    intervalId = setInterval(nextContainer, 10000); // intervalo de 10 segundos
}
   
function pauseSlider() {
    if (!paused) {
      clearInterval(intervalId); // botão pausa slider
      paused = true;
      pauseButton.textContent = "Resume"; // botão muda para "Resume"
    } else {
      startSlider(); // botão para continuar o slider
      paused = false;
      pauseButton.textContent = "Pause"; // botão muda para "Pause"
    }
  }
  
startSlider();
  
const pauseButton = document.getElementById("pause"); 
pauseButton.addEventListener("click", pauseSlider); // botão ativa a function "PauseSlider" quando pressionado
// Expand

// eu tentei colocar o script expand aqui mas ele parou de funcionar e eu não sei porque
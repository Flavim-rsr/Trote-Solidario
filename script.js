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


function calcular_pontos () {
  let padrao = Number(document.getElementById("conjunto-padrao").value)
  let kit = Number(document.getElementById("kit-alimentacao").value)
  let latabaunilha = Number(document.getElementById("suplemento").value)
  let pacotearroz5kg = Number(document.getElementById("arroz-5kg").value)
  let pacotearroz1kg = Number(document.getElementById("arroz-1kg").value)
  let pacotefeijao2kg = Number(document.getElementById("feijao-2kg").value)
  let pacotefeijao1kg = Number(document.getElementById("feijao-1kg").value)
  let pacotemacarrao = Number(document.getElementById("macarrao").value)
  let oleo = Number(document.getElementById("oleo").value)
  let sangue = Number(document.getElementById("sangueinput").value)

  let total = ((padrao * 50) + (kit * 25) + (latabaunilha * 10) + (pacotearroz5kg * 5) + (pacotearroz1kg * 1) + (pacotefeijao2kg * 2) + (pacotefeijao1kg) + (pacotemacarrao * 0.5) + (oleo) + (sangue * 15))
  alert(total)
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
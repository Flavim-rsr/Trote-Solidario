const headerBtn = document.querySelector('#alimentos-btn');
const content = document.querySelector('#content1');

headerBtn.addEventListener('click', () => {
  const expanded = headerBtn.getAttribute('aria-expanded') === 'true' || false;
  headerBtn.setAttribute('aria-expanded', !expanded);
  content.hidden = expanded;
});

const headerBtn2 = document.querySelector('#pontuacao-btn');
const content2 = document.querySelector('#content2');

headerBtn2.addEventListener('click', () => {
  const expanded = headerBtn2.getAttribute('aria-expanded') === 'true' || false;
  headerBtn2.setAttribute('aria-expanded', !expanded);
  content2.hidden = expanded;
});
const headerBtn3 = document.querySelector('#sangue-btn');
const content3 = document.querySelector('#content3');

headerBtn3.addEventListener('click', () => {
  const expanded = headerBtn3.getAttribute('aria-expanded') === 'true' || false;
  headerBtn3.setAttribute('aria-expanded', !expanded);
  content3.hidden = expanded;
});
const headerBtn4 = document.querySelector('#calculadora-btn');
const content4 = document.querySelector('#content4');

headerBtn4.addEventListener('click', () => {
  const expanded = headerBtn4.getAttribute('aria-expanded') === 'true' || false;
  headerBtn4.setAttribute('aria-expanded', !expanded);
  content4.hidden = expanded;
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 10000);
});

// Função para verificar se o elemento está na tela
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Função para adicionar a classe 'visible' quando o card aparecer na tela
function checkVisibility() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      if (isInViewport(card)) {
          card.classList.add('visible');
      }
  });
}

// Executa a verificação sempre que o usuário rolar a página
window.addEventListener('scroll', checkVisibility);

// Verifica a visibilidade dos cards assim que a página carregar
document.addEventListener('DOMContentLoaded', checkVisibility);


// Função para atualizar a barra de progresso
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar-fill');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
}

// Adiciona um evento para atualizar a barra de progresso quando o usuário rolar
window.addEventListener('scroll', updateProgressBar);



// Primeiro Popup
const openPopup = document.getElementById('openPopupSIG');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Segundo Popup
const openPopup2 = document.getElementById('openPopupBrady');
const closePopup2 = document.getElementById('closePopup2');
const popup2 = document.getElementById('popup2');

// Terceiro Popup
const openPopup3 = document.getElementById('openPopupThird');
const closePopup3 = document.getElementById('closePopup3');
const popup3 = document.getElementById('popup3');

// Garantir que os popups estejam fechados ao carregar a página
window.addEventListener('load', () => {
  popup.style.display = 'none';
  popup2.style.display = 'none';
  popup3.style.display = 'none';
});

// Abrir o primeiro popup
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Fechar o primeiro popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Abrir o segundo popup
openPopup2.addEventListener('click', () => {
  popup2.style.display = 'flex';
});

// Fechar o segundo popup
closePopup2.addEventListener('click', () => {
  popup2.style.display = 'none';
});

// Abrir o terceiro popup
openPopup3.addEventListener('click', () => {
  popup3.style.display = 'flex';
});

// Fechar o terceiro popup
closePopup3.addEventListener('click', () => {
  popup3.style.display = 'none';
});
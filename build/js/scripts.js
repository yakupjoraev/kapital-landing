// Custom Scripts
// Custom scripts
// Получаем все ссылки с классом "advertising__aside-link"
var links = document.querySelectorAll(".advertising__aside-link");

// Добавляем обработчик клика к каждой ссылке
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Предотвращаем стандартное поведение ссылки
    event.preventDefault();

    // Получаем атрибут href ссылки (например, "#section-1")
    var targetId = this.getAttribute("href").substring(1);

    // Находим элемент с соответствующим ID
    var targetElement = document.getElementById(targetId);

    // Вычисляем позицию элемента
    var topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Плавно прокручиваем страницу к элементу с отступом
    window.scrollTo({ top: topOffset - 40, behavior: "smooth" });
  });
});

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


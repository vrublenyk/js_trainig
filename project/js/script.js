/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логон",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Спайдер-мен",
        "Бэтмэн"
    ]
};

const removeAds = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      listOfFilms = document.querySelector('.promo__interactive-list');


removeAds.forEach(item =>{
    item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url(img/bg.jpg)';

movieDB.movies.sort();
listOfFilms.innerHTML = '';

movieDB.movies.forEach((film, i) => {
   
    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
        <div class="delete"></div>
    </li>
    `;
});


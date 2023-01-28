const box = document.getElementById('box'),  //выбор елемента с HTML документа по ID
      buttons = document.getElementsByTagName('button'), //выбор елементов с HTML документа по тегуб как результат получаем псевдо массив, для обращения к конкретному элементу массива синтаксис buttons[1]
      circles = document.getElementsByClassName('circles'), ///выбор елементов с HTML документа по названию класса. в скобках класс пишеться без точки
      hearts = document.querySelectorAll('.heart'), //выбор елементов с HTML документа по любому css селектору(.класс #айди тег  ) как результат получаем псевдомассив который имеет метод forEach
      oneHeart = document.querySelector('.heart'); //позволят получить только один элемент со страницы причем он берет первый элемент с данным классом

Element.style.width = '300px';  //добавление CSS стилей при помощи JS+ добавляет инлайн стили в HTML
buttons[1].style.backgroundColor = 'red'; //так задавать стиль конкретному элементу из массива. в этом случае второму
box.style.cssText = `width: 300px; height: 100px; font-size: ${someConst}`;//добавление сразу несколько css стилей. синтаксис как в css, можно подставлять значение переменный используя косые кавычки и конструкцию ${}

for (let i = 0; i <hearts.length;i++){//цікл которій перебирает элементы массива hearts и перекрашивает все в другой цвет.
    hearts[i].style.backgroundColor = 'red';
}

hearts.forEach(item => {// тоже самое только используя forEach
    item.style.backgroundColor = 'red';
});

const div = document.createElement('div');//создание єлемента при помощи скрипта. в данній момент он существует только в файле скрипта, пока не біл помещен в HTML документ другим методом
div.classList.add('black')// этот метод добавляет класс элементу
div.innerHTML = '<h1>hello world</h1>';//метод позволяет помещать HTML структуру
div.textContent = 'Hello';//метод добавляет только текст. не позволяя добавлять никаких тегов и структур, обычно используеться при работе с введенным текстом от пользователя чтоб он мог пердать только текст.
div.insertAdjacentElement('beforebegin', '<h2>Hello</h2>')// вставляет HTML код перед выбранным элементом(перед div снаружи). метод позволяет вставлять целые куски HTML кода
div.insertAdjacentElement('afterbegin', '<h2>Hello</h2>')// вставляет HTML код в начало выбранногго элемента. метод позволяет вставлять целые куски HTML кода
div.insertAdjacentElement('beforeend', '<h2>Hello</h2>')// вставляет HTML код в конец выбранного элемента. метод позволяет вставлять целые куски HTML кода
div.insertAdjacentElement('afterend', '<h2>Hello</h2>')// вставляет HTML код после выбранного элемента(после div снаружи). метод позволяет вставлять целые куски HTML кода
const text = document.createTextNode('some text');//создает текст редко используеться



document.body.append(div);// добавляет созданій скриптом элемент div в конец тега body
document.body.prepend(div);// добавляет созданій скриптом элемент div в начало тега body
hearts[0].before(div);//вставляет div перед первым элементом из массива hearts
hearts[0].after(div);//вставляет div после первого элемента из массива hearts
circles[1].remove();//удаляет второй элемент из масиива circles и со страницы
hearts[2].replaceWith(circles[1]);//метод заменяет третье сердце вторым кружочком 
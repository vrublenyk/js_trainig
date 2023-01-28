const btn = document.querySelector('button');//выбираем кнопку с HTML файла

btn.onclick = function() {  // при нажатии на BTN onclick вызывает функцию(старый метод так лучше не делать)
    alert('warning');
};


btn.addEventListener('click', () =>{ // addEventListener метод который следит за событиями (click' название обытия а дальше коллбэк функция ()=>{} )

})
ed
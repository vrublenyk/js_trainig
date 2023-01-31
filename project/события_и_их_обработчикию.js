const btn = document.querySelector('button');//выбираем кнопку с HTML файла

btn.onclick = function() {  // при нажатии на BTN onclick вызывает функцию(старый метод так лучше не делать)
    alert('warning');
};


btn.addEventListener('click', () =>{ // addEventListener метод который следит за событиями (click' название обытия а дальше коллбэк функция ()=>{} )
    alert('warning');
})


btn.addEventListener('mouseenter', (event) =>{ // addEventListener метод который следит за событиями (mouseenter' название события при наведении мышки а дальше коллбэк функция (event )=>{} ) event objekt sobytija kotoryj peredayut v аргумент callback function. 
    alert('warning');
    event.target.remove();// udaliajet objekt na kotoryj naveli myshku;
});


let i = 0;
const deleteElement = (event) => {
    console.log(event.target)
    i++
    if(i == 1){
        btn.deleteEventListener('click', deleteElement);// metod kotoryj udaliajet obrabotchik sobytij kogda znaczenie i = 1
    }
};

btn.addEventListener('click', deleteElement, {once: true});// varian gde v kachestve argumenta propisana function deleteElement argument {once: true} znaczit czto obrabotchik sobytij srabotaet tolko odin raz
btn.deleteEventListener('click', deleteElement);// metod kotoryj udaliajet obrabotchik sobytij


const link = document.querySelector('a');

link.addEventListener('click', (e) => { // e === event
    e.preventDefault(); //preventDefault otmeniajet standartnoe povedenie brauzera, w dannom primere otmeniajet perechod po ssylke posle klika na nee
});

btns.forEach(item => {  // sposob naznachit obrabotchik sobytij addEventListener dla vsech elementov massiva btns pri pomoschi metoda forEach
   item.addEventListener('click', (e) => {
    console.log(e.target);
   });
});



console.log(document.querySelector('.promo__title').parentElement); // vybiraet roditelskij element klassa .promo__title. w dannom sluczaje eto.promo__bg
console.log(document.querySelector('.promo__title').parentElement.parenElement); // vybiraet roditelskij element klassa .promo__title. a zatem roditelia .promo__bg w dannom sluczaje eto .promo__content
.nextElemenSibling// sled. sosed
.previousElementSibling//pred. sosed
.document.body.firstElementChild// pelwyj element w tege body
.document.body.lastElementChild/// poslednij element w tege body
.document.body.childNodes// vse uzly w tege body, wkluczaja perenosy probely i t.d

for( let node of document.body.childNodes){ // cykle kotoryj perebirajet vse uzly i wywodit tolko elementy a text nodes probely i t.d propuskaet
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}

//---------------------------------------------------REKURSIJA----------------------------------------------------------------
// obycznaja function realizovannaja czerez cykl
let pow = function(x, n) { // function kotoraja vozvodit argument X v stepen N
    let result = 1;  // tech peremennaja result = 1 

    for( let i = 0; i < n; i++) {  // cycle v kotorom kol-vo iteration = arg N
        result *= x;  // w kazdoj iteration umnozajem X na 1 sootwetswenno znaczenie zapisywaetsia w peremennuju result
    }
    return result; // otdajet naruzu peremennuju result
};

console.log(pow(2, 4));

// funkcyja realizovannaja czerez rekursiju

function pow(x, n) {// vse tochno takze
    if (n === 1) { // jesli arg N (stepen) = 1 to otdajem znaczenie X(naprimer pow(2,1) 2*1 = 2)
        return x;
    } else {
        return x * pow(x, n - 1 ); //zdes znaczenie x my umnozaem na x vozwedennuju w stepen n - 1 (primer pow(2, 2) = x(2)* ( x(2) * N(2) - 1 (2 -1=1) ) )
         // funkcija zapuskajet funkcujy eto i jest rekursija
    }
}



let students = {
    js: [{
        name: 'John',
        progress: 100
    },{
        name: 'Ivan',
        progress: 60
    }],
    html:{
        basic:[{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],
        pro:[{
                name: 'Sam',
                progress: 10
        }]
    }
};
//Object.values()  metod kotoryj beret vse znaczenija iz objekta i vozvraszczaet v vide massiva v kotorom oni pereczisleny po poriadku
//Array.isArray() metod kotoryj vozwraszczaet true esli elemnt eto massiv
function getTotalProgressByIteration(data) {
    let total = 0; //poka pustaja peremennajz dla podsczeta progressa
    let students = 0; // poka pustaja peremennaja dla podszczeta koliczestva studentov

    for ( let course of Object.values(data)){  //ojavliaej course kotoraja budet imet znaczenie kotoroje nam vernet metodObject.values
        if ( Array.isArray(course)){ // uslovie esli to czto po[alo w course pri perebore objekta students massiv to..
            students += course.length; // my prisvajewajem dlinnu massiva peremennoj students(w massive 2 objecta so studentami tak czto studentow 2)

            for (i = 0; i < course.length; i++) { //dalee nado perebrat massiv i vyianut znaczenie progress i pomestit v total, delaem czerez cykl,
                total += course[i].progress; // pri kazdoj iteracii cykla peredaem znaczenie course[i].progress( gde i nomer po poriadku) v total
            }
        } else  {
            for ( let subCourse of Object.values(course)) {// tut perebor uze objekta priczem ne data a course, tak kak my ego znaczenie uze poluczili vysze
                students += subCourse.length;

                for (i = 0; i < subCourse.length; i++) { //dalee nado perebrat massiv i vyianut znaczenie progress i pomestit v total, delaem czerez cykl,
                    total += subCourse[i].progress; // pri kazdoj iteracii cykla peredaem znaczenie course[i].progress( gde i nomer po poriadku) v total
                }
            }
        }
    }

    return total / students  // function otdaet sredniy uroven progressa, dlia etogo obszczij progress delim na kol-vo studentov
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if ( Array.isArray(data)) {
        let total = 0;

        for (i = 0; i < data.length; i++) { 
            total += data[i].progress; 
        }

        return [total, data.length];
    } else {
        let total = [0,0];
        
        for ( let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students)

console.log(result[0]/result[1]);


function factorial(n) {
    n * factorial(n - 1);

}
console.log(factorial(5));
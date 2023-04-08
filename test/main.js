let block = document.createElement('main')
document.body.append(block)
let shop = [
    {
        image: './img/iphone12.jpeg',
        text: 'Дисплей: 6.1" OLED - 1170 x 2532.Чип: Apple A14 Bionic.<br>Камера: 2 (12 MP + 12 MP)Батарея: 2815 мАчOS: iOS 16.2.Вес: 164 г.',
        color: 'voilet',
        sena: '600',
    },
    {
        image: './img/iphone13.jpeg',
        text: 'Процессор Apple A15 Bionic.Оперативная память 4 Гб <br> Встроенная память 128, 256 или 512 Гб <br> Батарея 3095 мА·ч Экран 6,1 дюйма, AMOLED, 60 гц <br>  Основная камера 12 Мп с f/1,6 + 12 Мп с f/2,4 (сверхширокоугольная) <br>  Фронтальная камера 12 Мп',
        color: 'white',
        sena: '900',
    },
    {
        image: './img/iphone14.jpeg',
        text: 'Процессор Apple A15 Bionic.Оперативная память 6 Гб <br> Встроенная память 128, 256 или 512 Гб Батарея 3279 мА·ч <br> Экран 6,1 дюйма, AMOLED, 60 Гц  Основная камера 12 Мп <br> с f/1,5 + 12 Мп с f/2,4 (сверхширокоугольная) <br>  Фронтальная камера 12 Мп с автофокусом  Интересные особенности',
        color: 'black',
        sena: '1200',
    }
]
function card(item) {
    return `
    <div class="container">
    <div class="ds">
    <span id="x">x</span>
    <label class="checkbox" >
    <input class="inp" type="checkbox" >
    </label>
    
    <img class="logo" src="${item.image}">

    <h4 class="card-title">${item.text}</h4>
    <h5 class="color">${item.color}</h5>
    <div class="bt">
    <button id="plus" >+</button>
    <span id="count">1</span>
    <button id="minus">-</button>
    </div>

    <h3 class="akcha">${item.sena}$</h3>

    </div>
    </div>
    `
}
function render(emm) {
    let items = []
    emm.map((el) => {
        items.push(card(el))
    })
    block.innerHTML = items.join('')
}
render(shop)

let x = document.querySelectorAll('#x')
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', () => {
        let element = x[i].parentElement
        element.parentElement.remove()
    })
}
let plus = document.querySelectorAll('#plus')
let count = document.querySelectorAll('#count')
let minus = document.querySelectorAll('#minus')
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function () {
        plus[i].nextElementSibling.textContent++
        let plas = plus[i].parentElement.nextElementSibling
        plas.innerHTML =
            parseInt(plus[i].nextElementSibling.textContent) *
            parseInt(shop[i].sena) + '$'
    })
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function () {
        // console.log(count[i]);
        let noadd = minus[i].previousElementSibling
        if (noadd.textContent > '1') {
            noadd.textContent--
            let plas = minus[i].parentElement.nextElementSibling
            plas.innerHTML =
                parseInt(minus[i].previousElementSibling.textContent) *
                parseInt(shop[i].sena) + '$'
        }

    })
}
let input = document.querySelectorAll('.checkbox')
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', (event) => {
        if (event.target.checked) {
            event.target.parentElement.classList.add('spann')
        } else {
            event.target.parentElement.classList.remove('spann')
        }
    })
}
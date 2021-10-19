const data = [
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/1.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/2.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/3.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/4.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/5.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/6.jpg',
    },
    {
        name: 'Bé Nguyên',
        message: 'Lời chúc ',
        img: './img/7.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/8.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/9.jpg',
    },
    {
        name: 'ABCD',
        message: 'bla bla bl',
        img: './img/10.jpg',
    },
]

const ring = document.querySelector('.ring')
const result = data.map((item) => {
    return `
    <div class="img">
        <div class="content">
            <h4>${item.name}</h4>
            <p>${item.message}</p>
            <button class="show-wrapper">Xem ảnh</button>
        </div>
    </div>
    `
})
const res = result.join('')
ring.innerHTML = res
const listImg = document.querySelectorAll('.img')
listImg.forEach((item, i) => {
    item.style.backgroundImage = 'url(./img/' + (i + 1) + '.jpg)'
})

//Wrapper
const listBtnImg = document.querySelectorAll('.show-wrapper')
const wrapper = document.querySelector('.wrapper')
const wrapperImg = document.querySelector('.wrapper_img')
listBtnImg.forEach((item, i) => {
    item.addEventListener('click', () => {
        wrapper.classList.toggle('showFlex')
    })
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('showFlex')
})
wrapperImg.addEventListener('click', (e) => {
    e.stopPropagation()
})

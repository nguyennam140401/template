const data = [
    {
        name: 'Kim Phượng',
        message:
            'Là cô gái khá cá tính nhưng luôn luôn nhiệt tình,thân thiện với bạn bè. ',
        img: './img/1.jpg',
    },
    {
        name: 'Trà My',
        message:
            'Cô gái có nụ cười tươi, luôn luôn vui vẻ, truyền năng lượng tích cực đến mọi người.',
        img: './img/2.jpg',
    },
    {
        name: 'Trương Phương',
        message:
            'Lớp phó đời sống luôn luôn quan tâm đến mọi người dù đôi khi có hơi " nóng tính như kem" nhưng cũng là vì các bạn',
        img: './img/3.jpg',
    },
    {
        name: 'Ngọc Hải',
        message:
            'Lớp phó học tập xinh đẹp nên môn nào cũng A , luôn nhắc nhở ,giúp đỡ các bạn chăm chỉ trong học tập ',
        img: './img/4.jpg',
    },
    {
        name: 'Thùy Linh',
        message:
            ' Lớp trưởng xinh gái , đáng yêu ,người luôn có trách nhiệm cao trong công việc , luôn quan tâm và giúp đỡ chúng tớ trong các hoạt động nè. ',
        img: './img/5.jpg',
    },
    {
        name: 'Hoài Linh',
        message:
            'thủ quỹ đến từ Hà Tĩnh , cô gái xinh xắn đáng yêu luôn yêu đời và luôn được mọi người yêu quý',
        img: './img/6.jpg',
    },
    {
        name: 'Bé Nguyên',
        message:
            'cô vợ quốc dân xinh đẹp, thân thiện với mọi người, luôn vui vẻ và tràn đầy năng lượng',
        img: './img/7.jpg',
    },
    {
        name: 'Tú Anh',
        message:
            ' Là mẫu người đại diện cho câu nói con nhà người ta khi đạt điểm cao với hầu hết tất cả các môn và cũng rất hay nhắc bài cho các bạn nữa .',
        img: './img/8.jpg',
    },
    {
        name: 'Kim',
        message: 'Cô gái bí ẩn của lớp, trầm tính nhưng học thì siêu đỉnh,.',
        img: './img/9.jpg',
    },
    {
        name: 'Thùy Linh',
        message: 'bla bla',
        img: './img/5.jpg',
    },
]
const audioElement = document.querySelector('audio')
// window.addEventListener('load', () => {
//     console.log(1)
//     setTimeout(() => {
//         audioElement.play()
//     }, 1000)
// })
const ring = document.querySelector('.ring')
const result = data.map((item, idx) => {
    if (idx == 9) {
        return `<div class="img">
        
    </div>`
    }
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
const wrapperImg = document.querySelector('.wrapper_img img')
listBtnImg.forEach((item, i) => {
    item.addEventListener('click', () => {
        wrapper.classList.toggle('showFlex')
        const urlImg = item.parentElement.parentElement.style.backgroundImage
        wrapperImg.setAttribute(
            'src',
            urlImg.slice(urlImg.indexOf('"') + 1, urlImg.lastIndexOf('"'))
        )
        console.log(wrapperImg.getAttribute('src'))
    })
})
wrapper.addEventListener('click', () => {
    wrapper.classList.remove('showFlex')
})
wrapperImg.addEventListener('click', (e) => {
    e.stopPropagation()
})

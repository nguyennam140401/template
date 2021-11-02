axios.defaults.headers.common['Authorization'] =
    'Bearer ZjZiZGI4YzAtNDA2ZC00NGEyLTg4NzktYzUyZTE3NDkyNDQx'
const weatherForecastAPI = 'https://api.m3o.com/v1/weather/Forecast'
const currentWeatherAPI = 'https://api.m3o.com/v1/weather/Now'

// const optionTranslate = {
//     method: 'POST',
//     url: 'https://google-translate20.p.rapidapi.com/translate',
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
//         'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
//     },
//     data: {
//         text: 'The POST method has several advantages over GET: it is more secure because most of the request is hidden from the user; Suitable for big data operations.',
//         tl: 'vi',
//         sl: 'en',
//     },
// }
btnSubmit.addEventListener('click', () => {
    var city = document.querySelector('input#city_name').value
    const cityName = removeVietnameseTones(city)
    axios.get(`${currentWeatherAPI}?location=${cityName}`).then((data) => {
        const currentWeather = data.data
        var cityName = document.querySelector('.header .name')
        cityName.innerHTML = city
        var nhietdo = document.querySelector('.nhietdo')
        var temp = Math.floor(currentWeather.temp_c)
        var iconwheather = document.querySelector('.iconweather')
        var des = document.querySelector('.front_body .day')
        var doam = document.querySelector('.humidity')
        var windSpeed = document.querySelector('.wind_speed')
        var windDeg = document.querySelector('.wind_deg')
        doam.innerHTML = currentWeather.humidity + '%'
        windSpeed.innerHTML = currentWeather.wind_mph + 'm/s'
        windDeg.innerHTML = currentWeather.wind_degree + '<sup>o</sup>'
        des.innerHTML = currentWeather.condition
        des.innerHTML
        iconwheather.src = currentWeather.icon_url
        nhietdo.innerHTML = `${temp}<sup>o</sup>`
    })
    axios
        .get(`${weatherForecastAPI}?location=${cityName}&days=7`)
        .then((data) => {
            const week = document.querySelector('.list_day')
            const dayOfWeek = data.data.forecast
                .map((item) => {
                    const day = new Date(item.date)
                    return `<li class="list_day-item">
                <span>${item.date}</span>
                <div class="day-infor">
                    <span><img width="30px" height="30px" src="${
                        item.icon_url
                    }"/></span>
                    <span>${Math.floor(
                        (item.max_temp_c + item.min_temp_c) / 2
                    )}</span><sup>o</sup></span>
                </div>
            </li>`
                })
                .join('')
            week.innerHTML = dayOfWeek
        })
})

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    str = str.replace(/đ/g, 'd')
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
    str = str.replace(/Đ/g, 'D')
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, ' ')
    str = str.trim()
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        ' '
    )
    return str
}

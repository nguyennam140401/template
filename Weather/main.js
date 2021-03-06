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
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a')
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e')
    str = str.replace(/??|??|???|???|??/g, 'i')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u')
    str = str.replace(/???|??|???|???|???/g, 'y')
    str = str.replace(/??/g, 'd')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A')
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E')
    str = str.replace(/??|??|???|???|??/g, 'I')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U')
    str = str.replace(/???|??|???|???|???/g, 'Y')
    str = str.replace(/??/g, 'D')
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
    str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ?? ?? ??  ??, ??, ??, ??, ??
    // Remove extra spaces
    // B??? c??c kho???ng tr???ng li???n nhau
    str = str.replace(/ + /g, ' ')
    str = str.trim()
    // Remove punctuations
    // B??? d???u c??u, k?? t??? ?????c bi???t
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        ' '
    )
    return str
}

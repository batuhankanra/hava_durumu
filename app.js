const url = 'http://api.openweathermap.org/geo/1.0/direct?q='
const key='886108529785cae837c7478712158bf4'
const url1='https://api.openweathermap.org/data/2.5/weather?lat='

const content=document.querySelector('.content')
const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',(e)=>{
    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
})



const getResult=  (cityName)=>{
    let query=`${url}${cityName}&appid=${key}`
   
    fetch(query)
    .then(weather=>weather.json())
    .then(displayResult)
    
}
const displayResult = (result)=>{
    let lat=result[0].lat
    let lon=result[0].lon
    const queryy=`${url1}${lat}&lon=${lon}&appid=${key}`
    fetch(queryy)
    .then(res=>res.json())
    .then(createHAVA)
}
const createHAVA=(ress)=>{
    let name=ress.name
    let country=ress.sys.country
    let temp=Math.round(ress.main.temp)
    temp=temp/10
    let desc=ress.weather[0].description
    content.innerHTML=`
    <div class="city">${name} ,${country}</div>
            <div class="temp">${temp} C</div>
            <div class="desc">${desc}</div>`
}

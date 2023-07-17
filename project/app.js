let x = 0
toggle()
const calendar = new Date()
let months = calendar.getMonth()+1
let years = calendar.getFullYear()
function reset()
{
  months = calendar.getMonth()+1
  years = calendar.getFullYear()
}
function toggle()
{
    let element1 = document.querySelector("#wrapper1")
    let element2 = document.querySelector("#wrapper2")
    let button = document.querySelector("h1")
    x++
    if(x == 1)
    {
      element1.style.display = 'flex'
      element2.style.display = 'none'
      button.textContent = 'CLOCK'
    }
    if(x == 2)
    {
      element1.style.display = 'none'
      element2.style.display = 'flex'
      button.textContent = 'DATE'
    }
    if(x == 2) {x = 0}
}
setInterval(function()
{
    const datee = document.querySelector(".date p")
    const clock = document.querySelector(".display p")
    const dinner = document.querySelector(".ampm p")
    const today1 = document.querySelector(".special1 p")
    const today2 = document.querySelector(".special2 p")
    const today3 = document.querySelector(".special3 p")
    const today4 = document.querySelector(".special4 p")
    const date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hr = time.getHours()
    let ampm = 'AM'
    if(hr > 12){
      ampm = 'PM'
      hr = hr - 12
    }
    if(hr == 0) hr = 12
    if(sec < 10) sec = '0' + sec
    if(min < 10) min = '0' + min
    if(hr < 10) hr = '0' + hr
    datee.textContent = day + ' ' + month[date.getMonth()] + ' ' + year
    clock.textContent = hr + ':' + min + ':' + sec
    dinner.textContent = ampm
    today1.textContent = 'Today is' + '\n' + week[date.getDay()]
    today2.textContent = day + ' ' + month[date.getMonth()]
    today3.textContent = year
    today4.textContent = hr + ':' + min + ':' + sec + ' ' + ampm
})
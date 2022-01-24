const work = 1500
const rest = 300
// Time in seconds

let alarm = new Audio('src/audio/sound.mp3')

function timer() {
  function stop() {
    alarm.play()
    alert('Deu o tempo')
  }

  function pause() {
    alarm.play()
    alert('Acabou a pausa')
  }

  setTimeout(stop, 1500000)
  setTimeout(pause, 1800000)

  function getHour() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    console.log(`${hours}:${minutes}:${seconds}`)
    let insertCurrentHour = (document.getElementById(
      'start'
    ).innerHTML = `${hours}:${minutes}:${seconds}`)
    let insertFinalHour = (document.getElementById(
      'final'
    ).innerHTML = `${hours}:${minutes + 25}:${seconds}`)
  }

  function currentHour() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let insertCurrentHour = (document.getElementById(
      'currentHour'
    ).innerHTML = `${hours}:${minutes}:${seconds}`)
  }

  getHour()
  setInterval(currentHour, 1000)
}

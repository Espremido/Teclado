// get all keys
const keys = document.querySelectorAll('.key')

// play notes
function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  // typed or presssed key
  const key = document.querySelector(`.key[data-key ="${audioKeyCode}"]`)

  //if key exists

  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  //play audio
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key ="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type == 'keydown' // true or false

  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

// click with mouse
keys.forEach(function (key) {
  key.addEventListener('click', playNote)
  key.addEventListener('transitionend', removePlayingClass)
})

// keyboard type

window.addEventListener('keydown', playNote)

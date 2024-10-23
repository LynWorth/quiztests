const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}


function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "In the year 34xb4.910, in the city of Odegard-Martinelli, something awakens in the dark...",
    options: [
        {
            text: "*Sleepy* I dont wanna wake up...",
            setState: {awakenedClone: false},
            nextText: 3,
        },
        {
            text: "*Wakeful* What's going on? Where am I?",
            setState: {awakenedClone: false},
            nextText: 2,
        },
    ]
},
{
    id: 2,
    text: "You don't know who or what you are, but you do know that you are brand new. You float in an empty void, a place you've never been. But then, you've never been anywhere.",
    options: [
        {
            text: "C'mon already, lets go!",
            setState: {awakenedClone: false},
            nextText: 4,
        },
        {
            text: "Leave me be! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 3,
        },
    ]
},
{
    id: 3,
    text: "You're not up for this, whatever this is. Whatever you are. You don't know who or what you are, but you know that you are brand new. You float in an empty void, a place you've never been. But then, you've never been anywhere.",
    options: [
        {
            text: "You try and disappear, to be nothing like you were not long ago.",
            setState: {awakenedClone: false},
            nextText: 4,
        },
        {
            text: "I suppose this isn't too bad...",
            setState: {awakenedClone: false},
            nextText: 4,
        },
    ]
},
{
    id: 4,
    text: "You hear voices. No, one voice talking to itself. You reach out and find the void's edge is close by indeed. You get the feeling those voices aren't far but you can't see a thing.",
    options: [
        {
            text: "Where am I?",
            setState: {awakenedClone: false},
            nextText: 5,
        },
        {
            text: "Leave me be! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 5,
        },
    ]
},
{
    id: 5,
    text: "The voices get closer then stop, then get closer again. They are just outside of your... container.",
    options: [
        {
            text: "Yo yo, let me out! I want answers!",
            setState: {awakenedClone: false},
            nextText: 6,
        },
        {
            text: "Begone! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 6,
        },
    ]
},
{
    id: 6,
    text: "Black turns to white as your whole world cracks in two. You take a moment to adjust to the brightness... Standing before you are two creatures. They speak to each other in identical voices and then turn to you and one of them speaks: 'Awaken, clone!'",
    options: [
        {
            text: "Clone? You understand their language but wonder what they mean.",
            setState: {awakenedClone: true},
            nextText: 7,
        },
        {
            text: "A clone, of course. Your inbuilt genetic edumation comes flooding to you.",
            setState: {awakenedClone: true},
            nextText: 7,
        },
    ]
},
{
    id: 7,
    text: "Clone LNTWOS-4. Regurge now your name and purpose?",
    options: [
        {
            text: "You understand them but you feel shock, and you draw a blank.",
            setState: {awakenedClone: false},
            nextText: 8,
        },
        {
            text: "Leave me be! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 8,
        },
    ]
},
{
    id: 8,
    text: "You look around desperately. You're in a sparse room full of cylinders and more of these people. You see other identicals in various stages of being awoken. You see the cylindar that held you moments ago. Attached to this is a display and you see your reflection in it... you too are one of these creatures!",
    options: [
        {
            text: "What is a name?? What is a clone? Who are these guys?",
            setState: {awakenedClone: false},
            nextText: 9,
        },
        {
            text: "My name? My name? I don't know... should I?",
            setState: {awakenedClone: false},
            nextText: 9,
        },
    ]
},
{
    id: 9,
    text: "'Underdone!' exclaims the first of the creatures. 'Let's get them to the test area. I get the feeling this one's for the recycler.'",
    options: [
        {
            text: "You understand them but you feel shock, and you draw a blank.",
            setState: {awakenedClone: false},
            nextText: 8,
        },
        {
            text: "Leave me be! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 9,
        },
    ]
},
{
    id: 10,
    text: "You are led through to another room, full of rows of chairs and terminals. You are taken to one and are sat down in front of it. Blinking at you is a user interface. Clone name input: _",
    options: [
        {
            text: "You understand them but you feel shock, and you draw a blank.",
            setState: {awakenedClone: false},
            nextText: 8,
        },
        {
            text: "Leave me be! I don't want to wake up!",
            setState: {awakenedClone: false},
            nextText: 9,
        },
    ]
}, 
  


]

startGame()
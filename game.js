const questionEl = document.querySelector('h2')
const btnOne = document.querySelector('#answer-1')
const btnTwo = document.querySelector('#answer-2')
const btnThree = document.querySelector('#answer-3')
const startEl = document.getElementById('start-el')
const gameEl = document.querySelector('#container')
// const gifElOne = document.querySelector('.gif-el')
// const gifElTwo = document.querySelector('.gif-el-2')
let correct = 0
let currentQuestion = 0
let correctAnswer;

const questionArray = ['Question 1. What is Narutos last name', 
    'Question 2. Where did Nauto and Sasuke fight at the end', 
    'Question 3. Did Naruto fart in kibas face?', 
    'Question 4. What was gaaras signature move in original Naruto']

const answerArray = ['Uzumaki','Namikaze', 'Akimichi', 
    'Valley of the end', 'Ichiraku Ramen', 
    'hidden rain village', 'True', 'False', 
    'Sand coffin', 'Sand tomb', 'Quicksand']


startEl.addEventListener('click', (event) => {

    if (event.target === startEl) {
        startEl.style.display = 'none'
        questionEl.style.display = 'block'
        btnOne.style.display = 'block'
        btnTwo.style.display = 'block'
        btnThree.style.display = 'block'
    
        questionEl.textContent = questionArray[0]
    
        btnOne.textContent = answerArray[0]
        btnTwo.textContent = answerArray[1]
        btnThree.textContent = answerArray[2]

        gameEl.style.backgroundImage = 'url(images/nauto.png)'
        gameEl.style.backgroundSize = 'cover'
    }
})


gameEl.addEventListener('click', function playQuizGame(event) {

// function that moves to next question when a button is clicked and stores and increments correct if it the correct button pressed

    switch(currentQuestion) {
        case 0:
            if (event.target === btnOne) {
                correct++
                currentQuestion++

                questionEl.textContent = questionArray[1]

                btnOne.textContent = answerArray[5]
                btnTwo.textContent = answerArray[3]
                btnThree.textContent = answerArray[4]
            } else if (event.target === btnTwo || event.target === btnThree) {
                currentQuestion++

                questionEl.textContent = questionArray[1]

                btnOne.textContent = answerArray[5]
                btnTwo.textContent = answerArray[3]
                btnThree.textContent = answerArray[4]
            }
            break;
        case 1:
            if (event.target === btnTwo) {
                correct++
                currentQuestion++

                questionEl.textContent = questionArray[2]

                btnOne.textContent = answerArray[7]
                btnTwo.textContent = answerArray[6]
                btnThree.style.display = 'none'
            } else if (event.target === btnOne || event.target === btnThree) {
                currentQuestion++

                questionEl.textContent = questionArray[2]

                btnOne.textContent = answerArray[7]
                btnTwo.textContent = answerArray[6]
                btnThree.style.display = 'none'
            }
            break;
        case 2:
            if (event.target === btnTwo) {
                correct++
                currentQuestion++

                questionEl.textContent = questionArray[3]

                btnOne.textContent = answerArray[10]
                btnTwo.textContent = answerArray[9]
                btnThree.style.display = 'block'
                btnThree.textContent = answerArray[8]
            } else if (event.target === btnOne) {
                currentQuestion++

                questionEl.textContent = questionArray[3]

                btnOne.textContent = answerArray[10]
                btnTwo.textContent = answerArray[9]
                btnThree.style.display = 'block'
                btnThree.textContent = answerArray[8]
            }
            break;
        case 3:
            if (event.target === btnThree) {
                correct++
                currentQuestion++
                console.log(correct)
                getQuizResult()
            } else if (event.target === btnTwo || event.target === btnOne) {
                currentQuestion++
                console.log(correct)
                getQuizResult()
            }
            break;
            
        }
})


function getQuizResult() {
    if (correct >= 2) {
        questionEl.textContent = `You got ${correct} questions correct. You passed!`
        gameEl.style.backgroundImage = 'url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDhrZDdkNXg2OWp1OWY5Y3Vob3R3N3J4ZGFhdnBqNmJ0YW1oZGp2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HMvPgHnAJUzM4/giphy.webp)'
        startEl.style.display = 'block'
        startEl.textContent = 'PLAY AGAIN'
        correct = 0
        currentQuestion = 0
    } else {
        questionEl.textContent = `You got ${correct} questions correct. You failed!`
        gameEl.style.backgroundImage = 'url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnVvYjg5dGpvN2M3cXZxbndwMGpsdjhoa282ZnN4ZHFsbHRxamNpdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uBkXN6p7urWUw/giphy.webp)'
        startEl.style.display = 'block'
        startEl.textContent = 'PLAY AGAIN'
        correct = 0
        currentQuestion = 0
    }

    btnOne.style.display = 'none'
    btnTwo.style.display = 'none'
    btnThree.style.display = 'none'
    questionEl.style.fontSize = '25px'
}



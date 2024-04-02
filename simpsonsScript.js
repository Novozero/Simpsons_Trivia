const nextButton = document.getElementById('next-btn')
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffleQuestions, currentQuestionIndex, shuffleAnswers
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let points = 0


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide');
    shuffleQuestions = simpsonsTrivia.sort(() => Math.random() - 0.5)
    // shuffleAnswers = answers.sort(() => Math.random()- 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        if (answer === question.correctAnswer) {
            button.dataset.correct = "true"
        }
        else {
            button.dataset.correct = "false"
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === "true"
    if (correct) {
        alert('Richtig!')
        points +=10
        nextButton.classList.remove('hide')
    } else {
        alert('Falsch')
        points -=10
    }
    if (points<=0) {
        points = 0
    }
    if (currentQuestionIndex >= simpsonsTrivia.length -1) {
        alert('Alle Fragen beantwortet!')
        nextButton.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        questionContainerElement.classList.add('hide')
    }
    document.getElementById('points').innerText = points
}


function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


const simpsonsTrivia = [
    {
      question: "Wer ist der Erfinder von 'Die Simpsons'?",
      answers: ["Matt Groening", "Seth MacFarlane", "James L. Brooks"],
      correctAnswer: "Matt Groening"
    },
    {
      question: "Wie heißt der Vater der Simpson-Familie?",
      answers: ["Barney", "Ned", "Homer"],
      correctAnswer: "Homer"
    },
    {
      question: "Welche Farbe hat das Auto der Simpsons?",
      answers: ["Blau", "Rot", "Pink"],
      correctAnswer: "Pink"
    },
    {
      question: "Wie heißt der Bürgermeister von Springfield?",
      answers: ["Joe Quimby", "Seymour Skinner", "Ned Flanders"],
      correctAnswer: "Joe Quimby"
    },
    {
      question: "Was ist Homers Lieblingsbier?",
      answers: ["Budweiser", "Duff", "Coors"],
      correctAnswer: "Duff"
    },
    {
      question: "Wie viele Kinder haben Homer und Marge?",
      answers: ["2", "3", "4"],
      correctAnswer: "3"
    },
    {
      question: "Wie heißt der Nachbar der Simpsons?",
      answers: ["Barney Gumble", "Ned Flanders", "Moe Szyslak"],
      correctAnswer: "Ned Flanders"
    },
    {
      question: "Wie heißt die Schule, die Bart und Lisa besuchen?",
      answers: ["Springfield Elementary", "West Springfield Elementary", "South Springfield Elementary"],
      correctAnswer: "Springfield Elementary"
    },
    {
      question: "Wer ist der Schulleiter der Springfield Elementary School?",
      answers: ["Seymour Skinner", "Edna Krabappel", "Elizabeth Hoover"],
      correctAnswer: "Seymour Skinner"
    },
    {
      question: "Wie heißt der Psychiater der Simpsons Familie?",
      answers: ["Dr. Hibbert", "Dr. Nick", "Dr. Marvin Monroe"],
      correctAnswer: "Dr. Marvin Monroe"
    },
    // Füge hier weitere Fragen hinzu, bis du 20 erreicht hast
  ];
  

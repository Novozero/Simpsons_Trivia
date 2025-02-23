// Select elements from the DOM
// Elemente aus dem DOM auswählen
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffleQuestions, currentQuestionIndex;
let points = 0;

// Event listeners for start and next buttons
// Event-Listener für Start- und Weiter-Buttons
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Function to start the game
// Funktion zum Starten des Spiels
function startGame() {
    startButton.classList.add('hide'); // Hide start button / Start-Button ausblenden
    shuffleQuestions = simpsonsTrivia.sort(() => Math.random() - 0.5); // Shuffle questions / Fragen mischen
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

// Function to display a question
// Funktion zum Anzeigen einer Frage
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.dataset.correct = answer === question.correctAnswer;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Function to set the next question
// Funktion, um die nächste Frage anzuzeigen
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

// Function to handle answer selection
// Funktion zur Verarbeitung der Antwortauswahl
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    
    if (correct) {
        alert('Richtig!');
        points += 10;
        nextButton.classList.remove('hide');
        answerButtonsElement.classList.add('hide');
        questionElement.innerText = 'Sehr gut! Weiter zur nächsten Frage!';
    } else {
        alert('Falsch');
        points -= 10;
    }
    
    if (points <= 0) {
        points = 0;
    }
    
    if (currentQuestionIndex >= simpsonsTrivia.length - 1) {
        alert(`Alle Fragen beantwortet! Du hast ${points} / 200 Punkte!`);
        nextButton.classList.add('hide');
        answerButtonsElement.classList.add('hide');
        questionContainerElement.classList.add('hide');
    }
    
    document.getElementById('points').innerText = points;
}

// Function to reset the answer area
// Funktion zum Zurücksetzen des Antwortbereichs
function resetState() {
    nextButton.classList.add('hide');
    answerButtonsElement.classList.remove('hide');
    
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Questions for the Simpsons trivia game
// Fragen für das Simpsons-Quiz
const simpsonsTrivia = [
    {
        question: 'Wer ist der Erfinder von \"Die Simpsons\"?',
        answers: ['Matt Groening', 'Seth MacFarlane', 'James L. Brooks'],
        correctAnswer: 'Matt Groening'
    },
    {
        question: 'Wie heißt der Vater der Simpson-Familie?',
        answers: ['Barney', 'Ned', 'Homer'],
        correctAnswer: 'Homer'
    },
    {
        question: 'Welche Farbe hat das Auto der Simpsons?',
        answers: ['Blau', 'Rot', 'Pink'],
        correctAnswer: 'Pink'
    },
    {
        question: 'Wie heißt der Bürgermeister von Springfield?',
        answers: ['Joe Quimby', 'Seymour Skinner', 'Ned Flanders'],
        correctAnswer: 'Joe Quimby'
    },
    {
        question: 'Was ist Homers Lieblingsbier?',
        answers: ['Budweiser', 'Duff', 'Coors'],
        correctAnswer: 'Duff'
    },
    {
        question: 'Wie viele Kinder haben Homer und Marge?',
        answers: ['2', '3', '4'],
        correctAnswer: '3'
    },
    {
        question: 'Wie heißt der Nachbar der Simpsons?',
        answers: ['Barney Gumble', 'Ned Flanders', 'Moe Szyslak'],
        correctAnswer: 'Ned Flanders'
    },
    {
        question: 'Wie heißt die Schule, die Bart und Lisa besuchen?',
        answers: ['Springfield Elementary', 'West Springfield Elementary', 'South Springfield Elementary'],
        correctAnswer: 'Springfield Elementary'
    },
    {
        question: 'Wer ist der Schulleiter der Springfield Elementary School?',
        answers: ['Seymour Skinner', 'Edna Krabappel', 'Elizabeth Hoover'],
        correctAnswer: 'Seymour Skinner'
    },
    {
        question: 'Wie heißt der Psychiater der Simpsons Familie?',
        answers: ['Dr. Hibbert', 'Dr. Nick', 'Dr. Marvin Monroe'],
        correctAnswer: 'Dr. Marvin Monroe'
    }
];

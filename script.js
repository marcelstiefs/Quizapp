let questions = [
    {
        "question": "Das flächenmäßig kleinste Bundesland heißt?",
        "answer_1": "Berlin",
        "answer_2": "Bremen",
        "answer_3": "Saarland",
        "answer_4": "Hamburg",
        "right_answer": 2
    },
    {
        "question": "Was ist die “Goldene Himbeere”?",
        "answer_1": "Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres",
        "answer_2": "Eine Nachspeise aus Russland",
        "answer_3": "Das teuerste Schmuckstück der Welt",
        "answer_4": "Das Symbol einer Sekte",
        "right_answer": 1
    },
    {
        "question": "Welcher Pilz ist einer der giftigsten der Welt?",
        "answer_1": "Der Fliegenpilz",
        "answer_2": "Der Grüne Knollenblätterpilz",
        "answer_3": "Der Gemeine Kartoffelbovist",
        "answer_4": "Der Satansröhrling",
        "right_answer": 2
    },
    {
        "question": "Welche Insel gehört nicht zu den balearischen Inseln?",
        "answer_1": "Ibiza",
        "answer_2": "Formentera",
        "answer_3": "Cabrera",
        "answer_4": "Gran Canaria",
        "right_answer": 4
    },
    {
        "question": "Wo herrscht kein Linksverkehr?",
        "answer_1": "Irland",
        "answer_2": "Indien",
        "answer_3": "Island",
        "answer_4": "Großbritannien",
        "right_answer": 3
    },
    {
        "question": "Die Zeichentrick-Familie Simpsons lebt in welcher Stadt?",
        "answer_1": "New York",
        "answer_2": "Springfield",
        "answer_3": "Chicago",
        "answer_4": "Minnesota",
        "right_answer": 2
    },



];
let currentQuestion = 0

let rightQuestions = 0

let successSound = new Audio("./sounds/success.mp3")
let failSound = new Audio("./sounds/fail.mp3")

function init() {

    document.getElementById('allQuestion').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();

    } else {
        updateToNextQuestion();
        updateProgressbar();



    }
}
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if ((selectedQuestionNumber == question['right_answer'])) {
        document.getElementById(selection).classList.add('btn-outline-success');
        rightQuestions++;
        successSound.play();
    } else {
        document.getElementById(selection).classList.add('btn-outline-danger');
        document.getElementById(idOfRightAnswer).classList.add('btn-outline-success');
        failSound.play();
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('next-btn').disabled = true;
    resetButtons();
}

function resetButtons() {
    document.getElementById('answer_1').classList.remove('btn-outline-danger');
    document.getElementById('answer_1').classList.remove('btn-outline-success');

    document.getElementById('answer_2').classList.remove('btn-outline-danger');
    document.getElementById('answer_2').classList.remove('btn-outline-success');

    document.getElementById('answer_3').classList.remove('btn-outline-danger');
    document.getElementById('answer_3').classList.remove('btn-outline-success');

    document.getElementById('answer_4').classList.remove('btn-outline-danger');
    document.getElementById('answer_4').classList.remove('btn-outline-success');
}

function restartGame() {
    currentQuestion = 0
    rightQuestions = 0
    document.getElementById('endScreen').style = 'display: none;'
    document.getElementById('mainContainer').style = '';

    init()
}

function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('mainContainer').style = 'display: none;'
    document.getElementById('endAllQuestion').innerHTML = questions.length;
    document.getElementById('rightAnswers').innerHTML = rightQuestions
}

function updateToNextQuestion() {

    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']
    document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;

}

function updateProgressbar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').style = `width:${percent}%`;
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

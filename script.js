//Quiz
//builds the quiz
function buildQuiz(){
    var output = [];
        questions.forEach((question, questionNumber) => {
            const answers = [];
            for(letter in question.choices){
                answers.push(
                    `
                        <div class="choice-div" id="${questionNumber + letter}div">
                            <label class="quiz-choice">
                            <input type="radio" name="question${questionNumber}" value="${letter}" id="${questionNumber + letter}">
                            ${question.choices[letter]}
                            </label>
                        </div>
                        
                    `
                )
                
            }
            output.push(
                `
                <div class="slide">
                    <div class="question">
                        ${question.question}
                        <span class="question-index">QUESTION ${questionNumber + 1} OF ${questions.length}<span>
                    </div>
                    <div class="answers">
                        ${answers.join('')}
                    </div>
                </div>
                `
            )
            
        });
    quizContainer.innerHTML = output.join('');
}

// function checked(){
//     if(document.querySelectorAll('input').checked = true){
//         this.classList.add('selected-choice');
//     }
//     else{
//         this.classList.removed('selected-choice');
//     }
// }

//shows results
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    
    questions.forEach(
        (question, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name="question${questionNumber}"]:checked`;
        const userAnswer = (answerContainer.querySelector(selector)||{}).value;

        if (userAnswer == question.answer) {
            numCorrect++;
        }
        console.log("user:" + userAnswer + "answer: " + question.answer);
    }
    )
    resultsContainer.innerHTML = `
    <span class="percentage">${Math.floor((numCorrect/questions.length)*100)}%</span>
    <span class="score">${numCorrect} OUT OF ${questions.length} correct answers</span>
    `;
}
//hides/shows slides
function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }

}

function progressAdd(){
    document.getElementById('quiz-progress-bar-inner').style.width = newWidth*100 +"%";
    console.log(newWidth);
}

//shows next slide
function showNextSlide(){
    showSlide(currentSlide + 1);
    newWidth = newWidth + startWidth;
}
//shows previous slides
function showPreviousSlide(){
    showSlide(currentSlide - 1);
}


//variables
console.log('script connected')
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit-button');


//sample question objects
const questions = [
{
    question: 'Which of the following is used to format the styling of a website?',
    choices: {
        a: 'CSS',
        b: 'HTML',
        c: 'JavaScript',
        d: 'React'
    },
    answer: 'a'
},
{
    question: 'Which one of the following array methods remove the first array element and adjusts the indices of the subsequent elements?',
    choices: {
        a: 'unshift()',
        b: 'push()',
        c: 'shift()',
        d: 'pop()'
    },
    answer: 'c'
},
{
    question: 'What is the difference between .length and .length()?',
    choices: {
        a: '.length is used for strings and .length() is used for arrays',
        b: '.length is used for objects and .length() is used for strings',
        c: '.length is used for arrays and .length() is used for strings',
        d: 'There is no difference.'
    },
    answer: 'c'
},
{
    question: 'If you wished to get a random whole number from 0 to 9, which method will you use?',
    choices: {
        a: 'Rand(0,9)',
        b: 'Math.random(Math.floor()*10)',
        c: 'Math.random(9)',
        d: 'Math.floor(Math.random()*10)'
    },
    answer: 'd'
},
{
    question: 'Which of the following letters is a RegEx modifier that returns all instances of the pattern regardless of capitalization?',
    choices: {
        a: 'g',
        b: 'i',
        c: 'v',
        d: 'h'
    },
    answer: 'b'
},
{
    question: 'Which database program is most commonly used with NodeJS?',
    choices: {
        a: 'MariaDB',
        b: 'Microsoft Access',
        c: 'MongoDB',
        d: 'MySQL'
    },
    answer: 'c'
},
{
    question: 'What will "This is a catastrophe".search("cat") return?',
    choices: {
        a: '-1',
        b: '10',
        c: 'Error',
        d: '4'
    },
    answer: 'b'
},
{
    question: 'What should the value of ? be in "1" ? 1 for the expression to be true?',
    choices: {
        a: '=',
        b: '==',
        c: '===',
        d: '===='
    },
    answer: 'b'
}
]

//invokes questions
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

var startWidth = ((currentSlide+1)/slides.length);
var newWidth = startWidth;

showSlide(currentSlide);
//checked();

progressAdd();
//event listeners
submitButton.addEventListener('click', showResults);
submitButton.addEventListener('click', function(){
    document.getElementById('submit-button').innerHTML = '<h3 class="disabled-button">Submitted</h3>';
});
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
nextButton.addEventListener('click', progressAdd);
//document.getElementById('quiz-progress-bar-inner').style.width = (;

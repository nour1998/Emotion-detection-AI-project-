const startButton =document.getElementById('start-btn');
const nextButton =document.getElementById('next-btn');


const questionContainerElement =document.getElementById('question-container')
const questionElement =document.getElementById('question')
const AnswerButtonElement =document.getElementById('Answer-buttons')


let shuffledquestion, currentQuestionIndex ;


startButton.addEventListener ('click',startGame)
nextButton.addEventListener ('click' , () => {

    currentQuestionIndex ++
    setnextQuestion()
})

function showQuestion (question) {
    questionElement.innerText =question.question;
    question.answers.forEach ((answer)=> {
        const button =document.createElement ('button')
        button.innerText =answer.text;
        button.classList.add('btn')
    })
}

function setnextQuestion (){
    resetState();
    showQuestion(shuffledquestion [currentQuestionIndex])
}

function resetState() {

                clearStatusClass (document.body)
                nextButton.classList.add('hide')
                while (AnswerButtonElement.firstChild) {
                    AnswerButtonElement.removeChild(AnswerButtonElement.firstChild)
                }
    
}


const questions =[


    {
        question :'Tell us about you.'
    },

    {
        question :'Why did you choose us?'
    },


    {
        question :'What are youre weaknesses .'
    },


]





//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
{
question:"ESInternational offers riders:",
answers:{
    a:"One-to-one coaching online or in person",
    b:"Horse behaviour assessment",
    c:"Online workshops and courses",
    d:"All of the above"
},
correctAnswer:"d"
},
{
question:"ESInternational offers organisations:",
answers:{
    a:"Strategy and policy development",
    b:"Education materials for coaches and riders",
    c:"Presentations to members and/or management",
    d:"Member engagement",
    e:"All of the above"
},
correctAnswer:"e"
}
];


function buildQuiz(){
    const output = []
    for(i=0;i<quizQuestions.length;i++){
const answers = []
for(letter in quizQuestions[i].answers){
    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );

    output.push(
    '<div class="question">' + quizQuestions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    );
}
     // combine our output list into one string of HTML and put it on the page
     quizContainer.innerHTML = output.join('');
    }  
}  

function showResults(){
// gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
    var numCorrect = 0;

// for each question...
for(i=0; i<quizQuestions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  
  // if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
            
    // color the answers green
    answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
      else{
      // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

      if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
}
if (numCorrect === 1) { 
    resultsContainer.innerHTML = "That was okay! You got a score of 50%. Have another go to see if you can improve on that.";
}
if (numCorrect === 2) { 
    resultsContainer.innerHTML = "Congratulations! You got a perfect score. You know ESInternational very well!";
    }
}

//load quiz
   buildQuiz();

    submitButton.onclick = function() {
        showResults();
}
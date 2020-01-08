let isPlaying;
let score=0;
let Time;
let x;
function actionOnSubmit()
{
 
    var x = document.getElementById("level").value;
    document.getElementById("demo").innerHTML = "The level you have selected has time limit: " + x + "seconds";

     Time=x;

showWord(words);

setInterval(countdown,1000);

setInterval(checkStatus,1000);

wordOutput.addEventListener('input',startMatch); 
}

const wordInput = document.querySelector('#currentWord');
const wordOutput = document.querySelector('#writtenWord');
const message =  document.querySelector('#message');
const times = document.querySelector('#Time');
const scores = document.querySelector('#score');
const seconds = document.querySelector('seconds');

const words= [
'hello',
'bye',
'good',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'excellent', 
'amazing',
'javascript',
'discrimination',
'potential',
'abundance',
'scintillating'
];

function showWord(words)
{

    const index=Math.floor(Math.random() * words.length);
    wordInput.innerHTML =words[index];
    
}

function countdown()
{

    if (Time>0)
    Time--;
    else if(Time === 0)
    {
        isPlaying=false;
        score=-1;
    }
    times.innerHTML = Time;
}

function checkStatus()
{
    if(!isPlaying && Time===0)
    message.innerHTML = "Game Over!!";
}

function startMatch()
{
    if(matchWords())
    {
    Time=document.getElementById("level").value;
    wordOutput.value="";
    showWord(words);
    score=score+1;

    
    }
    if(score===-1)
    scores.innerHTML = 0;
    else
    scores.innerHTML = score;
}


function matchWords()
{
    if(wordInput.innerHTML === wordOutput.value) 
    {
    message.innerHTML = "Correct";
    return true;
    }
    else
    {
    message.innerHTML = "Incorrect";
    return false;
    }
}


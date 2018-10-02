var nameArray =[ 
    {
        name:"EEVEE",
        image:""
    }, 
    {
        name:"VAPOREON",
        image:""
    },
    { 
        name:"JOLTEON",
        image:""
    },
    { 
        name:"FLAREON",
        image:""
    },
    {
        name:"ESPEON",
        image:""
    },
    {
        name:"UMBREON",
        image:""
    },
    {
        name:"GLACEON",
        image:""
    },
    {
        name:"LEAFEON",
        image:""
    }, 
    {
        name:"SYLVEON",
        image:""
    },
];

var win=0;
var lose=0;
var guessName = [];
var guessLeft = 0;
var totalGuess = 9;
var compChoice;
var userGuess = [];
var gameEND = false;

document.onkeyup = function(event){
    if (gameEND){
        startGame();
        gameEND = false;
    }
    else{
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            keySound.play();
            checkGuess(event.key.toUpperCase());
            refreshScreen();
            checkWin();
            checkLoss();
        }
    }
}

function startGame(){
    guessLeft = totalGuess;

    compChoice = Math.floor(Math.random() * (nameArray.length));

    userGuess = [];
    guessName= [];

    var pokeName = nameArray[compChoice].name;
    var pokePic = nameArray[compChoice].image;

    for(i=0; i<pokeName.length(); i++){
        guessName.push("_");
    }

    refreshScreen();
}

function refreshScreen(){
    
}

function checkGuess(letter){
    if (guessLeft > 0){
        updateInput(letter);
        compareWord(letter);
    }
}

function updateInput(letter){
    if (guessLeft > 0) {
        if (userGuess.indexOf(letter) === -1) {
            userGuess.push(letter);
            compareWord(letter);
        }
    }
}

function compareWord(letter){
    var position = [];

    for (i=0; i<pokeName.length();i++){
        if(pokeName[i]===letter){
            position.push(i);
        }
    }

    if (position.length() = 0){
        guessLeft--;
    }
    else{
        for (i=0;i<position.length();i++){
            guessName[position[i]]= letter;
        }
    }
}
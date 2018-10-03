var nameArray =[ 
    {
        name:"MUSHROOM",
        image:"assets/Pictures/mushroom.jpeg"
    }, 
    {
        name:"MUSHMOM",
        image:"assets/Pictures/mushroom.jpeg"
    },
    { 
        name:"MUSHDAD",
        image:"assets/Pictures/mushroom.jpeg"
    },
    { 
        name:"BALROG",
        image:"assets/Pictures/mushroom.jpeg"
    },
    {
        name:"GREEN MUSHROOM",
        image:"assets/Pictures/mushroom.jpeg"
    },
    {
        name:"HORNY MUSHROOM",
        image:"assets/Pictures/mushroom.jpeg"
    },
    {
        name:"PIG",
        image:"assets/Pictures/mushroom.jpeg"
    },
    {
        name:"RIBBON PIG",
        image:"assets/Pictures/mushroom.jpeg"
    }, 
    {
        name:"MANO",
        image:"assets/Pictures/mushroom.jpeg"
    },
];

var win=0;
var lose=0;
var guessName = [];
var guessLeft=9;
var compChoice;
var userGuess = [];
var gameEND = false;
var keySound = new Audio('./assets/mvm_money_pickup.wav');
var monsterName = [];
var monsterPicture;
var bgm;

function startGame(){
    guessLeft = 9;
   
    compChoice = Math.floor(Math.random() * (nameArray.length));

    userGuess = [];
    guessName= [];

    monsterName = nameArray[compChoice].name;
    monsterPicture = nameArray[compChoice].image;

    /*document.getElementById("monPic").src = "assets/Pictures/"+compChoice+".jpeg";*/

    for(i=0; i<monsterName.length; i++){
        if(monsterName[i]==" "){
            guessName.push(" ");
        }
        else{
            guessName.push("_");
        }
    }
    
    refreshScreen();

}

function refreshScreen(){
    document.getElementById("chanceLeft").innerText= guessLeft;
    document.getElementById("winCount").innerText= win;
    document.getElementById("loseCount").innerText= lose;
    /*document.getElementById("alreadyGuessed").innerText = userGuess;*/
    console.log(monsterPicture);
    document.getElementById("monPic").src = monsterPicture;
   

    var nameWord = "";
    for (var i = 0; i < guessName.length; i++) {
        nameWord += guessName[i];
    }
    document.getElementById("currentWord").innerText= nameWord;
}

function getGuess(letter){
    if (guessLeft > 0){
        checkInput(letter); 
    }
}

function checkInput(letter){
    if (guessLeft > 0) {
        if (userGuess.indexOf(letter) === -1) {
            userGuess.push(letter);
            compareWord(letter);
        }
    }
}

function compareWord(letter){
    var position = [];
    
    for (i=0; i<monsterName.length;i++){
        if(monsterName[i]===letter){
            position.push(i);
        }
    }

    if (position.length <= 0){
        guessLeft--;
    }
    else{
        for (i=0;i<position.length;i++){
            guessName[position[i]]= letter;
        }
    }
}

function checkWin(){
    if (guessName.indexOf("_") === -1){
        win++;
        gameEND=true;
        
    }
}

function checkLoss(){  
    if (guessLeft<=0){
        lose++;
        gameEND=true;
       
    }
}

document.onkeydown = function(event){
    if (gameEND){
        startGame();
        gameEND = false;
        
    }
    else{
        if((event.keyCode >= 65 && event.keyCode <= 90)/*^(event.keyCode==32)*/) {
            keySound.play();
            getGuess(event.key.toUpperCase());
            refreshScreen();
            checkWin();
            checkLoss();
        }
    }
}
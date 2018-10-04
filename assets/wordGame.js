var nameArray =[ 
    {
        name:"ORANGE MUSHROOM",
        image:"assets/Pictures/orange_mushroom.png"
    }, 
    {
        name:"MUSHMOM",
        image:"assets/Pictures/mushmom.jpeg"
    },
    { 
        name:"BLUE MUSHDAD",
        image:"assets/Pictures/blue_mushdad.png"
    },
    { 
        name:"CRIMSON BALROG",
        image:"assets/Pictures/crimson_balrog.png"
    },
    {
        name:"GREEN MUSHROOM",
        image:"assets/Pictures/green_mushroom.png"
    },
    {
        name:"HORNY MUSHROOM",
        image:"assets/Pictures/horny_mushroom.png"
    },
    {
        name:"PIG",
        image:"assets/Pictures/pig.png"
    },
    {
        name:"RIBBON PIG",
        image:"assets/Pictures/ribbon_pig.png"
    }, 
    {
        name:"MANO",
        image:"assets/Pictures/mano.png"
    },
    {
        name:"SLIME",
        image:"assets/Pictures/slime.png"
    }
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
/*updates screen after every guess*/
function refreshScreen(){
    document.getElementById("chanceLeft").innerText= guessLeft;
    document.getElementById("winCount").innerText= win;
    document.getElementById("loseCount").innerText= lose;
    document.getElementById("alreadyGuessed").innerText = userGuess;
    document.getElementById("monPic").src = monsterPicture;
   

    var nameWord = "";
    for (var i = 0; i < guessName.length; i++) {
        nameWord += guessName[i];
    }
    document.getElementById("currentWord").innerText= nameWord;
}
/*checks if the user still have chances to continue the round*/
function getGuess(letter){
    if (guessLeft > 0){
        checkInput(letter); 
    }
}
/*Makes sure that the user does not make the same input multiple times*/
function checkInput(letter){
    if (guessLeft > 0) {
        if (userGuess.indexOf(letter) === -1) {
            userGuess.push(letter);
            compareWord(letter);
        }
    }
}
/*Takes user input and compares it to the word that the user is guessing*/
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
/*Increase Win Count*/
function checkWin(){
    if (guessName.indexOf("_") === -1){
        win++;
        gameEND=true;
        
    }
}
/*Increase Loss Count*/
function checkLoss(){  
    if (guessLeft<=0){
        lose++;
        gameEND=true;
       
    }
}
/*plays bgm */
function playBGM(){
    var bgm = new Audio('./assets/Ellinia.mp3');
    bgm.play();
}
/*plays bgm when page loads*/
window.onload = function() {
    var theBGM = new Audio('./assets/Ellinia.mp3');
    
    theBGM.play();
    theBGM.loop=true;
}
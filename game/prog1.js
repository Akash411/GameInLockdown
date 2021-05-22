function ageInDays() {
              document.getElementById('flex-box-result').innerHTML = "";
              var birthYear = prompt('What year were you born... Good friend?');
              var ageInDayss = (2021 - birthYear) * 365;
              var h1 = document.createElement('h1');
              var textAnswer = document.createTextNode('You are ' + ageInDayss + ' day old');
              h1.setAttribute('id','ageInDays');
              h1.appendChild(textAnswer);
              document.getElementById('flex-box-result').appendChild(h1);
              
}
function reset() {
    document.getElementById('ageInDays').remove();

}          
function generateCat() {
              var image = document.createElement('img');
              image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
              var div = document.getElementById('flex-cat-gen');
              div.appendChild(image);
     }

//Rock, paper, Scissors;
function rpsGame(yourChoice){
    
    var botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    
    var humanChoice = yourChoice.id;
    var result = decideWinner(humanChoice, botChoice);
    console.log(result);
    
    var message = finalMessage(result);
    console.log(message);
    
    rpsFrontend(yourChoice.id, botChoice, message);    
    
}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'rock': 0.5, 'scissors': 1, 'paper': 0},
        'paper': {'rock': 1, 'scissors': 0, 'paper': 0.5},
        'scissors': {'rock': 0, 'scissors': 0.5, 'paper': 1},
    }
    var humanChoice = rpsDatabase[yourChoice][computerChoice];
    var computerChoice = rpsDatabase[computerChoice][yourChoice];
    
    return [humanChoice,computerChoice];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'you lost!', 'color': 'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'you tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'you Won!', 'color': 'green'};
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src= '"+ imageDatabase[humanImageChoice] +"' height=150px style='box-shadow:0 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style='color:v"+ finalMessage['color'] +"; font-size: 60px; padding:30px;'>"+finalMessage['message']+"</h1>" 
    botDiv.innerHTML = "<img src='"+ imageDatabase[botImageChoice] +"' height=150px style='box-shadow:0 10px 50px rgba(243,38,24,1);'>";
    
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
        
    
}

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(yourChoice){
    if(yourChoice.value === 'red'){
        buttonRed();
    }else if(yourChoice.value === 'green'){
        buttonGreen();
    }else if(yourChoice.value === 'random'){
        funcRandom();
    }else{
        reset();
    }
}

function buttonRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }   
}
function funcRandom(){    
    for(let i = 0; i < all_buttons.length; i++){
        var value = ['btn-danger', 'btn-primary','btn-warning', 'btn-success'][Math.floor(Math.random() * 3)];
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(value);
    }
}
function reset(){
    for(let i = 0; i < copyAllButtons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}









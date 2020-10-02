
var buttonColors = ["red", "blue", "green","yellow"];


var gamePattern = [];


var userClickedPattern = [];


var started = false;


var level = 0;

let lang = localStorage.getItem('lang')


// if(lang == null){
// 	console.log(english.play)
// }else{
// 	console.log(lang)
// }

console.log(lang);




$(document).keypress(function(){

    if(!started){

    $("#level-title").text("Level " + level);

    nextSequence();

    started = true;
    
    console.log(gamePattern);

    }
});

document.getElementById('start-btn').addEventListener('click', () =>{
    if(!started){

        $("#level-title").text("Level " + level);
    
        nextSequence();
    
        started = true;
        
        console.log(gamePattern);

        if(lang == 'english'){

            $("#start-btn").html('STARTED')
        }else if(lang == 'uzbek'){

            $("#start-btn").html('BOSHLANDI')

        }else if(lang == 'russian'){

            $("#start-btn").html('Nachali')

        }

        
    
        }




        localStorage.setItem('lang', mode)


})


$(".btn").click( function (event) {
  
    var userChosenColor = event.toElement.id;  // This code came from my efforts (I proudly didn't use Angela's code ha ha ha)

   // var userChosenColour = $(this).attr("id"); // This is her code " ~ pufffffffffff" - soo complicated
  
   userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePpess(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
    
});


function checkAnswer(currentLevel){
  
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        
        if(gamePattern.length === userClickedPattern.length){

            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
       

    }else{

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        
        $("#level-title").text("Game Over, Press Any Key to Restart");
        

        startOver();
    }
}




function startOver () {

    level = 0;

    gamePattern = [];
     
    started = false;
}



function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}


function playSound(name){
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePpess(currentColor){
    $("." + currentColor).addClass("pressed");

    setTimeout (function(){
    $("." + currentColor).removeClass("pressed");   
    }, 100);
}





var randomNumber = Math.floor(Math.random()*100)+1;
var attempts = 0;

document.getElementById("guessBtn").addEventListener("click",function(){
    var guess =parseInt(document.getElementById("guessInput").value);
    attempts++;
    if(guess === randomNumber){
        displayMessage("Congratulations! you guessed the number in" +attempts +"attempts.");
        document.getElementById("guessBtn").disable=true;
    }else if(guess <randomNumber){
        displayMessage("Too Low! Try a higher number.");
    }else{
        displayMessage("Too high! Try a lower number");
    }
});

function displayMessage(message){
    document.getElementById("message").textContent =message;
}
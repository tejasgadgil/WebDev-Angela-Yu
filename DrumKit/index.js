// document.addEventListener("keydown", function(event){
//     playAudio(event.key);
//     buttonAnimation(event.key);
    
// });

$(document).keydown(function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
});


// for (var i=0; i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         playAudio(this.innerHTML);
//         buttonAnimation(this.innerHTML);
        
//     });
    
// }

// $(".drum").click(function(){
//     playAudio(this.innerHTML);
//     buttonAnimation(this.innerHTML);
    
// });

$(".drum").on("mouseover", function(){
    playAudio(this.innerHTML);
    buttonAnimation(this.innerHTML);
    
} )

function playAudio(key){
    switch (key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                break;
            default:
                break;   
    }
    audio.play();
}

// function buttonAnimation(key){
//     document.querySelector("."+key).classList.add("pressed");
    
//     setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");}, 250);

// }

function buttonAnimation(key){
    $("."+key).addClass("pressed");
    
    setTimeout(function(){
        $("."+key).removeClass("pressed");
    }, 250);

}


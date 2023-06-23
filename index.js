var noOfDrums=document.querySelectorAll(".drum").length;



for(var i=0;i<noOfDrums;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var letter=this.innerHTML;

    bangbang(letter);
    buttonAnimation(letter);

    });
}




function bangbang(key){

    

    switch (key) {
        case "w":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            
            break;

        case "a":
            var audio=new Audio('../sounds/tom-2.mp3');
            audio.play();
            
            break;    

        case "s":
            var audio=new Audio('./drum-kit/sounds/tom-3.mp3');
            audio.play();
            
            break;

        
        case "d":
            var audio=new Audio('drum-kit/sounds/tom-4.mp3');
            audio.play();
            
            break;

        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
             
            break;
        
        case "k":

        var audio=new Audio('./drum-kit/sounds/crash.mp3');
        audio.play();

           break;

        case "l":
            var audio=new Audio('./drum-kit/sounds/kick-bass.mp3');
            audio.play();

          break;

    
        default:
            console.log("some error brooo");
            break;
    }


}

document.addEventListener("keypress",function (event){

    bangbang(event.key);
    buttonAnimation(event.key);

});


function buttonAnimation(key){

    var activeButton=document.querySelector("."+key);

    activeButton.classList.add("pressed");

   setTimeout(function(){

    activeButton.classList.remove("pressed");
   },100);


}

    // Dice 1 Random
    var random1 = Math.floor((Math.random()*10)+1);
    var randomPath1 = "images/dice"+random1+".png";
    var image1 = document.querySelectorAll("img")[0].setAttribute ("src",randomPath1);
    
    // Dice 2 Random 
    var random2 = Math.floor((Math.random()*10)+1);
    var randomPath2 = "images/dice"+random2+".png";
    var image2 = document.querySelectorAll("img")[1].setAttribute ("src",randomPath2);
   
    if (random1 > random2 ){ 
        document.querySelector("h1").textContent = "Player 1 Win 🏆";
    } 
    else if(random1 < random2){
        
        document.querySelector("h1").textContent = "Player 2 Win 🏆";
    }
     else {
        document.querySelector("h1").textContent = "Draw!";
    }
   
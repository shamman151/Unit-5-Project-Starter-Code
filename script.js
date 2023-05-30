let button= document.querySelector(".result-button");
let message= document.querySelector(".message");


button.onclick = function(){
  let answer1= document.querySelector(".answer1").value;
  let answer2= document.querySelector(".answer2").value;
  
  if(answer1 <= 2 && answer2 === "love"){
    message.innerHTML = "Hufflepuff";
  } else if (answer1 > 2 && answer2 === "love"){
    message.innerHTML = "Ravenclaw";
  } else if (answer1 <= 2 && answer2 === "explosive"){
    message.innerHTML = "slytherin"
  } else if (answer1 > 2 && answer2 === "explosive"){
    message.innerHTML = "Gryffindor"
  }
}



const max= prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;

let guess =prompt("guess the number");

while(true){
      if(guess=="quit"){
            console.log("user quit");
            break;
      }
      if(guess==random){
            console.log("you are right1 congrats!!");
            break;
      }
             else if(guess<random){
         guess=   prompt(" hint: your guess to small .please try again ");
      }
      else{
          guess=  prompt(" hint: your guess  was to large .please try  again ");
      }
}

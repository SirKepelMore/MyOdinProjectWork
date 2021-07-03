function RPS(){
  let i = 0; PWins = 0; CWins = 0,rounds = 0;  
  while( i < 5){
  let PGuess = "", CGuess = "";
  PGuess = playerGuess(PGuess); //Get play input
  CGuess = compGuess(CGuess); //Get computer input
  info = play(PGuess, CGuess,i,PWins,CWins,rounds); 
  i = info[0];
  PWins = info[1];
  CWins = info[2];
  rounds = info[3];
}
winner(PWins,CWins,rounds);//winner anouncment
}

function winner(PW,CW,R){ 
  if(PW > CW){
    alert(`You Win!
You beat the computer in ${R} rounds.
You: ${PW} to Computer: ${CW}!`);
  }
  else if(PW < CW){
    alert(`You lost!
The computer beat you in ${R} rounds.
Computer: ${CW} to You: ${PW}!`)
  }
  else{
    alert("Ummm, you broke the game somehow....")
  }

}

function play(P,C,i,PW,CW,R){
  
  if(P == C){
    alert("Tie play again");
    R++;
    return[i,PW,CW,R];
  }
  else if( P == 1 && C == 3){
    alert("Rock beats scissors You Win!");
    R++;
    i++;
    PW++;
    return[i,PW,CW,R];      
  }
  else if( P == 2 && C == 1){
    alert("Paper beats Rock You Win!");
    R++;
    i++;
    PW++;
    return[i,PW,CW,R];  
  }
  else if( P == 3 && C == 2){
    alert("Scissors beats Paper You Win!")
    R++;
    i++;
    PW++;
    return[i,PW,CW,R]; 
  }
  else if( C == 1 && P == 3){
    alert("Rock beats scissors You Lose!");
    R++;
    i++;
    CW++;
    return[i,PW,CW,R];  
  }
  else if( C == 2 && P == 1){
    alert("Paper beats Rock You Lose!");
    R++;
    i++;
    CW++;
    return[i,PW,CW,R];  
  }
  else if( C == 3 && P == 2){
    alert("Scissors beats Paper You Lose!")
    R++;
    i++;
    CW++;
    return[i,PW,CW,R]; 
  }
  
}

function playerGuess(a){
  let i = 0;
  while (i < 1){
    let player = prompt("Please enter Rock, Paper or Scissors");
    let rock = 'rock', paper = 'paper', scissors = 'scissors';
    
    if(player.toUpperCase() === rock.toUpperCase()){
      return a = 1;
      i++;
    }
    else if (player.toUpperCase() === paper.toUpperCase()){
      return a = 2;
      i++;
    }
    else if (player.toUpperCase() === scissors.toUpperCase()){
      return a = 3;
      i++;
    }
    else{
      alert("Please enter Rock, Paper or Scissors")
    }
  }

}

function compGuess(a){
  let randomNumber = Math.floor(Math.random()*3) + 1;
  return a = randomNumber;
}

RPS();

//Sir Kepel More 2021
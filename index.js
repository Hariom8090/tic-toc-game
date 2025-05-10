const boxs = document.querySelectorAll('.box');
const msgCantainer = document.querySelector('.cantainer');
const msg = document.querySelector('#msg');
const newGame = document.querySelector('#new-btn');
const Restart = document.querySelector('.Restart');
const turn = document.getElementById('turn');

const Arr = Array.from(boxs);

let turnO = true;
boxs.forEach( function(box){
  box.addEventListener('click',()=>{
    
    if(turnO)
    {
      box.innerText = 'X';
      turnO = false;
      turn.innerHTML = "turn of = O";
    }
    else{
      box.innerText = 'O';
      turnO = true;
      turn.innerHTML = "turn of = X";
    }
    box.disabled = true;

   checkWinner();
  })
});

const enableBoxe=()=>{
  for(let box of boxs){
    box.disabled = false;
    box.innerText = "";
  }
}

const restartGame=()=>{
  turnO = true;
  enableBoxe();
  msgCantainer.classList.add('hide');
  msg.innerText = "";
  turn.innerHTML = "start any turn";
}

const disabledBox =()=>{
  for(let box of boxs){
    box.disabled= true;
  }
 
}

const showWinner =()=>{
  msg.innerText ="congratulation,winner";
  msgCantainer.classList.remove('hide');
  disabledBox();
}

const checkWinner = ()=>{
  for(let i=1; i<9; i++){
    switch(i){
        case 1:
          if(Arr[0].innerText!="" &&Arr[1].innerText!="" &&Arr[2].innerText!=""){
                
            if(Arr[0].innerText===Arr[1].innerText && Arr[1].innerText === Arr[2].innerText){
              showWinner();
             
             }
          }
          break;
        case 2:
          if(Arr[3].innerText!="" &&Arr[4].innerText!="" && Arr[5].innerText!=""){
            if(Arr[3].innerText===Arr[4].innerText && Arr[4].innerText === Arr[5].innerText){
              showWinner();
             }
          }
          break;

          case 3:
            if(Arr[6].innerText!="" &&Arr[7].innerText!="" && Arr[8].innerText!=""){
              if(Arr[6].innerText===Arr[7].innerText && Arr[7].innerText === Arr[8].innerText){
                showWinner()
               }

            }
            break;

            case 4:
            if(Arr[0].innerText!="" &&Arr[3].innerText!="" && Arr[6].innerText!=""){
              if(Arr[0].innerText===Arr[3].innerText && Arr[3].innerText === Arr[6].innerText){
                showWinner()
                
               }

            }
            break;

            case 5:
            if(Arr[1].innerText!="" &&Arr[4].innerText!="" && Arr[7].innerText!=""){
              if(Arr[1].innerText===Arr[4].innerText && Arr[4].innerText === Arr[7].innerText){
                showWinner()
                
               }

            }
            break;

            case 6:
            if(Arr[2].innerText!="" &&Arr[5].innerText!="" && Arr[8].innerText!=""){
              if(Arr[2].innerText===Arr[5].innerText && Arr[5].innerText === Arr[8].innerText){
                showWinner()
                
               }

            }
            break;

            case 7:
            if(Arr[0].innerText!="" &&Arr[4].innerText!="" && Arr[8].innerText!=""){
              if(Arr[0].innerText===Arr[4].innerText && Arr[4].innerText === Arr[8].innerText){
                showWinner()
                
               }

            }
            break;
                
            case 8:
            if(Arr[2].innerText!="" &&Arr[4].innerText!="" && Arr[6].innerText!=""){
              if(Arr[2].innerText===Arr[4].innerText && Arr[4].innerText === Arr[6].innerText){
                showWinner()
               }
            }
            break;
      default :
    }
    
  }
}

newGame.addEventListener('click',restartGame);
Restart.addEventListener('click',restartGame);

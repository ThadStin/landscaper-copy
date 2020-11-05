
let money;
let tool;


const start = () => {
   money = 0;
   tool = 'teeth'
  askForAction();
}

// window.onload = () => {} --- don't need if js script is at bottom of page
//     otherwise, this would go around next lines
const startGame = document.getElementById('startGame');
startGame.onclick = () => start();
// const message = document.getElementById('textbox');
// message.innerHTML +=
// const win = () => {
//   if (money >= 1000 && tool === 'starving students') {
//     alert('YOU ARE THE GRASS KING!')
//   }
// }

const status = () => {
  document.getElementById('textbox').innerHTML += 'You have $' + money + ' and are mowing with ' + tool;
  // alert('You have $' + money + ' and are mowing with ' + tool);
}
/////////////This is all new/////////////
// const cutGrass = () => {
  document.getElementById('cut').addEventListener("click", function(){
    checkTool();
  });
  // cutGrass.onclick= ()=> checkTool(), status();
// }
//////////////////////////////////////////////

const askForAction = () => {
  status();
  // win();
  const choice = () =>{
  // prompt('What do you want to do?', 'restart / cut lawn / buy equipment')
    if (choice === 'cut lawn') {
      checkTool()
    } else if (choice === 'buy equipment') {
      listOptions();
    } else if (choice === 'restart') {
      start();
    }
}}

const checkTool = () => {
  if (tool === 'teeth') {
    money++;
    askForAction()
  } else if (tool === 'scissors') {
    money += 5;
    askForAction();
  } else if (tool === 'push mower') {
    money += 50;
    askForAction();
  } else if (tool === 'electric mower') {
    money += 100;
    askForAction();
  } else if (money >= 1000 && tool === 'starving students') {
    alert('YOU ARE THE GRASS KING!!')
  } else if (tool === 'starving students') {
    money += 250;
    askForAction();
  }
}


const listOptions = () => {
  if (money >= 5 && tool === 'teeth') {
  const choiceOne = prompt('would you like to buy Scissors for $5?', 'no / yes')
    if (choiceOne === 'yes') {
      money -= 5;
      tool = 'scissors';
      askForAction()
    }
} else if (money >= 25 && tool === 'scissors') {
    const choiceTwo = prompt('Would you like to buy a push mower for $25?', 'no / yes')
      if (choiceTwo === 'yes') {
  money -= 25;
  tool = 'push mower';
  askForAction();
  }
} else if (money >= 100 && tool === 'push mower') {
    const choiceThree = prompt('Would you like to buy an electric mower for $250?', 'no / yes')
      if (choiceThree === 'yes') {
        money -= 250;
        tool = 'electric mower';
        askForAction();
      }
} else if (money >= 500 && tool === 'electric mower') {
        const choiceFour = prompt('Would you like to buy starving students for $500 to cut grass for you?', 'no / yes')
        if (choiceFour === 'yes') {
          money -= 500;
          tool = 'starving students'
          askForAction()
        }
      }
}


// start();

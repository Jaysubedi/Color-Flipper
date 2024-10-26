let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let NewGame = document.querySelector('.btn-new');

let turnO = true;
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  count =0;
  enableBoxes();
  msgContainer.classList.add('hide');
};
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log('clicked');

    if (turnO) {
      box.textContent = 'O';
      turnO = false;
    } else {
      box.textContent = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
    count++;
    if (count === 9) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.textContent = `Game is a draw`;
  msgContainer.classList.remove('hide');
  disabledBoxes();
};
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = '';
  }
};

const ShowWinner = (winner) => {
  msg.textContent = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disabledBoxes();
};
const checkwinner = () => {
  for (let Pattern of winPatterns) {
    // console.log(
    //   boxes[Pattern[0]].innerHTML,
    //   boxes[Pattern[1]].innerHTML,
    //   boxes[Pattern[2]].innerHTML
    // );
    let pos1val = boxes[Pattern[0]].innerHTML;
    let pos2val = boxes[Pattern[1]].innerHTML;
    let pos3val = boxes[Pattern[2]].innerHTML;
    if (pos1val != '' && pos2val != '' && pos3val != '') {
      if (pos1val === pos2val && pos1val === pos2val && pos2val === pos3val) {
        console.log('winner', pos1val);
        ShowWinner(pos1val);
        return true;
      }
    }
  }
};

resetBtn.addEventListener('click', resetGame);
NewGame.addEventListener('click', resetGame);

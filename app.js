let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

const rstgame = () => {
  turn0 = true;
  enabledboxes();
  msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `congratulations!, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledboxes();
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        showWinner(posval1);
      }
    }
  }
};

newgamebtn.addEventListener("click", () => {
    rstgame();
});
rstbtn.addEventListener("click",() =>{
    rstgame();
})
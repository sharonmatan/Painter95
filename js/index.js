let flag = true;
let x = document.querySelector(".canvas");
let bucket = document.querySelector(".bucket");
let choosingColor = document.querySelectorAll(".choosingColor");
let currentColor = "black";
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

x.addEventListener("mousedown", () => {
  x.addEventListener("mousemove", RespondMousedown);
});

stop = () => {
  flag = false;
};

start = () => {
  flag = true;
};

$(".choosingColor").click(e => {
  currentColor = e.target.id;
  return currentColor;
});

$(".eraser").click(e => {
  currentColor = "white";
  return currentColor;
});

let sizeNum = 2;
RespondMousedown = e => {
  let px = "px";
  let size = sizeNum + px;
  let biger = () => {
    if (sizeNum > 20) {
      return;
    }
    sizeNum += 0.02;
  };
  let smaller = () => {
    if (sizeNum < 2) {
      return;
    }
    sizeNum -= 0.02;
  };
  plus.addEventListener("click", biger);
  minus.addEventListener("click", smaller);
  if (flag) {
    let box = document.createElement("div");
    let body = document.querySelector("body");
    body.appendChild(box);
    box.style.height = size;
    box.style.width = size;
    box.style.backgroundColor = currentColor;
    box.style.position = "absolute";
    box.style.top = event.pageY + px;
    box.style.left = event.pageX + px;
    box.style.borderRadius = "50%";

    bucket.addEventListener(
      "click",
      (clear = () => {
        box.remove();
      })
    );
  }
};

window.addEventListener("mouseup", stop);
window.addEventListener("mousedown", start);

!function() {
    let cssCode = `/*
*先来点代码做做准备吧,播放速度可以调整
*/ 
.action{
    visibility: visible;
    opacity:1
}
#code {
    padding: 30px;
    height: 100vh;
    font-family:Microsoft YaHei;
    font-weight: 400;
    font-size:16px;
    overflow: auto;
    background: #f1f1f1;
    box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.7);
  }
  /*
  *皮卡丘当然是黄色的啦~
  */
  .preview {
    background: #ffe600;
    width: 67%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .wrapper {
    width: 422px;
    height: 238px;
    position: relative;
  }
  /*
  *来画眼睛啦
  */
  .eye-left,
  .eye-right {
    width: 65px;
    height: 65px;
    border: 2px black solid;
    border-radius: 50%;
    background: #2e2e2e;
  }
  .eye-left {
    position: absolute;
    left: 61px;
  }
  .eye-right {
    position: absolute;
    right: 61px;
  }
  /*
  *眼珠子也不能少
  */
  .eye-left::after,
  .eye-right::after {
    content: "";
    position: absolute;
    background: white;
    border: 2px black solid;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: inline-block;
    top: 1px;
    left: 9px;
  }
  /*
  *接下来是鼻子
  */
  .nose {
    height: 0px;
    width: 0px;
    border: 16px black solid;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 34px;
  }
  /*
  *红红的腮红
  */
  .cheeek-left,
  .cheeek-right {
    height: 89px;
    width: 89px;
    border: 3px black solid;
    border-radius: 50%;
    background: #f00;
  }
  .cheeek-left {
    position: absolute;
    top: 111px;
  }
  .cheeek-right {
    position: absolute;
    top: 111px;
    right: 0;
  }
  /*
  *小胡子一样的嘴唇
  */
  .lip-left {
    width: 80px;
    height: 20px;
    border-bottom-left-radius: 60px 30px;
    border: 3px black solid;
    border-top: none;
    border-right: none;
    transform: rotate(-13deg);
    position: absolute;
    top: 67px;
    left: 131px;
    z-index: 1;
    background: #ffe600;
  }
  .lip-right {
    width: 80px;
    height: 20px;
    border-bottom-right-radius: 60px 30px;
    border: 3px black solid;
    border-top: none;
    border-left: none;
    transform: rotate(13deg);
    position: absolute;
    top: 67px;
    right: 131px;
    z-index: 1;
    background: #ffe600;
  }
  /*
  *张大嘴~啊~~~
  */
  .mouth {
    height: 344px;
    width: 150px;
    border: 3px black solid;
    background: #9b000a;
    border-bottom-right-radius: 90px 400px;
    border-bottom-left-radius: 90px 400px;
    position: absolute;
    left: 39px;
    top: -186px;
    overflow: hidden;
  }
  .mouth::after {
    content: "";
    height: 344px;
    width: 150px;
    background: #ff485f;
    border-top-right-radius: 100px 100px;
    border-top-left-radius: 100px 100px;
    position: absolute;
    top: 210px;
    left: -2px;
  }
  .mouth-wrapper {
    width: 228px;
    height: 161px;
    position: absolute;
    left: 97px;
    bottom: 0px;
    overflow: hidden;
  }
  /*
  *结束啦~一只皮卡丘画好啦
  */
  
`;
let yy = false;
let n = 0;
let animationTime = 50;
let $speedButtons = $(".action");
wirtCode(cssCode);

$speedButtons.on("click", "button", function(e) {
  $(e.currentTarget)
    .addClass("active")
    .siblings()
    .removeClass("active");
  let speed = $(e.currentTarget).attr("data-speed");
  switch (speed) {
    case "slow":
      animationTime = 100;
      break;
    case "middle":
      animationTime = 50;
      break;
    case "fast":
      animationTime = 10;
      break;
    case "skip":
      yy = true;
      break;
  }
});

function wirtCode(codeText) {
  let code = document.getElementById("code");
  setTimeout(function run() {
    code.innerHTML = Prism.highlight(
      codeText.slice(0, n),
      Prism.languages.css,
      "css"
    );
    pikachuStyle.innerHTML = codeText.slice(0, n);
    n += 1;
    if (n < codeText.length - 1) {
      code.scrollTop = code.scrollHeight;
    }
    if (yy) {
      n = codeText.length;
      setTimeout(run, animationTime);
    } else if (n < codeText.length) {
      setTimeout(run, animationTime);
    }
  }, animationTime);
}

}.call();

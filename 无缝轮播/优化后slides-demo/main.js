初始化()
let n;
setInterval(function() {  
  makeLeave(getImg(n))
      .one('transitionend',function(e){
        makeStay($(e.currentTarget))
      })
    makeEnter(getImg(n+1))
  n+=1
}, 1000);


















function x(n){
  if(n%5===0){
      y=5
  }else{
    y=n%5
  }
return y
}


function getImg(n){
  return $('.images>img:nth-child('+x(n)+')')
}


function makeEnter($node){
  return $node.removeClass('stay leave').addClass('enter')
}
function makeStay($node){
  return $node.removeClass('leave enter').addClass('stay')
}
function makeLeave($node){
  return $node.removeClass('enter stay').addClass('leave')
}


function 初始化(){
  n=1
  $('.images>img:nth-child(1)').addClass('enter')
  $('.images>img:nth-child(n+2)').addClass('stay')
}

$('.images>img:nth-child(1)').addClass('enter')
$('.images>img:nth-child(n+2)').addClass('stay')


var n=1;
var setTime = setInterval(function() {  
    $('.images>img:nth-child('+x(n)+')').removeClass('enter','stay').addClass('leave').one('transitionend',function(e){$(e.currentTarget).removeClass().addClass('stay')})
    $('.images>img:nth-child('+x(n+1)+')').removeClass('stay','leave').addClass('enter')
    console.log(x(n),x(n+1))
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




    



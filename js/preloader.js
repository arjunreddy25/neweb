function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
/*Center loader on half screen */
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
 })
      
  do{
    loader.animate({
      width: i
    },10)
    i+=3;
  } while(i <= 400)
  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
    })
  }
      
      /* This line hide loader and show content */
      setTimeout(function(){
        $('.content').fadeIn("fast");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },3500);
    });

}

loaderSpinner();

require( './impossiblefish.css' )

window.onload = function(){
 
 var canvas = $('canvas');
 var fishtank = $('#fishtank');

 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 function resize(){
  canvas.width=fishtank.clientWidth - 20;
  canvas.height=fishtank.clientHeight - 20;
 }

 window.addEventListener( 'resize', resize, false );
 window.addEventListener('orientationchange', resize, false );

 resize();

};


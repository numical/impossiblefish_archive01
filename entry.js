require( './impossiblefish.css' )

window.onload = function(){
 
 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 var canvas = $('canvas');
 var fishtank = $('#fishtank');
 canvas.width=fishtank.clientWidth;
 canvas.height=fishtank.clientHeight;


};


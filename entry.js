require( './impossiblefish.css' )

window.onload = function(){
 
 var canvas = $('canvas'), 
     fishtank = $('#fishtank'),
     cachedCanvasBorderWidth = -1;                       

 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 function canvasBorderWidth() {
  if ( cachedCanvasBorderWidth < 0 ) {
   var style = canvas.currentStyle || window.getComputedStyle( canvas );
   cachedCanvasBorderWidth = parseFloat( style.borderWidth.slice( 0, -2 ) ) ;                                 
  }
  return cachedCanvasBorderWidth;
 }

 function resize(){
  canvas.width=fishtank.clientWidth - canvasBorderWidth() * 4;
  canvas.height=fishtank.clientHeight - canvasBorderWidth() * 2;
  console.log( canvas.width + ", " + canvas.height );
 }


 window.addEventListener( 'resize', resize, false );
 window.addEventListener('orientationchange', resize, false );

 resize();

};


require( './impossiblefish.css' )

window.onload = function(){
 
 var canvas = $('canvas'), 
     fishtank = $('#fishtank'),
     canvasBorders = introspectBorders( canvas );             

 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 function introspectBorders( element ) {
  var style = window.getComputedStyle( element ), borders = {};
  borders.top = parseFloat( style.borderTopWidth.slice( 0, -2 ) );
  borders.bottom = parseFloat( style.borderBottomWidth.slice( 0, -2 ) );
  borders.left = parseFloat( style.borderLeftWidth.slice( 0, -2 ) );
  borders.right = parseFloat( style.borderRightWidth.slice( 0, -2 ) ) ;
  borders.horizontal = borders.left + borders.right;
  borders.vertical= borders.top + borders.bottom;
  return borders;
 }

 function resize(){
  canvas.width=fishtank.clientWidth - canvasBorders.horizontal * 2;
  canvas.height=fishtank.clientHeight - canvasBorders.vertical;
  console.log( canvas.width + ", " + canvas.height );
 }

 window.addEventListener( 'resize', resize, false );
 window.addEventListener('orientationchange', resize, false );

 resize();

};


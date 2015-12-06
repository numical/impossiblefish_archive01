require( './impossiblefish.css' )

window.onload = function(){
 
 var canvas = $('canvas'), 
     fishtank = $('#fishtank'),
     canvasBorders = introspectBorders( canvas );             

 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 function parsePixelProperty( property ) {
  return parseFloat( property.slice( 0, -2 ) );
 }

 // assumes borders defined as 'Npx'
 function introspectBorders( element ) {
  var style = window.getComputedStyle( element ), borders = {};
  borders.top = parsePixelProperty( style.borderTopWidth );
  borders.bottom = parsePixelProperty( style.borderBottomWidth );
  borders.left = parsePixelProperty( style.borderLeftWidth );
  borders.right = parsePixelProperty( style.borderRightWidth ) ;
  borders.horizontal = borders.left + borders.right;
  borders.vertical= borders.top + borders.bottom;
  return borders;
 }

 function resize(){
  if ( canvas.width >= fishtank.clientWidth ) {
   canvas.width = 0;
   canvas.height = 0;
  }
  canvas.width=fishtank.clientWidth - canvasBorders.horizontal * 2;
  canvas.height=fishtank.clientHeight - canvasBorders.vertical;
  // console.log( canvas.width + ", " + canvas.height );
 }

 window.addEventListener( 'resize', resize, false );
 window.addEventListener('orientationchange', resize, false );

 resize();

};


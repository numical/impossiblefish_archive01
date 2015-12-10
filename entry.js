require( './styles/impossiblefish.css' )

import * as autosizeBehaviour from './scripts/autosize.js';
import * as menu from './scripts/menu.js'

window.onload = function(){
 
 function $( selector, container ) {
  return ( container || document ).querySelector( selector );
 }

 let canvas = $('canvas'); 
 autosizeBehaviour.init( canvas );
 menu.init( canvas );
};


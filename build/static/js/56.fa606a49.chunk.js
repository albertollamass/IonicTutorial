(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[56],{159:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return v})),n.d(e,"keyboardDidClose",(function(){return b})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return g})),n.d(e,"resetKeyboardAssist",(function(){return a})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return c})),n.d(e,"startKeyboardAssist",(function(){return s})),n.d(e,"trackViewportChanges",(function(){return l}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,a=function(){r={},u={},d=!1},s=function(t){f(t),t.visualViewport&&(u=v(t.visualViewport),t.visualViewport.onresize=function(){l(t),p()||g(t)?c(t):b(t)&&h(t)})},f=function(t){t.addEventListener("keyboardDidShow",(function(e){return c(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},c=function(t,e){w(t,e),d=!0},h=function(t){y(t),d=!1},p=function(){var t=(r.height-u.height)*u.scale;return!d&&r.width===u.width&&t>150},g=function(t){return d&&!b(t)},b=function(t){return d&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(o)},y=function(t){var e=new CustomEvent(o);t.dispatchEvent(e)},l=function(t){r=Object.assign({},u),u=v(t.visualViewport)},v=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=56.fa606a49.chunk.js.map
!function(e){function t(t){for(var o,a,s=t[0],c=t[1],_=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,_||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={0:0},i=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/js/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var _=0;_<s.length;_++)t(s[_]);var l=c;i.push([1,1]),r()}([,function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(2);\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (window.$=window.jQuery=jquery__WEBPACK_IMPORTED_MODULE_0___default.a);__webpack_require__(3);(function($,window){$(document).ready(function(){$('.filter__header').on('click',function(){$('.filter').removeClass('_opened');$(this).toggleClass('_active');$(this).parent('.filter').toggleClass('_opened');});var calculateRecordPosition=function calculateRecordPosition(e){var target=$(e.target);var windowHeight=$(window).height();var $this=target.parent('.record-count');var item=$this.children('.record-count__options');var triangle=item.children('.triangle');var itemOffsetTop=$this.offset().top;var containerHeight=$this.outerHeight();var containerWidth=$this.outerWidth();var Y=$(item).offset().top;var X=$(item).offset().left;var itemHeight=item.outerHeight();var top=itemOffsetTop+containerHeight+12+'px';var left=X+$this.offset().left+containerWidth-$(item).outerWidth()+20;if(!$this.hasClass('_opened')){if(itemOffsetTop+itemHeight+Y>windowHeight){top=itemOffsetTop-itemHeight-containerHeight-$(window).scrollTop()+'px';triangle.css({top:'auto',bottom:-10+'px',transform:'rotate(180deg)'});}item.css({top:top,left:left});$this.addClass('_opened');}else{$this.removeClass('_opened');}};$('.record-count__value').click(function(e){return calculateRecordPosition(e);});$('.record-count__options').mouseleave(function(e){e.stopPropagation();var $this=$(this).parent('.record-count');var item=$(this);var children=$('.record-count__option');if($(e.target).closest($this)&&$(e.target).closest(children)){item.removeAttr('style');$this.removeClass('_opened');}});$('.record-count__option').on('click',function(e){e.stopPropagation();$('.record-count__option').removeClass('_selected');$(this).toggleClass('_selected');$('.record-count__options').removeAttr('style');$('.record-count').removeClass('_opened');$('.record-count__value').text($(this).attr('rel'));});$('.header__notifications').mouseover(function(){$(this).addClass('_opened');}).mouseout(function(){$(this).removeClass('_opened');});$('.header__profile').mouseover(function(){$(this).addClass('_opened');}).mouseout(function(){$(this).removeClass('_opened');});$('.setting-trigger .statistics__table--settings-link').on('click',function(e){e.preventDefault();$(this).parent().toggleClass('_opened');});$('.filter').mouseleave(function(){$(this).removeClass('_opened');});var input=$('input.input');input.focus(function(e){$(e.target).addClass('_focus');$(e.target).removeClass('_focusout');});input.keyup(function(e){var val=e.target.value;if(val.length){$(e.target).addClass('_valid');}else{$(e.target).removeClass('_valid');}});input.focusout(function(e){var val=e.target.value;if(val.length>0){$(e.target).addClass('_valid');}else{$(e.target).removeClass('_valid');}$(e.target).removeClass('_focus');$(e.target).addClass('_focusout');});$('.faq__item--toggler').on('click',function(){$(this).parents('.faq__item').toggleClass('_opened');$(this).parents('.faq__item').find('.faq__item--body').slideToggle(400);$(this).toggleClass('_active');});function filter(trigger,wrappers){$(document).on('click',trigger,function(e){e.preventDefault();$(wrappers).removeClass('_active');$(trigger).removeClass('_active');var href=$(e.target).data('href');$(e.target).addClass('_active');var containers=$(wrappers);for(var i=0;i<containers.length;i++){var target=containers[i];if($(target).data('target')===href){$(target).addClass('_active');}}});}filter('.streams__tab--link','.streams__content--inner');filter('.parking__tab--link','.parking__content--inner');filter('.profile__tab--link','.profile__content--inner');filter('.auth__tab--link','.auth__form-wrapper');var post_back_input=$('input[name=\"post_back\"]');var post_back_text=$('.popup__postback--text');post_back_input.change(function(){if($(this).is(':checked')){post_back_text.show();}else{post_back_text.hide();}});$('[data-action=\"archive\"]').on('click',function(){$.fancybox.open({src:'#archivePopup',touch:false});});$('[data-action=\"edit\"]').on('click',function(){$.fancybox.open({src:'#editStream',touch:false});});$('.profile__form .filter__body .filter__item').on('click',function(){var selected_text=$(this).find('label').text();var header_select=$(this).parents('.filter._opened').find('.filter__header');header_select.text(selected_text);$(this).parents('.filter').addClass('_selected');});if($('.profile__form .filter__header').text()){$('.profile__form .filter__header').parents('.filter').addClass('_selected');}var handlersFormExist=function handlersFormExist(e,selector){if(!$(e.target).closest(selector).length){$(selector).removeClass('_opened');}};$(document).on('click',function(e){return handlersFormExist(e,'.filter');});$(document).on('click',function(e){return handlersFormExist(e,'.settings-item');});$(document).on('click',function(e){return handlersFormExist(e,'.record-count');});$('.show-pass').on('click',function(){var input=$(this).parent('.fieldset').find('input');if(input.attr('type')==='password'){input.attr('type','text');$(this).addClass('_showed');}else{input.attr('type','password');$(this).removeClass('_showed');}});$('.helper').mouseover(function(){var text=$(this).data('text');var top=$(this).offset().top+10+'px';var left=$(this).offset().left+10+'px';$(this).append(\"<div class=\\\"helper-text\\\">\\n                        \".concat(text,\"\\n                    </div>\"));$('.helper-text').css({top:top,left:left});}).mouseout(function(){$('.helper-text').remove();});$(window).resize(function(){$('.record-count__options').removeAttr('style');$('.record-count').removeClass('_opened');$('.helper-text').remove();});});})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a,window);\n\n//# sourceURL=webpack:///./src/js/app.js?")}]);
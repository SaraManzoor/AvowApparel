/* Modernizr 2.6.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.6.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var C in o)w(o,C)&&(t=C.toLowerCase(),e[t]=o[C](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});;
(function(b){b.fn.findFirstImage=function(){return this.first().find("img").andSelf().filter("img").first()};var a={defaults:{animation:"horizontal-push",animationSpeed:600,timer:true,advanceSpeed:4000,pauseOnHover:false,startClockOnMouseOut:false,startClockOnMouseOutAfter:1000,directionalNav:true,directionalNavRightText:"Right",directionalNavLeftText:"Left",captions:true,captionAnimation:"fade",captionAnimationSpeed:600,resetTimerOnClick:false,bullets:false,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:b.noop,afterLoadComplete:b.noop,fluid:true,centerBullets:true},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav"><span class="right"></span><span class="left"></span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',init:function(f,e){var c,g=0,d=this;this.clickTimer=b.proxy(this.clickTimer,this);this.addBullet=b.proxy(this.addBullet,this);this.resetAndUnlock=b.proxy(this.resetAndUnlock,this);this.stopClock=b.proxy(this.stopClock,this);this.startTimerAfterMouseLeave=b.proxy(this.startTimerAfterMouseLeave,this);this.clearClockMouseLeaveTimer=b.proxy(this.clearClockMouseLeaveTimer,this);this.rotateTimer=b.proxy(this.rotateTimer,this);this.options=b.extend({},this.defaults,e);if(this.options.timer==="false"){this.options.timer=false}if(this.options.captions==="false"){this.options.captions=false}if(this.options.directionalNav==="false"){this.options.directionalNav=false}this.$element=b(f);this.$wrapper=this.$element.wrap(this.wrapperHTML).parent();this.$slides=this.$element.children("img, a, div");this.$element.bind("orbit.next",function(){d.shift("next")});this.$element.bind("orbit.prev",function(){d.shift("prev")});this.$element.bind("orbit.goto",function(i,h){d.shift(h)});this.$element.bind("orbit.start",function(i,h){d.startClock()});this.$element.bind("orbit.stop",function(i,h){d.stopClock()});c=this.$slides.filter("img");if(c.length===0){this.loaded()}else{c.bind("imageready",function(){g+=1;if(g===c.length){d.loaded()}})}},loaded:function(){this.$element.addClass("orbit").css({width:"1px",height:"1px"});this.$slides.addClass("orbit-slide");this.setDimentionsFromLargestSlide();this.updateOptionsIfOnlyOneSlide();this.setupFirstSlide();if(this.options.timer){this.setupTimer();this.startClock()}if(this.options.captions){this.setupCaptions()}if(this.options.directionalNav){this.setupDirectionalNav()}if(this.options.bullets){this.setupBulletNav();this.setActiveBullet()}this.options.afterLoadComplete.call(this)},currentSlide:function(){return this.$slides.eq(this.activeSlide)},setDimentionsFromLargestSlide:function(){var d=this,c;d.$element.add(d.$wrapper).width(this.$slides.first().width());d.$element.add(d.$wrapper).height(this.$slides.first().height());d.orbitWidth=this.$slides.first().width();d.orbitHeight=this.$slides.first().height();c=this.$slides.first().findFirstImage().clone();this.$slides.each(function(){var e=b(this),g=e.width(),f=e.height();if(g>d.$element.width()){d.$element.add(d.$wrapper).width(g);d.orbitWidth=d.$element.width()}if(f>d.$element.height()){d.$element.add(d.$wrapper).height(f);d.orbitHeight=d.$element.height();c=b(this).findFirstImage().clone()}d.numberSlides+=1});if(this.options.fluid){if(typeof this.options.fluid==="string"){c=b('<img src="http://placehold.it/'+this.options.fluid+'" />')}d.$element.prepend(c);c.addClass("fluid-placeholder");d.$element.add(d.$wrapper).css({width:"inherit"});d.$element.add(d.$wrapper).css({height:"inherit"});b(window).bind("resize",function(){d.orbitWidth=d.$element.width();d.orbitHeight=d.$element.height()})}},lock:function(){this.locked=true},unlock:function(){this.locked=false},updateOptionsIfOnlyOneSlide:function(){if(this.$slides.length===1){this.options.directionalNav=false;this.options.timer=false;this.options.bullets=false}},setupFirstSlide:function(){var c=this;this.$slides.first().css({"z-index":3}).fadeIn(function(){c.$slides.css({display:"block"})})},startClock:function(){var c=this;if(!this.options.timer){return false}if(this.$timer.is(":hidden")){this.clock=setInterval(function(){c.$element.trigger("orbit.next")},this.options.advanceSpeed)}else{this.timerRunning=true;this.$pause.removeClass("active");this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180)}},rotateTimer:function(d){var c="rotate("+this.degrees+"deg)";this.degrees+=2;this.$rotator.css({"-webkit-transform":c,"-moz-transform":c,"-o-transform":c});if(this.degrees>180){this.$rotator.addClass("move");this.$mask.addClass("move")}if(this.degrees>360||d){this.$rotator.removeClass("move");this.$mask.removeClass("move");this.degrees=0;this.$element.trigger("orbit.next")}},stopClock:function(){if(!this.options.timer){return false}else{this.timerRunning=false;clearInterval(this.clock);this.$pause.addClass("active")}},setupTimer:function(){this.$timer=b(this.timerHTML);this.$wrapper.append(this.$timer);this.$rotator=this.$timer.find(".rotator");this.$mask=this.$timer.find(".mask");this.$pause=this.$timer.find(".pause");this.$timer.click(this.clickTimer);if(this.options.startClockOnMouseOut){this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)}if(this.options.pauseOnHover){this.$wrapper.mouseenter(this.stopClock)}},startTimerAfterMouseLeave:function(){var c=this;this.outTimer=setTimeout(function(){if(!c.timerRunning){c.startClock()}},this.options.startClockOnMouseOutAfter)},clearClockMouseLeaveTimer:function(){clearTimeout(this.outTimer)},clickTimer:function(){if(!this.timerRunning){this.startClock()}else{this.stopClock()}},setupCaptions:function(){this.$caption=b(this.captionHTML);this.$wrapper.append(this.$caption);this.setCaption()},setCaption:function(){var d=this.currentSlide().attr("data-caption"),c;if(!this.options.captions){return false}if(d){c=b(d).html();this.$caption.attr("id",d).html(c);switch(this.options.captionAnimation){case"none":this.$caption.show();break;case"fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed);break}}else{switch(this.options.captionAnimation){case"none":this.$caption.hide();break;case"fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed);break}}},setupDirectionalNav:function(){var c=this,d=b(this.directionalNavHTML);d.find(".right").html(this.options.directionalNavRightText);d.find(".left").html(this.options.directionalNavLeftText);this.$wrapper.append(d);this.$wrapper.find(".left").click(function(){c.stopClock();if(c.options.resetTimerOnClick){c.rotateTimer(true);c.startClock()}c.$element.trigger("orbit.prev")});this.$wrapper.find(".right").click(function(){c.stopClock();if(c.options.resetTimerOnClick){c.rotateTimer(true);c.startClock()}c.$element.trigger("orbit.next")})},setupBulletNav:function(){this.$bullets=b(this.bulletHTML);this.$wrapper.append(this.$bullets);this.$slides.each(this.addBullet);this.$element.addClass("with-bullets");if(this.options.centerBullets){this.$bullets.css("margin-left",-this.$bullets.width()/2)}},addBullet:function(g,e){var d=g+1,h=b("<li>"+(d)+"</li>"),c,f=this;if(this.options.bulletThumbs){c=b(e).attr("data-thumb");if(c){h.addClass("has-thumb").css({background:"url("+this.options.bulletThumbLocation+c+") no-repeat"})}}this.$bullets.append(h);h.data("index",g);h.click(function(){f.stopClock();if(f.options.resetTimerOnClick){f.rotateTimer(true);f.startClock()}f.$element.trigger("orbit.goto",[h.data("index")])})},setActiveBullet:function(){if(!this.options.bullets){return false}else{this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")}},resetAndUnlock:function(){this.$slides.eq(this.prevActiveSlide).css({"z-index":1});this.unlock();this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))},shift:function(d){var c=d;this.prevActiveSlide=this.activeSlide;if(this.prevActiveSlide==c){return false}if(this.$slides.length=="1"){return false}if(!this.locked){this.lock();if(d=="next"){this.activeSlide++;if(this.activeSlide==this.numberSlides){this.activeSlide=0}}else{if(d=="prev"){this.activeSlide--;if(this.activeSlide<0){this.activeSlide=this.numberSlides-1}}else{this.activeSlide=d;if(this.prevActiveSlide<this.activeSlide){c="next"}else{if(this.prevActiveSlide>this.activeSlide){c="prev"}}}}this.setActiveBullet();this.$slides.eq(this.prevActiveSlide).css({"z-index":2});if(this.options.animation=="fade"){this.$slides.eq(this.activeSlide).css({opacity:0,"z-index":3}).animate({opacity:1},this.options.animationSpeed,this.resetAndUnlock)}if(this.options.animation=="horizontal-slide"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="vertical-slide"){if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="horizontal-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:-this.orbitWidth},this.options.animationSpeed)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:this.orbitWidth},this.options.animationSpeed)}}if(this.options.animation=="vertical-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:this.orbitHeight},this.options.animationSpeed)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:-this.orbitHeight},this.options.animationSpeed)}}this.setCaption()}}};b.fn.orbit=function(c){return this.each(function(){var d=b.extend({},a);d.init(this,c)})}})(jQuery);
/*
 * jQuery imageready Plugin
 * http://www.zurb.com/playground/
 *
 * Copyright 2011, ZURB
 * Released under the MIT License
 */
(function(c){var b={};c.event.special.imageready={setup:function(f,e,d){b=f||b},add:function(d){var e=c(this),f;if(this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!==""){if(b.forceLoad){f=e.attr("src");e.attr("src","");a(this,d.handler);e.attr("src",f)}else{if(this.complete||this.readyState===4){d.handler.apply(this,arguments)}else{a(this,d.handler)}}}},teardown:function(d){c(this).unbind(".imageready")}};function a(d,f){var e=c(d);e.bind("load.imageready",function(){f.apply(d,arguments);e.unbind("load.imageready")})}}(jQuery));;
/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
jQuery.foundation = jQuery.foundation || {};
jQuery.foundation.customForms = jQuery.foundation.customForms || {};
 
jQuery(document).ready(function ($) {
   
  function appendCustomMarkup(type) {
    $('form.custom input:' + type).each(function () {
 
      var $this = $(this).hide(),
          $span = $this.next('span.custom.' + type);
 
      if ($span.length === 0) {
        $span = $('<span class="custom ' + type + '"></span>').insertAfter($this);
      }
 
      $span.toggleClass('checked', $this.is(':checked'));
      $span.toggleClass('disabled', $this.is(':disabled'));
    });
  }
 
  function appendCustomSelect(sel) {
    var $this = $(sel),
        $customSelect = $this.next('div.custom.dropdown'),
        $options = $this.find('option'),
        maxWidth = 0,
        $li;
 
    if ($this.hasClass('no-custom')) { return; }
    if ($customSelect.length === 0) {
      $customSelectSize = '';
      if ($(sel).hasClass('small')) {
        $customSelectSize = 'small';
      } else if ($(sel).hasClass('medium')) {
        $customSelectSize = 'medium';
      } else if ($(sel).hasClass('large')) {
        $customSelectSize = 'large';
      } else if ($(sel).hasClass('expand')) {
        $customSelectSize = 'expand';
      }
      $customSelect = $('<div class="custom dropdown ' + $customSelectSize + '"><a href="#" class="selector"></a><ul></ul></div>"');
      $options.each(function () {
        $li = $('<li>' + $(this).html() + '</li>');
        $customSelect.find('ul').append($li);
      });
      $customSelect.prepend('<a href="#" class="current">' + $options.first().html() + '</a>');
 
      $this.after($customSelect);
      $this.hide();
       
    } else {
      // refresh the ul with options from the select in case the supplied markup doesn't match
      $customSelect.find('ul').html('');
      $options.each(function () {
        $li = $('<li>' + $(this).html() + '</li>');
        $customSelect.find('ul').append($li);
      });
    }
 
    $customSelect.toggleClass('disabled', $this.is(':disabled'));
 
    $options.each(function (index) {
      if (this.selected) {
        $customSelect.find('li').eq(index).addClass('selected');
        $customSelect.find('.current').html($(this).html());
      }
    });
 
    $customSelect.css('width', 'inherit');
    $customSelect.find('ul').css('width', 'inherit');
 
    $customSelect.find('li').each(function () {
      $customSelect.addClass('open');
      if ($(this).outerWidth() > maxWidth) {
        maxWidth = $(this).outerWidth();
      }
      $customSelect.removeClass('open');
    });
     
    if (!$customSelect.is('.small, .medium, .large, .expand')) {
      $customSelect.css('width', maxWidth + 18 + 'px');
      $customSelect.find('ul').css('width', maxWidth + 16 + 'px');
    }
 
  }
   
  $.foundation.customForms.appendCustomMarkup = function () {
    appendCustomMarkup('checkbox');
    appendCustomMarkup('radio');
   
    $('form.custom select').each(function () {
      appendCustomSelect(this);
    });
  };
 
  $.foundation.customForms.appendCustomMarkup();
});
 
(function ($) {
   
  function refreshCustomSelect($select) {
    var maxWidth = 0,
        $customSelect = $select.next();
    $options = $select.find('option');
    $customSelect.find('ul').html('');
     
    $options.each(function () {
      $li = $('<li>' + $(this).html() + '</li>');
      $customSelect.find('ul').append($li);
    });
     
    // re-populate
    $options.each(function (index) {
      if (this.selected) {
        $customSelect.find('li').eq(index).addClass('selected');
        $customSelect.find('.current').html($(this).html());
      }
    });
     
    // fix width
    $customSelect.removeAttr('style')
      .find('ul').removeAttr('style');
    $customSelect.find('li').each(function () {
      $customSelect.addClass('open');
      if ($(this).outerWidth() > maxWidth) {
        maxWidth = $(this).outerWidth();
      }
      $customSelect.removeClass('open');
    });
    $customSelect.css('width', maxWidth + 18 + 'px');
    $customSelect.find('ul').css('width', maxWidth + 16 + 'px');
     
  }
   
  function toggleCheckbox($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false == $input.is(':disabled')) {
        input.checked = ((input.checked) ? false : true);
        $element.toggleClass('checked');
 
        $input.trigger('change');
    }
  }
   
  function toggleRadio($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false == $input.is(':disabled')) {
      $('input:radio[name="' + $input.attr('name') + '"]').each(function () {
        $(this).next().removeClass('checked');
      });
      input.checked = ((input.checked) ? false : true);
      $element.toggleClass('checked');
     
      $input.trigger('change');
    }
  }
   
  $('form.custom span.custom.checkbox').live('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
     
    toggleCheckbox($(this));
  });
   
  $('form.custom span.custom.radio').live('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
     
    toggleRadio($(this));
  });
   
  $('form.custom select').live('change', function (event) {
    refreshCustomSelect($(this));
  });
   
  $('form.custom label').live('click', function (event) {
    var $associatedElement = $('#' + $(this).attr('for')),
        $customCheckbox,
        $customRadio;
    if ($associatedElement.length !== 0) {
      if ($associatedElement.attr('type') === 'checkbox') {
        event.preventDefault();
        $customCheckbox = $(this).find('span.custom.checkbox');
        toggleCheckbox($customCheckbox);
      } else if ($associatedElement.attr('type') === 'radio') {
        event.preventDefault();
        $customRadio = $(this).find('span.custom.radio');
        toggleRadio($customRadio);
      }
    }
  });
 
  $('form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector').live('click', function (event) {
    var $this = $(this),
        $dropdown = $this.closest('div.custom.dropdown'),
        $select = $dropdown.prev();
     
    event.preventDefault();
 
    if (false == $select.is(':disabled')) {
        $dropdown.toggleClass('open');
 
        if ($dropdown.hasClass('open')) {
          $(document).bind('click.customdropdown', function (event) {
            $dropdown.removeClass('open');
            $(document).unbind('.customdropdown');
          });
        } else {
          $(document).unbind('.customdropdown');
        }
        return false;
    }
  });
   
  $('form.custom div.custom.dropdown li').live('click', function (event) {
    var $this = $(this),
        $customDropdown = $this.closest('div.custom.dropdown'),
        $select = $customDropdown.prev(),
        selectedIndex = 0;
         
    event.preventDefault();
    event.stopPropagation();
     
    $this
      .closest('ul')
      .find('li')
      .removeClass('selected');
    $this.addClass('selected');
     
    $customDropdown
      .removeClass('open')
      .find('a.current')
      .html($this.html());
     
    $this.closest('ul').find('li').each(function (index) {
      if ($this[0] == this) {
        selectedIndex = index;
      }
       
    });
    $select[0].selectedIndex = selectedIndex;
     
    $select.trigger('change');
  });
})(jQuery);;
/*! http://mths.be/placeholder v1.8.7 by @mathias */
(function(f,h,c){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));;
(function(c){var b={bodyHeight:0,pollInterval:1000};var a={init:function(d){return this.each(function(){var f=c(".has-tip"),e=c(".tooltip"),g=function(j,i){return'<span data-id="'+j+'" class="tooltip">'+i+'<span class="nub"></span></span>'},h=setInterval(a.isDomResized,b.pollInterval);if(e.length<1){f.each(function(k){var n=c(this),o="foundationTooltip"+k,l=n.attr("title"),j=n.attr("class");n.data("id",o);var m=c(g(o,l));m.addClass(j).removeClass("has-tip").appendTo("body");if(Modernizr.touch){m.append('<span class="tap-to-close">tap to close </span>')}a.reposition(n,m,j);m.fadeOut(150)})}c(window).resize(function(){var i=c(".tooltip");i.each(function(){var j=c(this).data();target=f=c(".has-tip"),tip=c(this),classes=tip.attr("class");f.each(function(){(c(this).data().id==j.id)?target=c(this):target=target});a.reposition(target,tip,classes)})});if(Modernizr.touch){c(".tooltip").live("click touchstart touchend",function(i){i.preventDefault();c(this).fadeOut(150)});f.live("click touchstart touchend",function(i){i.preventDefault();c(".tooltip").hide();c("span[data-id="+c(this).data("id")+"].tooltip").fadeIn(150);f.attr("title","")})}else{f.hover(function(){c("span[data-id="+c(this).data("id")+"].tooltip").fadeIn(150);f.attr("title","")},function(){c("span[data-id="+c(this).data("id")+"].tooltip").fadeOut(150)})}})},reposition:function(g,j,e){var d=g.data("width"),k=j.children(".nub"),h=k.outerHeight(),f=k.outerWidth();function i(n,q,o,m,p){n.css({top:q,bottom:m,left:p,right:o})}j.css({top:(g.offset().top+g.outerHeight()+10),left:g.offset().left,width:d});i(k,-h,"auto","auto",10);if(c(window).width()<767){var l=g.parents(".row");j.width(l.outerWidth()-20).css("left",l.offset().left).addClass("tip-override");i(k,-h,"auto","auto",g.offset().left)}else{if(e.indexOf("tip-top")>-1){j.css({top:g.offset().top-j.outerHeight()-h,left:g.offset().left,width:d}).removeClass("tip-override");i(k,"auto","auto",-h,"auto")}else{if(e.indexOf("tip-left")>-1){j.css({top:g.offset().top+(g.outerHeight()/2)-h,left:g.offset().left-j.outerWidth()-10,width:d}).removeClass("tip-override");i(k,(j.outerHeight()/2)-(h/2),-h,"auto","auto")}else{if(e.indexOf("tip-right")>-1){j.css({top:g.offset().top+(g.outerHeight()/2)-h,left:g.offset().left+g.outerWidth()+10,width:d}).removeClass("tip-override");i(k,(j.outerHeight()/2)-(h/2),"auto","auto",-h)}}}}},isDomResized:function(){$body=c("body");if(b.bodyHeight!=$body.height()){b.bodyHeight=$body.height();c(window).trigger("resize")}}};c.fn.tooltips=function(d){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{c.error("Method "+d+" does not exist on jQuery.tooltips")}}}})(jQuery);;
(function(a){a.fn.foundationAlerts=function(b){var c=a.extend({callback:a.noop},b);a(document).on("click",".alert-box a.close",function(d){d.preventDefault();a(this).closest(".alert-box").fadeOut(function(e){a(this).remove();c.callback()})})}})(jQuery);;
(function ($){
 
  $.fn.foundationAccordion = function (options) {
 
    $(document).on('click.fndtn', '.accordion li', function () {
      var flyout = $(this).children('.content').first();
      $('.accordion .content').not(flyout).hide().parent('li').removeClass('active');
      flyout.show(0, function () {
        flyout.parent('li').addClass('active');
      });
    });
 
  };
 
})( jQuery );
;
(function ($) {
 
  $.fn.foundationButtons = function(options) {
    // Prevent event propagation on disabled buttons
    $(document).on('click.fndtn', '.button.disabled', function (e) {
      e.preventDefault();
    });
 
    $('.button.dropdown > ul', this).addClass('no-hover');
 
    $(document).on('click.fndtn', '.button.dropdown, .button.dropdown.split span', function (e) {
      // Stops further propagation of the event up the DOM tree when clicked on the button.
      // Events fired by its descendants are not being blocked.
      if (e.target === this) {
        e.stopPropagation();
      }
    });
    $(document).on('click.fndtn', '.button.dropdown.split span', function (e) {
      e.preventDefault();
      $('.button.dropdown', this).not($(this).parent()).children('ul').removeClass('show-dropdown');
      $(this).siblings('ul').toggleClass('show-dropdown');
    });
    $(document).on('click.fndtn', '.button.dropdown:not(.split)', function (e) {
      $('.button.dropdown', this).not(this).children('ul').removeClass('show-dropdown');
      $(this).children('ul').toggleClass('show-dropdown');
    });
    $(document).on('click.fndtn', 'body, html', function () {
      $('.button.dropdown ul').removeClass('show-dropdown');
    });
 
    // Positioning the Flyout List
    var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)', this).outerHeight() - 1,
        largeButtonHeight   = $('.button.large.dropdown', this).outerHeight() - 1,
        smallButtonHeight   = $('.button.small.dropdown', this).outerHeight() - 1,
        tinyButtonHeight    = $('.button.tiny.dropdown', this).outerHeight() - 1;
 
    $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul', this).css('top', normalButtonHeight);
    $('.button.dropdown.large > ul', this).css('top', largeButtonHeight);
    $('.button.dropdown.small > ul', this).css('top', smallButtonHeight);
    $('.button.dropdown.tiny > ul', this).css('top', tinyButtonHeight);
 
    $('.button.dropdown.up:not(.large):not(.small):not(.tiny) > ul', this).css('top', 'auto').css('bottom', normalButtonHeight - 2);
    $('.button.dropdown.up.large > ul', this).css('top', 'auto').css('bottom', largeButtonHeight - 2);
    $('.button.dropdown.up.small > ul', this).css('top', 'auto').css('bottom', smallButtonHeight - 2);
    $('.button.dropdown.up.tiny > ul', this).css('top', 'auto').css('bottom', tinyButtonHeight - 2);
 
  };
 
})( jQuery );
;
/*
 * jQuery Foundation Tooltip Plugin 2.0.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
/*jslint unparam: true, browser: true, indent: 2 */
 
;(function ($) {
  'use strict';
  var settings = {
      bodyHeight : 0,
      targetClass : '.has-tip',
      tooltipClass : '.tooltip',
      tipTemplate : function (selector, content) {
        return '<span data-selector="' + selector + '" class="' + settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
      }
    },
    methods = {
      init : function (options) {
        return this.each(function () {
          var $body = $('body');
 
          if (Modernizr.touch) {
            $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.targetClass, function (e) {
              e.preventDefault();
              $(settings.tooltipClass).hide();
              methods.showOrCreateTip($(this));
            });
            $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.tooltipClass, function (e) {
              e.preventDefault();
              $(this).fadeOut(150);
            });
          } else {
            $body.on('mouseenter.tooltip mouseleave.tooltip', settings.targetClass, function (e) {
              var $this = $(this);
 
              if (e.type === 'mouseenter') {
                methods.showOrCreateTip($this);
              } else if (e.type === 'mouseleave') {
                methods.hide($this);
              }
            });
          }
        });
      },
      showOrCreateTip : function ($target) {
        var $tip = methods.getTip($target);
 
        if ($tip && $tip.length > 0) {
          methods.show($target);
        } else {
          methods.create($target);
        }
      },
      getTip : function ($target) {
        var selector = methods.selector($target),
          tip = null;
 
        if (selector) {
          tip = $('span[data-selector=' + selector + ']' + settings.tooltipClass);
        }
        return (tip.length > 0) ? tip : false;
      },
      selector : function ($target) {
        var id = $target.attr('id'),
          dataSelector = $target.data('selector');
 
        if (id === undefined && dataSelector === undefined) {
          dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
          $target.attr('data-selector', dataSelector);
        }
        return (id) ? id : dataSelector;
      },
      create : function ($target) {
        var $tip = $(settings.tipTemplate(methods.selector($target), $('<div>').text($target.attr('title')).html())),
          classes = methods.inheritable_classes($target);
 
        $tip.addClass(classes).appendTo('body');
        if (Modernizr.touch) {
          $tip.append('<span class="tap-to-close">tap to close </span>');
        }
        $target.removeAttr('title');
        methods.show($target);
      },
      reposition : function (target, tip, classes) {
        var width, nub, nubHeight, nubWidth, column, objPos;
 
        tip.css('visibility', 'hidden').show();
 
        width = target.data('width');
        nub = tip.children('.nub');
        nubHeight = nub.outerHeight();
        nubWidth = nub.outerWidth();
 
        objPos = function (obj, top, right, bottom, left, width) {
          return obj.css({
            'top' : top,
            'bottom' : bottom,
            'left' : left,
            'right' : right,
            'width' : (width) ? width : 'auto'
          }).end();
        };
 
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left, width);
        objPos(nub, -nubHeight, 'auto', 'auto', 10);
 
        if ($(window).width() < 767) {
          column = target.closest('.columns');
 
          if (column.length < 0) {
            // if not using Foundation
            column = $('body');
          }
          tip.width(column.outerWidth() - 25).css('left', 15).addClass('tip-override');
          objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
        } else {
          if (classes.indexOf('tip-top') > -1) {
            objPos(tip, (target.offset().top - tip.outerHeight() - nubHeight), 'auto', 'auto', target.offset().left, width)
              .removeClass('tip-override');
            objPos(nub, 'auto', 'auto', -nubHeight, 'auto');
          } else if (classes.indexOf('tip-left') > -1) {
            objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left - tip.outerWidth() - 10), width)
              .removeClass('tip-override');
            objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), -nubHeight, 'auto', 'auto');
          } else if (classes.indexOf('tip-right') > -1) {
            objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left + target.outerWidth() + 10), width)
              .removeClass('tip-override');
            objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), 'auto', 'auto', -nubHeight);
          }
        }
        tip.css('visibility', 'visible').hide();
      },
      inheritable_classes : function (target) {
        var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'noradius'],
          filtered = target.attr('class').split(' ').map(function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ');
 
        return $.trim(filtered);
      },
      show : function ($target) {
        var $tip = methods.getTip($target);
 
        methods.reposition($target, $tip, $target.attr('class'));
        $tip.fadeIn(150);
      },
      hide : function ($target) {
        var $tip = methods.getTip($target);
 
        $tip.fadeOut(150);
      },
      reload : function () {
        var $self = $(this);
 
        return ($self.data('tooltips')) ? $self.tooltips('destroy').tooltips('init') : $self.tooltips('init');
      },
      destroy : function () {
        return this.each(function () {
          $(window).off('.tooltip');
          $(settings.targetClass).off('.tooltip');
          $(settings.tooltipClass).each(function (i) {
            $($(settings.targetClass).get(i)).attr('title', $(this).text());
          }).remove();
        });
      }
    };
 
  $.fn.tooltips = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.tooltips');
    }
  };
}(jQuery));;
(function(d){var c=function(){return{tmp:[],hidden:null,adjust:function(g){var f=this;f.hidden=g.parents().andSelf().filter(":hidden");f.hidden.each(function(){var h=d(this);f.tmp.push(h.attr("style"));h.css({visibility:"hidden",display:"block"})})},reset:function(){var f=this;f.hidden.each(function(h){var g=d(this),j=f.tmp[h];if(j===undefined){g.removeAttr("style")}else{g.attr("style",j)}});f.tmp=[];f.hidden=null}}};jQuery.foundation=jQuery.foundation||{};jQuery.foundation.customForms=jQuery.foundation.customForms||{};d.foundation.customForms.appendCustomMarkup=function(h){var i={disable_class:"js-disable-custom"};h=d.extend(i,h);function g(j,m){var n=d(m).hide(),l=n.attr("type"),k=n.next("span.custom."+l);if(k.length===0){k=d('<span class="custom '+l+'"></span>').insertAfter(n)}k.toggleClass("checked",n.is(":checked"));k.toggleClass("disabled",n.is(":disabled"))}function f(u,l){var x=c();var q=d(l),p=q.next("div.custom.dropdown"),r=p.find("ul"),s=p.find(".current"),w=p.find(".selector"),o=q.find("option"),m=o.filter(":selected"),v=0,t="",k;var j=false;if(q.hasClass("no-custom")){return}if(p.length===0){var n=q.hasClass("small")?"small":q.hasClass("medium")?"medium":q.hasClass("large")?"large":q.hasClass("expand")?"expand":"";p=d('<div class="'+["custom","dropdown",n].join(" ")+'"><a href="#" class="selector"></a><ul /></div>"');w=p.find(".selector");r=p.find("ul");t=o.map(function(){return"<li>"+d(this).html()+"</li>"}).get().join("");r.append(t);j=p.prepend('<a href="#" class="current">'+m.html()+"</a>").find(".current");q.after(p).hide()}else{t=o.map(function(){return"<li>"+d(this).html()+"</li>"}).get().join("");r.html("").append(t)}p.toggleClass("disabled",q.is(":disabled"));k=r.find("li");o.each(function(y){if(this.selected){k.eq(y).addClass("selected");if(j){j.html(d(this).html())}}});r.css("width","inherit");p.css("width","inherit");if(!p.is(".small, .medium, .large, .expand")){p.addClass("open");x.adjust(r);v=(k.outerWidth()>v)?k.outerWidth():v;x.reset();p.removeClass("open");p.width(v+18);r.width(v+16)}}d("form.custom input:radio[data-customforms!=disabled]").each(g);d("form.custom input:checkbox[data-customforms!=disabled]").each(g);d("form.custom select[data-customforms!=disabled]").each(f)};var b=function(f){var g=0,h=f.next();$options=f.find("option");h.find("ul").html("");$options.each(function(){$li=d("<li>"+d(this).html()+"</li>");h.find("ul").append($li)});$options.each(function(i){if(this.selected){h.find("li").eq(i).addClass("selected");h.find(".current").html(d(this).html())}});h.removeAttr("style").find("ul").removeAttr("style");h.find("li").each(function(){h.addClass("open");if(d(this).outerWidth()>g){g=d(this).outerWidth()}h.removeClass("open")});h.css("width",g+18+"px");h.find("ul").css("width",g+16+"px")};var a=function(f){var h=f.prev(),g=h[0];if(false===h.is(":disabled")){g.checked=((g.checked)?false:true);f.toggleClass("checked")}};var e=function(f){var h=f.prev(),g=h[0];if(false===h.is(":disabled")){d('input:radio[name="'+h.attr("name")+'"]').each(function(){d(this).next().removeClass("checked")});g.checked=((g.checked)?false:true);f.toggleClass("checked");h.trigger("change")}};d(document).on("click","form.custom span.custom.checkbox",function(f){f.preventDefault();f.stopPropagation();a(d(this))});d(document).on("click","form.custom span.custom.radio",function(f){f.preventDefault();f.stopPropagation();e(d(this))});d(document).on("change","form.custom select[data-customforms!=disabled]",function(f){b(d(this))});d(document).on("click","form.custom label",function(g){var f=d("#"+d(this).attr("for")),i,h;if(f.length!==0){if(f.attr("type")==="checkbox"){g.preventDefault();i=d(this).find("span.custom.checkbox");a(i)}else{if(f.attr("type")==="radio"){g.preventDefault();h=d(this).find("span.custom.radio");e(h)}}}});d(document).on("click","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(g){var i=d(this),h=i.closest("div.custom.dropdown"),f=h.prev();g.preventDefault();d("div.dropdown").removeClass("open");if(false===f.is(":disabled")){h.toggleClass("open");if(h.hasClass("open")){d(document).bind("click.customdropdown",function(j){h.removeClass("open");d(document).unbind(".customdropdown")})}else{d(document).unbind(".customdropdown")}return false}});d(document).on("click","form.custom div.custom.dropdown li",function(i){var j=d(this),g=j.closest("div.custom.dropdown"),h=g.prev(),f=0;i.preventDefault();i.stopPropagation();d("div.dropdown").removeClass("open");j.closest("ul").find("li").removeClass("selected");j.addClass("selected");g.removeClass("open").find("a.current").html(j.html());j.closest("ul").find("li").each(function(k){if(j[0]==this){f=k}});h[0].selectedIndex=f;h.trigger("change")});d.fn.foundationCustomForms=d.foundation.customForms.appendCustomMarkup})(jQuery);;
(function ($) {
 
  $.fn.foundationTabs = function (options) {
 
    var settings = $.extend({
      callback: $.noop
    }, options);
 
    var activateTab = function ($tab) {
      var $activeTab = $tab.closest('dl').find('dd.active'),
          contentLocation = $tab.children('a').attr("href") + 'Tab';
 
      // Strip off the current url that IE adds
      contentLocation = contentLocation.replace(/^.+#/, '#');
 
      //Make Tab Active
      $activeTab.removeClass('active');
      $tab.addClass('active');
 
      //Show Tab Content
      $(contentLocation).closest('.tabs-content').children('li').removeClass('active').hide();
      $(contentLocation).css('display', 'block').addClass('active');
    };
 
    $(document).on('click.fndtn', 'dl.tabs dd a', function (event){
      activateTab($(this).parent('dd'));
    });
 
    if (window.location.hash) {
      activateTab($('a[href="' + window.location.hash + '"]').parent('dd'));
      settings.callback();
    }
 
  };
 
})(jQuery);;
(function(a){a.fn.foundationNavigation=function(c){var b=false;if(Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)){a(document).on("click.fndtn touchstart.fndtn",".nav-bar a.flyout-toggle",function(f){f.preventDefault();var d=a(this).siblings(".flyout").first();if(b===false){a(".nav-bar .flyout").not(d).slideUp(500);d.slideToggle(500,function(){b=false})}b=true});a(".nav-bar>li.has-flyout",this).addClass("is-touch")}else{a(".nav-bar>li.has-flyout",this).hover(function(){a(this).children(".flyout").show()},function(){a(this).children(".flyout").hide()})}}})(jQuery);;
(function(b){var a=false;b(document).on("click","a[data-reveal-id]",function(d){d.preventDefault();var c=b(this).attr("data-reveal-id");b("#"+c).reveal(b(this).data())});b.fn.reveal=function(c){var e=b(document),d={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal",open:b.noop,opened:b.noop,close:b.noop,closed:b.noop};c=b.extend({},d,c);return this.each(function(){var q=b(this),i=parseInt(q.css("top"),10),l=q.height()+i,k=false,g=b(".reveal-modal-bg"),j={open:{top:0,opacity:0,visibility:"visible",display:"block"},close:{top:i,opacity:1,visibility:"hidden",display:"none"}},f;if(g.length===0){g=b("<div />",{"class":"reveal-modal-bg"}).insertAfter(q);g.fadeTo("fast",0.8)}function m(){k=false}function r(){k=true}function o(){var s=b(".reveal-modal.open");if(s.length===1){a=true;s.trigger("reveal:close")}}function n(){if(!k){r();o();q.addClass("open");if(c.animation==="fadeAndPop"){j.open.top=e.scrollTop()-l;j.open.opacity=0;q.css(j.open);g.fadeIn(c.animationSpeed/2);q.delay(c.animationSpeed/2).animate({top:e.scrollTop()+i+"px",opacity:1},c.animationSpeed,function(){q.trigger("reveal:opened")})}if(c.animation==="fade"){j.open.top=e.scrollTop()+i;j.open.opacity=0;q.css(j.open);g.fadeIn(c.animationSpeed/2);q.delay(c.animationSpeed/2).animate({opacity:1},c.animationSpeed,function(){q.trigger("reveal:opened")})}if(c.animation==="none"){j.open.top=e.scrollTop()+i;j.open.opacity=1;q.css(j.open);g.css({display:"block"});q.trigger("reveal:opened")}}}q.bind("reveal:open.reveal",n);function h(){if(!k){r();q.removeClass("open");if(c.animation==="fadeAndPop"){q.animate({top:e.scrollTop()-l+"px",opacity:0},c.animationSpeed/2,function(){q.css(j.close)});if(!a){g.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){q.trigger("reveal:closed")})}else{q.trigger("reveal:closed")}a=false}if(c.animation==="fade"){q.animate({opacity:0},c.animationSpeed,function(){q.css(j.close)});if(!a){g.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){q.trigger("reveal:closed")})}else{q.trigger("reveal:closed")}}if(c.animation==="none"){q.css(j.close);if(!a){g.css({display:"none"})}q.trigger("reveal:closed")}}}function p(){q.unbind(".reveal");g.unbind(".reveal");f.unbind(".reveal");b("body").unbind(".reveal")}q.bind("reveal:close.reveal",h);q.bind("reveal:opened.reveal reveal:closed.reveal",m);q.bind("reveal:closed.reveal",p);q.bind("reveal:open.reveal",c.open);q.bind("reveal:opened.reveal",c.opened);q.bind("reveal:close.reveal",c.close);q.bind("reveal:closed.reveal",c.closed);q.trigger("reveal:open");f=b("."+c.dismissModalClass).bind("click.reveal",function(){q.trigger("reveal:close")});if(c.closeOnBackgroundClick){g.css({cursor:"pointer"});g.bind("click.reveal",function(){q.trigger("reveal:close")})}b("body").bind("keyup.reveal",function(s){if(s.which===27){q.trigger("reveal:close")}})})}}(jQuery));;
/*
 * jQuery Orbit Plugin 1.4.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
 
(function ($) {
  'use strict';
  $.fn.findFirstImage = function () {
    return this.first()
            .find('img')
            .andSelf().filter('img')
            .first();
  };
 
  var ORBIT = {
 
    defaults: {
      animation: 'horizontal-push',     // fade, horizontal-slide, vertical-slide, horizontal-push, vertical-push
      animationSpeed: 600,        // how fast animtions are
      timer: true,            // true or false to have the timer
      advanceSpeed: 4000,         // if timer is enabled, time between transitions
      pauseOnHover: false,        // if you hover pauses the slider
      startClockOnMouseOut: false,    // if clock should start on MouseOut
      startClockOnMouseOutAfter: 1000,  // how long after MouseOut should the timer start again
      directionalNav: true,         // manual advancing directional navs
      directionalNavRightText: 'Right', // text of right directional element for accessibility
      directionalNavLeftText: 'Left', // text of left directional element for accessibility
      captions: true,           // do you want captions?
      captionAnimation: 'fade',       // fade, slideOpen, none
      captionAnimationSpeed: 600,     // if so how quickly should they animate in
      resetTimerOnClick: false,      // true resets the timer instead of pausing slideshow progress on manual navigation
      bullets: false,           // true or false to activate the bullet navigation
      bulletThumbs: false,        // thumbnails for the bullets
      bulletThumbLocation: '',      // location from this file where thumbs will be
      afterSlideChange: $.noop,   // empty function
      afterLoadComplete: $.noop, //callback to execute after everything has been loaded
      fluid: true,
      centerBullets: true    // center bullet nav with js, turn this off if you want to position the bullet nav manually
    },
 
    activeSlide: 0,
    numberSlides: 0,
    orbitWidth: null,
    orbitHeight: null,
    locked: null,
    timerRunning: null,
    degrees: 0,
    wrapperHTML: '<div class="orbit-wrapper" />',
    timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',
    captionHTML: '<div class="orbit-caption"></div>',
    directionalNavHTML: '<div class="slider-nav"><span class="right"></span><span class="left"></span></div>',
    bulletHTML: '<ul class="orbit-bullets"></ul>',
 
    init: function (element, options) {
      var $imageSlides,
          imagesLoadedCount = 0,
          self = this;
 
      // Bind functions to correct context
      this.clickTimer = $.proxy(this.clickTimer, this);
      this.addBullet = $.proxy(this.addBullet, this);
      this.resetAndUnlock = $.proxy(this.resetAndUnlock, this);
      this.stopClock = $.proxy(this.stopClock, this);
      this.startTimerAfterMouseLeave = $.proxy(this.startTimerAfterMouseLeave, this);
      this.clearClockMouseLeaveTimer = $.proxy(this.clearClockMouseLeaveTimer, this);
      this.rotateTimer = $.proxy(this.rotateTimer, this);
 
      this.options = $.extend({}, this.defaults, options);
      if (this.options.timer === 'false') this.options.timer = false;
      if (this.options.captions === 'false') this.options.captions = false;
      if (this.options.directionalNav === 'false') this.options.directionalNav = false;
 
      this.$element = $(element);
      this.$wrapper = this.$element.wrap(this.wrapperHTML).parent();
      this.$slides = this.$element.children('img, a, div');
 
      this.$element.bind('orbit.next', function () {
        self.shift('next');
      });
 
      this.$element.bind('orbit.prev', function () {
        self.shift('prev');
      });
 
      this.$element.bind('orbit.goto', function (event, index) {
        self.shift(index);
      });
 
      this.$element.bind('orbit.start', function (event, index) {
        self.startClock();
      });
 
      this.$element.bind('orbit.stop', function (event, index) {
        self.stopClock();
      });
 
      $imageSlides = this.$slides.filter('img');
 
      if ($imageSlides.length === 0) {
        this.loaded();
      } else {
        $imageSlides.bind('imageready', function () {
          imagesLoadedCount += 1;
          if (imagesLoadedCount === $imageSlides.length) {
            self.loaded();
          }
        });
      }
    },
 
    loaded: function () {
      this.$element
        .addClass('orbit')
        .css({width: '1px', height: '1px'});
 
      this.$slides.addClass('orbit-slide');
 
      this.setDimentionsFromLargestSlide();
      this.updateOptionsIfOnlyOneSlide();
      this.setupFirstSlide();
 
      if (this.options.timer) {
        this.setupTimer();
        this.startClock();
      }
 
      if (this.options.captions) {
        this.setupCaptions();
      }
 
      if (this.options.directionalNav) {
        this.setupDirectionalNav();
      }
 
      if (this.options.bullets) {
        this.setupBulletNav();
        this.setActiveBullet();
      }
 
      this.options.afterLoadComplete.call(this);
    },
 
    currentSlide: function () {
      return this.$slides.eq(this.activeSlide);
    },
 
    setDimentionsFromLargestSlide: function () {
      //Collect all slides and set slider size of largest image
      var self = this,
          $fluidPlaceholder;
 
      self.$element.add(self.$wrapper).width(this.$slides.first().outerWidth());
      self.$element.add(self.$wrapper).height(this.$slides.first().height());
      self.orbitWidth = this.$slides.first().outerWidth();
      self.orbitHeight = this.$slides.first().height();
      $fluidPlaceholder = this.$slides.first().findFirstImage().clone();
 
 
      this.$slides.each(function () {
        var slide = $(this),
            slideWidth = slide.outerWidth(),
            slideHeight = slide.height();
 
        if (slideWidth > self.$element.outerWidth()) {
          self.$element.add(self.$wrapper).width(slideWidth);
          self.orbitWidth = self.$element.outerWidth();
        }
        if (slideHeight > self.$element.height()) {
          self.$element.add(self.$wrapper).height(slideHeight);
          self.orbitHeight = self.$element.height();
          $fluidPlaceholder = $(this).findFirstImage().clone();
        }
        self.numberSlides += 1;
      });
 
      if (this.options.fluid) {
        if (typeof this.options.fluid === "string") {
          $fluidPlaceholder = $('<img src="http://placehold.it/' + this.options.fluid + '" />')
        }
 
        self.$element.prepend($fluidPlaceholder);
        $fluidPlaceholder.addClass('fluid-placeholder');
        self.$element.add(self.$wrapper).css({width: 'inherit'});
        self.$element.add(self.$wrapper).css({height: 'inherit'});
 
        $(window).bind('resize', function () {
          self.orbitWidth = self.$element.outerWidth();
          self.orbitHeight = self.$element.height();
        });
      }
    },
 
    //Animation locking functions
    lock: function () {
      this.locked = true;
    },
 
    unlock: function () {
      this.locked = false;
    },
 
    updateOptionsIfOnlyOneSlide: function () {
      if(this.$slides.length === 1) {
        this.options.directionalNav = false;
        this.options.timer = false;
        this.options.bullets = false;
      }
    },
 
    setupFirstSlide: function () {
      //Set initial front photo z-index and fades it in
      var self = this;
      this.$slides.first()
        .css({"z-index" : 3})
        .fadeIn(function() {
          //brings in all other slides IF css declares a display: none
          self.$slides.css({"display":"block"})
      });
    },
 
    startClock: function () {
      var self = this;
 
      if(!this.options.timer) {
        return false;
      }
 
      if (this.$timer.is(':hidden')) {
        this.clock = setInterval(function () {
          self.$element.trigger('orbit.next');
        }, this.options.advanceSpeed);
      } else {
        this.timerRunning = true;
        this.$pause.removeClass('active');
        this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, false);
      }
    },
 
    rotateTimer: function (reset) {
      var degreeCSS = "rotate(" + this.degrees + "deg)";
      this.degrees += 2;
      this.$rotator.css({
        "-webkit-transform": degreeCSS,
        "-moz-transform": degreeCSS,
        "-o-transform": degreeCSS,
        "-ms-transform": degreeCSS
      });
      if(this.degrees > 180) {
        this.$rotator.addClass('move');
        this.$mask.addClass('move');
      }
      if(this.degrees > 360 || reset) {
        this.$rotator.removeClass('move');
        this.$mask.removeClass('move');
        this.degrees = 0;
        this.$element.trigger('orbit.next');
      }
    },
 
    stopClock: function () {
      if (!this.options.timer) {
        return false;
      } else {
        this.timerRunning = false;
        clearInterval(this.clock);
        this.$pause.addClass('active');
      }
    },
 
    setupTimer: function () {
      this.$timer = $(this.timerHTML);
      this.$wrapper.append(this.$timer);
 
      this.$rotator = this.$timer.find('.rotator');
      this.$mask = this.$timer.find('.mask');
      this.$pause = this.$timer.find('.pause');
 
      this.$timer.click(this.clickTimer);
 
      if (this.options.startClockOnMouseOut) {
        this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);
        this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer);
      }
 
      if (this.options.pauseOnHover) {
        this.$wrapper.mouseenter(this.stopClock);
      }
    },
 
    startTimerAfterMouseLeave: function () {
      var self = this;
 
      this.outTimer = setTimeout(function() {
        if(!self.timerRunning){
          self.startClock();
        }
      }, this.options.startClockOnMouseOutAfter)
    },
 
    clearClockMouseLeaveTimer: function () {
      clearTimeout(this.outTimer);
    },
 
    clickTimer: function () {
      if(!this.timerRunning) {
          this.startClock();
      } else {
          this.stopClock();
      }
    },
 
    setupCaptions: function () {
      this.$caption = $(this.captionHTML);
      this.$wrapper.append(this.$caption);
      this.setCaption();
    },
 
    setCaption: function () {
      var captionLocation = this.currentSlide().attr('data-caption'),
          captionHTML;
 
      if (!this.options.captions) {
        return false;
      }
 
      //Set HTML for the caption if it exists
      if (captionLocation) {
        //if caption text is blank, don't show captions
        if ($.trim($(captionLocation).text()).length < 1){
          return false;
        }
        captionHTML = $(captionLocation).html(); //get HTML from the matching HTML entity
        this.$caption
          .attr('id', captionLocation) // Add ID caption TODO why is the id being set?
          .html(captionHTML); // Change HTML in Caption
          //Animations for Caption entrances
        switch (this.options.captionAnimation) {
          case 'none':
            this.$caption.show();
            break;
          case 'fade':
            this.$caption.fadeIn(this.options.captionAnimationSpeed);
            break;
          case 'slideOpen':
            this.$caption.slideDown(this.options.captionAnimationSpeed);
            break;
        }
      } else {
        //Animations for Caption exits
        switch (this.options.captionAnimation) {
          case 'none':
            this.$caption.hide();
            break;
          case 'fade':
            this.$caption.fadeOut(this.options.captionAnimationSpeed);
            break;
          case 'slideOpen':
            this.$caption.slideUp(this.options.captionAnimationSpeed);
            break;
        }
      }
    },
 
    setupDirectionalNav: function () {
      var self = this,
          $directionalNav = $(this.directionalNavHTML);
 
      $directionalNav.find('.right').html(this.options.directionalNavRightText);
      $directionalNav.find('.left').html(this.options.directionalNavLeftText);
 
      this.$wrapper.append($directionalNav);
 
      this.$wrapper.find('.left').click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.prev');
      });
 
      this.$wrapper.find('.right').click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.next');
      });
    },
 
    setupBulletNav: function () {
      this.$bullets = $(this.bulletHTML);
      this.$wrapper.append(this.$bullets);
      this.$slides.each(this.addBullet);
      this.$element.addClass('with-bullets');
      if (this.options.centerBullets) this.$bullets.css('margin-left', -this.$bullets.outerWidth() / 2);
    },
 
    addBullet: function (index, slide) {
      var position = index + 1,
          $li = $('<li>' + (position) + '</li>'),
          thumbName,
          self = this;
 
      if (this.options.bulletThumbs) {
        thumbName = $(slide).attr('data-thumb');
        if (thumbName) {
          $li
            .addClass('has-thumb')
            .css({background: "url(" + this.options.bulletThumbLocation + thumbName + ") no-repeat"});;
        }
      }
      this.$bullets.append($li);
      $li.data('index', index);
      $li.click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.goto', [$li.data('index')])
      });
    },
 
    setActiveBullet: function () {
      if(!this.options.bullets) { return false; } else {
        this.$bullets.find('li')
          .removeClass('active')
          .eq(this.activeSlide)
          .addClass('active');
      }
    },
 
    resetAndUnlock: function () {
      this.$slides
        .eq(this.prevActiveSlide)
        .css({"z-index" : 1});
      this.unlock();
      this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide));
    },
 
    shift: function (direction) {
      var slideDirection = direction;
 
      //remember previous activeSlide
      this.prevActiveSlide = this.activeSlide;
 
      //exit function if bullet clicked is same as the current image
      if (this.prevActiveSlide == slideDirection) { return false; }
 
      if (this.$slides.length == "1") { return false; }
      if (!this.locked) {
        this.lock();
        //deduce the proper activeImage
        if (direction == "next") {
          this.activeSlide++;
          if (this.activeSlide == this.numberSlides) {
              this.activeSlide = 0;
          }
        } else if (direction == "prev") {
          this.activeSlide--
          if (this.activeSlide < 0) {
            this.activeSlide = this.numberSlides - 1;
          }
        } else {
          this.activeSlide = direction;
          if (this.prevActiveSlide < this.activeSlide) {
            slideDirection = "next";
          } else if (this.prevActiveSlide > this.activeSlide) {
            slideDirection = "prev"
          }
        }
 
        //set to correct bullet
        this.setActiveBullet();
 
        //set previous slide z-index to one below what new activeSlide will be
        this.$slides
          .eq(this.prevActiveSlide)
          .css({"z-index" : 2});
 
        //fade
        if (this.options.animation == "fade") {
          this.$slides
            .eq(this.activeSlide)
            .css({"opacity" : 0, "z-index" : 3})
            .animate({"opacity" : 1}, this.options.animationSpeed, this.resetAndUnlock);
        }
 
        //horizontal-slide
        if (this.options.animation == "horizontal-slide") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": -this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
        }
 
        //vertical-slide
        if (this.options.animation == "vertical-slide") {
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"top": this.orbitHeight, "z-index" : 3})
              .animate({"top" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"top": -this.orbitHeight, "z-index" : 3})
              .animate({"top" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
        }
 
        //horizontal-push
        if (this.options.animation == "horizontal-push") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({"left" : -this.orbitWidth}, this.options.animationSpeed);
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": -this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({"left" : this.orbitWidth}, this.options.animationSpeed);
          }
        }
 
        //vertical-push
        if (this.options.animation == "vertical-push") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({top: -this.orbitHeight, "z-index" : 3})
              .animate({top : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({top : this.orbitHeight}, this.options.animationSpeed);
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({top: this.orbitHeight, "z-index" : 3})
              .animate({top : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({top : -this.orbitHeight}, this.options.animationSpeed);
          }
        }
 
        this.setCaption();
      }
    }
  };
 
  $.fn.orbit = function (options) {
    return this.each(function () {
      var orbit = $.extend({}, ORBIT);
      orbit.init(this, options);
    });
  };
 
})(jQuery);
 
/*!
 * jQuery imageready Plugin
 * http://www.zurb.com/playground/
 *
 * Copyright 2011, ZURB
 * Released under the MIT License
 */
(function ($) {
 
  var options = {};
 
  $.event.special.imageready = {
 
    setup: function (data, namespaces, eventHandle) {
      options = data || options;
    },
 
    add: function (handleObj) {
      var $this = $(this),
          src;
 
      if ( this.nodeType === 1 && this.tagName.toLowerCase() === 'img' && this.src !== '' ) {
        if (options.forceLoad) {
          src = $this.attr('src');
          $this.attr('src', '');
          bindToLoad(this, handleObj.handler);
          $this.attr('src', src);
        } else if ( this.complete || this.readyState === 4 ) {
          handleObj.handler.apply(this, arguments);
        } else {
          bindToLoad(this, handleObj.handler);
        }
      }
    },
 
    teardown: function (namespaces) {
      $(this).unbind('.imageready');
    }
  };
 
  function bindToLoad(element, callback) {
    var $this = $(element);
 
    $this.bind('load.imageready', function () {
       callback.apply(element, arguments);
       $this.unbind('load.imageready');
     });
  }
 
}(jQuery));;
(function ($) {
   
  $.fn.foundationMediaQueryViewer = function (options) {
     
    var settings  = $.extend(options,{toggleKey:77}); // // Press 'M'
    $(document).on("keyup.mediaQueryViewer", ":input", function(e){
      if (e.which === settings.toggleKey) {
        e.stopPropagation();
      }
    });
    $(document).on("keyup.mediaQueryViewer", function(e) {
      var $mqViewer = $('#fqv');
 
      if (e.which === settings.toggleKey) { 
        if ($mqViewer.length > 0) {
          $mqViewer.remove();
        } else {
          $('body').prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>');
        }
      }
    });
 
  };
 
})(jQuery);;
(function ($) {
  // Set the negative margin on the top menu for slide-menu pages
  var $selector1 = $('#topMenu'),
    events = 'click.fndtn';
  if ($selector1.length > 0) $selector1.css("margin-top", $selector1.height() * -1);
 
  // Watch for clicks to show the sidebar
  var $selector2 = $('#sidebarButton');
  if ($selector2.length > 0) {
    $('#sidebarButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }
 
  // Watch for clicks to show the menu for slide-menu pages
  var $selector3 = $('#menuButton');
  if ($selector3.length > 0)  {
    $('#menuButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active-menu');
    });
  }
 
  // // Adjust sidebars and sizes when resized
  // $(window).resize(function() {
  //   // if (!navigator.userAgent.match(/Android/i)) $('body').removeClass('active');
  //   var $selector4 = $('#topMenu');
  //   if ($selector4.length > 0) $selector4.css("margin-top", $selector4.height() * -1);
  // });
 
  // Switch panels for the paneled nav on mobile
  var $selector5 = $('#switchPanels');
  if ($selector5.length > 0)  {
    $('#switchPanels dd').on(events, function (e) {
      e.preventDefault();
      var switchToPanel = $(this).children('a').attr('href'),
          switchToIndex = $(switchToPanel).index();
      $(this).toggleClass('active').siblings().removeClass('active');
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }
 
  $('#nav li a').on(events, function (e) {
    e.preventDefault();
    var href = $(this).attr('href'),
      $target = $(href);
    $('html, body').animate({scrollTop : $target.offset().top}, 300);
  });
});
;
jQuery(document).ready(function ($) {
 
    /* Use this js doc for all application specific JS */
 
    /* TABS --------------------------------- */
    /* Remove if you don't need :) */
 
    function activateTab($tab) {
        var $activeTab = $tab.closest('dl').find('a.active'),
                contentLocation = $tab.attr("href") + 'Tab';
                 
        // Strip off the current url that IE adds
        contentLocation = contentLocation.replace(/^.+#/, '#');
 
        //Make Tab Active
        $activeTab.removeClass('active');
        $tab.addClass('active');
 
    //Show Tab Content
        $(contentLocation).closest('.tabs-content').children('li').hide();
        $(contentLocation).css('display', 'block');
    }
 
  $('dl.tabs dd a').live('click', function (event) {
    activateTab($(this));
  });
 
    if (window.location.hash) {
        activateTab($('a[href="' + window.location.hash + '"]'));
        $.foundation.customForms.appendCustomMarkup();
    }
 
    /* ALERT BOXES ------------ */
    $(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
      $(this).closest(".alert-box").fadeOut(function(event){
        $(this).remove();
      });
    });
 
 
    /* PLACEHOLDER FOR FORMS ------------- */
    /* Remove this and jquery.placeholder.min.js if you don't need :) */
 
    $('input, textarea').placeholder();
 
    /* TOOLTIPS ------------ */
    $(this).tooltips();
 
 
 
    /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//  $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//  $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//  $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//  $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});
 
 
 
    /* DROPDOWN NAV ------------- */
 
    var lockNavBar = false;
    $('.nav-bar a.flyout-toggle').live('click', function(e) {
        e.preventDefault();
        var flyout = $(this).siblings('.flyout');
        if (lockNavBar === false) {
            $('.nav-bar .flyout').not(flyout).slideUp(500);
            flyout.slideToggle(500, function(){
                lockNavBar = false;
            });
        }
        lockNavBar = true;
    });
  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px'
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    })
  }
 
 
    /* DISABLED BUTTONS ------------- */
    /* Gives elements with a class of 'disabled' a return: false; */
   
});
;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});;
/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */
 
(function ($) {
  'use strict';
  //
  // Global variable.
  // Helps us determine if the current modal is being queued for display.
  //
  var modalQueued = false;
 
  //
  // Bind the live 'click' event to all anchor elemnets with the data-reveal-id attribute.
  //
  $(document).on('click', 'a[data-reveal-id]', function ( event ) {
    //
    // Prevent default action of the event.
    //
    event.preventDefault();
    //
    // Get the clicked anchor data-reveal-id attribute value.
    //
    var modalLocation = $( this ).attr( 'data-reveal-id' );
    //
    // Find the element with that modalLocation id and call the reveal plugin.
    //
    $( '#' + modalLocation ).reveal( $( this ).data() );
 
  });
 
  /**
   * @module reveal
   * @property {Object} [options] Reveal options
   */
  $.fn.reveal = function ( options ) {
      /*
       * Cache the document object.
       */
    var $doc = $( document ),
        /*
         * Default property values.
         */
        defaults = {
          /**
           * Possible options: fade, fadeAndPop, none
           *
           * @property animation
           * @type {String}
           * @default fadeAndPop
           */
          animation: 'fadeAndPop',
          /**
           * Speed at which the reveal should show. How fast animtions are.
           *
           * @property animationSpeed
           * @type {Integer}
           * @default 300
           */
          animationSpeed: 300,
          /**
           * Should the modal close when the background is clicked?
           *
           * @property closeOnBackgroundClick
           * @type {Boolean}
           * @default true
           */
          closeOnBackgroundClick: true,
          /**
           * Specify a class name for the 'close modal' element.
           * This element will close an open modal.
           *
           @example
           <a href='#close' class='close-reveal-modal'>Close Me</a>
           *
           * @property dismissModalClass
           * @type {String}
           * @default close-reveal-modal
           */
          dismissModalClass: 'close-reveal-modal',
          /**
           * Specify a callback function that triggers 'before' the modal opens.
           *
           * @property open
           * @type {Function}
           * @default function(){}
           */
          open: $.noop,
          /**
           * Specify a callback function that triggers 'after' the modal is opened.
           *
           * @property opened
           * @type {Function}
           * @default function(){}
           */
          opened: $.noop,
          /**
           * Specify a callback function that triggers 'before' the modal prepares to close.
           *
           * @property close
           * @type {Function}
           * @default function(){}
           */
          close: $.noop,
          /**
           * Specify a callback function that triggers 'after' the modal is closed.
           *
           * @property closed
           * @type {Function}
           * @default function(){}
           */
          closed: $.noop
        }
    ;
    //
    // Extend the default options.
    // This replaces the passed in option (options) values with default values.
    //
    options = $.extend( {}, defaults, options );
 
    //
    // Apply the plugin functionality to each element in the jQuery collection.
    //
    return this.not('.reveal-modal.open').each( function () {
        //
        // Cache the modal element
        //
      var modal = $( this ),
        //
        // Get the current css 'top' property value in decimal format.
        //
        topMeasure = parseInt( modal.css( 'top' ), 10 ),
        //
        // Calculate the top offset.
        //
        topOffset = modal.height() + topMeasure,
        //
        // Helps determine if the modal is locked.
        // This way we keep the modal from triggering while it's in the middle of animating.
        //
        locked = false,
        //
        // Get the modal background element.
        //
        modalBg = $( '.reveal-modal-bg' ),
        //
        // Show modal properties
        //
        cssOpts = {
          //
          // Used, when we show the modal.
          //
          open : {
            //
            // Set the 'top' property to the document scroll minus the calculated top offset.
            //
            'top': 0,
            //
            // Opacity gets set to 0.
            //
            'opacity': 0,
            //
            // Show the modal
            //
            'visibility': 'visible',
            //
            // Ensure it's displayed as a block element.
            //
            'display': 'block'
          },
          //
          // Used, when we hide the modal.
          //
          close : {
            //
            // Set the default 'top' property value.
            //
            'top': topMeasure,
            //
            // Has full opacity.
            //
            'opacity': 1,
            //
            // Hide the modal
            //
            'visibility': 'hidden',
            //
            // Ensure the elment is hidden.
            //
            'display': 'none'
          }
 
        },
        //
        // Initial closeButton variable.
        //
        $closeButton
      ;
 
      //
      // Do we have a modal background element?
      //
      if ( modalBg.length === 0 ) {
        //
        // No we don't. So, let's create one.
        //
        modalBg = $( '<div />', { 'class' : 'reveal-modal-bg' } )
        //
        // Then insert it after the modal element.
        //
        .insertAfter( modal );
        //
        // Now, fade it out a bit.
        //
        modalBg.fadeTo( 'fast', 0.8 );
      }
 
      //
      // Helper Methods
      //
 
      /**
       * Unlock the modal for animation.
       *
       * @method unlockModal
       */
      function unlockModal() {
        locked = false;
      }
 
      /**
       * Lock the modal to prevent further animation.
       *
       * @method lockModal
       */
      function lockModal() {
        locked = true;
      }
 
      /**
       * Closes all open modals.
       *
       * @method closeOpenModal
       */
      function closeOpenModals() {
        //
        // Get all reveal-modal elements with the .open class.
        //
        var $openModals = $( ".reveal-modal.open" );
        //
        // Do we have modals to close?
        //
        if ( $openModals.length === 1 ) {
          //
          // Set the modals for animation queuing.
          //
          modalQueued = true;
          //
          // Trigger the modal close event.
          //
          $openModals.trigger( "reveal:close" );
        }
 
      }
      /**
       * Animates the modal opening.
       * Handles the modal 'open' event.
       *
       * @method openAnimation
       */
      function openAnimation() {
        //
        // First, determine if we're in the middle of animation.
        //
        if ( !locked ) {
          //
          // We're not animating, let's lock the modal for animation.
          //
          lockModal();
          //
          // Close any opened modals.
          //
          closeOpenModals();
          //
          // Now, add the open class to this modal.
          //
          modal.addClass( "open" );
 
          //
          // Are we executing the 'fadeAndPop' animation?
          //
          if ( options.animation === "fadeAndPop" ) {
            //
            // Yes, we're doing the 'fadeAndPop' animation.
            // Okay, set the modal css properties.
            //
            //
            // Set the 'top' property to the document scroll minus the calculated top offset.
            //
            cssOpts.open.top = $doc.scrollTop() - topOffset;
            //
            // Flip the opacity to 0.
            //
            cssOpts.open.opacity = 0;
            //
            // Set the css options.
            //
            modal.css( cssOpts.open );
            //
            // Fade in the background element, at half the speed of the modal element.
            // So, faster than the modal element.
            //
            modalBg.fadeIn( options.animationSpeed / 2 );
 
            //
            // Let's delay the next animation queue.
            // We'll wait until the background element is faded in.
            //
            modal.delay( options.animationSpeed / 2 )
            //
            // Animate the following css properties.
            //
            .animate( {
              //
              // Set the 'top' property to the document scroll plus the calculated top measure.
              //
              "top": $doc.scrollTop() + topMeasure + 'px',
              //
              // Set it to full opacity.
              //
              "opacity": 1
 
            },
            /*
             * Fade speed.
             */
            options.animationSpeed,
            /*
             * End of animation callback.
             */
            function () {
              //
              // Trigger the modal reveal:opened event.
              // This should trigger the functions set in the options.opened property.
              //
              modal.trigger( 'reveal:opened' );
 
            }); // end of animate.
 
          } // end if 'fadeAndPop'
 
          //
          // Are executing the 'fade' animation?
          //
          if ( options.animation === "fade" ) {
            //
            // Yes, were executing 'fade'.
            // Okay, let's set the modal properties.
            //
            cssOpts.open.top = $doc.scrollTop() + topMeasure;
            //
            // Flip the opacity to 0.
            //
            cssOpts.open.opacity = 0;
            //
            // Set the css options.
            //
            modal.css( cssOpts.open );
            //
            // Fade in the modal background at half the speed of the modal.
            // So, faster than modal.
            //
            modalBg.fadeIn( options.animationSpeed / 2 );
 
            //
            // Delay the modal animation.
            // Wait till the modal background is done animating.
            //
            modal.delay( options.animationSpeed / 2 )
            //
            // Now animate the modal.
            //
            .animate( {
              //
              // Set to full opacity.
              //
              "opacity": 1
            },
 
            /*
             * Animation speed.
             */
            options.animationSpeed,
 
            /*
             * End of animation callback.
             */
            function () {
              //
              // Trigger the modal reveal:opened event.
              // This should trigger the functions set in the options.opened property.
              //
              modal.trigger( 'reveal:opened' );
 
            });
 
          } // end if 'fade'
 
          //
          // Are we not animating?
          //
          if ( options.animation === "none" ) {
            //
            // We're not animating.
            // Okay, let's set the modal css properties.
            //
            //
            // Set the top property.
            //
            cssOpts.open.top = $doc.scrollTop() + topMeasure;
            //
            // Set the opacity property to full opacity, since we're not fading (animating).
            //
            cssOpts.open.opacity = 1;
            //
            // Set the css property.
            //
            modal.css( cssOpts.open );
            //
            // Show the modal Background.
            //
            modalBg.css( { "display": "block" } );
            //
            // Trigger the modal opened event.
            //
            modal.trigger( 'reveal:opened' );
 
          } // end if animating 'none'
 
        }// end if !locked
 
      }// end openAnimation
 
 
      function openVideos() {
        var video = modal.find('.flex-video'),
            iframe = video.find('iframe');
        if (iframe.length > 0) {
          iframe.attr("src", iframe.data("src"));
          video.fadeIn(100);
        }
      }
 
      //
      // Bind the reveal 'open' event.
      // When the event is triggered, openAnimation is called
      // along with any function set in the options.open property.
      //
      modal.bind( 'reveal:open.reveal', openAnimation );
      modal.bind( 'reveal:open.reveal', openVideos);
 
      /**
       * Closes the modal element(s)
       * Handles the modal 'close' event.
       *
       * @method closeAnimation
       */
      function closeAnimation() {
        //
        // First, determine if we're in the middle of animation.
        //
        if ( !locked ) {
          //
          // We're not animating, let's lock the modal for animation.
          //
          lockModal();
          //
          // Clear the modal of the open class.
          //
          modal.removeClass( "open" );
 
          //
          // Are we using the 'fadeAndPop' animation?
          //
          if ( options.animation === "fadeAndPop" ) {
            //
            // Yes, okay, let's set the animation properties.
            //
            modal.animate( {
              //
              // Set the top property to the document scrollTop minus calculated topOffset.
              //
              "top":  $doc.scrollTop() - topOffset + 'px',
              //
              // Fade the modal out, by using the opacity property.
              //
              "opacity": 0
 
            },
            /*
             * Fade speed.
             */
            options.animationSpeed / 2,
            /*
             * End of animation callback.
             */
            function () {
              //
              // Set the css hidden options.
              //
              modal.css( cssOpts.close );
 
            });
            //
            // Is the modal animation queued?
            //
            if ( !modalQueued ) {
              //
              // Oh, the modal(s) are mid animating.
              // Let's delay the animation queue.
              //
              modalBg.delay( options.animationSpeed )
              //
              // Fade out the modal background.
              //
              .fadeOut(
              /*
               * Animation speed.
               */
              options.animationSpeed,
             /*
              * End of animation callback.
              */
              function () {
                //
                // Trigger the modal 'closed' event.
                // This should trigger any method set in the options.closed property.
                //
                modal.trigger( 'reveal:closed' );
 
              });
 
            } else {
              //
              // We're not mid queue.
              // Trigger the modal 'closed' event.
              // This should trigger any method set in the options.closed propety.
              //
              modal.trigger( 'reveal:closed' );
 
            } // end if !modalQueued
 
          } // end if animation 'fadeAndPop'
 
          //
          // Are we using the 'fade' animation.
          //
          if ( options.animation === "fade" ) {
            //
            // Yes, we're using the 'fade' animation.
            //
            modal.animate( { "opacity" : 0 },
              /*
               * Animation speed.
               */
              options.animationSpeed,
              /*
               * End of animation callback.
               */
              function () {
              //
              // Set the css close options.
              //
              modal.css( cssOpts.close );
 
            }); // end animate
 
            //
            // Are we mid animating the modal(s)?
            //
            if ( !modalQueued ) {
              //
              // Oh, the modal(s) are mid animating.
              // Let's delay the animation queue.
              //
              modalBg.delay( options.animationSpeed )
              //
              // Let's fade out the modal background element.
              //
              .fadeOut(
              /*
               * Animation speed.
               */
              options.animationSpeed,
                /*
                 * End of animation callback.
                 */
                function () {
                  //
                  // Trigger the modal 'closed' event.
                  // This should trigger any method set in the options.closed propety.
                  //
                  modal.trigger( 'reveal:closed' );
 
              }); // end fadeOut
 
            } else {
              //
              // We're not mid queue.
              // Trigger the modal 'closed' event.
              // This should trigger any method set in the options.closed propety.
              //
              modal.trigger( 'reveal:closed' );
 
            } // end if !modalQueued
 
          } // end if animation 'fade'
 
          //
          // Are we not animating?
          //
          if ( options.animation === "none" ) {
            //
            // We're not animating.
            // Set the modal close css options.
            //
            modal.css( cssOpts.close );
            //
            // Is the modal in the middle of an animation queue?
            //
            if ( !modalQueued ) {
              //
              // It's not mid queueu. Just hide it.
              //
              modalBg.css( { 'display': 'none' } );
            }
            //
            // Trigger the modal 'closed' event.
            // This should trigger any method set in the options.closed propety.
            //
            modal.trigger( 'reveal:closed' );
 
          } // end if not animating
          //
          // Reset the modalQueued variable.
          //
          modalQueued = false;
        } // end if !locked
 
      } // end closeAnimation
 
      /**
       * Destroys the modal and it's events.
       *
       * @method destroy
       */
      function destroy() {
        //
        // Unbind all .reveal events from the modal.
        //
        modal.unbind( '.reveal' );
        //
        // Unbind all .reveal events from the modal background.
        //
        modalBg.unbind( '.reveal' );
        //
        // Unbind all .reveal events from the modal 'close' button.
        //
        $closeButton.unbind( '.reveal' );
        //
        // Unbind all .reveal events from the body.
        //
        $( 'body' ).unbind( '.reveal' );
 
      }
 
      function closeVideos() {
        var video = modal.find('.flex-video'),
            iframe = video.find('iframe');
        if (iframe.length > 0) {
          iframe.data("src", iframe.attr("src"));
          iframe.attr("src", "");
          video.fadeOut(100);  
        }
      }
 
      //
      // Bind the modal 'close' event
      //
      modal.bind( 'reveal:close.reveal', closeAnimation );
      modal.bind( 'reveal:closed.reveal', closeVideos );
      //
      // Bind the modal 'opened' + 'closed' event
      // Calls the unlockModal method.
      //
      modal.bind( 'reveal:opened.reveal reveal:closed.reveal', unlockModal );
      //
      // Bind the modal 'closed' event.
      // Calls the destroy method.
      //
      modal.bind( 'reveal:closed.reveal', destroy );
      //
      // Bind the modal 'open' event
      // Handled by the options.open property function.
      //
      modal.bind( 'reveal:open.reveal', options.open );
      //
      // Bind the modal 'opened' event.
      // Handled by the options.opened property function.
      //
      modal.bind( 'reveal:opened.reveal', options.opened );
      //
      // Bind the modal 'close' event.
      // Handled by the options.close property function.
      //
      modal.bind( 'reveal:close.reveal', options.close );
      //
      // Bind the modal 'closed' event.
      // Handled by the options.closed property function.
      //
      modal.bind( 'reveal:closed.reveal', options.closed );
 
      //
      // We're running this for the first time.
      // Trigger the modal 'open' event.
      //
      modal.trigger( 'reveal:open' );
 
      //
      // Get the closeButton variable element(s).
      //
     $closeButton = $( '.' + options.dismissModalClass )
     //
     // Bind the element 'click' event and handler.
     //
     .bind( 'click.reveal', function () {
        //
        // Trigger the modal 'close' event.
        //
        modal.trigger( 'reveal:close' );
 
      });
 
     //
     // Should we close the modal background on click?
     //
     if ( options.closeOnBackgroundClick ) {
      //
      // Yes, close the modal background on 'click'
      // Set the modal background css 'cursor' propety to pointer.
      // Adds a pointer symbol when you mouse over the modal background.
      //
      modalBg.css( { "cursor": "pointer" } );
      //
      // Bind a 'click' event handler to the modal background.
      //
      modalBg.bind( 'click.reveal', function () {
        //
        // Trigger the modal 'close' event.
        //
        modal.trigger( 'reveal:close' );
 
      });
 
     }
 
     //
     // Bind keyup functions on the body element.
     // We'll want to close the modal when the 'escape' key is hit.
     //
     $( 'body' ).bind( 'keyup.reveal', function ( event ) {
      //
      // Did the escape key get triggered?
      //
       if ( event.which === 27 ) { // 27 is the keycode for the Escape key
         //
         // Escape key was triggered.
         // Trigger the modal 'close' event.
         //
         modal.trigger( 'reveal:close' );
       }
 
      }); // end $(body)
 
    }); // end this.each
 
  }; // end $.fn
 
} ( jQuery ) );;
/*
 * jQuery Orbit Plugin 1.4.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
 
(function ($) {
  'use strict';
 
  $.fn.findFirstImage = function () {
    return this.first()
            .find('img')
            .andSelf().filter('img')
            .first();
  };
 
  var ORBIT = {
 
    defaults: {
      animation: 'horizontal-push',     // fade, horizontal-slide, vertical-slide, horizontal-push, vertical-push
      animationSpeed: 600,              // how fast animations are
      timer: true,                      // display timer?
      advanceSpeed: 4000,               // if timer is enabled, time between transitions
      pauseOnHover: false,              // if you hover pauses the slider
      startClockOnMouseOut: false,      // if clock should start on MouseOut
      startClockOnMouseOutAfter: 1000,  // how long after MouseOut should the timer start again
      directionalNav: true,             // manual advancing directional navs
      directionalNavRightText: 'Right', // text of right directional element for accessibility
      directionalNavLeftText: 'Left',   // text of left directional element for accessibility
      captions: true,                   // do you want captions?
      captionAnimation: 'fade',         // fade, slideOpen, none
      captionAnimationSpeed: 600,       // if so how quickly should they animate in
      resetTimerOnClick: false,         // true resets the timer instead of pausing slideshow progress on manual navigation
      bullets: false,                   // true or false to activate the bullet navigation
      bulletThumbs: false,              // thumbnails for the bullets
      bulletThumbLocation: '',          // relative path to thumbnails from this file
      afterSlideChange: $.noop,         // callback to execute after slide changes
      afterLoadComplete: $.noop,        // callback to execute after everything has been loaded
      fluid: true,
      centerBullets: true,              // center bullet nav with js, turn this off if you want to position the bullet nav manually
      singleCycle: false,               // cycles through orbit slides only once
      slideNumber: false,               // display slide numbers?
      stackOnSmall: false               // stack slides on small devices (i.e. phones)
    },
 
    activeSlide: 0,
    numberSlides: 0,
    orbitWidth: null,
    orbitHeight: null,
    locked: null,
    timerRunning: null,
    degrees: 0,
    wrapperHTML: '<div class="orbit-wrapper" />',
    timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',
    captionHTML: '<div class="orbit-caption"></div>',
    directionalNavHTML: '<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>',
    bulletHTML: '<ul class="orbit-bullets"></ul>',
    slideNumberHTML: '<span class="orbit-slide-counter"></span>',
 
    init: function (element, options) {
      var $imageSlides,
          imagesLoadedCount = 0,
          self = this;
 
      // Bind functions to correct context
      this.clickTimer = $.proxy(this.clickTimer, this);
      this.addBullet = $.proxy(this.addBullet, this);
      this.resetAndUnlock = $.proxy(this.resetAndUnlock, this);
      this.stopClock = $.proxy(this.stopClock, this);
      this.startTimerAfterMouseLeave = $.proxy(this.startTimerAfterMouseLeave, this);
      this.clearClockMouseLeaveTimer = $.proxy(this.clearClockMouseLeaveTimer, this);
      this.rotateTimer = $.proxy(this.rotateTimer, this);
 
      this.options = $.extend({}, this.defaults, options);
      if (this.options.timer === 'false') this.options.timer = false;
      if (this.options.captions === 'false') this.options.captions = false;
      if (this.options.directionalNav === 'false') this.options.directionalNav = false;
 
      this.$element = $(element);
      this.$wrapper = this.$element.wrap(this.wrapperHTML).parent();
      this.$slides = this.$element.children('img, a, div, figure');
 
      this.$element.on('movestart', function(e) {
        // If the movestart is heading off in an upwards or downwards
        // direction, prevent it so that the browser scrolls normally.
        if ((e.distX > e.distY && e.distX < -e.distY) ||
            (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
        }
      });
 
      this.$element.bind('orbit.next swipeleft', function () {
        self.shift('next');
      });
 
      this.$element.bind('orbit.prev swiperight', function () {
        self.shift('prev');
      });
 
      this.$element.bind('orbit.goto', function (event, index) {
        self.shift(index);
      });
 
      this.$element.bind('orbit.start', function (event, index) {
        self.startClock();
      });
 
      this.$element.bind('orbit.stop', function (event, index) {
        self.stopClock();
      });
 
      $imageSlides = this.$slides.filter('img');
 
      if ($imageSlides.length === 0) {
        this.loaded();
      } else {
        $imageSlides.bind('imageready', function () {
          imagesLoadedCount += 1;
          if (imagesLoadedCount === $imageSlides.length) {
            self.loaded();
          }
        });
      }
    },
 
    loaded: function () {
      this.$element
        .addClass('orbit')
        .css({width: '1px', height: '1px'});
 
      if (this.options.stackOnSmall) {
        this.$element.addClass('orbit-stack-on-small');
      }
 
      this.$slides.addClass('orbit-slide');
 
      this.setDimentionsFromLargestSlide();
      this.updateOptionsIfOnlyOneSlide();
      this.setupFirstSlide();
      this.notifySlideChange();
 
      if (this.options.timer) {
        this.setupTimer();
        this.startClock();
      }
 
      if (this.options.captions) {
        this.setupCaptions();
      }
 
      if (this.options.directionalNav) {
        this.setupDirectionalNav();
      }
 
      if (this.options.bullets) {
        this.setupBulletNav();
        this.setActiveBullet();
      }
 
      this.options.afterLoadComplete.call(this);
      Holder.run();
    },
 
    currentSlide: function () {
      return this.$slides.eq(this.activeSlide);
    },
 
    notifySlideChange: function() {
      if (this.options.slideNumber) {
        var txt = (this.activeSlide+1) + ' of ' + this.$slides.length;
        this.$element.trigger("orbit.change", {slideIndex: this.activeSlide, slideCount: this.$slides.length});
        if (this.$counter === undefined) {
          var $counter = $(this.slideNumberHTML).html(txt);
          this.$counter = $counter;
          this.$wrapper.append(this.$counter);
        } else {
          this.$counter.html(txt);
        }
      }
    },
 
    setDimentionsFromLargestSlide: function () {
      //Collect all slides and set slider size of largest image
      var self = this,
          $fluidPlaceholder;
 
      self.$element.add(self.$wrapper).width(this.$slides.first().outerWidth());
      self.$element.add(self.$wrapper).height(this.$slides.first().height());
      self.orbitWidth = this.$slides.first().outerWidth();
      self.orbitHeight = this.$slides.first().height();
      $fluidPlaceholder = this.$slides.first().findFirstImage().clone();
 
 
      this.$slides.each(function () {
        var slide = $(this),
            slideWidth = slide.outerWidth(),
            slideHeight = slide.height();
 
        if (slideWidth > self.$element.outerWidth()) {
          self.$element.add(self.$wrapper).width(slideWidth);
          self.orbitWidth = self.$element.outerWidth();
        }
        if (slideHeight > self.$element.height()) {
          self.$element.add(self.$wrapper).height(slideHeight);
          self.orbitHeight = self.$element.height();
          $fluidPlaceholder = $(this).findFirstImage().clone();
        }
        self.numberSlides += 1;
      });
 
      if (this.options.fluid) {
        if (typeof this.options.fluid === "string") {
          // $fluidPlaceholder = $("<img>").attr("src", "http://placehold.it/" + this.options.fluid);
          $fluidPlaceholder = $("<img>").attr("data-src", "holder.js/" + this.options.fluid);
          //var inner = $("<div/>").css({"display":"inline-block", "width":"2px", "height":"2px"});
          //$fluidPlaceholder = $("<div/>").css({"float":"left"});
          //$fluidPlaceholder.wrapInner(inner);
 
          //$fluidPlaceholder = $("<div/>").css({"height":"1px", "width":"2px"});
          //$fluidPlaceholder = $("<div style='display:inline-block;width:2px;height:1px;'></div>");
        }
 
        self.$element.prepend($fluidPlaceholder);
        $fluidPlaceholder.addClass('fluid-placeholder');
        self.$element.add(self.$wrapper).css({width: 'inherit'});
        self.$element.add(self.$wrapper).css({height: 'inherit'});
 
        $(window).bind('resize', function () {
          self.orbitWidth = self.$element.outerWidth();
          self.orbitHeight = self.$element.height();
        });
      }
    },
 
    //Animation locking functions
    lock: function () {
      this.locked = true;
    },
 
    unlock: function () {
      this.locked = false;
    },
 
    updateOptionsIfOnlyOneSlide: function () {
      if(this.$slides.length === 1) {
        this.options.directionalNav = false;
        this.options.timer = false;
        this.options.bullets = false;
      }
    },
 
    setupFirstSlide: function () {
      //Set initial front photo z-index and fades it in
      var self = this;
      this.$slides.first()
        .css({"z-index" : 3, "opacity" : 1})
        .fadeIn(function() {
          //brings in all other slides IF css declares a display: none
          self.$slides.css({"display":"block"})
      });
    },
 
    startClock: function () {
      var self = this;
 
      if(!this.options.timer) {
        return false;
      }
 
      if (this.$timer.is(':hidden')) {
        this.clock = setInterval(function () {
          self.$element.trigger('orbit.next');
        }, this.options.advanceSpeed);
      } else {
        this.timerRunning = true;
        this.$pause.removeClass('active');
        this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, false);
      }
    },
 
    rotateTimer: function (reset) {
      var degreeCSS = "rotate(" + this.degrees + "deg)";
      this.degrees += 2;
      this.$rotator.css({
        "-webkit-transform": degreeCSS,
        "-moz-transform": degreeCSS,
        "-o-transform": degreeCSS,
        "-ms-transform": degreeCSS
      });
      if(this.degrees > 180) {
        this.$rotator.addClass('move');
        this.$mask.addClass('move');
      }
      if(this.degrees > 360 || reset) {
        this.$rotator.removeClass('move');
        this.$mask.removeClass('move');
        this.degrees = 0;
        this.$element.trigger('orbit.next');
      }
    },
 
    stopClock: function () {
      if (!this.options.timer) {
        return false;
      } else {
        this.timerRunning = false;
        clearInterval(this.clock);
        this.$pause.addClass('active');
      }
    },
 
    setupTimer: function () {
      this.$timer = $(this.timerHTML);
      this.$wrapper.append(this.$timer);
 
      this.$rotator = this.$timer.find('.rotator');
      this.$mask = this.$timer.find('.mask');
      this.$pause = this.$timer.find('.pause');
 
      this.$timer.click(this.clickTimer);
 
      if (this.options.startClockOnMouseOut) {
        this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);
        this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer);
      }
 
      if (this.options.pauseOnHover) {
        this.$wrapper.mouseenter(this.stopClock);
      }
    },
 
    startTimerAfterMouseLeave: function () {
      var self = this;
 
      this.outTimer = setTimeout(function() {
        if(!self.timerRunning){
          self.startClock();
        }
      }, this.options.startClockOnMouseOutAfter)
    },
 
    clearClockMouseLeaveTimer: function () {
      clearTimeout(this.outTimer);
    },
 
    clickTimer: function () {
      if(!this.timerRunning) {
          this.startClock();
      } else {
          this.stopClock();
      }
    },
 
    setupCaptions: function () {
      this.$caption = $(this.captionHTML);
      this.$wrapper.append(this.$caption);
      this.setCaption();
    },
 
    setCaption: function () {
      var captionLocation = this.currentSlide().attr('data-caption'),
          captionHTML;
 
      if (!this.options.captions) {
        return false;
      }
 
      //Set HTML for the caption if it exists
      if (captionLocation) {
        //if caption text is blank, don't show captions
        if ($.trim($(captionLocation).text()).length < 1){
          return false;
        }
        captionHTML = $(captionLocation).html(); //get HTML from the matching HTML entity
        this.$caption
          .attr('id', captionLocation) // Add ID caption TODO why is the id being set?
          .html(captionHTML); // Change HTML in Caption
          //Animations for Caption entrances
        switch (this.options.captionAnimation) {
          case 'none':
            this.$caption.show();
            break;
          case 'fade':
            this.$caption.fadeIn(this.options.captionAnimationSpeed);
            break;
          case 'slideOpen':
            this.$caption.slideDown(this.options.captionAnimationSpeed);
            break;
        }
      } else {
        //Animations for Caption exits
        switch (this.options.captionAnimation) {
          case 'none':
            this.$caption.hide();
            break;
          case 'fade':
            this.$caption.fadeOut(this.options.captionAnimationSpeed);
            break;
          case 'slideOpen':
            this.$caption.slideUp(this.options.captionAnimationSpeed);
            break;
        }
      }
    },
 
    setupDirectionalNav: function () {
      var self = this,
          $directionalNav = $(this.directionalNavHTML);
 
      $directionalNav.find('.right').html(this.options.directionalNavRightText);
      $directionalNav.find('.left').html(this.options.directionalNavLeftText);
 
      this.$wrapper.append($directionalNav);
 
      this.$wrapper.find('.left').click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.prev');
      });
 
      this.$wrapper.find('.right').click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.next');
      });
    },
 
    setupBulletNav: function () {
      this.$bullets = $(this.bulletHTML);
      this.$wrapper.append(this.$bullets);
      this.$slides.each(this.addBullet);
      this.$element.addClass('with-bullets');
      if (this.options.centerBullets) this.$bullets.css('margin-left', -this.$bullets.outerWidth() / 2);
    },
 
    addBullet: function (index, slide) {
      var position = index + 1,
          $li = $('<li>' + (position) + '</li>'),
          thumbName,
          self = this;
 
      if (this.options.bulletThumbs) {
        thumbName = $(slide).attr('data-thumb');
        if (thumbName) {
          $li
            .addClass('has-thumb')
            .css({background: "url(" + this.options.bulletThumbLocation + thumbName + ") no-repeat"});;
        }
      }
      this.$bullets.append($li);
      $li.data('index', index);
      $li.click(function () {
        self.stopClock();
        if (self.options.resetTimerOnClick) {
          self.rotateTimer(true);
          self.startClock();
        }
        self.$element.trigger('orbit.goto', [$li.data('index')])
      });
    },
 
    setActiveBullet: function () {
      if(!this.options.bullets) { return false; } else {
        this.$bullets.find('li')
          .removeClass('active')
          .eq(this.activeSlide)
          .addClass('active');
      }
    },
 
    resetAndUnlock: function () {
      this.$slides
        .eq(this.prevActiveSlide)
        .css({"z-index" : 1});
      this.unlock();
      this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide));
    },
 
    shift: function (direction) {
      var slideDirection = direction;
 
      //remember previous activeSlide
      this.prevActiveSlide = this.activeSlide;
 
      //exit function if bullet clicked is same as the current image
      if (this.prevActiveSlide == slideDirection) { return false; }
 
      if (this.$slides.length == "1") { return false; }
      if (!this.locked) {
        this.lock();
        //deduce the proper activeImage
        if (direction == "next") {
          this.activeSlide++;
          if (this.activeSlide == this.numberSlides) {
              this.activeSlide = 0;
          }
        } else if (direction == "prev") {
          this.activeSlide--
          if (this.activeSlide < 0) {
            this.activeSlide = this.numberSlides - 1;
          }
        } else {
          this.activeSlide = direction;
          if (this.prevActiveSlide < this.activeSlide) {
            slideDirection = "next";
          } else if (this.prevActiveSlide > this.activeSlide) {
            slideDirection = "prev"
          }
        }
 
        //set to correct bullet
        this.setActiveBullet();
        this.notifySlideChange();
 
        //set previous slide z-index to one below what new activeSlide will be
        this.$slides
          .eq(this.prevActiveSlide)
          .css({"z-index" : 2});
 
        //fade
        if (this.options.animation == "fade") {
          this.$slides
            .eq(this.activeSlide)
            .css({"opacity" : 0, "z-index" : 3})
            .animate({"opacity" : 1}, this.options.animationSpeed, this.resetAndUnlock);
          this.$slides
              .eq(this.prevActiveSlide)
              .animate({"opacity":0}, this.options.animationSpeed);
        }
 
        //horizontal-slide
        if (this.options.animation == "horizontal-slide") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": this.orbitWidth, "z-index" : 3})
              .css("opacity", 1)
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": -this.orbitWidth, "z-index" : 3})
              .css("opacity", 1)
              .animate({"left" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
          this.$slides
              .eq(this.prevActiveSlide)
              .css("opacity", 0);
        }
 
        //vertical-slide
        if (this.options.animation == "vertical-slide") {
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"top": this.orbitHeight, "z-index" : 3})
              .css("opacity", 1)
              .animate({"top" : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .css("opacity", 0);
          }
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"top": -this.orbitHeight, "z-index" : 3})
              .css("opacity", 1)
              .animate({"top" : 0}, this.options.animationSpeed, this.resetAndUnlock);
          }
          this.$slides
              .eq(this.prevActiveSlide)
              .css("opacity", 0);
        }
 
        //horizontal-push
        if (this.options.animation == "horizontal-push") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0, "opacity" : 1}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({"left" : -this.orbitWidth}, this.options.animationSpeed, "", function(){
                $(this).css({"opacity" : 0});
              });
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({"left": -this.orbitWidth, "z-index" : 3})
              .animate({"left" : 0, "opacity" : 1}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .animate({"left" : this.orbitWidth}, this.options.animationSpeed, "", function(){
                $(this).css({"opacity" : 0});
              });
          }
        }
 
        //vertical-push
        if (this.options.animation == "vertical-push") {
          if (slideDirection == "next") {
            this.$slides
              .eq(this.activeSlide)
              .css({top: -this.orbitHeight, "z-index" : 3})
              .css("opacity", 1)
              .animate({top : 0, "opacity":1}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .css("opacity", 0)
              .animate({top : this.orbitHeight}, this.options.animationSpeed, "");
          }
          if (slideDirection == "prev") {
            this.$slides
              .eq(this.activeSlide)
              .css({top: this.orbitHeight, "z-index" : 3})
              .css("opacity", 1)
              .animate({top : 0}, this.options.animationSpeed, this.resetAndUnlock);
            this.$slides
              .eq(this.prevActiveSlide)
              .css("opacity", 0)
              .animate({top : -this.orbitHeight}, this.options.animationSpeed);
          }
        }
 
        this.setCaption();
      }
 
      if (this.$slides.last() && this.options.singleCycle) {
        this.stopClock();
      }
    }
  };
 
  $.fn.orbit = function (options) {
    return this.each(function () {
      var orbit = $.extend({}, ORBIT);
      orbit.init(this, options);
    });
  };
 
})(jQuery);
 
/*!
 * jQuery imageready Plugin
 * http://www.zurb.com/playground/
 *
 * Copyright 2011, ZURB
 * Released under the MIT License
 */
(function ($) {
 
  var options = {};
 
  $.event.special.imageready = {
 
    setup: function (data, namespaces, eventHandle) {
      options = data || options;
    },
 
    add: function (handleObj) {
      var $this = $(this),
          src;
 
      if ( this.nodeType === 1 && this.tagName.toLowerCase() === 'img' && this.src !== '' ) {
        if (options.forceLoad) {
          src = $this.attr('src');
          $this.attr('src', '');
          bindToLoad(this, handleObj.handler);
          $this.attr('src', src);
        } else if ( this.complete || this.readyState === 4 ) {
          handleObj.handler.apply(this, arguments);
        } else {
          bindToLoad(this, handleObj.handler);
        }
      }
    },
 
    teardown: function (namespaces) {
      $(this).unbind('.imageready');
    }
  };
 
  function bindToLoad(element, callback) {
    var $this = $(element);
 
    $this.bind('load.imageready', function () {
       callback.apply(element, arguments);
       $this.unbind('load.imageready');
     });
  }
 
}(jQuery));
 
/*
 
Holder - 1.3 - client side image placeholders
(c) 2012 Ivan Malopinsky / http://imsky.co
 
Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.
 
*/
 
var Holder = Holder || {};
(function (app, win) {
 
var preempted = false,
fallback = false,
canvas = document.createElement('canvas');
 
//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}};
 
//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a){
    a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
    var ret=[]; b!=null&&(b.length?ret=b:b.length==0?ret=b:ret=[b]);    return ret;
}
 
//shallow object property extend
function extend(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}
 
function draw(ctx, dimensions, template) {
    var dimension_arr = [dimensions.height, dimensions.width].sort();
    var maxFactor = Math.round(dimension_arr[1] / 16),
        minFactor = Math.round(dimension_arr[0] / 16);
    var text_height = Math.max(template.size, maxFactor);
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = template.background;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);
    ctx.fillStyle = template.foreground;
    ctx.font = "bold " + text_height + "px sans-serif";
    var text = template.text ? template.text : (dimensions.width + "x" + dimensions.height);
    if (Math.round(ctx.measureText(text).width) / dimensions.width > 1) {
        text_height = Math.max(minFactor, template.size);
    }
    ctx.font = "bold " + text_height + "px sans-serif";
    ctx.fillText(text, (dimensions.width / 2), (dimensions.height / 2), dimensions.width);
    return canvas.toDataURL("image/png");
}
 
if (!canvas.getContext) {
    fallback = true;
} else {
    if (canvas.toDataURL("image/png").indexOf("data:image/png") < 0) {
        //Android doesn't support data URI
        fallback = true;
    } else {
        var ctx = canvas.getContext("2d");
    }
}
 
var settings = {
    domain: "holder.js",
    images: "img",
    themes: {
        "gray": {
            background: "#eee",
            foreground: "#aaa",
            size: 12
        },
        "social": {
            background: "#3a5a97",
            foreground: "#fff",
            size: 12
        },
        "industrial": {
            background: "#434A52",
            foreground: "#C2F200",
            size: 12
        }
    }
};
 
 
 
app.flags = {
    dimensions: {
        regex: /([0-9]+)x([0-9]+)/,
        output: function(val){
            var exec = this.regex.exec(val);
            return {
                width: +exec[1],
                height: +exec[2]
            }
        }
    },
    colors: {
        regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
        output: function(val){
            var exec = this.regex.exec(val);
            return {
                    size: settings.themes.gray.size,
                    foreground: "#" + exec[2],
                    background: "#" + exec[1]
                    }
        }
    },
    text: {
        regex: /text\:(.*)/,
        output: function(val){
            return this.regex.exec(val)[1];
        }
    }
}
 
for(var flag in app.flags){
    app.flags[flag].match = function (val){
        return val.match(this.regex)
    }
}
 
app.add_theme = function (name, theme) {
    name != null && theme != null && (settings.themes[name] = theme);
    return app;
};
 
app.add_image = function (src, el) {
    var node = selector(el);
    if (node.length) {
        for (var i = 0, l = node.length; i < l; i++) {
            var img = document.createElement("img")
            img.setAttribute("data-src", src);
            node[i].appendChild(img);
        }
    }
    return app;
};
 
app.run = function (o) {
    var options = extend(settings, o),
        images = selector(options.images),
        preempted = true;
 
    for (var l = images.length, i = 0; i < l; i++) {
        var theme = settings.themes.gray;
        var src = images[i].getAttribute("data-src") || images[i].getAttribute("src");
        if ( !! ~src.indexOf(options.domain)) {
            var render = false,
                dimensions = null,
                text = null;
            var flags = src.substr(src.indexOf(options.domain) + options.domain.length + 1).split("/");
            for (sl = flags.length, j = 0; j < sl; j++) {
                if (app.flags.dimensions.match(flags[j])) {
                    render = true;
                    dimensions = app.flags.dimensions.output(flags[j]);
                } else if (app.flags.colors.match(flags[j])) {
                    theme = app.flags.colors.output(flags[j]);
                } else if (options.themes[flags[j]]) {
                    //If a theme is specified, it will override custom colors
                    theme = options.themes[flags[j]];
                } else if (app.flags.text.match(flags[j])) {
                    text = app.flags.text.output(flags[j]);
                }
            }
            if (render) {
                images[i].setAttribute("data-src", src);
                var dimensions_caption = dimensions.width + "x" + dimensions.height;
                images[i].setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);
 
                // Fallback
        // images[i].style.width = dimensions.width + "px";
        // images[i].style.height = dimensions.height + "px";
                images[i].style.backgroundColor = theme.background;
 
                var theme = (text ? extend(theme, {
                        text: text
                    }) : theme);
 
                if (!fallback) {
                    images[i].setAttribute("src", draw(ctx, dimensions, theme));
                }
            }
        }
    }
    return app;
};
contentLoaded(win, function () {
    preempted || app.run()
})
 
})(Holder, window);
;
/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
jQuery.foundation = jQuery.foundation || {};
jQuery.foundation.customForms = jQuery.foundation.customForms || {};
 
jQuery(document).ready(function ($) {
 
  function appendCustomMarkup(type) {
    $('form.custom input:' + type).each(function () {
 
      var $this = $(this).hide(),
          $span = $this.next('span.custom.' + type);
 
      if ($span.length === 0) {
        $span = $('<span class="custom ' + type + '"></span>').insertAfter($this);
      }
 
      $span.toggleClass('checked', $this.is(':checked'));
      $span.toggleClass('disabled', $this.is(':disabled'));
    });
  }
 
  function appendCustomSelect(sel) {
    var $this = $(sel),
        $customSelect = $this.next('div.custom.dropdown'),
        $options = $this.find('option'),
        maxWidth = 0,
        $li;
 
    if ($this.hasClass('no-custom')) { return; }
    if ($customSelect.length === 0) {
      $customSelectSize = '';
      if ($(sel).hasClass('small')) {
        $customSelectSize = 'small';
      } else if ($(sel).hasClass('medium')) {
        $customSelectSize = 'medium';
      } else if ($(sel).hasClass('large')) {
        $customSelectSize = 'large';
      } else if ($(sel).hasClass('expand')) {
        $customSelectSize = 'expand';
      }
      $customSelect = $('<div class="custom dropdown ' + $customSelectSize + '"><a href="#" class="selector"></a><ul></ul></div>"');
      $options.each(function () {
        $li = $('<li>' + $(this).html() + '</li>');
        $customSelect.find('ul').append($li);
      });
      $customSelect.prepend('<a href="#" class="current">' + $options.first().html() + '</a>');
 
      $this.after($customSelect);
      $this.hide();
 
    } else {
      // refresh the ul with options from the select in case the supplied markup doesn't match
      $customSelect.find('ul').html('');
      $options.each(function () {
        $li = $('<li>' + $(this).html() + '</li>');
        $customSelect.find('ul').append($li);
      });
    }
 
    $customSelect.toggleClass('disabled', $this.is(':disabled'));
 
    $options.each(function (index) {
      if (this.selected) {
        $customSelect.find('li').eq(index).addClass('selected');
        $customSelect.find('.current').html($(this).html());
      }
    });
 
    $customSelect.css('width', 'inherit');
    $customSelect.find('ul').css('width', 'inherit');
 
    $customSelect.find('li').each(function () {
      $customSelect.addClass('open');
      if ($(this).outerWidth() > maxWidth) {
        maxWidth = $(this).outerWidth();
      }
      $customSelect.removeClass('open');
    });
 
    if (!$customSelect.is('.small, .medium, .large, .expand')) {
      $customSelect.css('width', maxWidth + 18 + 'px');
      $customSelect.find('ul').css('width', maxWidth + 16 + 'px');
    }
 
  }
 
  $.foundation.customForms.appendCustomMarkup = function () {
    appendCustomMarkup('checkbox');
    appendCustomMarkup('radio');
 
    $('form.custom select').each(function () {
      appendCustomSelect(this);
    });
  };
 
  $.foundation.customForms.appendCustomMarkup();
});
 
(function ($) {
 
  function refreshCustomSelect($select) {
    var maxWidth = 0,
        $customSelect = $select.next();
    $options = $select.find('option');
    $customSelect.find('ul').html('');
 
    $options.each(function () {
      $li = $('<li>' + $(this).html() + '</li>');
      $customSelect.find('ul').append($li);
    });
 
    // re-populate
    $options.each(function (index) {
      if (this.selected) {
        $customSelect.find('li').eq(index).addClass('selected');
        $customSelect.find('.current').html($(this).html());
      }
    });
 
    // fix width
    $customSelect.removeAttr('style')
      .find('ul').removeAttr('style');
    $customSelect.find('li').each(function () {
      $customSelect.addClass('open');
      if ($(this).outerWidth() > maxWidth) {
        maxWidth = $(this).outerWidth();
      }
      $customSelect.removeClass('open');
    });
    $customSelect.css('width', maxWidth + 18 + 'px');
    $customSelect.find('ul').css('width', maxWidth + 16 + 'px');
 
  }
 
  function toggleCheckbox($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false == $input.is(':disabled')) {
        input.checked = ((input.checked) ? false : true);
        $element.toggleClass('checked');
 
        $input.trigger('change');
    }
  }
 
  function toggleRadio($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false == $input.is(':disabled')) {
      $('input:radio[name="' + $input.attr('name') + '"]').each(function () {
        $(this).next().removeClass('checked');
      });
      input.checked = ((input.checked) ? false : true);
      $element.toggleClass('checked');
 
      $input.trigger('change');
    }
  }
 
  $('form.custom span.custom.checkbox').live('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
 
    toggleCheckbox($(this));
  });
 
  $('form.custom span.custom.radio').live('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
 
    toggleRadio($(this));
  });
 
  $('form.custom select').live('change', function (event) {
    refreshCustomSelect($(this));
  });
 
  $('form.custom label').live('click', function (event) {
    var $associatedElement = $('#' + $(this).attr('for')),
        $customCheckbox,
        $customRadio;
    if ($associatedElement.length !== 0) {
      if ($associatedElement.attr('type') === 'checkbox') {
        event.preventDefault();
        $customCheckbox = $(this).find('span.custom.checkbox');
        toggleCheckbox($customCheckbox);
      } else if ($associatedElement.attr('type') === 'radio') {
        event.preventDefault();
        $customRadio = $(this).find('span.custom.radio');
        toggleRadio($customRadio);
      }
    }
  });
 
  $('form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector').live('click', function (event) {
    var $this = $(this),
        $dropdown = $this.closest('div.custom.dropdown'),
        $select = $dropdown.prev();
 
    event.preventDefault();
    $('div.dropdown').removeClass('open');
 
    if (false == $select.is(':disabled')) {
        $dropdown.toggleClass('open');
 
        if ($dropdown.hasClass('open')) {
          $(document).bind('click.customdropdown', function (event) {
            $dropdown.removeClass('open');
            $(document).unbind('.customdropdown');
          });
        } else {
          $(document).unbind('.customdropdown');
        }
        return false;
    }
  });
 
  $('form.custom div.custom.dropdown li').live('click', function (event) {
    var $this = $(this),
        $customDropdown = $this.closest('div.custom.dropdown'),
        $select = $customDropdown.prev(),
        selectedIndex = 0;
 
    event.preventDefault();
    event.stopPropagation();
    $('div.dropdown').removeClass('open');
 
    $this
      .closest('ul')
      .find('li')
      .removeClass('selected');
    $this.addClass('selected');
 
    $customDropdown
      .removeClass('open')
      .find('a.current')
      .html($this.html());
 
    $this.closest('ul').find('li').each(function (index) {
      if ($this[0] == this) {
        selectedIndex = index;
      }
 
    });
    $select[0].selectedIndex = selectedIndex;
 
    $select.trigger('change');
  });
})(jQuery);
;
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {
 
    var isInputSupported = 'placeholder' in document.createElement('input'),
        isTextareaSupported = 'placeholder' in document.createElement('textarea'),
        prototype = $.fn,
        valHooks = $.valHooks,
        hooks,
        placeholder;
 
    if (isInputSupported && isTextareaSupported) {
 
        placeholder = prototype.placeholder = function() {
            return this;
        };
 
        placeholder.input = placeholder.textarea = true;
 
    } else {
 
        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };
 
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
 
        hooks = {
            'get': function(element) {
                var $element = $(element);
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };
 
        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);
 
        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });
 
        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });
 
    }
 
    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
            rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }
 
    function clearPlaceholder(event, value) {
        var input = this,
            $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }
 
    function setPlaceholder() {
        var $replacement,
            input = this,
            $input = $(input),
            $origInput = $input,
            id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch(e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': true,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }
 
}(this, document, jQuery));;
/*
 * jQuery Foundation Tooltips 2.0.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
/*jslint unparam: true, browser: true, indent: 2 */
 
;(function ($, window, undefined) {
  'use strict';
 
  var settings = {
      bodyHeight : 0,
      selector : '.has-tip',
      tooltipClass : '.tooltip',
      tipTemplate : function (selector, content) {
        return '<span data-selector="' + selector + '" class="' + settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
      }
    },
    methods = {
      init : function (options) {
        settings = $.extend(settings, options);
 
        // alias the old targetClass option
        settings.selector = settings.targetClass ? settings.targetClass : settings.selector;
 
        return this.each(function () {
          var $body = $('body');
 
          if (Modernizr.touch) {
            $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.selector, function (e) {
              e.preventDefault();
              $(settings.tooltipClass).hide();
              methods.showOrCreateTip($(this));
            });
            $body.on('click.tooltip touchstart.tooltip touchend.tooltip', settings.tooltipClass, function (e) {
              e.preventDefault();
              $(this).fadeOut(150);
            });
          } else {
            $body.on('mouseenter.tooltip mouseleave.tooltip', settings.selector, function (e) {
              var $this = $(this);
 
              if (e.type === 'mouseenter') {
                methods.showOrCreateTip($this);
              } else if (e.type === 'mouseleave') {
                methods.hide($this);
              }
            });
          }
 
          $(this).data('tooltips', true);
 
        });
      },
      showOrCreateTip : function ($target) {
        var $tip = methods.getTip($target);
 
        if ($tip && $tip.length > 0) {
          methods.show($target);
        } else {
          methods.create($target);
        }
      },
      getTip : function ($target) {
        var selector = methods.selector($target),
          tip = null;
 
        if (selector) {
          tip = $('span[data-selector=' + selector + ']' + settings.tooltipClass);
        }
        return (tip.length > 0) ? tip : false;
      },
      selector : function ($target) {
        var id = $target.attr('id'),
          dataSelector = $target.data('selector');
 
        if (id === undefined && dataSelector === undefined) {
          dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
          $target.attr('data-selector', dataSelector);
        }
        return (id) ? id : dataSelector;
      },
      create : function ($target) {
        var $tip = $(settings.tipTemplate(methods.selector($target), $('<div>').html($target.attr('title')).html())),
          classes = methods.inheritable_classes($target);
 
        $tip.addClass(classes).appendTo('body');
        if (Modernizr.touch) {
          $tip.append('<span class="tap-to-close">tap to close </span>');
        }
        $target.removeAttr('title');
        methods.show($target);
      },
      reposition : function (target, tip, classes) {
        var width, nub, nubHeight, nubWidth, column, objPos;
 
        tip.css('visibility', 'hidden').show();
 
        width = target.data('width');
        nub = tip.children('.nub');
        nubHeight = nub.outerHeight();
        nubWidth = nub.outerWidth();
 
        objPos = function (obj, top, right, bottom, left, width) {
          return obj.css({
            'top' : top,
            'bottom' : bottom,
            'left' : left,
            'right' : right,
            'width' : (width) ? width : 'auto'
          }).end();
        };
 
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left, width);
        objPos(nub, -nubHeight, 'auto', 'auto', 10);
 
        if ($(window).width() < 767) {
          column = target.closest('.columns');
 
          if (column.length < 0) {
            // if not using Foundation
            column = $('body');
          }
          tip.width(column.outerWidth() - 25).css('left', 15).addClass('tip-override');
          objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
        } else {
          if (classes && classes.indexOf('tip-top') > -1) {
            objPos(tip, (target.offset().top - tip.outerHeight() - nubHeight), 'auto', 'auto', target.offset().left, width)
              .removeClass('tip-override');
            objPos(nub, 'auto', 'auto', -nubHeight, 'auto');
          } else if (classes && classes.indexOf('tip-left') > -1) {
            objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left - tip.outerWidth() - 10), width)
              .removeClass('tip-override');
            objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), -nubHeight, 'auto', 'auto');
          } else if (classes && classes.indexOf('tip-right') > -1) {
            objPos(tip, (target.offset().top + (target.outerHeight() / 2) - nubHeight), 'auto', 'auto', (target.offset().left + target.outerWidth() + 10), width)
              .removeClass('tip-override');
            objPos(nub, (tip.outerHeight() / 2) - (nubHeight / 2), 'auto', 'auto', -nubHeight);
          }
        }
        tip.css('visibility', 'visible').hide();
      },
      inheritable_classes : function (target) {
        var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'noradius'],
          classes = target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
              if ($.inArray(el, inheritables) !== -1) {
                return el;
              }
          }).join(' ') : '';
 
        return $.trim(filtered);
      },
      show : function ($target) {
        var $tip = methods.getTip($target);
 
        methods.reposition($target, $tip, $target.attr('class'));
        $tip.fadeIn(150);
      },
      hide : function ($target) {
        var $tip = methods.getTip($target);
 
        $tip.fadeOut(150);
      },
      reload : function () {
        var $self = $(this);
 
        return ($self.data('tooltips')) ? $self.foundationTooltips('destroy').foundationTooltips('init') : $self.foundationTooltips('init');
      },
      destroy : function () {
        return this.each(function () {
          $(window).off('.tooltip');
          $(settings.selector).off('.tooltip');
          $(settings.tooltipClass).each(function (i) {
            $($(settings.selector).get(i)).attr('title', $(this).text());
          }).remove();
        });
      }
    };
 
  $.fn.foundationTooltips = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.foundationTooltips');
    }
  };
}(jQuery, this));
;
;(function ($, window, undefined) {
  'use strict';
   
  $.fn.foundationAlerts = function (options) {
    var settings = $.extend({
      callback: $.noop
    }, options);
     
    $(document).on("click", ".alert-box a.close", function (e) {
      e.preventDefault();
      $(this).closest(".alert-box").fadeOut(function () {
        $(this).remove();
        // Do something else after the alert closes
        settings.callback();
      });
    });
     
  };
 
})(jQuery, this);
;
;(function ($, window, undefined){
  'use strict';
 
  $.fn.foundationAccordion = function (options) {
    var $accordion = $('.accordion');
 
    if ($accordion.hasClass('hover') && !Modernizr.touch) {
      $('.accordion li', this).on({
        mouseenter : function () {
          console.log('due');
          var p = $(this).parent(),
            flyout = $(this).children('.content').first();
 
          $('.content', p).not(flyout).hide().parent('li').removeClass('active'); //changed this
          flyout.show(0, function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    } else {
      $('.accordion li', this).on('click.fndtn', function () {
        var p = $(this).parent(),
            flyout = $(this).children('.content').first();
 
        $('.content', p).not(flyout).hide().parent('li').removeClass('active'); //changed this
        flyout.show(0, function () {
          flyout.parent('li').addClass('active');
        });
      });
    }
 
  };
 
})( jQuery, this );;
;(function ($, window, undefined) {
  'use strict';
 
  $.fn.foundationButtons = function (options) {
    var $doc = $(document),
      config = $.extend({
        dropdownAsToggle:true,
        activeClass:'active'
      }, options),
 
    // close all dropdowns except for the dropdown passed
      closeDropdowns = function (dropdown) {
        $('.button.dropdown').find('ul').not(dropdown).removeClass('show-dropdown');
      },
    // reset all toggle states except for the button passed
      resetToggles = function (button) {
        var buttons = $('.button.dropdown').not(button);
        buttons.add($('> span.' + config.activeClass, buttons)).removeClass(config.activeClass);
      };
 
    // Prevent event propagation on disabled buttons
    $doc.on('click.fndtn', '.button.disabled', function (e) {
      e.preventDefault();
    });
 
    $('.button.dropdown > ul', this).addClass('no-hover');
 
    // reset other active states
    $doc.on('click.fndtn', '.button.dropdown:not(.split), .button.dropdown.split span', function (e) {
      var $el = $(this),
        button = $el.closest('.button.dropdown'),
        dropdown = $('> ul', button);
      e.preventDefault();
 
      // close other dropdowns
      closeDropdowns(config.dropdownAsToggle ? dropdown : '');
      dropdown.toggleClass('show-dropdown');
 
      if (config.dropdownAsToggle) {
        resetToggles(button);
        $el.toggleClass(config.activeClass);
      }
    });
 
    // close all dropdowns and deactivate all buttons
    $doc.on('click.fndtn', 'body, html', function (e) {
      // check original target instead of stopping event propagation to play nice with other events
      if (!$(e.originalEvent.target).is('.button.dropdown:not(.split), .button.dropdown.split span')) {
        closeDropdowns();
        if (config.dropdownAsToggle) {
          resetToggles();
        }
      }
    });
 
    // Positioning the Flyout List
    var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)', this).outerHeight() - 1,
        largeButtonHeight   = $('.button.large.dropdown', this).outerHeight() - 1,
        smallButtonHeight   = $('.button.small.dropdown', this).outerHeight() - 1,
        tinyButtonHeight    = $('.button.tiny.dropdown', this).outerHeight() - 1;
 
    $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul', this).css('top', normalButtonHeight);
    $('.button.dropdown.large > ul', this).css('top', largeButtonHeight);
    $('.button.dropdown.small > ul', this).css('top', smallButtonHeight);
    $('.button.dropdown.tiny > ul', this).css('top', tinyButtonHeight);
 
    $('.button.dropdown.up:not(.large):not(.small):not(.tiny) > ul', this).css('top', 'auto').css('bottom', normalButtonHeight - 2);
    $('.button.dropdown.up.large > ul', this).css('top', 'auto').css('bottom', largeButtonHeight - 2);
    $('.button.dropdown.up.small > ul', this).css('top', 'auto').css('bottom', smallButtonHeight - 2);
    $('.button.dropdown.up.tiny > ul', this).css('top', 'auto').css('bottom', tinyButtonHeight - 2);
 
  };
 
})( jQuery, this );
;
/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
(function( $ ){
 
  /**
   * Helper object used to quickly adjust all hidden parent element's, display and visibility properties.
   * This is currently used for the custom drop downs. When the dropdowns are contained within a reveal modal
   * we cannot accurately determine the list-item elements width property, since the modal's display property is set
   * to 'none'.
   *
   * This object will help us work around that problem.
   *
   * NOTE: This could also be plugin.
   *
   * @function hiddenFix
   */
  var hiddenFix = function() {
 
    return {
      /**
       * Sets all hidden parent elements and self to visibile.
       *
       * @method adjust
       * @param {jQuery Object} $child
       */
 
      // We'll use this to temporarily store style properties.
      tmp : [],
 
      // We'll use this to set hidden parent elements.
      hidden : null,
 
      adjust : function( $child ) {
        // Internal reference.
        var _self = this;
 
        // Set all hidden parent elements, including this element.
        _self.hidden = $child.parents().andSelf().filter( ":hidden" );
 
        // Loop through all hidden elements.
        _self.hidden.each( function() {
 
          // Cache the element.
          var $elem = $( this );
 
          // Store the style attribute.
          // Undefined if element doesn't have a style attribute.
          _self.tmp.push( $elem.attr( 'style' ) );
 
          // Set the element's display property to block,
          // but ensure it's visibility is hidden.
          $elem.css( { 'visibility' : 'hidden', 'display' : 'block' } );
        });
 
      }, // end adjust
 
      /**
       * Resets the elements previous state.
       *
       * @method reset
       */
      reset : function() {
        // Internal reference.
        var _self = this;
        // Loop through our hidden element collection.
        _self.hidden.each( function( i ) {
          // Cache this element.
          var $elem = $( this ),
              _tmp = _self.tmp[ i ]; // Get the stored 'style' value for this element.
 
          // If the stored value is undefined.
          if( _tmp === undefined )
            // Remove the style attribute.
            $elem.removeAttr( 'style' );
          else
            // Otherwise, reset the element style attribute.
            $elem.attr( 'style', _tmp );
 
        });
        // Reset the tmp array.
        _self.tmp = [];
        // Reset the hidden elements variable.
        _self.hidden = null;
 
      } // end reset
 
    }; // end return
 
  };
 
  jQuery.foundation = jQuery.foundation || {};
  jQuery.foundation.customForms = jQuery.foundation.customForms || {};
 
  $.foundation.customForms.appendCustomMarkup = function ( options ) {
 
    var defaults = {
      disable_class: "js-disable-custom"
    };
 
    options = $.extend( defaults, options );
 
    function appendCustomMarkup(idx, sel) {
      var $this = $(sel).hide(),
          type  = $this.attr('type'),
          $span = $this.next('span.custom.' + type);
 
      if ($span.length === 0) {
        $span = $('<span class="custom ' + type + '"></span>').insertAfter($this);
      }
 
      $span.toggleClass('checked', $this.is(':checked'));
      $span.toggleClass('disabled', $this.is(':disabled'));
    }
 
    function appendCustomSelect(idx, sel) {
      var hiddenFixObj = hiddenFix();
          //
          // jQueryify the <select> element and cache it.
          //
      var $this = $( sel ),
          //
          // Find the custom drop down element.
          //
          $customSelect = $this.next( 'div.custom.dropdown' ),
          //
          // Find the custom select element within the custom drop down.
          //
          $customList = $customSelect.find( 'ul' ),
          //
          // Find the custom a.current element.
          //
          $selectCurrent = $customSelect.find( ".current" ),
          //
          // Find the custom a.selector element (the drop-down icon).
          //
          $selector = $customSelect.find( ".selector" ),
          //
          // Get the <options> from the <select> element.
          //
          $options = $this.find( 'option' ),
          //
          // Filter down the selected options
          //
          $selectedOption = $options.filter( ':selected' ),
          //
          // Initial max width.
          //
          maxWidth = 0,
          //
          // We'll use this variable to create the <li> elements for our custom select.
          //
          liHtml = '',
          //
          // We'll use this to cache the created <li> elements within our custom select.
          //
          $listItems
      ;
      var $currentSelect = false;
      //
      // Should we not create a custom list?
      //
      if ( $this.hasClass( 'no-custom' ) ) return;
 
      //
      // Did we not create a custom select element yet?
      //
      if ( $customSelect.length === 0 ) {
        //
        // Let's create our custom select element!
        //
 
            //
            // Determine what select size to use.
            //
        var customSelectSize = $this.hasClass( 'small' )   ? 'small'   :
                               $this.hasClass( 'medium' )  ? 'medium'  :
                               $this.hasClass( 'large' )   ? 'large'   :
                               $this.hasClass( 'expand' )  ? 'expand'  : ''
        ;
        //
        // Build our custom list.
        //
        $customSelect = $('<div class="' + ['custom', 'dropdown', customSelectSize ].join( ' ' ) + '"><a href="#" class="selector"></a><ul /></div>"');
        //
        // Grab the selector element
        //
        $selector = $customSelect.find( ".selector" );
        //
        // Grab the unordered list element from the custom list.
        //
        $customList = $customSelect.find( "ul" );
        //
        // Build our <li> elements.
        //
        liHtml = $options.map( function() { return "<li>" + $( this ).html() + "</li>"; } ).get().join( '' );
        //
        // Append our <li> elements to the custom list (<ul>).
        //
        $customList.append( liHtml );
        //
        // Insert the the currently selected list item before all other elements.
        // Then, find the element and assign it to $currentSelect.
        //
 
        $currentSelect = $customSelect.prepend( '<a href="#" class="current">' + $selectedOption.html() + '</a>' ).find( ".current" );
        //
        // Add the custom select element after the <select> element.
        //
        $this.after( $customSelect )
        //
        //then hide the <select> element.
        //
        .hide();
 
      } else {
        //
        // Create our list item <li> elements.
        //
        liHtml = $options.map( function() { return "<li>" + $( this ).html() + "</li>"; } ).get().join( '' );
        //
        // Refresh the ul with options from the select in case the supplied markup doesn't match.
        // Clear what's currently in the <ul> element.
        //
        $customList.html( '' )
        //
        // Populate the list item <li> elements.
        //
        .append( liHtml );
 
      } // endif $customSelect.length === 0
 
      //
      // Determine whether or not the custom select element should be disabled.
      //
      $customSelect.toggleClass( 'disabled', $this.is( ':disabled' ) );
      //
      // Cache our List item elements.
      //
      $listItems = $customList.find( 'li' );
 
      //
      // Determine which elements to select in our custom list.
      //
      $options.each( function ( index ) {
 
        if ( this.selected ) {
          //
          // Add the selected class to the current li element
          //
          $listItems.eq( index ).addClass( 'selected' );
          //
          // Update the current element with the option value.
          //
          if ($currentSelect) {
            $currentSelect.html( $( this ).html() );
          }
 
        }
 
      });
 
      //
      // Update the custom <ul> list width property.
      //
      $customList.css( 'width', 'inherit' );
      //
      // Set the custom select width property.
      //
      $customSelect.css( 'width', 'inherit' );
 
      //
      // If we're not specifying a predetermined form size.
      //
      if ( !$customSelect.is( '.small, .medium, .large, .expand' ) ) {
 
        // ------------------------------------------------------------------------------------
        // This is a work-around for when elements are contained within hidden parents.
        // For example, when custom-form elements are inside of a hidden reveal modal.
        //
        // We need to display the current custom list element as well as hidden parent elements
        // in order to properly calculate the list item element's width property.
        // -------------------------------------------------------------------------------------
 
        //
        // Show the drop down.
        // This should ensure that the list item's width values are properly calculated.
        //
        $customSelect.addClass( 'open' );
        //
        // Quickly, display all parent elements.
        // This should help us calcualate the width of the list item's within the drop down.
        //
        hiddenFixObj.adjust( $customList );
        //
        // Grab the largest list item width.
        //
        maxWidth = ( $listItems.outerWidth() > maxWidth ) ? $listItems.outerWidth() : maxWidth;
        //
        // Okay, now reset the parent elements.
        // This will hide them again.
        //
        hiddenFixObj.reset();
        //
        // Finally, hide the drop down.
        //
        $customSelect.removeClass( 'open' );
        //
        // Set the custom list width.
        //
        $customSelect.width( maxWidth + 18);
        //
        // Set the custom list element (<ul />) width.
        //
        $customList.width(  maxWidth + 16 );
 
      } // endif
 
    }
 
    $('form.custom input:radio[data-customforms!=disabled]').each(appendCustomMarkup);
    $('form.custom input:checkbox[data-customforms!=disabled]').each(appendCustomMarkup);
    $('form.custom select[data-customforms!=disabled]').each(appendCustomSelect);
  };
 
  var refreshCustomSelect = function($select) {
    var maxWidth = 0,
        $customSelect = $select.next();
    $options = $select.find('option');
    $customSelect.find('ul').html('');
 
    $options.each(function () {
      $li = $('<li>' + $(this).html() + '</li>');
      $customSelect.find('ul').append($li);
    });
 
    // re-populate
    $options.each(function (index) {
      if (this.selected) {
        $customSelect.find('li').eq(index).addClass('selected');
        $customSelect.find('.current').html($(this).html());
      }
    });
 
    // fix width
    $customSelect.removeAttr('style')
      .find('ul').removeAttr('style');
    $customSelect.find('li').each(function () {
      $customSelect.addClass('open');
      if ($(this).outerWidth() > maxWidth) {
        maxWidth = $(this).outerWidth();
      }
      $customSelect.removeClass('open');
    });
    $customSelect.css('width', maxWidth + 18 + 'px');
    $customSelect.find('ul').css('width', maxWidth + 16 + 'px');
 
  };
 
  var toggleCheckbox = function($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false === $input.is(':disabled')) {
        input.checked = ((input.checked) ? false : true);
        $element.toggleClass('checked');
 
        $input.trigger('change');
    }
  };
 
  var toggleRadio = function($element) {
    var $input = $element.prev(),
        input = $input[0];
 
    if (false === $input.is(':disabled')) {
 
      $('input:radio[name="' + $input.attr('name') + '"]').next().not($element).removeClass('checked');
      if ( !$element.hasClass('checked') ) {
        $element.toggleClass('checked');
      }
      input.checked = $element.hasClass('checked');
 
      $input.trigger('change');
    }
  };
 
  $(document).on('click', 'form.custom span.custom.checkbox', function (event) {
    event.preventDefault();
    event.stopPropagation();
 
    toggleCheckbox($(this));
  });
 
  $(document).on('click', 'form.custom span.custom.radio', function (event) {
    event.preventDefault();
    event.stopPropagation();
 
    toggleRadio($(this));
  });
 
  $(document).on('change', 'form.custom select[data-customforms!=disabled]', function (event) {
    refreshCustomSelect($(this));
  });
 
  $(document).on('click', 'form.custom label', function (event) {
    var $associatedElement = $('#' + $(this).attr('for') + '[data-customforms!=disabled]'),
        $customCheckbox,
        $customRadio;
    if ($associatedElement.length !== 0) {
      if ($associatedElement.attr('type') === 'checkbox') {
        event.preventDefault();
        $customCheckbox = $(this).find('span.custom.checkbox');
        toggleCheckbox($customCheckbox);
      } else if ($associatedElement.attr('type') === 'radio') {
        event.preventDefault();
        $customRadio = $(this).find('span.custom.radio');
        toggleRadio($customRadio);
      }
    }
  });
 
  $(document).on('click', 'form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector', function (event) {
    var $this = $(this),
        $dropdown = $this.closest('div.custom.dropdown'),
        $select = $dropdown.prev();
 
    event.preventDefault();
    $('div.dropdown').removeClass('open');
 
    if (false === $select.is(':disabled')) {
        $dropdown.toggleClass('open');
 
        if ($dropdown.hasClass('open')) {
          $(document).bind('click.customdropdown', function (event) {
            $dropdown.removeClass('open');
            $(document).unbind('.customdropdown');
          });
        } else {
          $(document).unbind('.customdropdown');
        }
        return false;
    }
  });
 
  $(document).on('click', 'form.custom div.custom.dropdown li', function (event) {
    var $this = $(this),
        $customDropdown = $this.closest('div.custom.dropdown'),
        $select = $customDropdown.prev(),
        selectedIndex = 0;
 
    event.preventDefault();
    event.stopPropagation();
    $('div.dropdown').removeClass('open');
 
    $this
      .closest('ul')
      .find('li')
      .removeClass('selected');
    $this.addClass('selected');
 
    $customDropdown
      .removeClass('open')
      .find('a.current')
      .html($this.html());
 
    $this.closest('ul').find('li').each(function (index) {
      if ($this[0] == this) {
        selectedIndex = index;
      }
 
    });
    $select[0].selectedIndex = selectedIndex;
 
    $select.trigger('change');
  });
 
 
  $.fn.foundationCustomForms = $.foundation.customForms.appendCustomMarkup;
 
})( jQuery );
;
;(function ($, window, undefined) {
  'use strict';
 
  $.fn.foundationTabs = function (options) {
 
    var settings = $.extend({
      callback: $.noop
    }, options);
 
    var activateTab = function ($tab) {
      var $activeTab = $tab.closest('dl, ul').find('.active'),
          target = $tab.children('a').attr("href"),
          hasHash = /^#/.test(target),
          contentLocation = '';
 
      if (hasHash) {
        contentLocation = target + 'Tab';
 
        // Strip off the current url that IE adds
        contentLocation = contentLocation.replace(/^.+#/, '#');
 
        //Show Tab Content
        $(contentLocation).closest('.tabs-content').children('li').removeClass('active').hide();
        $(contentLocation).css('display', 'block').addClass('active');
      }
 
      //Make Tab Active
      $activeTab.removeClass('active');
      $tab.addClass('active');
    };
 
    $(document).on('click.fndtn', '.tabs a', function (event){
      activateTab($(this).parent('dd, li'));
    });
 
    if (window.location.hash) {
      activateTab($('a[href="' + window.location.hash + '"]').parent('dd, li'));
      settings.callback();
    }
 
  };
 
})(jQuery, this);
;
;(function ($, window, undefined) {
  'use strict';
 
  $.fn.foundationNavigation = function (options) {
 
    var lockNavBar = false;
    // Windows Phone, sadly, does not register touch events :(
    if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
      $(document).on('click.fndtn touchstart.fndtn', '.nav-bar a.flyout-toggle', function (e) {
        e.preventDefault();
        var flyout = $(this).siblings('.flyout').first();
        if (lockNavBar === false) {
          $('.nav-bar .flyout').not(flyout).slideUp(500);
          flyout.slideToggle(500, function () {
            lockNavBar = false;
          });
        }
        lockNavBar = true;
      });
      $('.nav-bar>li.has-flyout', this).addClass('is-touch');
    } else {
      $('.nav-bar>li.has-flyout', this).on('mouseenter mouseleave', function (e) {
        if (e.type == 'mouseenter') {
          $('.nav-bar').find('.flyout').hide();
          $(this).children('.flyout').show();
        }
 
        if (e.type == 'mouseleave') {
          var flyout = $(this).children('.flyout'),
              inputs = flyout.find('input'),
              hasFocus = function (inputs) {
                var focus;
                if (inputs.length > 0) {
                  inputs.each(function () {
                    if ($(this).is(":focus")) {
                      focus = true;
                    }
                  });
                  return focus;
                }
 
                return false;
              };
 
          if (!hasFocus(inputs)) {
            $(this).children('.flyout').hide();
          }
        }
 
      });
    }
 
  };
 
})( jQuery, this );
;
;(function ($, window, undefined) {
  'use strict';
   
  $.fn.foundationMediaQueryViewer = function (options) {
    var settings = $.extend(options,{toggleKey:77}), // Press 'M'
        $doc = $(document);
 
    $doc.on("keyup.mediaQueryViewer", ":input", function (e){
      if (e.which === settings.toggleKey) {
        e.stopPropagation();
      }
    });
    $doc.on("keyup.mediaQueryViewer", function (e) {
      var $mqViewer = $('#fqv');
 
      if (e.which === settings.toggleKey) { 
        if ($mqViewer.length > 0) {
          $mqViewer.remove();
        } else {
          $('body').prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>');
        }
      }
    });
 
  };
 
})(jQuery, this);;
/*
 * jQuery Foundation Top Bar 2.0.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
 
/*jslint unparam: true, browser: true, indent: 2 */
 
;(function ($, window, undefined) {
  'use strict';
 
  var settings = {
      index : 0,
      initialized : false
    },
    methods = {
      init : function (options) {
        return this.each(function () {
          settings = $.extend(settings, options);
          settings.$w = $(window),
          settings.$topbar = $('nav.top-bar');
          settings.$titlebar = settings.$topbar.children('ul:first');
          var breakpoint = $("<div class='top-bar-js-breakpoint'/>").appendTo("body");
          settings.breakPoint = breakpoint.width();
          breakpoint.remove();
 
          if (!settings.initialized) {
            methods.assemble();
            settings.initialized = true;
          }
 
          if (!settings.height) {
            methods.largestUL();
          }
 
          if (settings.$topbar.parent().hasClass('fixed')) {
            $('body').css('padding-top',settings.$topbar.outerHeight())
          }
 
          $('.top-bar .toggle-topbar').die('click.fndtn').live('click.fndtn', function (e) {
            e.preventDefault();
 
            // HACK TO GET THIS WORKING
            $('nav.top-bar').toggleClass('expanded');
            // END HACK
 
            if (methods.breakpoint()) {
              settings.$topbar.toggleClass('expanded');
              settings.$topbar.css('min-height', '');
            }
          });
 
          // Show the Dropdown Levels on Click
          $('.top-bar .has-dropdown>a').die('click.fndtn').live('click.fndtn', function (e) {
            if (Modernizr.touch || methods.breakpoint())
              e.preventDefault();
 
            if (methods.breakpoint()) {
              var $this = $(this),
                  $selectedLi = $this.closest('li'),
                  $nextLevelUl = $selectedLi.children('ul'),
                  $section = $this.closest('section'),
                  $nextLevelUlHeight = 0,
                  $largestUl;
 
              settings.index += 1;
              $selectedLi.addClass('moved');
              $section.css({'left': -(100 * settings.index) + '%'});
              $section.find('>.name').css({'left': 100 * settings.index + '%'});
 
              $this.siblings('ul').height(settings.height + settings.$titlebar.outerHeight(true));
              settings.$topbar.css('min-height', settings.height + settings.$titlebar.outerHeight(true) * 2)
            }
          });
 
          $(window).on('resize.fndtn.topbar',function() {
            if (!methods.breakpoint()) {
              settings.$topbar.css('min-height', '');
            }
          });
 
          // Go up a level on Click
          $('.top-bar .has-dropdown .back').die('click.fndtn').live('click.fndtn', function (e) {
            e.preventDefault();
 
            var $this = $(this),
              $movedLi = $this.closest('li.moved'),
              $section = $this.closest('section'),
              $previousLevelUl = $movedLi.parent();
 
            settings.index -= 1;
            $section.css({'left': -(100 * settings.index) + '%'});
            $section.find('>.name').css({'left': 100 * settings.index + '%'});
 
            if (settings.index === 0) {
              settings.$topbar.css('min-height', 0);
            }
 
            setTimeout(function () {
              $movedLi.removeClass('moved');
            }, 300);
          });
        });
      },
      breakpoint : function () {
        return settings.$w.width() < settings.breakPoint;
      },
      assemble : function () {
        var $section = settings.$topbar.children('section');
 
        // Pull element out of the DOM for manipulation
        $section.detach();
 
        $section.find('.has-dropdown>a').each(function () {
          var $link = $(this),
              $dropdown = $link.siblings('.dropdown'),
              $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
 
          // Copy link to subnav
          $titleLi.find('h5>a').html($link.html());
          $dropdown.prepend($titleLi);
        });
 
        // Put element back in the DOM
        $section.appendTo(settings.$topbar);
      },
      largestUL : function () {
        var uls = settings.$topbar.find('section ul ul'),
            largest = uls.first(),
            total = 0;
 
        uls.each(function () {
          if ($(this).children('li').length > largest.children('li').length) {
            largest = $(this);
          }
        });
 
        largest.children('li').each(function () { total += $(this).outerHeight(true); });
 
        settings.height = total;
      }
    };
 
  $.fn.foundationTopBar = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.foundationTopBar');
    }
  };
 
}(jQuery, this));
;
;(function ($, window, undefined) {
  'use strict';
 
  var $doc = $(document),
      Modernizr = window.Modernizr;
 
  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
 
  $('input, textarea').placeholder();
 
  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
 
  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
 
})(jQuery, this);
;
;(function ($) {$(document).ready(function() {
  // Set the negative margin on the top menu for slide-menu pages
  var $selector1 = $('#topMenu'),
    events = 'click.fndtn';
  if ($selector1.length > 0) $selector1.css("margin-top", $selector1.height() * -1);
 
  // Watch for clicks to show the sidebar
  var $selector2 = $('#sidebarButton');
  if ($selector2.length > 0) {
    $('#sidebarButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }
 
  // Watch for clicks to show the menu for slide-menu pages
  var $selector3 = $('#menuButton');
  if ($selector3.length > 0)  {
    $('#menuButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active-menu');
    });
  }
 
  // // Adjust sidebars and sizes when resized
  // $(window).resize(function() {
  //   // if (!navigator.userAgent.match(/Android/i)) $('body').removeClass('active');
  //   var $selector4 = $('#topMenu');
  //   if ($selector4.length > 0) $selector4.css("margin-top", $selector4.height() * -1);
  // });
 
  // Switch panels for the paneled nav on mobile
  var $selector5 = $('#switchPanels');
  if ($selector5.length > 0)  {
    $('#switchPanels dd').on(events, function (e) {
      e.preventDefault();
      var switchToPanel = $(this).children('a').attr('href'),
          switchToIndex = $(switchToPanel).index();
      $(this).toggleClass('active').siblings().removeClass('active');
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }
 
  $('#nav li a').on(events, function (e) {
    e.preventDefault();
    var href = $(this).attr('href'),
      $target = $(href);
    $('html, body').animate({scrollTop : $target.offset().top}, 300);
  });
});})(jQuery);
;
(function ($) {$(document).ready(function () {
  if($('.slideshow').length > 0){
    $('.slideshow').orbit({
      animation: 'fade',       // fade, horizontal-slide, vertical-slide, horizontal-push
      animationSpeed: 800,                // how fast animtions are
      timer: true,                        // true or false to have the timer
      resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
      advanceSpeed: 4000,                 // if timer is enabled, time between transitions
      pauseOnHover: false,                // if you hover pauses the slider
      startClockOnMouseOut: false,        // if clock should start on MouseOut
      startClockOnMouseOutAfter: 1000,    // how long after MouseOut should the timer start again
      directionalNav: true,               // manual advancing directional navs
      captions: false,                     // do you want captions?
      captionAnimation: 'fade',           // fade, slideOpen, none
      //captionAnimationSpeed: 800,         // if so how quickly should they animate in
      bullets: false,                     // true or false to activate the bullet navigation
      bulletThumbs: true,                // thumbnails for the bullets
      bulletThumbLocation: '/sites/default/files/styles/thumbnail/public',            // location from this file where thumbs will be
      afterSlideChange: function(){},     // empty function
      fluid: '4x2',                         // or set a aspect ratio for content slides (ex: '4x3')
    });
  }
 
  var isSupported;
  isSupported = null;
 
  if (document.createElement) {
    var el = document.createElement("div");
    if (el && el.style) {
      el.style.position = "fixed";
      el.style.top = "10px";
      var root = document.body;
      if (root && root.appendChild && root.removeChild) {
        root.appendChild(el);
        isSupported = el.offsetTop === 10;
        root.removeChild(el);
      }
    }
  }
 
  if (isSupported === true) {
    $('#bottom-fade').show();
  }
 
 
 
});})(jQuery);
;
(function ($) {
  Drupal.behaviors.socialServices = {
    attach: function(context, settings) {
      $('#share-services button').click(function(e) {
        e.preventDefault();
 
        var service = $(this).data('service-name');
        var currentURL = encodeURIComponent(window.location.href);
        var currentTitle = encodeURIComponent(window.document.title);
        var windowHeight = 400;
        var windowWidth = 600;
        var shareURL;
 
        switch (service) {
          case 'TWITTER':
            shareURL = 'http:\/\/twitter.com\/intent\/tweet?url=' + currentURL + '\u0026text=' + currentTitle + '\u0026via=avowapparel';
            windowHeight = 420;
            windowWidth = 550;
          break;
          case 'FACEBOOK':
            shareURL = 'http:\/\/www.facebook.com\/sharer\/sharer.php?u=' + currentURL;
          break;
          case 'PINTEREST':
            shareURL = 'http:\/\/pinterest.com\/pin\/create\/button\/?url=' + currentURL;
          break;
        }
        var windowOpts = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=' + windowWidth + ',height=' + windowHeight;
 
        window.open(
          shareURL,
          'AVOW_SHARE',
          windowOpts
          );
      });
    }
  }
})(jQuery);
;
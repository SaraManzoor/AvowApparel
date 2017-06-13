/*!
    Colorbox v1.4.33 - 2013-10-31
    jQuery lightbox and modal window plugin
    (c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);;
(function ($) {
 
Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
 
    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }
 
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
 
    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};
 
})(jQuery);
;
(function ($) {
 
Drupal.behaviors.initColorboxPlainStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Make all the controls invisible.
      $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
      // Replace "Close" with "×" and show.
      $('#cboxClose', context).html('\327').addClass('cbox-close-plain');
      // Hide empty title.
      if ($('#cboxTitle:empty', context).length == true) {
        $('#cboxTitle', context).hide();
      }
      $('#cboxLoadedContent', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 1}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideDown();
        }
      });
      $('#cboxOverlay', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 0}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideUp();
        }
      });
    });
    $(context).bind('cbox_closed', function () {
      $('#cboxClose', context).removeClass('cbox-close-plain');
    });
  }
};
 
})(jQuery);
;
(function ($) {
 
Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};
 
})(jQuery);
;
 /*
 * jQuery UI Selectmenu version 1.3.0
 *
 * Copyright (c) 2009-2010 filament group, http://filamentgroup.com
 * Copyright (c) 2010-2012 Felix Nagel, http://www.felixnagel.com
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */
 
(function($) {
 
$.widget("ui.selectmenu", {
    options: {
        appendTo: "body",
        typeAhead: 1000,
        style: 'dropdown',
        positionOptions: {
            my: "left top",
            at: "left bottom",
            offset: null
        },
        width: null,
        menuWidth: null,
        handleWidth: 26,
        maxHeight: null,
        icons: null,
        format: null,
        escapeHtml: false,
        bgImage: function() {}
    },
 
    _create: function() {
        var self = this, o = this.options;
 
        // set a default id value, generate a new random one if not set by developer
        var selectmenuId = (this.element.attr( 'id' ) || 'ui-selectmenu-' + Math.random().toString( 16 ).slice( 2, 10 )).replace(/(:|\.)/g,'')
 
        // quick array of button and menu id's
        this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];
 
        // define safe mouseup for future toggling
        this._safemouseup = true;
        this.isOpen = false;
 
        // create menu button wrapper
        this.newelement = $( '<a />', {
            'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
            'id' : this.ids[ 1 ],
            'role': 'button',
            'href': '#nogo',
            'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
            'aria-haspopup': true,
            'aria-owns': this.ids[ 2 ]
        });
        this.newelementWrap = $( "<span />" )
            .append( this.newelement )
            .insertAfter( this.element );
 
        // transfer tabindex
        var tabindex = this.element.attr( 'tabindex' );
        if ( tabindex ) {
            this.newelement.attr( 'tabindex', tabindex );
        }
 
        // save reference to select in data for ease in calling methods
        this.newelement.data( 'selectelement', this.element );
 
        // menu icon
        this.selectmenuIcon = $( '<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>' )
            .prependTo( this.newelement );
 
        // append status span to button
        this.newelement.prepend( '<span class="' + self.widgetBaseClass + '-status" />' );
 
        // make associated form label trigger focus
        this.element.bind({
            'click.selectmenu':  function( event ) {
                self.newelement.focus();
                event.preventDefault();
            }
        });
 
        // click toggle for menu visibility
        this.newelement
            .bind('mousedown.selectmenu', function(event) {
                self._toggle(event, true);
                // make sure a click won't open/close instantly
                if (o.style == "popup") {
                    self._safemouseup = false;
                    setTimeout(function() { self._safemouseup = true; }, 300);
                }
                return false;
            })
            .bind('click.selectmenu', function() {
                return false;
            })
            .bind("keydown.selectmenu", function(event) {
                var ret = false;
                switch (event.keyCode) {
                    case $.ui.keyCode.ENTER:
                        ret = true;
                        break;
                    case $.ui.keyCode.SPACE:
                        self._toggle(event);
                        break;
                    case $.ui.keyCode.UP:
                        if (event.altKey) {
                            self.open(event);
                        } else {
                            self._moveSelection(-1);
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if (event.altKey) {
                            self.open(event);
                        } else {
                            self._moveSelection(1);
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        self._moveSelection(-1);
                        break;
                    case $.ui.keyCode.RIGHT:
                        self._moveSelection(1);
                        break;
                    case $.ui.keyCode.TAB:
                        ret = true;
                        break;
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.HOME:
                        self.index(0);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.END:
                        self.index(self._optionLis.length);
                        break;
                    default:
                        ret = true;
                }
                return ret;
            })
            .bind('keypress.selectmenu', function(event) {
                if (event.which > 0) {
                    self._typeAhead(event.which, 'mouseup');
                }
                return true;
            })
            .bind('mouseover.selectmenu', function() {
                if (!o.disabled) $(this).addClass('ui-state-hover');
            })
            .bind('mouseout.selectmenu', function() {
                if (!o.disabled) $(this).removeClass('ui-state-hover');
            })
            .bind('focus.selectmenu', function() {
                if (!o.disabled) $(this).addClass('ui-state-focus');
            })
            .bind('blur.selectmenu', function() {
                if (!o.disabled) $(this).removeClass('ui-state-focus');
            });
 
        // document click closes menu
        $(document).bind("mousedown.selectmenu-" + this.ids[0], function(event) {
            if ( self.isOpen ) {
                self.close( event );
            }
        });
 
        // change event on original selectmenu
        this.element
            .bind("click.selectmenu", function() {
                self._refreshValue();
            })
            // FIXME: newelement can be null under unclear circumstances in IE8
            // TODO not sure if this is still a problem (fnagel 20.03.11)
            .bind("focus.selectmenu", function() {
                if (self.newelement) {
                    self.newelement[0].focus();
                }
            });
 
        // set width when not set via options
        if (!o.width) {
            o.width = this.element.outerWidth();
        }
        // set menu button width
        this.newelement.width(o.width);
 
        // hide original selectmenu element
        this.element.hide();
 
        // create menu portion, append to body
        this.list = $( '<ul />', {
            'class': 'ui-widget ui-widget-content',
            'aria-hidden': true,
            'role': 'listbox',
            'aria-labelledby': this.ids[1],
            'id': this.ids[2]
        });
        this.listWrap = $( "<div />", {
            'class': self.widgetBaseClass + '-menu'
        }).append( this.list ).appendTo( o.appendTo );
 
        // transfer menu click to menu button
        this.list
            .bind("keydown.selectmenu", function(event) {
                var ret = false;
                switch (event.keyCode) {
                    case $.ui.keyCode.UP:
                        if (event.altKey) {
                            self.close(event, true);
                        } else {
                            self._moveFocus(-1);
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if (event.altKey) {
                            self.close(event, true);
                        } else {
                            self._moveFocus(1);
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        self._moveFocus(-1);
                        break;
                    case $.ui.keyCode.RIGHT:
                        self._moveFocus(1);
                        break;
                    case $.ui.keyCode.HOME:
                        self._moveFocus(':first');
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        self._scrollPage('up');
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        self._scrollPage('down');
                        break;
                    case $.ui.keyCode.END:
                        self._moveFocus(':last');
                        break;
                    case $.ui.keyCode.ENTER:
                    case $.ui.keyCode.SPACE:
                        self.close(event, true);
                        $(event.target).parents('li:eq(0)').trigger('mouseup');
                        break;
                    case $.ui.keyCode.TAB:
                        ret = true;
                        self.close(event, true);
                        $(event.target).parents('li:eq(0)').trigger('mouseup');
                        break;
                    case $.ui.keyCode.ESCAPE:
                        self.close(event, true);
                        break;
                    default:
                        ret = true;
                }
                return ret;
            })
            .bind('keypress.selectmenu', function(event) {
                if (event.which > 0) {
                    self._typeAhead(event.which, 'focus');
                }
                return true;
            })
            // this allows for using the scrollbar in an overflowed list
            .bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });
 
        // needed when window is resized
        $(window).bind( "resize.selectmenu-" + this.ids[0], $.proxy( self.close, this ) );
    },
 
    _init: function() {
        var self = this, o = this.options;
 
        // serialize selectmenu element options
        var selectOptionData = [];
        this.element.find('option').each(function() {
            var opt = $(this);
            selectOptionData.push({
                value: opt.attr('value'),
                text: self._formatText(opt.text(), opt),
                selected: opt.attr('selected'),
                disabled: opt.attr('disabled'),
                classes: opt.attr('class'),
                typeahead: opt.attr('typeahead'),
                parentOptGroup: opt.parent('optgroup'),
                bgImage: o.bgImage.call(opt)
            });
        });
 
        // active state class is only used in popup style
        var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";
 
        // empty list so we can refresh the selectmenu via selectmenu()
        this.list.html("");
 
        // write li's
        if (selectOptionData.length) {
            for (var i = 0; i < selectOptionData.length; i++) {
                var thisLiAttr = { role : 'presentation' };
                if ( selectOptionData[ i ].disabled ) {
                    thisLiAttr[ 'class' ] = this.namespace + '-state-disabled';
                }
                var thisAAttr = {
                    html: selectOptionData[i].text || '&nbsp;',
                    href : '#nogo',
                    tabindex : -1,
                    role : 'option',
                    'aria-selected' : false
                };
                if ( selectOptionData[ i ].disabled ) {
                    thisAAttr[ 'aria-disabled' ] = selectOptionData[ i ].disabled;
                }
                if ( selectOptionData[ i ].typeahead ) {
                    thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
                }
                var thisA = $('<a/>', thisAAttr)
                    .bind('focus.selectmenu', function() {
                        $(this).parent().mouseover();
                    })
                    .bind('blur.selectmenu', function() {
                        $(this).parent().mouseout();
                    });
                var thisLi = $('<li/>', thisLiAttr)
                    .append(thisA)
                    .data('index', i)
                    .addClass(selectOptionData[i].classes)
                    .data('optionClasses', selectOptionData[i].classes || '')
                    .bind("mouseup.selectmenu", function(event) {
                        if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($( event.currentTarget ).parents( "ul>li." + self.widgetBaseClass + "-group " )) ) {
                            self.index($(this).data('index'));
                            self.select(event);
                            self.close(event, true);
                        }
                        return false;
                    })
                    .bind("click.selectmenu", function() {
                        return false;
                    })
                    .bind('mouseover.selectmenu', function() {
                        // no hover if diabled
                        if (!$(this).hasClass(self.namespace + '-state-disabled') && !$(this).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
                            self._selectedOptionLi().addClass(activeClass);
                            self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                            $(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                        }
                    })
                    .bind('mouseout.selectmenu', function() {
                        if ($(this).is(self._selectedOptionLi())) {
                            $(this).addClass(activeClass);
                        }
                        $(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                    });
 
                // optgroup or not...
                if ( selectOptionData[i].parentOptGroup.length ) {
                    var optGroupName = self.widgetBaseClass + '-group-' + this.element.find( 'optgroup' ).index( selectOptionData[i].parentOptGroup );
                    if (this.list.find( 'li.' + optGroupName ).length ) {
                        this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
                    } else {
                        $(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"' ) + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ')
                            .appendTo( this.list )
                            .find( 'ul' )
                            .append( thisLi );
                    }
                } else {
                    thisLi.appendTo(this.list);
                }
 
                // append icon if option is specified
                if (o.icons) {
                    for (var j in o.icons) {
                        if (thisLi.is(o.icons[j].find)) {
                            thisLi
                                .data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon')
                                .addClass(self.widgetBaseClass + '-hasIcon');
                            var iconClass = o.icons[j].icon || "";
                            thisLi
                                .find('a:eq(0)')
                                .prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
                            if (selectOptionData[i].bgImage) {
                                thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
                            }
                        }
                    }
                }
            }
        } else {
            $('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
        }
        // we need to set and unset the CSS classes for dropdown and popup style
        var isDropDown = ( o.style == 'dropdown' );
        this.newelement
            .toggleClass( self.widgetBaseClass + '-dropdown', isDropDown )
            .toggleClass( self.widgetBaseClass + '-popup', !isDropDown );
        this.list
            .toggleClass( self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown )
            .toggleClass( self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown )
            // add corners to top and bottom menu items
            .find( 'li:first' )
            .toggleClass( 'ui-corner-top', !isDropDown )
            .end().find( 'li:last' )
            .addClass( 'ui-corner-bottom' );
        this.selectmenuIcon
            .toggleClass( 'ui-icon-triangle-1-s', isDropDown )
            .toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );
 
        // set menu width to either menuWidth option value, width option value, or select width
        if ( o.style == 'dropdown' ) {
            this.list.width( o.menuWidth ? o.menuWidth : o.width );
        } else {
            this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
        }
 
        // reset height to auto
        this.list.css( 'height', 'auto' );
        var listH = this.listWrap.height();
        var winH = $( window ).height();
        // calculate default max height
        var maxH = o.maxHeight ? Math.min( o.maxHeight, winH ) : winH / 3;
        if ( listH > maxH ) this.list.height( maxH );
 
        // save reference to actionable li's (not group label li's)
        this._optionLis = this.list.find( 'li:not(.' + self.widgetBaseClass + '-group)' );
 
        // transfer disabled state
        if ( this.element.attr( 'disabled' ) ) {
            this.disable();
        } else {
            this.enable();
        }
 
        // update value
        this._refreshValue();
 
        // set selected item so movefocus has intial state
        this._selectedOptionLi().addClass(this.widgetBaseClass + '-item-focus');
 
        // needed when selectmenu is placed at the very bottom / top of the page
        clearTimeout(this.refreshTimeout);
        this.refreshTimeout = window.setTimeout(function () {
            self._refreshPosition();
        }, 200);
    },
 
    destroy: function() {
        this.element.removeData( this.widgetName )
            .removeClass( this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled' )
            .removeAttr( 'aria-disabled' )
            .unbind( ".selectmenu" );
 
        $( window ).unbind( ".selectmenu-" + this.ids[0] );
        $( document ).unbind( ".selectmenu-" + this.ids[0] );
 
        this.newelementWrap.remove();
        this.listWrap.remove();
 
        // unbind click event and show original select
        this.element
            .unbind(".selectmenu")
            .show();
 
        // call widget destroy function
        $.Widget.prototype.destroy.apply(this, arguments);
    },
 
    _typeAhead: function( code, eventType ) {
        var self = this,
            c = String.fromCharCode(code).toLowerCase(),
            matchee = null,
            nextIndex = null;
 
        // Clear any previous timer if present
        if ( self._typeAhead_timer ) {
            window.clearTimeout( self._typeAhead_timer );
            self._typeAhead_timer = undefined;
        }
 
        // Store the character typed
        self._typeAhead_chars = (self._typeAhead_chars === undefined ? "" : self._typeAhead_chars).concat(c);
 
        // Detect if we are in cyciling mode or direct selection mode
        if ( self._typeAhead_chars.length < 2 ||
             (self._typeAhead_chars.substr(-2, 1) === c && self._typeAhead_cycling) ) {
            self._typeAhead_cycling = true;
 
            // Match only the first character and loop
            matchee = c;
        }
        else {
            // We won't be cycling anymore until the timer expires
            self._typeAhead_cycling = false;
 
            // Match all the characters typed
            matchee = self._typeAhead_chars;
        }
 
        // We need to determine the currently active index, but it depends on
        // the used context: if it's in the element, we want the actual
        // selected index, if it's in the menu, just the focused one
        // I copied this code from _moveSelection() and _moveFocus()
        // respectively --thg2k
        var selectedIndex = (eventType !== 'focus' ?
            this._selectedOptionLi().data('index') :
            this._focusedOptionLi().data('index')) || 0;
 
        for (var i = 0; i < this._optionLis.length; i++) {
            var thisText = this._optionLis.eq(i).text().substr(0, matchee.length).toLowerCase();
 
            if ( thisText === matchee ) {
                if ( self._typeAhead_cycling ) {
                    if ( nextIndex === null )
                        nextIndex = i;
 
                    if ( i > selectedIndex ) {
                        nextIndex = i;
                        break;
                    }
                } else {
                    nextIndex = i;
                }
            }
        }
 
        if ( nextIndex !== null ) {
            // Why using trigger() instead of a direct method to select the
            // index? Because we don't what is the exact action to do, it
            // depends if the user is typing on the element or on the popped
            // up menu
            this._optionLis.eq(nextIndex).find("a").trigger( eventType );
        }
 
        self._typeAhead_timer = window.setTimeout(function() {
            self._typeAhead_timer = undefined;
            self._typeAhead_chars = undefined;
            self._typeAhead_cycling = undefined;
        }, self.options.typeAhead);
    },
 
    // returns some usefull information, called by callbacks only
    _uiHash: function() {
        var index = this.index();
        return {
            index: index,
            option: $("option", this.element).get(index),
            value: this.element[0].value
        };
    },
 
    open: function(event) {
        var self = this, o = this.options;
        if ( self.newelement.attr("aria-disabled") != 'true' ) {
            self._closeOthers(event);
            self.newelement.addClass('ui-state-active');
 
            self.list.attr('aria-hidden', false);
            self.listWrap.addClass( self.widgetBaseClass + '-open' );
 
            var selected = this._selectedOptionLi();
            if ( o.style == "dropdown" ) {
                self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
            } else {
                // center overflow and avoid flickering
                this.list
                    .css("left", -5000)
                    .scrollTop( this.list.scrollTop() + selected.position().top - this.list.outerHeight()/2 + selected.outerHeight()/2 )
                    .css("left","auto");
            }
 
            self._refreshPosition();
 
            var link = selected.find("a");
            if (link.length) link[0].focus();
 
            self.isOpen = true;
            self._trigger("open", event, self._uiHash());
        }
    },
 
    close: function(event, retainFocus) {
        if ( this.newelement.is('.ui-state-active') ) {
            this.newelement
                .removeClass('ui-state-active');
            this.listWrap.removeClass(this.widgetBaseClass + '-open');
            this.list.attr('aria-hidden', true);
            if ( this.options.style == "dropdown" ) {
                this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
            }
            if ( retainFocus ) {
                this.newelement.focus();
            }
            this.isOpen = false;
            this._trigger("close", event, this._uiHash());
        }
    },
 
    change: function(event) {
        this.element.trigger("change");
        this._trigger("change", event, this._uiHash());
    },
 
    select: function(event) {
        if (this._disabled(event.currentTarget)) { return false; }
        this._trigger("select", event, this._uiHash());
    },
 
    widget: function() {
        return this.listWrap.add( this.newelementWrap );
    },
 
    _closeOthers: function(event) {
        $('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function() {
            $(this).data('selectelement').selectmenu('close', event);
        });
        $('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
    },
 
    _toggle: function(event, retainFocus) {
        if ( this.isOpen ) {
            this.close(event, retainFocus);
        } else {
            this.open(event);
        }
    },
 
    _formatText: function(text, opt) {
        if (this.options.format) {
            text = this.options.format(text, opt);
        } else if (this.options.escapeHtml) {
            text = $('<div />').text(text).html();
        }
        return text;
    },
 
    _selectedIndex: function() {
        return this.element[0].selectedIndex;
    },
 
    _selectedOptionLi: function() {
        return this._optionLis.eq(this._selectedIndex());
    },
 
    _focusedOptionLi: function() {
        return this.list.find('.' + this.widgetBaseClass + '-item-focus');
    },
 
    _moveSelection: function(amt, recIndex) {
        // do nothing if disabled
        if (!this.options.disabled) {
            var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
            var newIndex = currIndex + amt;
            // do not loop when using up key
 
            if (newIndex < 0) {
                newIndex = 0;
            }
            if (newIndex > this._optionLis.size() - 1) {
                newIndex = this._optionLis.size() - 1;
            }
            // Occurs when a full loop has been made
            if (newIndex === recIndex) { return false; }
 
            if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
                // if option at newIndex is disabled, call _moveFocus, incrementing amt by one
                (amt > 0) ? ++amt : --amt;
                this._moveSelection(amt, newIndex);
            } else {
                this._optionLis.eq(newIndex).trigger('mouseover').trigger('mouseup');
            }
        }
    },
 
    _moveFocus: function(amt, recIndex) {
        if (!isNaN(amt)) {
            var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
            var newIndex = currIndex + amt;
        } else {
            var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
        }
 
        if (newIndex < 0) {
            newIndex = 0;
        }
        if (newIndex > this._optionLis.size() - 1) {
            newIndex = this._optionLis.size() - 1;
        }
 
        //Occurs when a full loop has been made
        if (newIndex === recIndex) { return false; }
 
        var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
 
        this._focusedOptionLi().find('a:eq(0)').attr('id', '');
 
        if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
            // if option at newIndex is disabled, call _moveFocus, incrementing amt by one
            (amt > 0) ? ++amt : --amt;
            this._moveFocus(amt, newIndex);
        } else {
            this._optionLis.eq(newIndex).find('a:eq(0)').attr('id',activeID).focus();
        }
 
        this.list.attr('aria-activedescendant', activeID);
    },
 
    _scrollPage: function(direction) {
        var numPerPage = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
        numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
        this._moveFocus(numPerPage);
    },
 
    _setOption: function(key, value) {
        this.options[key] = value;
        // set
        if (key == 'disabled') {
            if (value) this.close();
            this.element
                .add(this.newelement)
                .add(this.list)[value ? 'addClass' : 'removeClass'](
                    this.widgetBaseClass + '-disabled' + ' ' +
                    this.namespace + '-state-disabled')
                .attr("aria-disabled", value);
        }
    },
 
    disable: function(index, type){
            // if options is not provided, call the parents disable function
            if ( typeof( index ) == 'undefined' ) {
                this._setOption( 'disabled', true );
            } else {
                if ( type == "optgroup" ) {
                    this._disableOptgroup(index);
                } else {
                    this._disableOption(index);
                }
            }
    },
 
    enable: function(index, type) {
            // if options is not provided, call the parents enable function
            if ( typeof( index ) == 'undefined' ) {
                this._setOption('disabled', false);
            } else {
                if ( type == "optgroup" ) {
                    this._enableOptgroup(index);
                } else {
                    this._enableOption(index);
                }
            }
    },
 
    _disabled: function(elem) {
            return $(elem).hasClass( this.namespace + '-state-disabled' );
    },
 
    _disableOption: function(index) {
            var optionElem = this._optionLis.eq(index);
            if (optionElem) {
                optionElem.addClass(this.namespace + '-state-disabled')
                    .find("a").attr("aria-disabled", true);
                this.element.find("option").eq(index).attr("disabled", "disabled");
            }
    },
 
    _enableOption: function(index) {
            var optionElem = this._optionLis.eq(index);
            if (optionElem) {
                optionElem.removeClass( this.namespace + '-state-disabled' )
                    .find("a").attr("aria-disabled", false);
                this.element.find("option").eq(index).removeAttr("disabled");
            }
    },
 
    _disableOptgroup: function(index) {
            var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
            if (optGroupElem) {
                optGroupElem.addClass(this.namespace + '-state-disabled')
                    .attr("aria-disabled", true);
                this.element.find("optgroup").eq(index).attr("disabled", "disabled");
            }
    },
 
    _enableOptgroup: function(index) {
            var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
            if (optGroupElem) {
                optGroupElem.removeClass(this.namespace + '-state-disabled')
                    .attr("aria-disabled", false);
                this.element.find("optgroup").eq(index).removeAttr("disabled");
            }
    },
 
    index: function(newIndex) {
        if (arguments.length) {
            if (!this._disabled($(this._optionLis[newIndex])) && newIndex != this._selectedIndex()) {
                this.element[0].selectedIndex = newIndex;
                this._refreshValue();
                this.change();
            } else {
                return false;
            }
        } else {
            return this._selectedIndex();
        }
    },
 
    value: function(newValue) {
        if (arguments.length && newValue != this.element[0].value) {
            this.element[0].value = newValue;
            this._refreshValue();
            this.change();
        } else {
            return this.element[0].value;
        }
    },
 
    _refreshValue: function() {
        var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
        var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
        // deselect previous
        this.list
            .find('.' + this.widgetBaseClass + '-item-selected')
            .removeClass(this.widgetBaseClass + "-item-selected" + activeClass)
            .find('a')
            .attr('aria-selected', 'false')
            .attr('id', '');
        // select new
        this._selectedOptionLi()
            .addClass(this.widgetBaseClass + "-item-selected" + activeClass)
            .find('a')
            .attr('aria-selected', 'true')
            .attr('id', activeID);
 
        // toggle any class brought in from option
        var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
        var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
        this.newelement
            .removeClass(currentOptionClasses)
            .data('optionClasses', newOptionClasses)
            .addClass( newOptionClasses )
            .find('.' + this.widgetBaseClass + '-status')
            .html(
                this._selectedOptionLi()
                    .find('a:eq(0)')
                    .html()
            );
 
        this.list.attr('aria-activedescendant', activeID);
    },
 
    _refreshPosition: function() {
        var o = this.options;
 
        // if its a pop-up we need to calculate the position of the selected li
        if ( o.style == "popup" && !o.positionOptions.offset ) {
            var selected = this._selectedOptionLi();
            var _offset = "0 " + ( this.list.offset().top  - selected.offset().top - ( this.newelement.outerHeight() + selected.outerHeight() ) / 2);
        }
        this.listWrap
            .removeAttr('style')
            .zIndex( this.element.zIndex() + 1 )
            .position({
                // set options for position plugin
                of: o.positionOptions.of || this.newelement,
                my: o.positionOptions.my,
                at: o.positionOptions.at,
                offset: o.positionOptions.offset || _offset,
                collision: o.positionOptions.collision || (o.style == "popup" ? 'fit' :'flip')
            });
    }
});
 
})(jQuery);;
Drupal.behaviors.selectmenu = {
  attach: function(context, settings) {
    (function ($) {
      var form = null;
 
      // Select and apply jQuery Selectmenu to whitelisted CSS selectors first.
      $(Drupal.settings.selectmenu.selectmenu_css_whitelist).each(function(context) {
        $(this).selectmenu(Drupal.settings.selectmenu.options).addClass('selectmenu-whitelisted');
      });
 
      $('select:not(.selectmenu-whitelisted)', context).each(function(context){
        form = $(this).parents('form');
        var apply_selectmenu = true;
 
        // Skip multi-row selects
        if ($(this).attr('multiple')) {
          apply_selectmenu = false;
        }
 
        // If this form's ID isn't part of the exception list
        if (!in_array(form.attr('id'), Drupal.settings.selectmenu.form_id_exceptions)) {
          if (Drupal.settings.selectmenu.ignore_system_settings_forms
                      && (form.attr('id'))
                      && (form.attr('id').indexOf('system-') === 0
                            || $(this).parents('body.page-admin').length > 0
                )
            ) {
            apply_selectmenu = false;
          }
 
          // Check for Overlay forms
          if (Drupal.settings.selectmenu.ignore_overlay_forms) {
            if ($(this).parents('body.overlay').length > 0) {
              apply_selectmenu = false;
            }
          }
 
          // Check for Node add forms
          if (Drupal.settings.selectmenu.ignore_node_add_forms) {
            if ($(this).parents('body.page-node-add').length > 0) {
              apply_selectmenu = false;
            }
          }
 
          // If no ignore criteria met, carry out skinning select element
          if (apply_selectmenu && !$(this).hasClass('drupal-selectmenu')) {
            $(this).selectmenu(Drupal.settings.selectmenu.options).addClass('drupal-selectmenu');
          }
        }
      });
 
      function in_array (needle, haystack, argStrict) {
        // Checks if the given value exists in the array
        //
        // version: 1107.2516
        // discuss at: http://phpjs.org/functions/in_array
        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: vlado houba
        // +   input by: Billy
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
        // *     returns 1: true
        // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
        // *     returns 2: false
        // *     example 3: in_array(1, ['1', '2', '3']);
        // *     returns 3: true
        // *     example 3: in_array(1, ['1', '2', '3'], false);
        // *     returns 3: true
        // *     example 4: in_array(1, ['1', '2', '3'], true);
        // *     returns 4: false
        var key = '',
          strict = !! argStrict;
 
        if (strict) {
          for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
          }
        } else {
          for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
          }
        }
        return false;
      }
    })(jQuery);
  }
};
 
(function ($) {
  $(document).ready(function($){
 
  });
})(jQuery);
;
(function ($) {
 
$(document).ready(function() {
 
  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
 
  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {
 
      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");
 
      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain(this.hostname, ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });
 
  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });
 
});
 
/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}
 
})(jQuery);
;
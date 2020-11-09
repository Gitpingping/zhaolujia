/**********************************
	
说明：
	* 应用对象必须为舌签按钮的直接父元素，且父元素内不包含其他非按钮元素
	* example: $( ".menus_wrap" ).tabso({ cntSelect:".content_wrap",tabEvent:"mouseover" });
	* cntSelect:内容块的直接父元素的 jq 选择器
	* tabEvent:触发事件名
	* tabStyle:切换方式。可取值："normal" "fade" "move" "move-fade" "move-animate"
	* direction:移动方向。可取值："left" "top" （tabStyle为"move"或"move-fade" "move-animate"时有效）
	* aniMethod:动画方法（特殊效果需插件（如：easing）支持，tabStyle为"move-animate"时有效）
	* aniSpeed:动画速度
	* onStyle:菜单选中样式名
**********************************/

;(function($){
	
    $.fn.tabso=function( options ){
    
        var opts=$.extend({},$.fn.tabso.defaults,options );
        
        return this.each(function(i){
            var _this=$(this);
            var $menus=_this.children( opts.menuChildSel );
            var $container=$( opts.cntSelect ).eq(i);
            
            if( !$container) return;
            
            if( opts.tabStyle=="move"||opts.tabStyle=="move-fade"||opts.tabStyle=="move-animate" ){
                var step=0;
                if( opts.direction=="left"){
                    step=$container.children().children( opts.cntChildSel ).outerWidth(true);
                }else{
                    step=$container.children().children( opts.cntChildSel ).outerHeight(true);
                }
            }
            
            if( opts.tabStyle=="move-animate" ){ var animateArgu=new Object();	}
                
            $menus[ opts.tabEvent]( function(){
                var index=$menus.index( $(this) );
                $( this).addClass( opts.onStyle )
                    .siblings().removeClass( opts.onStyle );
                switch( opts.tabStyle ){
                    case "fade":
                        if( !($container.children( opts.cntChildSel ).eq( index ).is(":animated")) ){
                            $container.children( opts.cntChildSel ).eq( index ).siblings().css( "display", "none")
                                .end().stop( true, true ).fadeIn( opts.aniSpeed );
                        }
                        break;
                    case "move":
                        $container.children( opts.cntChildSel ).css(opts.direction,-step*index+"px");
                        break;
                    case "move-fade":
                        if( $container.children( opts.cntChildSel ).css(opts.direction)==-step*index+"px" ) break;
                        $container.children( opts.cntChildSel ).stop(true).css("opacity",0).css(opts.direction,-step*index+"px").animate( {"opacity":1},opts.aniSpeed );
                        break;
                    case "move-animate":
                        animateArgu[opts.direction]=-step*index+"px";
                        $container.children( opts.cntChildSel ).stop(true).animate( animateArgu,opts.aniSpeed,opts.aniMethod );
                        break;
                    default:
                        $container.children( opts.cntChildSel ).eq( index ).css( "display", "block")
                            .siblings().css( "display","none" );
                }
        
            });
            
            $menus.eq(0)[ opts.tabEvent ]();
            
        });
    };	
    
    $.fn.tabso.defaults={
        cntSelect : ".content_wrap",
        tabEvent : "mouseover",
        tabStyle : "normal",
        direction : "top",
        aniMethod : "swing",
        aniSpeed : "fast",
        onStyle : "current",
        menuChildSel : "*",
        cntChildSel : "*"
    };
    
    })(jQuery);
    
    
    /*
    
        countUp.js
        by @inorganik
    
    */
    
    // target = id of html element or var of previously selected html element where counting occurs
    // startVal = the value you want to begin at
    // endVal = the value you want to arrive at
    // decimals = number of decimal places, default 0
    // duration = duration of animation in seconds, default 2
    // options = optional object of options (see below)
    
    var CountUp = function(target, startVal, endVal, decimals, duration, options) {
    
        // make sure requestAnimationFrame and cancelAnimationFrame are defined
        // polyfill for browsers without native support
        // by Opera engineer Erik Möller
        var lastTime = 0;
        var vendors = ['webkit', 'moz', 'ms', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    
         // default options
        this.options = {
            useEasing : true, // toggle easing
            useGrouping : true, // 1,000,000 vs 1000000
            separator : ',', // character to use as a separator
            decimal : '.' // character to use as a decimal
        };
        // extend default options with passed options object
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this.options[key] = options[key];
            }
        }
        if (this.options.separator === '') this.options.useGrouping = false;
        if (!this.options.prefix) this.options.prefix = '';
        if (!this.options.suffix) this.options.suffix = '';
    
        this.d = (typeof target === 'string') ? document.getElementById(target) : target;
        this.startVal = Number(startVal);
        this.endVal = Number(endVal);
        this.countDown = (this.startVal > this.endVal);
        this.frameVal = this.startVal;
        this.decimals = Math.max(0, decimals || 0);
        this.dec = Math.pow(10, this.decimals);
        this.duration = Number(duration) * 1000 || 2000;
        var self = this;
    
        this.version = function () { return '1.6.0'; };
    
        // Print value to target
        this.printValue = function(value) {
            var result = (!isNaN(value)) ? self.formatNumber(value) : '--';
            if (self.d.tagName == 'INPUT') {
                this.d.value = result;
            }
            else if (self.d.tagName == 'text' || self.d.tagName == 'tspan') {
                this.d.textContent = result;
            }
            else {
                this.d.innerHTML = result;
            }
        };
    
        // Robert Penner's easeOutExpo
        this.easeOutExpo = function(t, b, c, d) {
            return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        };
        this.count = function(timestamp) {
    
            if (!self.startTime) self.startTime = timestamp;
    
            self.timestamp = timestamp;
    
            var progress = timestamp - self.startTime;
            self.remaining = self.duration - progress;
    
            // to ease or not to ease
            if (self.options.useEasing) {
                if (self.countDown) {
                    self.frameVal = self.startVal - self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
                } else {
                    self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
                }
            } else {
                if (self.countDown) {
                    self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
                } else {
                    self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
                }
            }
    
            // don't go past endVal since progress can exceed duration in the last frame
            if (self.countDown) {
                self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
            } else {
                self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
            }
    
            // decimal
            self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;
    
            // format and print value
            self.printValue(self.frameVal);
    
            // whether to continue
            if (progress < self.duration) {
                self.rAF = requestAnimationFrame(self.count);
            } else {
                if (self.callback) self.callback();
            }
        };
        // start your animation
        this.start = function(callback) {
            self.callback = callback;
            self.rAF = requestAnimationFrame(self.count);
            return false;
        };
        // toggles pause/resume animation
        this.pauseResume = function() {
            if (!self.paused) {
                self.paused = true;
                cancelAnimationFrame(self.rAF);
            } else {
                self.paused = false;
                delete self.startTime;
                self.duration = self.remaining;
                self.startVal = self.frameVal;
                requestAnimationFrame(self.count);
            }
        };
        // reset to startVal so animation can be run again
        this.reset = function() {
            self.paused = false;
            delete self.startTime;
            self.startVal = startVal;
            cancelAnimationFrame(self.rAF);
            self.printValue(self.startVal);
        };
        // pass a new endVal and start animation
        this.update = function (newEndVal) {
            cancelAnimationFrame(self.rAF);
            self.paused = false;
            delete self.startTime;
            self.startVal = self.frameVal;
            self.endVal = Number(newEndVal);
            self.countDown = (self.startVal > self.endVal);
            self.rAF = requestAnimationFrame(self.count);
        };
        this.formatNumber = function(nStr) {
            nStr = nStr.toFixed(self.decimals);
            nStr += '';
            var x, x1, x2, rgx;
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? self.options.decimal + x[1] : '';
            rgx = /(\d+)(\d{3})/;
            if (self.options.useGrouping) {
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
                }
            }
            return self.options.prefix + x1 + x2 + self.options.suffix;
        };
    
        // format startVal on initialization
        self.printValue(self.startVal);
    };
    
    // Example:
    // var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
    // numAnim.start();
    // numAnim.update(135);
    // with optional callback:
    // numAnim.start(someMethodToCallOnComplete);
    
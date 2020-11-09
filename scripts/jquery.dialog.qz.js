/*
浏览器判断方法
*/
var userAgent = navigator.userAgent.toLowerCase();
var q_browser = {
    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
    safari: /webkit/.test(userAgent),
    opera: /opera/.test(userAgent),
    msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
};

/*  
===============================================================================
WResize is the jQuery plugin for fixing the IE window resize bug
===============================================================================
*/
(function ($) {
    $.fn.wresize = function (f) {
        version = '1.1';
        wresize = { fired: false, width: 0 };

        function resizeOnce() {
            if (q_browser.msie) {
                if (!wresize.fired) {
                    wresize.fired = true;
                }
                else {
                    var version = parseInt(q_browser.version, 10);
                    wresize.fired = false;
                    if (version < 7) {
                        return false;
                    }
                    else if (version == 7) {
                        //a vertical resize is fired once, an horizontal resize twice
                        var width = $(window).width();
                        if (width != wresize.width) {
                            wresize.width = width;
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        function handleWResize(e) {
            if (resizeOnce()) {
                return f.apply(this, [e]);
            }
        }

        this.each(function () {
            if (this == window) {
                $(this).resize(handleWResize);
            }
            else {
                $(this).resize(f);
            }
        });

        return this;
    };

})(jQuery);

/*
* Boxy 0.1.4 - (c) 2008 Jason Frame
*/
jQuery.fn.boxy = function (options) {
    this.showTimeout = null;
    options = options || {};
    return this.each(function () {
        var node = this.nodeName.toLowerCase(), self = this;
        if (node == 'a') {
            jQuery(this).click(function () {
                var active = Boxy.linkedTo(this),
                    href = this.getAttribute('href'),
                    localOptions = jQuery.extend({ actuator: this, title: this.title }, options);
                var width = this.getAttribute('width'), height = this.getAttribute('height');
                if (width && width > 0) { jQuery.extend(localOptions, { width: width }); }
                if (height && height > 0) { jQuery.extend(localOptions, { height: height }); }
                if (active) {
                    active.show();
                } else if (href.indexOf('#') >= 0) {
                    var content = jQuery(href.substr(href.indexOf('#'))),
                        newContent = content.clone(true);
                    //content.remove();
                    localOptions.unloadOnHide = false;
                    new Boxy(newContent, localOptions);
                } else { // fall back to AJAX; could do with a same-origin check
                    if (!localOptions.cache) localOptions.unloadOnHide = true;
                    Boxy.load(this.href, localOptions);
                }

                return false;
            });
        } else if (node == 'form') {
            jQuery(this).bind('submit.boxy', function () {
                var _msg = $(this).attr('title') || "请确定：";
                Boxy.confirm(_msg, function () {
                    jQuery(self).unbind('submit.boxy').submit();
                });
                return false;
            });
        }
    });
};

var boxy_loading_image = '//img1.qianzhan.com/css/boxy/loading4.gif';
// Boxy Class
function Boxy(element, options) {
    this.boxy = jQuery(Boxy.WRAPPER);
    jQuery.data(this.boxy[0], 'boxy', this);
    this.visible = false;
    this.options = jQuery.extend({}, Boxy.DEFAULTS, options || {});

    if (this.options.modal) {
        this.options = jQuery.extend(this.options, { center: true, draggable: true });
    }

    // options.actuator == DOM element that opened this boxy
    // association will be automatically deleted when this boxy is remove()    
    if (this.options.actuator) {
        jQuery.data(this.options.actuator, 'active.boxy', this);
    }
    this._setupTitleBar();
    this.setContent(element || "<div></div>");

    this.boxy.css('display', 'none').appendTo(document.body);
    this.toTop();

    if (this.options.fixed && Boxy._u(this.options.x, this.options.y)) {
        if (q_browser.msie && q_browser.version < 7) {
            this.options.fixed = false; // IE6 doesn't support fixed positioning
        } else {
            this.boxy.addClass('fixed');
        }
    }

    if (this.options.center && Boxy._u(this.options.x, this.options.y)) {
        this.center();
    } else {
        this.moveTo(
            Boxy._u(this.options.x) ? Boxy.DEFAULT_X : this.options.x,
            Boxy._u(this.options.y) ? Boxy.DEFAULT_Y : this.options.y
        );
    }

    if (this.options.show) this.show();
};

Boxy.EF = function () { };

jQuery.extend(Boxy, {

    WRAPPER: "<table cellspacing='0' cellpadding='0' border='0' class='boxy-wrapper'>" +
                "<tr><td class='boxy-top-left'></td><td class='boxy-top'></td><td class='boxy-top-right'></td></tr>" +
                "<tr><td class='boxy-left'></td><td class='boxy-inner'></td><td class='boxy-right'></td></tr>" +
                "<tr><td class='boxy-bottom-left'></td><td class='boxy-bottom'></td><td class='boxy-bottom-right'></td></tr>" +
                "</table>",

    DEFAULTS: {
        title: null,           // titlebar text. titlebar will not be visible if not set.
        closeable: true,           // display close link in titlebar?
        miniable: false,           // display close link in titlebar?
        draggable: true,           // can this dialog be dragged?
        clone: false,          // clone content prior to insertion into dialog?
        actuator: null,           // element which opened this dialog
        center: true,           // center dialog in viewport?
        show: true,           // show dialog immediately?
        modal: false,          // make dialog modal?
        modalOpacity: 0.5,       //默认模态背景透明度
        fixed: true,           // use fixed positioning, if supported? absolute positioning used otherwise
        closeText: '',      // text to use for default close link
        closeDelay: 0,
        submiting: false,       //form正在提交处理
        unloadOnHide: false,          // should this dialog be removed from the DOM after being hidden?
        clickToFront: false,          // bring dialog to foreground on any click (not just titlebar)?
        behaviours: Boxy.EF,        // function used to apply behaviours to all content embedded in dialog.
        afterDrop: Boxy.EF,        // callback fired after dialog is dropped. executes in context of Boxy instance.
        afterShow: Boxy.EF,        // callback fired after dialog becomes visible. executes in context of Boxy instance.
        afterHide: Boxy.EF,        // callback fired after dialog is hidden. executed in context of Boxy instance.
        beforeUnload: Boxy.EF,      // callback fired after dialog is unloaded. executed in context of Boxy instance.
        onFormSubmit: Boxy.EF,
        customerClosed: Boxy.EF,
        callbackData: null,
        popTipIncon: ''

    },

    DEFAULT_X: 50,
    DEFAULT_Y: 50,
    zIndex: 1337,
    dragConfigured: false, // only set up one drag handler for all boxys
    resizeConfigured: false,
    dragging: null,

    //处理Form表单提交后返回的内容
    handlerFormCallback: function (cmd, rtn, source) {
        source.options.submiting = false;   //完成反馈！
        if (cmd == "close") {
            source.hideAndUnload();
        } else if (cmd == "success" || cmd == "success close") {
            var successText = "恭喜你，提交成功！";
            if (rtn && rtn.success) {
                successText = rtn.success;
            }
            Boxy.popTip('成功提示', "<br>" + successText + "<br>", 2500);
            if (cmd == "success close") { source.hideAndUnload(); }
        } else if (cmd == "error") {
            var errorText = "抱歉，请求错误！";
            if (rtn && rtn.error) {
                errorText = rtn.error;
            }
            Boxy.popTip('错误提示', "<br>" + errorText + "<br>", 4000);
        }
    },
    //   type: HTTP method, default: GET
    //   cache: cache retrieved content? default: false
    //   filter: jQuery selector used to filter remote content
    load: function (url, options, method, data) {
        if (method == typeof undefined || method == null) {
            method = 'GET';
        }
        if (data == typeof undefined || data == null) {
            data = {};
        }
        options = options || {};
        var ajax = {
            url: url, type: method, data: data, dataType: 'html', cache: false, success: function (html) {
                if (options.filter) { html = jQuery(html).filter(options.filter); }
                if (options.onFormSubmit) {
                    if (!options.filter) {
                        html = jQuery(html);
                    }
                    var form;
                    form = html.filter('form');
                    if (!form.is('form')) { form = html.find('form'); }
                    if (form.is('form')) {
                        form.find("input[type='submit']").attr("onclick", "").bind("click", function () {
                            try {
                                var _boxy = Boxy.get(this);
                                if (_boxy.options.submiting) {
                                    Boxy.popTip('错误提示', '正在处理您的提交，请稍候...', 2000);
                                    return false;
                                }
                                _boxy.options.submiting = true;
                                options.onFormSubmit(form.attr('action'), form.serialize(), Boxy.handlerFormCallback, _boxy);
                            } catch (err) { alert("回调出错"); }
                            return false;
                        });
                    }
                    html = jQuery("<div></div>").append(form);
                } else { html = jQuery("<div></div>").append(html); }
                new Boxy(html, options);
            }
        };
        jQuery.each(['type', 'cache'], function () {
            if (this in options) {
                ajax[this] = options[this];
                delete options[this];
            }
        });
        jQuery.ajax(ajax);
    },
    //iframe 载入
    loadFrame: function (url, options) {
        options = jQuery.extend(options, { isIframe: true });
        var html = jQuery('<div style="position:relative"></div>');
        html.append($('<img src="' + boxy_loading_image + '" border="0">').css({ position: "absolute", left: (options.width - 64) / 2, top: (options.height - 64) / 2 }));
        var frame = jQuery('<iframe frameborder="0" hspace="0"></iframe>').attr('src', url).css('visibility', 'hidden');
        if (options.width) { frame.css('width', options.width + 'px'); }
        if (options.height) { frame.css('height', options.height + 'px'); }
        var self = this;
        frame.load(function () {
            $(this).prev().css('display', 'none').remove();
            $(this).css('visibility', 'visible');
            //自动设置标题
            if ((window.location.hostname && $(this).attr('src').indexOf(window.location.hostname) > -1) || $(this).attr('src').indexOf('http://') == -1) {
                var title = options.title;
                if (!title || title == '') {
                    try {
                        var iframe = $(this).contents();
                        title = iframe.find('title').text();
                        if (title == 'undefined' || title == "") {
                            title = iframe.find('title').html(); // for IE
                        }
                    } catch (err) { }
                    if (title != 'undefined') { Boxy.get(this).setTitle(title); }
                }
            }
        });
        html.append(frame);
        if (!options.title) { options.title = ''; } //iframe 默认指定标题
        return new Boxy(html, options);
    },
    get: function (ele) {
        var p = jQuery(ele).parents('.boxy-wrapper');
        return p.length ? jQuery.data(p[0], 'boxy') : null;
    },
    // returns the boxy instance which has been linked to a given element via the
    // 'actuator' constructor option.
    linkedTo: function (ele) {
        return jQuery.data(ele, 'active.boxy');
    },
    loading: function (message, options) {
        var options = jQuery.extend({ modalOpacity: 0.1 }, options);
        var html = jQuery('<div style="text-align:center;font-size:14px;"></div>');
        html.append($('<img border="0" />').attr("src", boxy_loading_image).css("margin-bottom", 3));
        html.append("<br/>");
        html.append(message);
        return new Boxy(html, options);
    },
    // displays an alert box with a given message, calling optional callback
    // after dismissal.
    alert: function (message, callback, options, btnText) {
        if (!btnText) {
            btnText = "确认";
        }
        return Boxy.ask(message, [btnText], callback, options);
    },

    // displays an alert box with a given message, calling after callback iff
    // user selects OK.
    confirm: function (message, after, options) {
        return Boxy.ask(message, ['确认', '取消'], function (response) {
            if (response == '确认') after(options.callbackData);
        }, options);
    },
    popTip: function (title, message, delay, options) {
        var settings = jQuery.extend({ modal: false, closeable: true, title: title, closeDelay: delay, popTipIcon: '' }, options || {});
        if (settings.popTipIcon == '') {
            var html = jQuery('<div style="font-size:14px;"></div>').append(message);
            return new Boxy(html, settings);
        } else {
            var html = jQuery('<div style="font-size:14px;"></div>'); //.append(message);
            if (settings.popTipIcon != '') {
                html.append(this.getPopIcon(settings.popTipIcon));
                html.append(jQuery('<div style="line-height: 20px; padding-top: 5px; "></div>').append(message));
            } else {
                html.append(message);
            }
            return new Boxy(html, settings);
        }
    },
    getPopIcon: function (iconType) {
        if (iconType == 'help') {
            return jQuery('<div style="float:left;margin-right:15px;"><img src="/css/boxy/help.gif" alt="" /></div>');
        } else if (iconType == 'error') {
            return jQuery('<div style="float:left;margin-right:15px;"><img src="/css/boxy/important.gif" alt="" /></div>');
        }
        return jQuery('<div style="float:left;margin-right:15px;"><img src="/css/boxy/info.gif" alt="" /></div>');
    },
    popLinked: function (ele, options) {
        options = jQuery.extend(options, { actuator: ele });
        var html = jQuery("<div></div>").append(options.actuator.clone(true).contents());
        return new Boxy(html, options);
    },
    ask: function (question, answers, callback, options) {

        options = jQuery.extend({ modal: true, closeable: false },
                                options || {},
                                { show: true, unloadOnHide: true });

        var body = jQuery('<div></div>');
        var qbody = jQuery('<div style="font-size:14px;" class="question"></div>').appendTo(body);
        qbody.append(this.getPopIcon(options.popTipIcon));
        qbody.append(jQuery('<div style="line-height: 20px; padding-top: 5px; "></div>').append(question));
        body.append("<br/>");
        //var body = jQuery('<div></div>').append(jQuery('<div class="question"></div>').html(question));

        // ick
        var map = {}, answerStrings = [];
        if (answers instanceof Array) {
            for (var i = 0; i < answers.length; i++) {
                map[answers[i]] = answers[i];
                answerStrings.push(answers[i]);
            }
        } else {
            for (var k in answers) {
                map[answers[k]] = k;
                answerStrings.push(answers[k]);
            }
        }

        var buttons = jQuery('<form class="answers"></form>');
        for (var a = 0; a < answerStrings.length; a++) {
            var v = answerStrings[a];
            if (v == "提 交" || v == "提交" || v == "确认" || v == "确定" || v == "确 认" || v == "确 定" || v == "开始" || v == "开 始") {
                buttons.append($('<input type="button" class="submit2"/>').val(v).focus()).append(" ");
            } else if (v == "关 闭" || v == "关闭" || v == "取消" || v == "取 消") {
                buttons.append($('<input type="button" class="submit-gray2" />').val(v));
            } else {
                buttons.append($('<input type="button" />').addClass("submit" + v.trim().length).val(v)).append(" ");
            }
        }

        jQuery('input[type=button]', buttons).click(function () {
            var clicked = this;
            Boxy.get(this).hide(function () {
                if (callback) callback(map[clicked.value], options.callbackData);
            });
        });

        body.append(buttons);
        new Boxy(body, options);
    },

    // returns true if a modal boxy is visible, false otherwise
    isModalVisible: function () {
        return jQuery('.boxy-modal-blackout').length > 0;
    },

    _u: function () {
        for (var i = 0; i < arguments.length; i++)
            if (typeof arguments[i] != 'undefined') return false;
        return true;
    },

    _handleResize: function (evt) {
        var d = jQuery(document);
        jQuery('.boxy-modal-blackout').css('display', 'none').css({
            width: d.width(), height: d.height()
        }).css('display', 'block');
    },

    _handleDrag: function (evt) {
        var d;
        if (d = Boxy.dragging) {
            d[0].boxy.css({ left: evt.pageX - d[1], top: evt.pageY - d[2] });
        }
    },

    _nextZ: function () {
        return Boxy.zIndex++;
    },

    _viewport: function () {
        var d = document.documentElement, b = document.body, w = window;
        return jQuery.extend(
            q_browser.msie ?
                { left: b.scrollLeft || d.scrollLeft, top: b.scrollTop || d.scrollTop} :
                { left: w.pageXOffset, top: w.pageYOffset },
            !Boxy._u(w.innerWidth) ?
                { width: w.innerWidth, height: w.innerHeight} :
                (!Boxy._u(d) && !Boxy._u(d.clientWidth) && d.clientWidth != 0 ?
                    { width: d.clientWidth, height: d.clientHeight} :
                    { width: b.clientWidth, height: b.clientHeight }));
    },
    showMask: function (zIndex) {
        if (!Boxy.resizeConfigured) {
            Boxy.resizeConfigured = true;
            jQuery(window).resize(function () { Boxy._handleResize(); });
        }
        var modalBlackout = jQuery('<div class="boxy-modal-blackout" id="boxy-modal-blackout1"></div>')
                .css({ zIndex: zIndex ? zIndex : Boxy._nextZ(),
                    opacity: 0.5,
                    display: 'none',
                    width: jQuery(document).width(),
                    height: jQuery(document).height()
                }).appendTo(document.body);

        if (q_browser.msie && q_browser.version < 7) {
            modalBlackout.css('width', jQuery(document).width() - 20); //IE6 下需要减掉
            //iframe 遮罩
            jQuery('<iframe id="qzModalIframeMask1" src="javascript:\'\';" class="boxy-modal-blackout-iframe"></iframe>')
								.css({ opacity: 0, width: '100%',
								    height: jQuery(document).height()
								}).appendTo(document.body);
        }
        //return;
        //显示Modal
        //            setTimeout(function () {
        //                jQuery('.boxy-modal-blackout').show(); //('fast');
        //            }, 0);
        modalBlackout.show();
    },
    hideMask: function () {
        jQuery('#qzModalIframeMask1').remove();
        jQuery(document.body).unbind('keypress.boxy');
        jQuery('#boxy-modal-blackout1').hide(25, function () {
            jQuery(this).remove();
        });
    }
});

Boxy.prototype = {
    // Returns the size of this boxy instance without displaying it.
    // Do not use this method if boxy is already visible, use getSize() instead.
    estimateSize: function () {
        this.boxy.css({ visibility: 'hidden', display: 'block' });
        var dims = this.getSize();
        this.boxy.css('display', 'none').css('visibility', 'visible');
        return dims;
    },

    // Returns the dimensions of the entire boxy dialog as [width,height]
    getSize: function () {
        return [this.boxy.width(), this.boxy.height()];
    },

    // Returns the dimensions of the content region as [width,height]
    getContentSize: function () {
        var c = this.getContent();
        return [c.width(), c.height()];
    },

    // Returns the position of this dialog as [x,y]
    getPosition: function () {
        var b = this.boxy[0];
        return [b.offsetLeft, b.offsetTop];
    },

    // Returns the center point of this dialog as [x,y]
    getCenter: function () {
        var p = this.getPosition();
        var s = this.getSize();
        return [Math.floor(p[0] + s[0] / 2), Math.floor(p[1] + s[1] / 2)];
    },

    // Returns a jQuery object wrapping the inner boxy region.
    // Not much reason to use this, you're probably more interested in getContent()
    getInner: function () {
        return jQuery('.boxy-inner', this.boxy);
    },

    // Returns a jQuery object wrapping the boxy content region.
    // This is the user-editable content area (i.e. excludes titlebar)
    getContent: function () {
        return jQuery('.boxy-content', this.boxy);
    },

    // Replace dialog content
    setContent: function (newContent) {
        newContent = jQuery(newContent).css({ display: 'block' }).addClass('boxy-content');
        //if (!this.options.isIframe) {
        if (this.options.width) { newContent.css('width', this.options.width + 'px'); }
        if (this.options.height) { newContent.css('height', this.options.height + 'px'); }
        //}
        if (this.options.clone) newContent = newContent.clone(true);
        this.getContent().remove();
        this.getInner().append(newContent);
        this._setupDefaultBehaviours(newContent);
        this.options.behaviours.call(this, newContent);
        return this;
    },

    // Move this dialog to some position, funnily enough
    moveTo: function (x, y) {
        this.moveToX(x).moveToY(y);
        this.showIframeMask(); //iframe 遮罩
        return this;
    },

    // Move this dialog (x-coord only)
    moveToX: function (x) {
        if (typeof x == 'number') this.boxy.css({ left: x });
        else this.centerX();
        return this;
    },

    // Move this dialog (y-coord only)
    moveToY: function (y) {
        if (typeof y == 'number') this.boxy.css({ top: y });
        else this.centerY();
        return this;
    },

    // Move this dialog so that it is centered at (x,y)
    centerAt: function (x, y) {
        var s = this[this.visible ? 'getSize' : 'estimateSize']();
        if (typeof x == 'number') this.moveToX(x - s[0] / 2);
        if (typeof y == 'number') this.moveToY(y - s[1] / 2);
        return this;
    },

    centerAtX: function (x) {
        return this.centerAt(x, null);
    },

    centerAtY: function (y) {
        return this.centerAt(null, y);
    },

    // Center this dialog in the viewport
    // axis is optional, can be 'x', 'y'.
    center: function (axis) {
        var v = Boxy._viewport();
        var o = this.options.fixed ? [0, 0] : [v.left, v.top];
        if (!axis || axis == 'x') this.centerAt(o[0] + v.width / 2, null);
        if (!axis || axis == 'y') this.centerAt(null, o[1] + v.height / 2);
        return this;
    },

    // Center this dialog in the viewport (x-coord only)
    centerX: function () {
        return this.center('x');
    },

    // Center this dialog in the viewport (y-coord only)
    centerY: function () {
        return this.center('y');
    },

    // Resize the content region to a specific size
    resize: function (width, height, after) {
        if (!this.visible) return;
        var bounds = this._getBoundsForResize(width, height);
        this.boxy.css({ left: bounds[0], top: bounds[1] });
        this.getContent().css({ width: bounds[2], height: bounds[3] });
        self.showIframeMask(); //iframe 遮罩
        if (after) after(this);
        return this;
    },

    // Tween the content region to a specific size
    tween: function (width, height, after) {
        if (!this.visible) return;
        var bounds = this._getBoundsForResize(width, height);
        var self = this;
        this.boxy.stop().animate({ left: bounds[0], top: bounds[1] });
        this.getContent().stop().animate({ width: bounds[2], height: bounds[3] }, function () {
            if (!self.options.modal) { self.showIframeMask(); } //iframe 遮罩            
            if (after) after(self);
        });
        return this;
    },

    // Returns true if this dialog is visible, false otherwise
    isVisible: function () {
        return this.visible;
    },
    //显示背景
    showIframeMask: function (disp) {
        if ((q_browser.msie && q_browser.version < 7) || disp) {
            if (!this.options.modal || disp) {
                var size = this.getSize();
                var pos = this.getPosition();
                var self = this;
                if (!this.iframeMask) {
                    var position = this.options.fixed ? "fixed" : "absolute";
                    //iframe 遮罩
                    this.iframeMask = jQuery('<iframe id="sodaoModalIframeMask" src="javascript:\'\';" class="boxy-modal-blackout-iframe"></iframe>')
								.css({ opacity: 0,
								    position: position, zIndex: 128,
								    width: 0, height: 0, left: pos[0], top: pos[1],
								    display: 'none'
								}).appendTo(document.body);
                    this.options.fixed = false; //IE6 doesn't support fixed positioning                    
                } else {
                    this.iframeMask.css({ display: 'none', width: 0, height: 0, left: pos[0], top: pos[1] });
                }
                setTimeout(function () { self.iframeMask.css({ display: "", width: size[0], height: size[1] }); }, 50);
            }
        }
    },
    // Make this boxy instance visible
    show: function () {
        if (this.visible) return;
        var self = this;
        if (this.options.modal) {
            if (!Boxy.resizeConfigured) {
                Boxy.resizeConfigured = true;
                jQuery(window).resize(function () { Boxy._handleResize(); });
            }
            this.modalBlackout = jQuery('<div class="boxy-modal-blackout"></div>')
                .css({ zIndex: Boxy._nextZ(),
                    opacity: this.options.modalOpacity,
                    display: 'none',
                    width: jQuery(document).width(),
                    height: jQuery(document).height()
                }).appendTo(document.body);

            if (q_browser.msie && q_browser.version < 7) {
                this.modalBlackout.css('width', jQuery(document).width() - 20); //IE6 下需要减掉
                //iframe 遮罩
                this.iframeMask = jQuery('<iframe id="sodaoModalIframeMask" src="javascript:\'\';" class="boxy-modal-blackout-iframe"></iframe>')
								.css({ opacity: 0, width: '100%',
								    height: jQuery(document).height()
								}).appendTo(document.body);
            }
            //return;
            //显示Modal
            //            setTimeout(function () {
            //                jQuery('.boxy-modal-blackout').show(); //('fast');
            //            }, 0);
            this.modalBlackout.show();
            this.toTop();
            if (this.options.closeable) {
                jQuery(document.body).bind('keypress.boxy', function (evt) {
                    evt = event || evt;
                    var key = evt.which || evt.keyCode;
                    if (key == 27) {
                        self.hideAndUnload();
                        jQuery(document.body).unbind('keypress.boxy');
                    }
                });
            }
            /*
            this.showTimeout = setTimeout(function () {
            self.boxy.stop().css({ opacity: 1 }).stop().show(); // fadeIn('fast');
            self.tweenShow(true);
            }, (this.options.modalOpacity <= 0.1 ? 25 : 100));*/
            self.boxy.show(); // fadeIn('fast');
            self.tweenShow(true);
        } else {
            self.boxy.show(); // this.boxy.stop().css({ opacity: 1 }).stop().show(); // fadeIn('fast');
            this.tweenShow();
        }

        this.visible = true;
        this._fire('afterShow');

        //定时自动关闭
        if (this.options.closeDelay && this.options.closeDelay > 0) {
            setTimeout(function () { self.hideAndUnload(); }, self.options.closeDelay);
        }
        return this;
    },
    tweenShow: function (disp) {
        if (!this.options.modal || disp) { this.showIframeMask(disp); }
        //根据是否Iframe来决定是否要动画展示
        //        if (!this.options.isIframe) {
        //            if (this.options.width && this.options.height) { 
        //                if (!this.visible) { this.visible = true; }
        //                this.tween(this.options.width, this.options.height);
        //            } else { if (!this.options.modal) { this.showIframeMask(); } }
        //        } else { if (!this.options.modal) { this.showIframeMask(); } }
    },
    // Hide this boxy instance
    hide: function (after) {
        try { clearTimeout(this.showTimeout); } catch (e) { } //clearTimeout
        if (!this.visible) return;
        var self = this;
        if (this.iframeMask) {
            this.iframeMask.css('display', 'none');
        }
        if (this.options.modal) {
            jQuery(document.body).unbind('keypress.boxy');
            this.modalBlackout.hide(25, function () {
                jQuery(this).remove();
            });
        }
        if (this.options.isIframe) {
            this.boxy.find("iframe").attr("src", "").removeAttr("id");
        }
        this.boxy.stop().hide();
        self.boxy.css({ display: 'none' });
        self.visible = false;
        self._fire('afterHide');
        if (after) after(self);
        if (self.options.unloadOnHide) self.unload();
        return this;
    },

    toggle: function () {
        this[this.visible ? 'hide' : 'show']();
        return this;
    },

    hideAndUnload: function (after) {
        this.options.unloadOnHide = true;
        this.hide(after);
        return this;
    },

    unload: function () {
        this._fire('beforeUnload');
        this.boxy.remove();
        if (this.options.actuator) {
            jQuery.data(this.options.actuator, 'active.boxy', false);
        }
    },

    // Move this dialog box above all other boxy instances
    toTop: function () {
        this.boxy.css({ zIndex: Boxy._nextZ() });
        return this;
    },

    // find element by id
    findById: function (el_id) {
        return this.boxy.find('#' + el_id);
    },

    // Returns the title of this dialog
    getTitle: function () {
        return jQuery('> .title-bar h2', this.getInner()).html();
    },

    // Sets the title of this dialog
    setTitle: function (t) {
        jQuery('> .title-bar h2', this.getInner()).html(t);
        return this;
    },
    enableMin: function (titleBar) {
        if (!titleBar) {
            if (this.option.miniable) return;
            titleBar = jQuery('> .title-bar', this.getInner());
            this.option.miniable = true;
        }
        var self = this;
        titleBar.append(jQuery('<a href="#" class="min"></a>').bind("click", function () {
            var css = $(this).attr("class");
            if (css == "min") {
                $(this).attr("class", "max");
                return self._minBoxy();
            } else {
                $(this).attr("class", "min");
                return self._maxBoxy();
            }
        }));
        return this;
    },
    // Don't touch these privates
    _getBoundsForResize: function (width, height) {
        var csize = this.getContentSize();
        var delta = [width - csize[0], height - csize[1]];
        var p = this.getPosition();
        return [Math.max(p[0] - delta[0] / 2, 0),
                Math.max(p[1] - delta[1] / 2, 0), width, height];
    },

    _troggleSelect: function (target, selState) {
        if (typeof target.onselectstart != "undefined") //IE route  
            document.body.onselectstart = function () { return selState; }
        else if (typeof target.style.MozUserSelect != "undefined") //Firefox route  
            document.body.style.MozUserSelect = selState ? "-moz-all" : "none";
        else //All other route (ie: Opera)  
            document.body.onmousedown = function () { return selState; }
    },
    _minBoxy: function () {
        this.boxy.find('.boxy-content').hide();
        return false;
    },
    _maxBoxy: function () {
        this.boxy.find('.boxy-content').show();
        return false;
    },
    _setupTitleBar: function () {
        if (this.options.title && (this.options.title != '' || this.options.closeable)) {
            var self = this;
            var tb = jQuery("<div class='title-bar'></div>").html("<h2 style='margin-right:57px;'>" + this.options.title + "</h2>"); //.css('cursor', (this.options.draggable ? 'move' : 'arrow'))
            if (this.options.closeable) {
                tb.append(jQuery("<a href='#' class='close'></a>").bind("mouseenter", function () { $(this).attr("class", "closeover"); }).bind("mouseleave", function () { $(this).attr("class", "close"); }).html(this.options.closeText)); //attr('title', this.options.closeText)
            }
            if (this.options.miniable) {
                self.enableMin(tb);
            }
            if (this.options.draggable) {
                tb[0].onselectstart = function () { return false; }
                tb[0].unselectable = 'on';
                tb[0].style.MozUserSelect = 'none';
                if (!Boxy.dragConfigured) {
                    jQuery(document).mousemove(Boxy._handleDrag);
                    Boxy.dragConfigured = true;
                }
                tb.mousedown(function (evt) {
                    self.toTop();
                    Boxy.dragging = [self, evt.pageX - self.boxy[0].offsetLeft, evt.pageY - self.boxy[0].offsetTop];
                    jQuery(this).addClass('dragging');
                    self._troggleSelect(this, false);

                }).mouseup(function () {
                    jQuery(this).removeClass('dragging');
                    self._troggleSelect(this, true);
                    Boxy.dragging = null;
                    self._fire('afterDrop');
                });
            }
            this.getInner().prepend(tb);
            this._setupDefaultBehaviours(tb);
        }
    },

    _setupDefaultBehaviours: function (root) {
        var self = this;
        if (this.options.clickToFront) {
            root.click(function () { self.toTop(); });
        }
        jQuery('.close', root).click(function () {
            if (self.options.isIframe) {
                self.hideAndUnload();
            } else {
                self.hideAndUnload(); //hide();
            }
            return false;
        }).mousedown(function (evt) { evt.stopPropagation(); });
    },

    _fire: function (event) {
        if (event == "afterDrop") {
            this.showIframeMask();
        } else if (event == "afterHide") {
            if (this.iframeMask) { this.iframeMask.remove(); }
        }
        var self = this;
        this.options[event].call(this, self.boxy);
    }
};


//返回格式化后的日期字符串，格式主要是yyyy MM dd HH mm ss W的任意组合
Date.prototype.format = function (formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    var month = this.getMonth() + 1;
    str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
    str = str.replace(/M/g, month);
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str;
}

//去掉首尾的空格
String.prototype.trim = function () { return (this.replace(/^\s+|\s+$/g, '')); }
//返回字符串的实际长度, 一个汉字算2个长度
String.prototype.len = function () {
    var str = this;
    return str.replace(/[^\x00-\xff]/g, "**").length;
}
//参数替换，在一个带有参数的字符串，可传入多个参数，按顺序替换
String.prototype.format = function (strs) {
    var str = this;
    for (var a = 0; a < strs.length; a++) { var reg = new RegExp("\\{" + a + "\\}", "g"); str = str.replace(reg, strs[a]); }
    return str;
}
//把字符串转变为日期格式，可返回定制的日期格式
String.prototype.toDate = function () {
    var reg = /^(\d+)-(\d+)-(\d+)( (\d+):(\d+):(\d+))?$/;
    var r = this.match(reg);
    if (r == null) return "";
    r[2] = r[2] - 1;
    if (r[4].trim() == "") { r[5] = 0; r[6] = 0; r[7] = 0; }
    var d = new Date(r[1], r[2], r[3], r[5], r[6], r[7]);
    return d;
}
//获取最左的前N个字，并返回是否带省略号
String.prototype.left = function (len, bdot) {
    var str = this;
    if (bdot == 'undefined') { bdot = false; }
    if (str.length <= len) { return str; }
    str = str.substr(0, len);
    if (bdot) { str += "..."; }
    return str;
}
//验证开始的格式
String.prototype.startWith = function (format) {
    var str = this;
    var ruleStr = "^" + format;
    var regExp = new RegExp(ruleStr, "ig");
    return regExp.test(str);
}
//返回字符串是否为空OrNull
String.prototype.isNullOrEmpty = function () {
    var str = this;
    if (str == null) { return true; }
    if (str.replace(/^\s+|\s+$/g, '') == '') { return true; }
    return false;
}
//返回字符串是否符合某个正则匹配
String.prototype.isMatched = function (ruleStr, ruleSet) {
    var str = this;
    if (ruleSet == null || ruleSet == "" || ruleSet == "undefined") { ruleSet = "ig"; }
    var regExp = new RegExp(ruleStr, ruleSet);
    return regExp.test(str);
}

function HTMLEncode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}
function HTMLDecode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
} 

//$(document).ready(function() {
//    $(".sodao-dialog").boxy();
//});

var dialogBox = Boxy;
var loadingBox;
var dialogList = new Array();

var QZCheck = {
    _u: function () {
        for (var i = 0; i < arguments.length; i++)
            if (typeof arguments[i] != 'undefined') return false;
        return true;
    },
    _un: function () {
        var _tmp = arguments[0];
        if (_tmp == 'undefined' || _tmp == null)
            return true;
        return false;
    },
    _une: function () {
        var _tmp = arguments[0];
        if (_tmp == 'undefined' || _tmp == null || _tmp == '')
            return true;
        return false;
    },
    _nau: function () {
        var _uc = 0;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] != 'undefined' && arguments[i] != null) { _uc++; }
        }
        return _uc < arguments.length ? true : false;
    },
    _gt0: function () {
        var _tmp = arguments[0];
        if (_tmp == 'undefined' || _tmp == null)
            return false;
        if (isNaN(_tmp)) { return false; }
        return _tmp > 0 ? true : false;
    },
    _gtN: function (_num, _min) {
        if (_num > _min) { return _num; }
        return _min;
    },
    _word: function (txtArea, tipId, maxRows, minRows) {
        var maxWords = parseInt($(txtArea).attr("maxlength"));
        var curWords = $(txtArea).val().length;
        if (curWords > maxWords) {
            $(txtArea).val($(txtArea).val().substring(0, maxWords));
            if (tipId != "") { $('#' + tipId).html(maxWords) };
        } else {
            if (tipId != "") { $('#' + tipId).html(curWords); };
        }
        if (maxRows) {
            var rows = $(txtArea).val().split('\n').length;
            if (rows > minRows) {
                if (rows > maxRows) { $(txtArea).attr('rows', maxRows); }
                else { $(txtArea).attr('rows', rows); }
            } else {
                $(txtArea).attr('rows', minRows);
            }
        }
    }
}

var sDialog = {
    //设置Cookie和获取Cookie，Cookie名不存在返回'undefined'
    getCookie: function (sName) { var aCookie = document.cookie.split('; '); for (var i = 0; i < aCookie.length; i++) { var aCrumb = aCookie[i].split('='); if (sName == aCrumb[0]) { if (aCrumb[1] != null && aCrumb[1] != typeof undefined) { return unescape(aCrumb[1]); }; return ''; } }; return undefined; },
    setCookie: function (sName, sValue, minutesKeep, domain) {
        var now = new Date(); var expireTime = new Date(now.getTime() + minutesKeep * 60000);
        if (!domain) {
            document.cookie = sName + '=' + escape(sValue) + '; path=/; expires=' + expireTime.toGMTString() + ';';
        } else {
            document.cookie = sName + '=' + escape(sValue) + '; domain=' + domain + '; expires=' + expireTime.toGMTString() + ';';
        }
    },

    //active message
    activeMsg: function (objId, msg, align, width, timeout, action, callback) {
        var obj, _objId;
        if (typeof objId == "object") {
            obj = $(objId);
            _objId = obj.attr('id');
        } else {
            obj = $('#' + objId);
            _objId = objId;
        }
        if (QZCheck._un(obj) && QZCheck._une(msg)) {
            return this.message('调用此函数，请设置objId, msg参数且objId必须存在！', "调用错误提示", 3000);
        }

        var html = $('#activeBox_' + _objId);
        if (!html.attr('id')) {
            var css;
            if (align == 'L') { css = 'tips-box-t'; }
            else if (align == 'T') { css = 'tips-box-b'; }
            else if (align == 'R') { css = 'tips-box-t'; }
            else { css = 'tips-box-l'; }
            var msg = '<span></span><div class="tips-content">' + msg + '</div>';
            html = this._getBox(_objId, msg, css);
            if (QZCheck._gt0(width)) { html.css({ width: width }); }
            html.appendTo(document.body);
        } else {
            html.find('.tips-content').html(msg);
            return false;
        }
        var xy = sDialog._getDialogXY(false, html.outerWidth(), objId, align);
        var left = xy.left, top = xy.top;

        if (align == 'W') {
            left = left + obj.outerWidth() + 5;
            top = top - html.outerHeight();
            if (html.outerHeight() > obj.outerHeight()) { top += (html.outerHeight() - obj.outerHeight()) / 2; }
            else { top -= (html.outerHeight() - obj.outerHeight()) / 2; }
        } else if (align == 'T') {
            top = top - obj.outerHeight() - html.outerHeight();
        } else if (align == 'R') {
            left = left;
        }
        if (QZCheck._une(action) || action == "fade") {
            html.css({ left: left, top: top }).stop().fadeIn("slow", function () { sDialog._closeActive(_objId, timeout, callback); });
        } else if (action == "slide-L") {
            html.css({ left: (left - 60), top: top }).stop().animate({
                left: left, opacity: 'show'
            }, { duration: 500, complete: function () { sDialog._closeActive(_objId, timeout, callback); } });
        }
        else if (action == "slide-R") {
            html.css({ left: (left + 60), top: top }).stop().animate({
                left: left, opacity: 'show'
            }, { duration: 500, complete: function () { sDialog._closeActive(_objId, timeout, callback); } });
        }
        return false;
    },
    //close active msg
    activeClose: function (objId) {
        try {
            $('#activeBox_' + objId).stop().fadeOut("normal", function () { $('#activeBox_' + objId).remove(); });
        } catch (e) { }
    },
    //close active msg
    activeHide: function (objId) {
        try {
            $('#activeBox_' + objId).hide();
            $('#activeBox_' + objId).remove();
        } catch (e) { }
    },
    //_close active
    _closeActive: function (objId, timeout, callback) {
        if (QZCheck._gt0(timeout)) {
            setTimeout(function () { sDialog.activeClose(objId); }, timeout);
        }
        if (callback) { callback(); }
    },
    //get div full content
    _getBox: function (objId, msg, cssName) {
        var html = $('<div></div>').attr("class", cssName).attr("id", "activeBox_" + objId).css({
            display: "none", position: "absolute",
            zIndex: sDialog.getZIndex(), opacity: 1.0
        }).append(msg);
        return html;
    },
    //activeBox
    activeBox: function (msg, timeout, action, callback, cssName) {
        if (!cssName) { cssName = ''; }
        var html = this._getBox('', msg, cssName);
        var v = dialogBox._viewport();
        html.appendTo(document.body);
        var left = v.left + (v.width) / 2 - html.width() / 2;
        var top = v.top + (v.height) / 2 - html.height() / 2;
        var tarTop = top - 120;
        if (tarTop < 0) { tarTop = 0; }
        html.css({ left: left, top: top }).stop().animate({
            top: tarTop, opacity: 'show'
        }, { duration: 900, complete: function () { sDialog._closeActive('', timeout, callback); } });
        return false;
    },
    centerXY: function (objId, bFixed, dependId) {
        var obj = $('#' + objId);
        if (!dependId) {
            if (q_browser.msie && q_browser.version < 7) {
                bFixed = false;
            }
            var v = dialogBox._viewport();
            var o = bFixed ? [0, 0] : [v.left, v.top];
            var x = o[0] + v.width / 2 - obj.width() / 2;
            var y = o[1] + v.height / 2 - obj.height() / 2;
            obj.css({ left: x, top: y, position: bFixed ? "fixed" : "absolute", zIndex: dialogBox._nextZ() });
        } else {
            var depObj = $('#' + dependId);
            var x = depObj.width() / 2 - obj.width() / 2;
            var y = depObj.height() / 2 - obj.height() / 2;
            obj.css({ left: x, top: y, position: "absolute", zIndex: dialogBox._nextZ() });
        }
        return obj;
    },
    //loading
    loading: function (msg, timeout, width, height, modal) {
        if (QZCheck._un(msg)) {
            return this.message('调用此函数，请设置msg参数！', "调用错误提示", 3000);
        }
        if (msg == '') { msg = '处理中，请稍候...'; }
        if (QZCheck._un(width)) { width = 150; }
        if (height < 85) { height = 85; }
        var options = this._getOptions(width, height, modal);
        if (QZCheck._gt0(timeout)) { options = jQuery.extend(options, { closeDelay: QZCheck._gtN(timeout, 10000) }) }
        else { options = jQuery.extend(options, { closeDelay: 10000 }) };
        loadingBox = dialogBox.loading(msg, options);
        return false;
    },
    //loadingModal
    loadingModal: function (msg, timeout, width, height) {
        if (QZCheck._un(msg)) {
            return this.message('调用此函数，请设置msg参数！', "调用错误提示", 3000);
        }
        if (msg == '') { msg = '处理中，请稍候...'; }
        if (QZCheck._un(width)) { width = 150; }
        if (height < 85) { height = 85; }
        var options = this._getOptions(width, height, true);
        if (QZCheck._gt0(timeout)) { options = jQuery.extend(options, { closeDelay: QZCheck._gtN(timeout, 10000) }) }
        else { options = jQuery.extend(options, { closeDelay: 10000 }) };
        loadingBox = dialogBox.loading(msg, options);
        return false;
    },
    //alert
    alert: function (msg, title, callback, cbData, btnText, modal) {
        if (QZCheck._une(msg)) {
            return this.message('调用此函数，请设置msg参数！', "调用错误提示", 3000);
        }
        var options = { popTipIcon: 'error' };
        if (QZCheck._un(modal)) {
            options = jQuery.extend(options, { modal: true });
        } else {
            options = jQuery.extend(options, { modal: modal });
        }
        if (!QZCheck._un(title)) { options = jQuery.extend(options, { title: title }) };
        if (!QZCheck._un(cbData)) { options = jQuery.extend(options, { callbackData: cbData }) };
        if (QZCheck._une(btnText)) { btnText = '关闭'; }
        dialogBox.alert(msg, callback, options, btnText);
        return false;
    },
    //message
    message: function (msg, title, delay, width, height, X, Y) {
        if (QZCheck._une(msg) || QZCheck._un(title)) {
            dialogBox.popTip("调用错误提示", '调用此函数，请设置msg,title参数！', 3000);
            return false;
        }
        this._msgbox(msg, title, 'info', delay, width, height, X, Y);
        return false;
    },
    //error
    error: function (msg, title, width, height) {
        if (QZCheck._une(msg) || QZCheck._un(title)) {
            dialogBox.popTip("调用错误提示", '调用此函数，请设置msg,title参数！', 3000);
            return false;
        }
        if (QZCheck._un(width)) { width = 300; };
        if (QZCheck._un(height)) { height = 70; };
        this._msgbox('<span style="color:#cc2200">' + msg + '</span>', title, 'error', 0, width, height);
        return false;
    },
    //info
    info: function (msg, title, width, height, delay, closeCallback) {
        if (QZCheck._une(msg) || QZCheck._un(title)) {
            dialogBox.popTip("调用错误提示", '调用此函数，请设置msg,title参数！', 3000);
            return false;
        }
        this._msgbox(msg, title, 'info', delay, width, height, 0, 0, closeCallback);
        return false;
    },
    //msgbox
    _msgbox: function (msg, title, type, delay, width, height, X, Y, afterHideCallback) {
        if (QZCheck._une(msg) || QZCheck._un(title)) {
            dialogBox.popTip("调用错误提示", '调用此函数，请设置msg,title参数！', 3000);
            return false;
        }
        var options = jQuery.extend({ popTipIcon: type }, this._getOptions(width, height));
        if (QZCheck._gt0(delay)) { options = jQuery.extend(options, { closeDelay: delay }) };
        if (QZCheck._gt0(X)) { options = jQuery.extend(options, { x: X }) };
        if (QZCheck._gt0(Y)) { options = jQuery.extend(options, { y: Y }) };
        if (afterHideCallback) { options = jQuery.extend(options, { afterHide: afterHideCallback }) };
        dialogBox.popTip(title, msg, 0, options);
        return false;
    },
    //confirm(callback(返回选择的值)）
    confirm: function (msg, callback, title, cbData) {
        if (QZCheck._une(msg) || QZCheck._un(callback)) {
            return this.message('调用此函数，请设置msg, callback参数！', "调用错误提示", 3000);
        }
        var options = { modal: true, popTipIcon: 'help' };
        if (!QZCheck._un(title)) { options = jQuery.extend(options, { title: title }) };
        if (!QZCheck._un(cbData)) { options = jQuery.extend(options, { callbackData: cbData }) };
        dialogBox.confirm(msg, callback, options);
        return false;
    },
    //ask: answers数组，回调callback(返回选择的值)
    ask: function (question, answers, callback, cbData) {
        if (QZCheck._nau(question, answers, callback)) {
            return this.message('调用此函数，请设置question, answers, callback参数！', "调用错误提示", 3000);
        }
        var options = { popTipIcon: 'help' };
        if (!QZCheck._un(cbData)) { options = jQuery.extend(options, { callbackData: cbData }) };
        dialogBox.ask(question, answers, callback, options);
        return false;
    },
    //loadId
    loadId: function (id, title, width, height, modal, customerCallback, dependId, align) {
        if (QZCheck._une(id) || QZCheck._un(title)) {
            return this.message('调用此函数，请设置id, title参数！', "调用错误提示", 3000);
        }
        if (id.substring(0, 1) != '#') { id = '#' + id; }
        var _obj = $(id);
        if (!_obj.attr('id')) {
            return this.message('指定的ID=' + id.replace('#', '') + '的元素未找到，请检查！', "调用错误提示", 3000);
        }
        var options = jQuery.extend({ title: title }, this._getOptions(width, height, modal));
        //if (!QZCheck._une(closeable)) {
        //    options = jQuery.extend(options, { closeable: closeable });
        //}
        if (customerCallback) { options = jQuery.extend(options, { customerClosed: customerCallback }); }
        var xy = this._getDialogXY(modal, width, dependId, align);
        if (xy.left && xy.left != 0 && xy.top != 0) {
            options = jQuery.extend(options, { center: false, x: xy.left, y: xy.top });
        }
        dialogBox.popLinked(_obj, options);
        return false;
    },
    //load
    load: function (url, title, width, height, modal, showCallBack, customerCloseCallback, dependId, align, method, data) {
        if (QZCheck._une(url) || QZCheck._un(title)) {
            return this.message('调用此函数，请设置url, title参数！', "调用错误提示", 3000);
        }
        var options = jQuery.extend({ title: title }, this._getOptions(width, height, modal));
        if (showCallBack) { options = jQuery.extend(options, { afterShow: showCallBack }); }
        if (customerCloseCallback) { options = jQuery.extend(options, { customerClosed: customerCloseCallback }); }
        var xy = this._getDialogXY(modal, width, dependId, align);
        if (xy.left && xy.left != 0 && xy.top != 0) {
            options = jQuery.extend(options, { center: false, x: xy.left, y: xy.top });
        }
        dialogBox.load(url, options, method, data);
        return false;
    },
    load2: function (url, title, width, height, modal, options, method, data) {
        if (QZCheck._une(url) || QZCheck._un(title)) {
            return this.message('调用此函数，请设置url, title参数！', "调用错误提示", 3000);
        }
        var _options = jQuery.extend({ title: title }, this._getOptions(width, height, modal));
        if (options) {
            _options = jQuery.extend(_options, options);
        }
        dialogBox.load(url, _options, method, data);
        return false;
    },
    //loadForm 回调函数方法（action, formData, callback, source）
    loadForm: function (url, title, callback, width, height, modal, dependId, align) {
        if (QZCheck._une(url) || QZCheck._nau(title, callback)) {
            return this.message("调用此函数，请设置url, title, callback参数！");
        }
        var options = { title: title, onFormSubmit: callback }; //test submiting submiting: true
        options = jQuery.extend(options, this._getOptions(width, height, modal));
        var xy = this._getDialogXY(modal, width, dependId, align);
        if (xy.left && xy.left != 0 && xy.top != 0) {
            options = jQuery.extend(options, { center: false, x: xy.left, y: xy.top });
        }
        dialogBox.load(url, options);
        return false;
    },
    //loadIFrame
    loadIFrame: function (url, title, width, height, modal, dependId, align, closeable, callBack, callBackOptions, redirectUrl) {
        if (QZCheck._une(url) || QZCheck._un(title)) {
            return this.message("调用此函数，请设置url, title参数！");
        }
        var options = {}; // jQuery.extend({ title: title }, this._getOptions(width, height, modal));
        var xy = this._getDialogXY(modal, width, dependId, align);
        if (xy.left && xy.left != 0 && xy.top != 0) {
            options = jQuery.extend(options, { center: false, x: xy.left, y: xy.top });
        }
        if (!QZCheck._un(closeable)) {
            if (!closeable) {
                options = jQuery.extend(options, { closeable: false });
            }
        }
        return sDialog.loadIFrame2(url, title, width, height, modal, options, callBack, callBackOptions, redirectUrl);
    },
    //    
    loadIFrame2: function (url, title, width, height, modal, options, callBack, callBackOptions, redirectUrl) {
        if (QZCheck._une(url) || QZCheck._un(title)) {
            return this.message("调用此函数，请设置url, title参数！");
        }
        var _options = jQuery.extend({ title: title }, this._getOptions(width, height, modal));
        if (options) {
            _options = jQuery.extend(_options, options);
        }
        var _wid = Math.random();
        if (url.indexOf('?') != -1) { url += '&window=' + _wid; }
        else { url += '?window=' + _wid; }
        if (callBack) { url += '&_cb=' + callBack; }
        if (callBackOptions) { url += '&_cbo=' + encodeURIComponent(callBackOptions); }
        if (redirectUrl) { url += '&_rurl=' + encodeURIComponent(redirectUrl); }
        var dialog = dialogBox.loadFrame(url, _options);
        dialogList[_wid] = dialog;
        return false;
    },
    getBoxy: function (obj) {
        return dialogBox.get(obj);
    },
    change: function (obj, title, content) {
        dialogBox.get(obj).setTitle(title);
        var html = $("<div></div>").append(content);
        dialogBox.get(obj).setContent(html);
        return false;
    }, //允许最小化
    enableMin: function (obj) {
        dialogBox.get(obj).enableMin();
    },
    //针对Iframe窗口自动关闭问题
    closef: function (_wid) {
        if (dialogList[_wid]) {
            try {
                dialogList[_wid].hide();
                dialogList[_wid].unload();
            } catch (e) { }
        }
        return false;
    }, //关闭
    close: function (obj, data) {
        var _box = dialogBox.get(obj);
        try {
            if (_box.options.customerClosed) {
                _box.hide();
                _box.options.customerClosed(obj, data);
                _box.unload();
                return false;
            }
        } catch (e) { if (_box) { _box.unload(); } return false; }

        try {
            _box.hideAndUnload();
        } catch (e) { }
        return false;
    },
    //hideLoading
    hideLoading: function () {
        try {
            loadingBox.hideAndUnload();
        } catch (e) { }
    },
    //return options
    _getOptions: function (width, height, modal) {
        var options = {};
        if (QZCheck._gt0(width)) { options = jQuery.extend(options, { width: QZCheck._gtN(width, 180) }) };
        if (QZCheck._gt0(height)) { options = jQuery.extend(options, { height: QZCheck._gtN(height, 50) }) };
        if (!QZCheck._un(modal)) { options = jQuery.extend(options, { modal: modal }) };
        return options;
    },
    //获取依赖的位置
    _getDialogXY: function (modal, width, dependId, align, bFixed) {
        if (modal || !dependId) { return [0, 0]; }
        var obj = typeof dependId == "object" ? $(dependId) : $('#' + dependId);
        if (QZCheck._un(obj) || !QZCheck._gt0(width)) {
            return [0, 0];
        }
        var xy = obj.offset();
        if (align == "R") {
            xy.top += obj.outerHeight();
            xy.left = xy.left + obj.outerWidth() - width;
        }
        else {
            xy.top += obj.outerHeight();
        }
        if (bFixed) {
            var sTop = $(document).scrollTop();
            var sLeft = $(document).scrollLeft();
            xy.top -= sTop;
            xy.left -= sLeft;
        }
        return xy;
    },
    showIFrameMask: function (dependId) {
        if (q_browser.msie && q_browser.version < 7) {
            var depDiv = $('#' + dependId);
            var iMask = $('#IframeMask_' + dependId);
            if (!iMask.attr("id")) {
                //iframe 遮罩
                iMask = jQuery('<iframe id="IframeMask_' + dependId + '" src="javascript:\'\';"></iframe>')
								.css({ opacity: 0,
								    position: 'absolute', zIndex: -1,
								    width: depDiv.width() + 3, height: depDiv.height() + 3, left: depDiv.position().left, top: depDiv.position().top
								}).appendTo(depDiv.parent());
            } else {
                iMask.css({ display: '', width: depDiv.width() + 3, height: depDiv.height() + 3, left: depDiv.position().left, top: depDiv.position().top });
            }
        }
    },
    hideIFrameMask: function (dependId) {
        var iMask = $('#IframeMask_' + dependId);
        if (iMask.attr("id")) {
            iMask.css("display", "none").remove();
        }
    },
    getZIndex: function () {
        this.zIndex++;
        return this.zIndex;
    },
    zIndex: 2024
}


 //分页控件8
var QPager = function (container) {

    var _pager = this;
    this.firstText = "首页";
    this.prevText = "上一页";
    this.nextText = "下一页";
    this.lastText = "尾页";
    this.totalText = "共<em>{0}</em>条记录";
    this.showPageButtons = 4;
    this.showFirst = false;
    this.showLast = false;
    this.currentCss = "current";
    this.linkCss = "page";
    this.prevnextCss = "turn";
    this.prevnextDisableCss = "";
    this.totalTextCss = "pageTotal";
    this.totalRows = 0;
    this.totalPage = 0;
    this.pageSize = 10;
    this.currentPage = 1;
    this.showPrevNext = true;
    this.showNumButtons = true;
    this.showTotalTip = true;
    this.alwaysRender = false;
    this.callBack = null;
    this.wrapper = container;
    this.pageClick = function (pg) { };

    this.addButton = function (txt, css, pg) {
        var _pgbtn = document.createElement("a");
        if (_pager.currentPage != pg)
            _pgbtn.href = '#';
        _pgbtn.className = css;
        _pgbtn.innerHTML = txt;
        _pgbtn.setAttribute("page", pg);
        if (_pager.currentPage != pg) {
            _pgbtn.onclick = function () { var pg = parseInt(this.getAttribute("page")); _pager.pageClick(pg); return false; };
        }
        else {
            _pgbtn.onclick = function () { return false; };
            _pgbtn.className = _pager.prevnextDisableCss;
        }
        container.appendChild(_pgbtn);
    }
    this.addTextButton = function (txt, css) {
        var _pgbtn = document.createElement("a"); if (css != '') { _pgbtn.className = css; }; _pgbtn.innerHTML = txt; container.appendChild(_pgbtn);
    }
    this.addCurrentPage = function (txt, css) {
        var _pgbtn = document.createElement("a"); if (css != '') { _pgbtn.className = css; }; _pgbtn.innerHTML = txt; container.appendChild(_pgbtn);
    }
    this.addTotalText = function (txt, css) {
        var _spnTotal = document.createElement("span"); if (css != '') { _spnTotal.className = css; }; _spnTotal.innerHTML = txt; container.appendChild(_spnTotal);
    }
    this.output = function () {
        container.innerHTML = '';
        if (this.totalRows > 0) {
            if (this.showTotalTip) {
                this.addTotalText(this.totalText.replace("{0}", this.totalRows), this.totalTextCss);
            }
            var _ttps = parseInt(this.totalRows / this.pageSize);
            if (this.totalRows % this.pageSize > 0) { _ttps++; }
            this.totalPage = _ttps;
            try {
                container.setAttribute("total", _ttps);
                container.setAttribute("current", this.currentPage);
            } catch (e) { }
            if (_ttps == 1 && !this.alwaysRender)
                return;
            var _start = this.currentPage - this.showPageButtons;
            if (_start <= 0) { _start = 1; }
            var _end = this.currentPage + this.showPageButtons;
            if (_end > _ttps) { _end = _ttps; }

            var _pgbtn = null;
            if (_start >= 2 && this.showFirst) { this.addButton(this.firstText, this.prevnextCss, 1); }

            if (this.showPrevNext) {
                if (this.currentPage - 1 <= 0) { this.addButton(this.prevText, this.prevnextCss, 1); }
                else { this.addButton(this.prevText, this.prevnextCss, this.currentPage - 1); }
            }
            if (this.showNumButtons) {
                if (_start > 2 || (_start == 2 && !this.showFirst)) { this.addTextButton('...', this.linkCss); }
                for (var i = _start; i <= _end; i++) {
                    if (i == this.currentPage) { this.addCurrentPage(i, this.currentCss); }
                    else { this.addButton(i, this.linkCss, i); }
                }
                if (_end < _ttps) { this.addTextButton('...', this.linkCss); }
            }
            if (this.showPrevNext) {
                if (this.currentPage + 1 > _ttps) { this.addButton(this.nextText, this.prevnextCss, _ttps); }
                else { this.addButton(this.nextText, this.prevnextCss, this.currentPage + 1); }
            }
            if (this.showLast && _end < _ttps)
                this.addButton(this.lastText, this.prevnextCss, _ttps);
        }
    }
};


function PopupOAuthLoginWin(url, title, width, height) {
    window.open(url, title, "height=" + height + ", width=" + width + ", top=10, left=10, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no");
    return false;
}

function BindSinaWeibo(url2) {
    if (!url2 || url2 == '')
        url2 = "//user.qianzhan.com/home";
    var url = "//user.qianzhan.com/account/link2?url2=" + encodeURIComponent(url2) + '&app=sina';
    return PopupOAuthLoginWin(url, "新浪微博登录", "610", "425");
}

function BindTxWeibo(url2) {
    if (!url2 || url2 == '')
        url2 = "//user.qianzhan.com/home";
    var url = "//user.qianzhan.com/account/link2?url2=" + encodeURIComponent(url2) + '&app=tqq';
    return PopupOAuthLoginWin(url, "腾讯微博接入", "960", "768");
}

//function BindRenRen() {
//    PopupOAuthLoginWin(url, "连接到人人网", "980", "445");
//}

//function BindQQ() {
//    PopupOAuthLoginWin(url, "连接到QQ", "960", "768");
//}

function QZSHFilter(key) {
    var regExp = new RegExp('[\<\>'+"'"+'"\*\?]+', "ig");
    return key.replace(regExp, "");
}

function QZFMSubmit(action, target) {
    var fm = $("<form method='get'/>").appendTo($("body"));
    if (target && target != "")
        fm.attr("target", target);
    var qStr = action.split('?');
    if (qStr.length > 1) {
        var ss = qStr[1].split('&');
        for (var j = 0; j < ss.length; j++) {
            var pp = ss[j].split('=');
            $("<input type='hidden' name='" + pp[0] + "' value='" + pp[1] + "' />").appendTo(fm);
        }
    }
    fm.attr("action", qStr[0]);
    fm.get(0).submit();
}


function baidu_ad_show(divId, adSrc, bdAdId, width, heigth) {
    var adobj = $("#" + divId);
    if (adobj.attr("id")) {
        adobj.html('<iframe src="' + adSrc + '?id=' + bdAdId + '" width="' + width + 'px" height="' + heigth + 'px" scrolling="no" frameborder="0" style="margin:0;background-color:transparent;" allowTransparency="true"></iframe>');
    }
}

/* 详细内容页调用 */
function shareText2(s2, obj) {
    var title = $("#hidtext").val().substring(0, 110) + "..";
    var imgs = $('#div_content').find("img");
    var picurl = '';
    if (imgs.length > 0) { picurl = $(imgs.get(0)).attr("src"); }
    if (s2 == 2) {
        shareText22(s2, document.URL, "", picurl, title + '（分享自@前瞻网）');
    } else if (s2 == 1) {
        shareText22(s2, document.URL, "", picurl, title + '（分享自@前瞻网）');
    } else if (s2 == 0) {
        shareText22(s2, document.URL, $('#h_title').html(), picurl, title);
    } else {
        return shareText22(s2, '', title.replace("..", ""), '', '', obj);
    }
    $("#tooltip").remove();
    return false;
}
function shareText22(s2, url, title, picurl, summary, obj) {
    var query = {};
    if (s2 == 2) {
        query = { url: url, title: summary, source: '前瞻网', sourceurl: '//www.qianzhan.com/', content: 'utf-8', pic: picurl };
        PopupOAuthLoginWin('//service.weibo.com/share/share.php?' + $.param(query), '', 620, 480, ($(window).width() - 620) / 2, ($(window).height() - 480) / 2);
    } else if (s2 == 1) {
        query = { c: 'share', a: 'index', url: url, title: summary, pic: picurl };
        PopupOAuthLoginWin('http://share.v.t.qq.com/index.php?' + $.param(query), '', 620, 370, ($(window).width() - 620) / 2, ($(window).height() - 370) / 2);
    } else if (s2 == 0) {
        query = { url: url, title: title, pics: picurl, summary: summary };
        PopupOAuthLoginWin('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + $.param(query), '', 620, 480);
    } else {
        $(obj).attr("target", "_blank");
        $(obj).attr("href", "//www.baidu.com/s?wd=" + encodeURI(title));
        return true;
    }
    return false;
}

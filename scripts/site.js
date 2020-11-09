
$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $("#header").addClass("header-fixed");
    } else {
        $("#header").removeClass("header-fixed");
    }
});

$(function(){
	/*var wow = new WOW({
	    boxClass: 'wow',
	    animateClass: 'animated',
	    offset: 0,
	    mobile: true,
	    live: true
	});
	wow.init();*/

	//棣栭〉鏍稿績涓氬姟鍒囨崲
	$("#hx-vip li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	//涓撻鐮旂┒tab
	 //$("#tabs").tabso({
    //    cntSelect: "#tabContent1",
    //    tabEvent: "click",
    //    tabStyle: "fade"
    //});
	 //棣栭〉鏂伴椈tab
	 $("#newsMenu").tabso({
        cntSelect: "#tabContent2",
        tabEvent: "hover",
        tabStyle: ""
    });
	 //浜т笟鐮旂┒ 浜т笟鎶曡祫鎮ㄩ渶瑕乼ab
	 $("#tzTab").tabso({
        cntSelect: "#tabContent3",
        tabEvent: "click",
        tabStyle: "normal"
    });
	 //浜т笟鐮旂┒ 浜х爺鎴愭灉
	 $("#cgTab").tabso({
        cntSelect: "#tabContent4",
        tabEvent: "click",
        tabStyle: "fade"
    });
	 $("#cgTab2").tabso({
        cntSelect: "#tabContent5",
        tabEvent: "click",
        tabStyle: "fade"
    });

	 $("#zbTab").tabso({
        cntSelect: "#tabContent6",
        tabEvent: "click",
        tabStyle: "fade"
    });
	 //浜т笟瑙勫垝
	 $("#ghfc").tabso({
        cntSelect: "#tabContent7",
        tabEvent: "click",
        tabStyle: "fade"
    });


	$("#jztxBox li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
    });
    //鎷涘晢
	$(".zs-tixi li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
    });
    //澶撮儴鍥哄畾
    $(window).scroll(function() {
	    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	    if(scrollTop > 50) {
	        $('.header').addClass('header-fixed');
	    } else {
	        $('.header').removeClass('header-fixed');
	    }
    });
});

//tab鍒囨崲
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


;(function($,document,window){$.pictureViewer=function(options){var pictureViewer_html='<div id="pictureViewer">'+
'<div class="content">'+
'<div class="menu-bar">'+
'<div class="handel close-view" title="\u5173\u95ED(ESC)"><i class="icon-close"></i></div>'+
'<div class="handel miniaturization hide" title="\u5C0F\u7A97\u53E3"></div>'+
'<div class="clear-flex"></div>'+
'</div>'+
'<div class="handel-prev left" title="\u4E0A\u4E00\u5F20(\u2190)"><i class="icon-54"></i></div>'+
'<div class="picture-content">'+
'<img class="cover" src="">'+
'</div>'+
'<div class="handel-next right" title="\u4E0B\u4E00\u5F20(\u2192)"><i class="icon-53"></i></div>'+
'<div class="counter">'+
'<span class="num"></span> of <span class="total"></span>'+
'</div>'+
'</div>'+
'</div>';var $images=options.images,$initImageIndex=options.initImageIndex,$scrollSwitch=options.scrollSwitch;if(!$images||!$images.length)return;if(!$initImageIndex)$initImageIndex=1;var $nowImageIndex=$initImageIndex;if(!$('#pictureViewer').length)$('body').append(pictureViewer_html);var BODY=$('body');var ESC_KEY_CODE=27;var LEFT_KEY_CODE=37;var RIGHT_KEY_CODE=39;var $pictureViewer=$('#pictureViewer');var $pictureViewerContent=$pictureViewer.children('.content');var $cover=$pictureViewer.find('.picture-content .cover');var $closeBtn=$pictureViewer.find('.close-view');var $maximizationBtn=$pictureViewer.find('.maximization');var $miniaturizationBtn=$pictureViewer.find('.miniaturization');var $prevBtn=$pictureViewer.find('.handel-prev');var $nextBtn=$pictureViewer.find('.handel-next');var $num=$pictureViewer.find('.counter .num');var $total=$pictureViewer.find('.counter .total');var defaultViewWidth=$pictureViewerContent.css('width');var defaultViewHeight=$pictureViewerContent.css('height');var $imagesTotal=$images.length;var viewIsShow=function viewIsShow(){return $pictureViewer.is(':visible');};var lockBody=function lockBody(){return BODY.css('','');};var unlockBody=function unlockBody(){return BODY.css('','');};var showView=function showView(){$pictureViewer.show();lockBody();};var hideView=function hideView(){$pictureViewer.hide();$maximizationBtn.show();$miniaturizationBtn.hide();$pictureViewerContent.css({'width':defaultViewWidth,'height':defaultViewHeight});unlockBody();};var changeImage=function changeImage(index){$cover.attr('src',$images[index]);$nowImageIndex=index;changeImageNum();};var changeImageNum=function changeImageNum(){$num.text($nowImageIndex+1);};var toPrevImage=function toPrevImage(){return changeImage($nowImageIndex===0?$imagesTotal-1:$nowImageIndex-1);};var toNextImage=function toNextImage(){return changeImage($nowImageIndex===$imagesTotal-1?0:$nowImageIndex+1);};showView();changeImage($initImageIndex-1);$total.text($imagesTotal);$closeBtn.on('click',hideView);$maximizationBtn.on('click',function(){$(this).hide();$miniaturizationBtn.show();$pictureViewerContent.css({'width':'100%','height':'100%'});});$miniaturizationBtn.on('click',function(){$(this).hide();$maximizationBtn.show();$pictureViewerContent.css({'width':defaultViewWidth,'height':defaultViewHeight});});$(document).on('keydown',function(event){if(!viewIsShow())return;var keyCode=event.keyCode;if(keyCode===ESC_KEY_CODE)hideView();if(keyCode===LEFT_KEY_CODE)toPrevImage();if(keyCode===RIGHT_KEY_CODE)toNextImage();});$prevBtn.on('click',toPrevImage);$nextBtn.on('click',toNextImage);if($scrollSwitch){try{$pictureViewerContent.mousewheel(function(event,delta){if(delta===1)toPrevImage();if(delta===-1)toNextImage();});}catch(e){throw 'mousewheel plugin No import!';}}};})(jQuery,document,window);

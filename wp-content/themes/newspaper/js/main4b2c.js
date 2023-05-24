(function ($) {
	"use strict";
	//because of img loading
	$(window).load(function(){
		
		//article position
		/*
		var $grid = $("#content").masonry({
		  itemSelector: "article",
		  columnWidth: ".grid-sizer",
		  percentPosition: true,
		});//article position
		*/
		//mobile menu
		$('#newspaper_header_menu .meanmenu').meanmenu({
	    meanMenuContainer: "#newspaper_header_menu",
	    meanMenuClose: "<i class='fa fa-times' aria-hidden='true'></i>",
	    meanMenuCloseSize: "30px",
	    meanMenuOpen: "<i class='fa fa-bars' aria-hidden='true'></i>",
	    meanRevealPosition: "left",
	    meanRevealPositionDistance: "0",
	    meanRevealColour: "transparent",
	    meanScreenWidth: "768", //480
	    meanNavPush: "0px",
	    meanShowChildren: true,
	    meanExpandableChildren: true,
	    meanExpand: "+",
	    meanContract: "-",
	    meanRemoveAttrs: false,
	    onePage: false,
	    removeElements: "",
	    meanDisplay: "block"
		});
		
		//newspaper_menu_search();

		//newspaper_comment_display();
		newspaper_sidebar_collect();
		mobile_share();
		social_menu();

	});//window.load

	function newspaper_menu_search(){

		$(".searchb").click(function(){
			$(this).toggleClass("active").find("#searchform").click(function(event){
				event.stopPropagation();
			});
			$("#searchform").toggle(50);
		});		

	}

	function newspaper_comment_display(){

		//display comments if clicks
		$("#comment-indicator a").click(function(){
			$("#comment-indicator").slideUp("fast", function(){
				$("#comment-wrapper").slideDown("slow");
			});
		});

	}

	function newspaper_sidebar_collect(){

		$.fn.wrapMatch = function(count, className) {
	    var length = this.length;
	    for(var i = 0; i < length ; i+=count) {
	      this.slice(i, i+count).wrapAll('<div '+((typeof className == 'string')?'class="'+className+'"':'')+'/>');
	    }
	    return this;
	  }; 

	  $('footer .footer-sidebar .box').wrapInner( "<div class='inner'></div>").matchHeight().wrapMatch(3,'row');
	}

	function mobile_share(){
		if (navigator.userAgent.match(/iPhone|Android/i)) {
      $(".share .whatsapp").show();
   	}else{
   		$(".share .whatsapp").remove();
   	}
	}

	//social menu
function social_menu(){
	var vmi = '';
	$("#newspaper_header_menu #socials-menu li a").on().each(function(){
		vmi = $(this).text();
		
		if(  vmi === "500px"
			|| vmi === "adn"
			|| vmi === "amazon"
			|| vmi === "android"
			|| vmi === "angellist"
			|| vmi === "apple"
			|| vmi === "bandcamp"
			|| vmi === "behance"
			|| vmi === "bitbucket"
			|| vmi === "btc"
			|| vmi === "black-tie"
			|| vmi === "bluetooth"
			|| vmi === "buysellads"
			|| vmi === "cc-amex"
			|| vmi === "cc-diners-club"
			|| vmi === "cc-discover"
			|| vmi === "cc-jcb"
			|| vmi === "cc-mastercard"
			|| vmi === "cc-paypal"
			|| vmi === "cc-stripe"
			|| vmi === "cc-visa"
			|| vmi === "chrome"
			|| vmi === "codepen"
			|| vmi === "codiepie"
			|| vmi === "connectdevelop"
			|| vmi === "contao"
			|| vmi === "css3"
			|| vmi === "dashcube"
			|| vmi === "delicious"
			|| vmi === "deviantart"
			|| vmi === "digg"
			|| vmi === "dribbble"
			|| vmi === "dropbox"
			|| vmi === "drupal"
			|| vmi === "edge"
			|| vmi === "eercast"
			|| vmi === "empire"
			|| vmi === "envira"
			|| vmi === "etsy"
			|| vmi === "expeditedssl"
			|| vmi === "font-awesome"
			|| vmi === "facebook"
			|| vmi === "firefox"
			|| vmi === "first-order"
			|| vmi === "flickr"
			|| vmi === "font-awesome"
			|| vmi === "fonticons"
			|| vmi === "fort-awesome"
			|| vmi === "forumbee"
			|| vmi === "foursquare"
			|| vmi === "free-code-camp"
			|| vmi === "get-pocket"
			|| vmi === "gg"
			|| vmi === "git"
			|| vmi === "github"
			|| vmi === "gitlab"
			|| vmi === "glide"
			|| vmi === "google"
			|| vmi === "google-plus"
			|| vmi === "google-wallet"
			|| vmi === "gratipay"
			|| vmi === "grav"
			|| vmi === "hacker-news"
			|| vmi === "houzz"
			|| vmi === "html5"
			|| vmi === "imdb"
			|| vmi === "instagram"
			|| vmi === "internet-explorer"
			|| vmi === "ioxhost"
			|| vmi === "joomla"
			|| vmi === "jsfiddle"
			|| vmi === "lastfm"
			|| vmi === "leanpub"
			|| vmi === "linkedin"
			|| vmi === "linode"
			|| vmi === "linux"
			|| vmi === "maxcdn"
			|| vmi === "meanpath"
			|| vmi === "medium"
			|| vmi === "meetup"
			|| vmi === "mixcloud"
			|| vmi === "modx"
			|| vmi === "odnoklassniki"
			|| vmi === "opencart"
			|| vmi === "openid"
			|| vmi === "opera"
			|| vmi === "optin-monster"
			|| vmi === "pagelines"
			|| vmi === "paypal"
			|| vmi === "pied-piper"
			|| vmi === "pinterest"
			|| vmi === "product-hunt"
			|| vmi === "qq"
			|| vmi === "quora"
			|| vmi === "ravelry"
			|| vmi === "rebel"
			|| vmi === "reddit"
			|| vmi === "renren"
			|| vmi === "rebel"
			|| vmi === "safari"
			|| vmi === "scribd"
			|| vmi === "sellsy"
			|| vmi === "shirtsinbulk"
			|| vmi === "simplybuilt"
			|| vmi === "skyatlas"
			|| vmi === "skype"
			|| vmi === "slack"
			|| vmi === "slideshare"
			|| vmi === "snapchat"
			|| vmi === "soundcloud"
			|| vmi === "spotify"
			|| vmi === "stack-exchange"
			|| vmi === "stack-overflow"
			|| vmi === "steam"
			|| vmi === "steam-square"
			|| vmi === "stumbleupon"
			|| vmi === "superpowers"
			|| vmi === "telegram"
			|| vmi === "tencent-weibo"
			|| vmi === "themeisle"
			|| vmi === "trello"
			|| vmi === "tripadvisor "
			|| vmi === "tumblr"
			|| vmi === "twitch"
			|| vmi === "twitter"
			|| vmi === "usb"
			|| vmi === "viacoin"
			|| vmi === "viadeo"
			|| vmi === "vimeo"
			|| vmi === "vine"
			|| vmi === "vk"
			|| vmi === "wechat "
			|| vmi === "weibo"
			|| vmi === "whatsapp"
			|| vmi === "wikipedia-w"
			|| vmi === "windows"
			|| vmi === "wordpress"
			|| vmi === "wpbeginner"
			|| vmi === "wpexplorer"
			|| vmi === "wpforms"
			|| vmi === "xing"
			|| vmi === "yahoo"
			|| vmi === "yelp"
			|| vmi === "yoast"
			|| vmi === "youtube" ){
			$(this).empty();
			$(this).append('<i class="fa fa-'+vmi+'"></i>');
		}else{
			$(this).parent().remove();
		}

	})

	if ( $('.menu ul').children().length === 0 ){
	  $(this).remove();
	}
	var $rightSidebar= jQuery('.rightSidebar');
	  var $sticky = jQuery('.sidebar-sticky ');
	  var $stickyrStopper = jQuery('.sidebar-sticky-stopper'); 
	  if(screen.width>767){
	  if (!!$sticky.offset()) {
	    var generalSidebarHeight = $sticky.innerHeight();
	    var stickyTop = $sticky.offset().top;
	    var stickOffset = 80;
	    var stickyStopperPosition = $stickyrStopper.offset.top;
	    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
	    var diff = stopPoint + stickOffset;
	    var ws=$rightSidebar.width();
		$sticky.width(ws);
	    jQuery(window).scroll(function(){
	      var windowTop = jQuery(window).scrollTop(); 
	      if (stopPoint < windowTop) {
	          $sticky.css({ position: 'absolute', top: diff });
	      } else if (stickyTop < windowTop+stickOffset) {
	          $sticky.css({ position: 'fixed', top: stickOffset });
	      } else {
	          $sticky.css({position: 'absolute', top: 'initial'});
	      }
	    });
	  }
	  }
}

})(jQuery);//end of document ready
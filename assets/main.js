var widgetLink = {};

/* Cookies API made in Burdosik */

function GetCookie (name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen)
    {
        var j = i + alen;
        if (document.cookie.substring(i, j) === arg)
            return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i === 0) break;
    }
    return null;
}
function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = '/';//(argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    var ExpireDate;
    if ((expires + '').length < 6) {   //this arg is countDays
        ExpireDate = new Date();
        ExpireDate.setTime(ExpireDate.getTime() + (expires * 24 * 3600 * 1000));
    } else { // this arg is expire Timestamp
        ExpireDate = new Date(expires);
    }
    document.cookie = name + "=" + escape(value) +
        ((expires === null) ? "" : ("; expires=" + ExpireDate.toGMTString())) +
        ((path === null) ? "" : ("; path=" + path)) +
        ((domain === null) ? "" : ("; domain=" + domain)) +
        ((secure) ? "; secure" : "");
}
function DeleteCookie(name) {
    var expt = new Date();
    expt.setTime(expt.getTime() - 1000000000);  // This cookie is history (changed -1 to make it previous time)
    var cval = GetCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + expt.toGMTString() + "; path=/;";
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}




$(document).ready(function() {
    $('header .header__mobile_menu-but').click(function(e){
		$('body').addClass('show-menu');
    });
  	$('header .header__mobile_menu .close').click(function(e){
		$('body').removeClass('show-menu');
    });
  	
	$('.product').on('click', '.product__descriptions_speciﬁcations-tabs li', function(e){
		var target = $(this).attr('data-link');
		$('.product__descriptions_speciﬁcations-tabs li').removeClass('current');
		$(this).addClass('current');
		$('.product__descriptions_speciﬁcations-list > li').removeClass('current');
		$('.product__descriptions_speciﬁcations-list #'+target).addClass('current');
	});	

	$('#get-repeater-but').click(function(event) {
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing');
	});

	$('body').on('click', '.modal', function(e){
		if($(e.target).hasClass('close')){
			$('.modal').fadeOut();
			$('body').removeAttr('style');
		}
		if(!$(e.target).closest('.modal__body').length){
			$('.modal').fadeOut();
			$('body').removeAttr('style');
		}		
	});
	$('.body').on('click', '.modal i.close', function(e){
		$('.modal').hide();
	});

	$('#card').on('click', '.card__list_item-quantity i', function(e){
		var ev = $(this).attr('data-event');
		var val = $(this).closest('.card__list_item-quantity').find('input').val();
		if(ev == 'plus'){
			val++;
			$(this).closest('.card__list_item-quantity').find('input').val(val);
			if(val > 1){
				$(this).closest('.card__list_item-quantity').find('.minus').removeClass('disabled');
			}
		}else if(ev == 'minus'){
			if(val == 1)return false;
			val--;
			$(this).closest('.card__list_item-quantity').find('input').val(val);
			if(val == 1)$(this).addClass('disabled');
		}
		changeItemCard($(this));
	});

	$('#card').on('click', '.card__footer_delivery-switcher', function(e){
		var show = $(this).hasClass('show');
		if(!show){
			$(this).addClass('show');
			$(this).closest('.card__footer_delivery').find('.card__footer_delivery-content').show();
		}else{
			$(this).removeClass('show');
			$(this).closest('.card__footer_delivery').find('.card__footer_delivery-content').hide();
		}
		console.log(show);
	});

	$('.accessories').on('click', '.accessories__filter-switcher div', function(e){
		$(this).toggleClass('list cards');
		$('.accessories__collection').toggleClass('list cards');
	});

	$('body').on('mouseenter', '.widget-tooltip', function(e){
		var l = $(window).width() - $(this).offset().left - 65;
		$(this).find('.widget-tooltip__text').css('maxWidth', l );
		console.log(l);
	});

	$('body').on('click', '.header__nav_params-card', function(e){
		var count = $(this).attr('data-count');
		if(count > 0){
          if($(window).width() > 1000){
          	$('#card').fadeIn(150);
			$('body').css('overflow', 'hidden');	
          }else{
          	window.location.href = '/cart';
          }
		}		
	});
	$('body').on('click', '#card .card__list_item-remove i', function(e){
		var id = $(this).closest('.card__list_item').attr('data-id');
		var item = {};
		item[id] = 0;
		removeItemCard(item);
	});
});


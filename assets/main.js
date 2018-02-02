$(document).ready(function() {
	$('.product__descriptions_speciﬁcations-tabs li').click(function(e) {
		var target = $(this).attr('data-link');
		$('.product__descriptions_speciﬁcations-tabs li').removeClass('current');
		$(this).addClass('current');
		$('.product__descriptions_speciﬁcations-list > li').removeClass('current');
		$('.product__descriptions_speciﬁcations-list #'+target).addClass('current');
	});

	$('body').on('click', '.modal', function(e){
		if($(e.target).hasClass('close')){
			$('.modal').hide();	
		}else if($(e.target).closest('.modal__body').length){			
			e.preventDefault();
			return false;						
		}
		$('.modal').hide();
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
});
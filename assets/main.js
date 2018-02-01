$(document).ready(function() {
	$('.product__descriptions_speciﬁcations-tabs li').click(function(e) {
		var target = $(this).attr('data-link');
		$('.product__descriptions_speciﬁcations-tabs li').removeClass('current');
		$(this).addClass('current');
		$('.product__descriptions_speciﬁcations-list > li').removeClass('current');
		$('.product__descriptions_speciﬁcations-list #'+target).addClass('current');
	});
});
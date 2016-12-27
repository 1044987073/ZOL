/*------------------------------放大镜-------------------------*/
;(function(){
	$(function() {
	var num = 0;
	$('#fdjj').width($('.goods_left_t').width() * $('.goods_right').width() / $('.goods_right img').width());
	$('#fdjj').height($('.goods_left_t').height() * $('.goods_right').outerHeight() / $('.goods_right img').height());
	$('.goods_left_b li').click(function() {
		num = $(this).index();
		$('.goods_left_t img').attr('src', "../images/detailPage/400" + (num + 1) + ".jpg");
		$('.goods_right img').attr('src', "../images/detailPage/800" + (num + 1) + ".jpg");
		$(this).css('border', "1px solid red").siblings('li').css('border', '');
	})
	$('.goods_left_t').hover(function() {
			$('#fdjj').show();
			$('.goods_right').show();
		},
		function() {
			$('#fdjj').hide();
			$('.goods_right').hide();
		})
	var scale = $('.goods_right').width() / $('#fdjj').width();
	$('.goods_left_t').on('mousemove', function(e) {
		var x = e.pageX - $('#fdjj').width() / 2;
		var y = e.pageY - $('#fdjj').height() / 2 - $('.goods_left_t').height() / 2;
		if(x < 0) {
			x = 0;
		} else if(x > $('.goods_left_t').width() - $('#fdjj').width()) {
			x = $('.goods_left_t').width() - $('#fdjj').width()
		}
		if(y < 0) {
			y = 0;
		} else if(y > $('.goods_left_t').height() - $('#fdjj').height()) {
			y = $('.goods_left_t').height() - $('#fdjj').height()
		}
		$('#fdjj').css({
			left: x,
			top: y
		});
		$('.goods_right img').css({
			left: -scale * x,
			top: -scale * y
		})
	})
})
})();
/*===========================懒加载加店铺热卖==================================*/
;(function(){
	$(function() {
	var bstop = true;
	$(window).on('scroll', function() {
		var scrolltop = $(window).scrollTop();
		var height = $(window).height();
		var top = $('#hot_goods').offset().top + 200;
		if(top < scrolltop + height) {
			if(bstop) {
				$.ajax({
					url: '../json/textimg.json',
					success: function(data) {
						for(var i = 0; i < data.hot_goods.length; i++) {
							$('#hot_goods li').find('img').eq(i).attr('src', data.hot_goods[i].img);
							$('#hot_goods li').find('a').eq(i).html(data.hot_goods[i].title);
							$('#hot_goods li').find('.now_price').eq(i).html(data.hot_goods[i].now_price);
							$('#hot_goods li').find('.pre_price').eq(i).html(data.hot_goods[i].pre_price);
						}
						bstop = false;
					}
				})
			}
		}
	})
})
})();
/*--------------------------------请求详情图片------------------------------*/
;(function(){
	$.ajax({
	type:"get",
	url:"../json/detailPage.json",
	async:true
}).done(function(data){
	for(var i=0;i<data.images.length;i++){
		$('.img_show img').eq(i).attr("src",data.images[i].img);
	}
})
})();

/*--------------------------------选择效果------------------------------*/
(function(){
	$('.banben dd').on('click',function(){
		$(this).addClass('addClass').siblings('dd').removeClass('addClass');
	})
})();
/*----------------------------------详情页tab切换----------------------------*/
;(function(){
	$('.thirty_input').on('click',function(){
	$('.tab_2').show();
	$('.tab_1').hide();
	$(this).next('span').addClass('red_hot').siblings('span').removeClass('red_hot');
});
$('.leiji_inpu').on('click',function(){
	$('.tab_1').show();
	$('.tab_2').hide();
	$(this).next('span').addClass('red_hot').siblings('span').removeClass('red_hot');
})
$('.white input').click(function(){
	$(this).next('span').addClass('red_hot').siblings('span').removeClass('red_hot');
})
})();

/*-------------------------------------左边树形图--------------------------*/
;(function(){
	$('.class dt').click(function(event){
			if($(this).siblings('dd').is(":visible")){
				$(this).css('background-position','-23px -570px').siblings('dd').hide(600);
			}else{
				$(this).css('background-position','-23px -602px').siblings('dd').show(600);
			}
		
	})
})();

;(function(){
			$.ajax({
				type:"get",
				url:"../html/top.html"
			}).done(function(data){
				$('#head_frame').append(data);			
				$('#nav_box_left').hover(function(){
				$(this).find('ul').show();
				$(this).find('ul').css({
					'z-index':100,
					'position':'fixed'
				});
				$(this).find('.good_title').find('div.left').css({
					'background':'white'
				});
			},function(){
				$(this).find('ul').hide();
			})
			})
		})();
			
		/*-------------------请求右侧---------------------------*/	
			(function(){
				$.ajax({
				type:"get",
				url:"../html/glabalright.html"
			}).done(function(data){
				$('#right_fixed').append(data);
				$('.toUp').click(function(){
					$('html,body').stop(true).animate({
						scrollTop:0
					},600)
				})
				$('.cover').hover(function(){
					$(this).find('div').stop(true).show(400);
				},function(){
					$(this).find('div').stop(true).hide(400);
				})
				if(getCookie('cartsid')){
					var a=Math.ceil(getCookie('cartsid').length/2);
					$('.cart p').html(a);
				}
			})
			})();
			
			/*----------------------------详情页悬浮框------------------------------------------*/
				(function(){
					$(window).scroll(function() {
					var $scrolltop = $(this).scrollTop();
					if($scrolltop >1200) {
						$('#floar_fixed').show();
						$('#floar_fixed_louti').show();
						$('#detail_content_c .floar_center').hide();
						$('#detail_content_r').css('position','fixed')
					} else {
						$('#floar_fixed').hide();
						$('#floar_fixed_louti').hide();
						$('#detail_content_c .floar_center').show();
						$('#detail_content_r').css('position','')
					}				
					$('.louti_list').each(function(){
  					var $top=$('.img_word').eq($(this).index()).offset().top;
  					if($scrolltop<$top){
  						$('.louti_list').css('background-position-y','0')
  						$('#floar_fixed_louti .louti_list').css('background-position-y','0')
  						$('.louti_list').eq($(this).index()).css('background-position-y','-45px')
  						$('#floar_fixed_louti .louti_list').eq($(this).index()).css('background-position-y','-45px')
  						return false;
  					}
  				})
				})
				})();
				/*------------------------------验证码下拉------------------------*/
				(function(){
					$('.floar_center .special').hover(function(){
					$(this).find('img').show()
				},function(){
					$(this).find('img').hide()
				})
				})();
				
				/*------------------------------楼梯------------------------*/
  			
  			(function(){
  				$('.louti_list').click(function(){
  				var $top=$('.img_word').eq($(this).index()).offset().top-200;
  				$(this).css('background-position-y','-45px').siblings('li').css('background-position-y','0')
  				$('html,body').stop(true).animate({
  					scrollTop:$top
  				},600)
  			})
  			})();

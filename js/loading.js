/*---------------------------懒加载------------------------------------*/
$(function() {
		var bstop = true;
		$(window).on('scroll', function() {
			var scrolltop = $(window).scrollTop();
			var height = $(window).height();
			var top= $('.one_floor').offset().top + 200;
			if(top < scrolltop + height) {
				if(bstop) {
					$.ajax({
						url: '../json/textimg.json',
						success: function(data) {
							for(var i = 0; i < data.hot.length; i++) {
								$('.hot_pic_oneFloor').find('img').eq(i).attr('src', data.hot[i].img);
							}
							for(var i = 0; i < data.oneFloor.length; i++) {
								$('.tab_lunbo_img').find('img').eq(i).attr('src', data.oneFloor[i].img);
							}
							/*-------------------三星----------------*/
							for(var i = 0; i < data.threestar.length; i++) {
								$('.threeStar li').find('img').eq(i).attr('src', data.threestar[i].img);
								$('.threeStar li').find('a').eq(i).html(data.threestar[i].title);
								$('.threeStar li').find('.now_price').eq(i).html(data.threestar[i].now_price);
								$('.threeStar li').find('.pre_price').eq(i).html(data.threestar[i].pre_price);
							}
							/*----------------------华为---------------------*/
							for(var i = 0; i < data.huawei.length; i++) {
								$('.huawei li').find('img').eq(i).attr('src', data.huawei[i].img);
								$('.huawei li').find('a').eq(i).html(data.huawei[i].title);
								$('.huawei li').find('.now_price').eq(i).html(data.huawei[i].now_price);
								$('.huawei li').find('.pre_price').eq(i).html(data.huawei[i].pre_price);
							}
							bstop = false;
						}
					})
				}
			}
		})
	})
	/*--------------------------------二楼-------------------------------*/
$(function() {
		var bstop = true;
		$(window).on('scroll', function() {
			var scrolltop = $(window).scrollTop();
			var height = $(window).height();
			var top = $('.two_floor').offset().top + 200;
			if(top < scrolltop + height) {
				if(bstop) {
					$.ajax({
						url: '../json/textimg.json',
						success: function(data) {
							for(var i = 0; i < data.hot_twoFloor.length; i++) {
								$('.hot_pic_twoFloor').find('img').eq(i).attr('src', data.hot_twoFloor[i].img);
							}
							for(var i = 0; i < data.twoFloor.length; i++) {
								$('.lunbo_two_floor').find('img').eq(i).attr('src', data.twoFloor[i].img);
							}
							/*----------------------笔记本---------------------*/
							for(var i = 0; i < data.note.length; i++) {
								$('.note li').find('img').eq(i).attr('src', data.note[i].img);
								$('.note li').find('a').eq(i).html(data.note[i].title);
								$('.note li').find('.now_price').eq(i).html(data.note[i].now_price);
								$('.note li').find('.pre_price').eq(i).html(data.note[i].pre_price);
							}
							/*----------------------平板电脑---------------------*/
							for(var i = 0; i < data.computer.length; i++) {
								$('.computer li').find('img').eq(i).attr('src', data.computer[i].img);
								$('.computer li').find('a').eq(i).html(data.computer[i].title);
								$('.computer li').find('.now_price').eq(i).html(data.computer[i].now_price);
								$('.computer li').find('.pre_price').eq(i).html(data.computer[i].pre_price);
							}
							bstop = false;
						}
					})
				}
			}
		})
	})
	/*--------------------------------三楼-------------------------------*/
$(function() {
		var bstop = true;
		$(window).on('scroll', function() {
			var scrolltop = $(window).scrollTop();
			var height = $(window).height();
			var top = $('.three_floor').offset().top + 200;
			if(top < scrolltop + height) {
				if(bstop) {
					$.ajax({
						url: '../json/textimg.json',
						success: function(data) {
							for(var i = 0; i < data.hot_threeFloor.length; i++) {
								$('.hot_pic_threeFloor').find('img').eq(i).attr('src', data.hot_threeFloor[i].img);
							}
							for(var i = 0; i < data.threeFloor.length; i++) {
								$('.lunbo_three_floor').find('img').eq(i).attr('src', data.threeFloor[i].img);
							}
							/*---------------------数码相机---------------------*/
							for(var i = 0; i < data.camera.length; i++) {
								$('.camera li').find('img').eq(i).attr('src', data.camera[i].img);
								$('.camera li').find('a').eq(i).html(data.camera[i].title);
								$('.camera li').find('.now_price').eq(i).html(data.camera[i].now_price);
								$('.camera li').find('.pre_price').eq(i).html(data.camera[i].pre_price);
							}
							/*----------------------数码摄像机---------------------*/
							for(var i = 0; i < data.vidicon.length; i++) {
								$('.vidicon li').find('img').eq(i).attr('src', data.vidicon[i].img);
								$('.vidicon li').find('a').eq(i).html(data.vidicon[i].title);
								$('.vidicon li').find('.now_price').eq(i).html(data.vidicon[i].now_price);
								$('.vidicon li').find('.pre_price').eq(i).html(data.vidicon[i].pre_price);
							}
							bstop = false;
						}
					})
				}
			}
		})
	})
	/*----------------------热卖商品---------------------*/
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
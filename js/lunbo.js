/*----------------------------------------------------------------------图片轮播封装--------------------------------------------------------------------------------*/
var tab = {
	setTimeshow: function(showobj, listobj, showClass1, btnlObj, btnrObj, boxobj, width, showClass2) {
		var num = 0;
		var timer;
		var qnum = 0;
		listobj.on('click', function() {
			num = $(this).index();
			tab();
			qnum = num;
		})
		var $length = listobj.length - 1;
		function tab() {
			listobj.eq(num).addClass(showClass1).siblings('li').removeClass(showClass1);
			if(num == 0 && qnum == $length) {
				showobj.eq(qnum).stop(true).animate({
					left: -width
				}, 600);
				showobj.eq(num).css('left', width);
				showobj.eq(num).stop(true).animate({
					left: 0
				}, 600);
			} else if(num == $length && qnum == 0) {
				showobj.eq(qnum).stop(true).animate({
					left: width
				}, 600);
				showobj.eq(num).css('left', -width);
				showobj.eq(num).stop(true).animate({
					left: 0
				}, 600);
			} else if(num > qnum) {
				showobj.eq(qnum).stop(true).animate({
					left: -width
				}, 600);
				showobj.eq(num).css('left', width);
				showobj.eq(num).stop(true).animate({
					left: 0
				}, 600);
			} else if(num < qnum) {
				showobj.eq(qnum).stop(true).animate({
					left: width
				}, 600);
				showobj.eq(num).css('left', -width);
				showobj.eq(num).stop(true).animate({
					left: 0
				}, 600);
			}
		}
		btnrObj.on('click', function() {
			if(num == $length) {
				num = 0;
				qnum = $length;
			} else {
				num++;
			}
			tab();
			qnum = num;
		})
		btnlObj.on('click', function() {
			if(num == 0) {
				num = $length;
				qnum = 0;
			} else {
				num--;
			}
			tab();
			qnum = num;
		})
		btnrObj.hover(function() {
			$(this).addClass(showClass2);
		}, function() {
			$(this).removeClass(showClass2);
		})
		btnlObj.hover(function() {
			$(this).addClass(showClass2);
		}, function() {
			$(this).removeClass(showClass2);
		})
		boxobj.hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() {
				btnrObj.click();
			}, 2000)
		})
		timer = setInterval(function() {
			btnrObj.click();
		}, 2000)
	}
}
$(function() {
	//大轮播图
	tab.setTimeshow($('.main_lunbo_img img'), $('.main_lunbo_list li'), 'li_hover', $('.btn_left'), $('.btn_right'), $('.main_lunbo'), 740, 'btn_hover')
		////////////////////////////////////////////////小轮播    1F手机通讯 //////////////////////////////////////////////////////////////////////////////
	tab.setTimeshow($('.tab_lunbo_img img'), $('.tab_lunbo_list li'), 'li_hover', $('.btn_l'), $('.btn_r'), $('.tab_lunbo'), 838, 'btn_hover')
	tab.setTimeshow($('.lunbo_two_floor img'), $('.list_two_floor li'), 'li_hover', $('.btn_l_two_floor'), $('.btn_r_two_floor'), $('.tab_lunbo_two_floor'), 838, 'btn_hover')
	tab.setTimeshow($('.lunbo_three_floor img'), $('.list_three_floor li'), 'li_hover', $('.btn_l_three_floor'), $('.btn_r_three_floor'), $('.tab_lunbo_three_floor'), 838, 'btn_hover')
})
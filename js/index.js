//全国
$(function(){
	$('#seacher_l_logoright').hover(function() {
		$(this).find('ul').removeClass('hide');
	},
	function() {
		$(this).find('ul').addClass('hide');
	})
$('.nav_right li').hover(function() {
			$(this).find('ul').removeClass('hide');
		},
		function() {
			$(this).find('ul').addClass('hide');
		})

//商品分类left--show
$(".good_title").hover(function() {
		$(this).css({
			'backgroundColor': 'white',
			'border-right': '0'
		});
		$(this).find('div>a,.icon').css({
			'color': '#B1191A'
		})
		$(this).find('.icon').css('background-position-x', '-17px')
		$(this).find('.hide').show();
		$('.nav_box_b').hide();
	},
	function() {
		$(this).css({
			'backgroundColor': '#B1191A'
		});
		$(this).find('div>a,.icon').css({
			'color': '#fff'
		});
		$(this).find('.icon').css('background-position-x', '0');
		$(this).find('.hide').hide();
		$('.nav_box_b').show();
	})
$('.left').hover(function() {
	$(this).show();
}, function() {
	$(this).hide();
})


$('#group_buying li').hover(function() {
	$(this).css('border-bottom', '3px solid #B1191A')
}, function() {
	$(this).css('border-bottom', '1px solid #E6E6E6')
})

/*////////////////////////////// 倒计时/////////////////////////*/
function fn(value) {
	if(value < 10) {
			return '0' + value;
		} else {
			return value;
	}
	}
var timer=setInterval(function(){
	var sec=$('.sec').html();
	var min=$('.min').html();
	var hour=$('.hour').html();
	sec--;
	if(sec<=0){
		sec=59;
		min--;
	}
	if(min<=0){
		min=59;
		hour--;
	}	
	if(hour==0){
	clearInterval(timer)
}
	$('.sec').html(fn(sec))
	$('.min').html(fn(min))
	$('.hour').html(fn(hour))
},1000)
})



/*---------------------------一楼手机通讯tab切换------------------------------------*/
;(function(){
	$('.tab .tab_title li').on('mouseover',function(){
	$('.tab .tab_tab').eq($(this).index()).show().siblings('.tab_tab').hide();
	$(this).addClass('line').siblings('li').removeClass('line')
	})
	$('.tab_two_floor .tab_title li').on('mouseover',function(){
		$('.tab_two_floor .tab_tab').eq($(this).index()).show().siblings('.tab_tab').hide();
		$(this).addClass('line').siblings('li').removeClass('line')
	})
	$('.tab_three_floor .tab_title li').on('mouseover',function(){
		$('.tab_three_floor .tab_tab').eq($(this).index()).show().siblings('.tab_tab').hide();
		$(this).addClass('line').siblings('li').removeClass('line')
	})
})();


;(function(){
	$('.hot_pic img').hover(function(){
 	$(this).addClass('hover_border');
 },function(){
 	$(this).removeClass('hover_border');
 })

$('#hot_goods li').hover(function(){
 	$(this).addClass('hover_border');
 },function(){
 	$(this).removeClass('hover_border');
 })
})();
/*--------------------------图片左右摆动---------------------------------*/
(function(){
	$('.main_recommend_list img').hover(function(){
	$(this).stop(true).animate({
		left:40
	},400)
},
function(){
	$(this).stop(true).animate({
		left:46
	},400)
})
})();

/*-----------------------弹窗------------------------------*/
;(function(){
	$(function() {
	$('#emdelete').on('click', function() {
		$('#tanchuang').hide();
	})
	$('#seacher_rr .login').on('click',function(){
		$('#tanchuang').show();
	})
	
	
	$('#tanchuang').css({
		left: parseInt(($(window).width() - $('#tanchuang').width()) / 2),
		top: parseInt(($(window).height() - $('#tanchuang').height()) / 2)
	})
	$('#tanchuang').on('mousedown', function(ev) {
		var shortX = ev.offsetX;
		var shortY = ev.offsetY;
		$(document).on('mousemove', function(ev) {
			$('#tanchuang').css({
				left: ev.pageX - shortX,
				top: ev.pageY - shortY
			})
		})
		$(document).on('mouseup', function(ev) {
			$(document).off('mousemove up')
		})
	})
})
	
	
})();


function addCookie(key, value, day) {
		var date = new Date();
		date.setDate(date.getDate() + day);
		document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
	}
	function getCookie(key) {
		var str = decodeURI(document.cookie);
		var arr = str.split('; ');
		for(var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split('=');
			if(key == arr1[0]) {
				return arr1[1];
			}
		}
	}
	
		(function(){
			if(getCookie('cartsid')){
				var a=Math.ceil(getCookie('cartsid').length/2);
				$('.piece_cart').html('购物车'+a+'件');
				$('.cart p').html(a);
			}
			
			if(getCookie('usename')){
				$('.login_cart').html(getCookie('usename'));
				$('.reg_cart').html('退出');
			}
		})();

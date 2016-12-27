/*----------------------------------------请求json数据----------------------------------*/
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
if(getCookie('cartsid')) {
	var s = getCookie('cartsid').split(',');
	var n = getCookie('cartnum').split(',');
	for(var i = 0; i < s.length; i++) {
		createcart(s[i], n[i]);
	}
}
function cookiearr() {
	if(getCookie('cartsid')) {
		sidarr = getCookie('cartsid').split(',');
	} else {
		sidarr = [];
	}
	if(getCookie('cartnum')) {
		numarr = getCookie('cartnum').split(',');
	} else {
		numarr = [];
	}
}
var sidarr = [];
var numarr = [];
/*-------------------------全选按钮---------------------*/
$('.allcheck').on('click', function() {
	if($(this).prop('checked')) {
		$('.simplecheck').each(function() {
			$(this).prop('checked', true);
		})
	} else {
		$('.simplecheck').each(function() {
			$(this).prop('checked', false);
		})
	}
})
$('.simplecheck').on('click', function() {
	if(!$(this).prop('checked')) {
		$('.allcheck').prop('checked', false);
	}
	if($('.cart_body:visible').find('input:checked').length == $('.cart_body:visible').size()) {
		$('.allcheck').prop('checked', true)
	}
})

/*------------------------------------------创建购物车----------------------------*/
function createcart(sid, num) {
	$.ajax({
		url: "../json/textimg.json"
	}).done(function(data){
			for(var i = 0; i < data.threestar.length; i++) {
				if(sid == data.threestar[i].sid) { //克隆相关值
					var $clone = $('.cart_body:hidden').clone(true);
					$clone.find('img').attr('src', data.threestar[i].img);
					$clone.find('img').attr('sid', data.threestar[i].sid);
					$clone.find('.title_cart').html(data.threestar[i].title);
					$clone.find('.simple_price').html(data.threestar[i].now_price);
					$clone.find('.num').val(num); //设置数量num			
					var $dj = parseFloat($clone.find('.simple_price').html());
					var $count = parseInt($clone.find('.num').val()); //获取数量
					$clone.find('.litter_sum').html(parseFloat($count * $dj));
					$clone.css('display', 'block');
					$('#content_cart_body').append($clone);
					sumPrice();
					$('.simplecheck').prop('checked',true);
				}
			}
	})
}

/*总价*/
function sumPrice(){
	var snum = 0;
	$('.cart_body:visible').find('.litter_sum').each(function() {
			snum += parseInt($(this).html());
		})
	$('.sum_price').html('￥' + snum+'.00');
	$('.top_r .litter').html('购物车状态('+$('.cart_body:visible').length+'/30)');
	$('.piece').html('购物车'+$('.cart_body:visible').length+'件');
}

	$.ajax({
	url:"../json/textimg.json"
	}).done(function(data){
		for(var i=0;i<data.threestar.length;i++){
			$('.main_cart img').eq(i).attr('src', data.threestar[i].img);
			$('.main_cart img').eq(i).attr('sid', data.threestar[i].sid); 	
			$('.goods_title').eq(i).html(data.threestar[i].title);
			$('.price').eq(i).html(data.threestar[i].now_price);
		}
	})

	$('.main_cart button').on('click', function() {
		cookiearr();
		var sid = $(this).siblings('img').attr('sid');
		if($.inArray(sid, sidarr) != -1) { 	
			$('.cart_body:visible').each(function() {
				if(sid == $(this).find('img').attr('sid')) {
					var $value = $(this).find('.number').find('.num').val();
					$value++;
					$(this).find('.number').find('.num').val($value);
					numarr[sidarr.indexOf(sid)] = $value;
					var dj = parseFloat($(this).find('.simple_price').html());
					$(this).find('.litter_sum').html((dj * $value).toFixed(2));
						sumPrice()
					addCookie('cartnum', numarr.toString(), 7);
				}
			})
		} else {
			sidarr.push(sid);
			addCookie('cartsid', sidarr.toString(), 7);
			numarr.push(1);
			addCookie('cartnum', numarr.toString(), 7);
			createcart(sid, 1);
		}
	})

/*-----------------------------删除按钮-----------------------------*/
function deletegood(sid1, array) { 
	var arr = [];
	for(var i = 0; i < array.length; i++) {
		if(sid1 != array[i]) {
			arr.push(array[i]);
		}
	}
	numarr.splice(sidarr.indexOf(sid1), 1);
	sidarr = arr;
	addCookie('cartsid', sidarr.toString(), 7);
	addCookie('cartnum', numarr.toString(), 7);
}
$('.delete').on('click', function() {
		cookiearr();
		$(this).parents('.cart_body').remove();
		deletegood($(this).parents('.cart_body').find('img').attr('sid'), sidarr);
		sumPrice();
		/*$('.confirm').show();
		$('.yes').on('click',function(){
			$(this).parents('.cart_body').remove();
		deletegood($(this).parents('.cart_body').find('img').attr('sid'), sidarr);
		sumPrice();
		return false;
		})
		$('.no').on('click',function(){
			$('.confirm').hide();
		})*/
})


$('#piliang_l a').on('click', function() {
	cookiearr();
	$('.cart_body:visible').each(function() {
		if($(this).find('input:checkbox').is(':checked')) {
			$(this).remove();
			deletegood($(this).find('img').attr('sid'), sidarr);
		}
	})
	sumPrice();	
})

/*----------------------------------加减数量-----------------------------------*/
$('.removeNumber').on('click', function() {
		cookiearr();
	var dj = parseInt($(this).parents('.number').siblings('.simple_price').html());
	var $v = parseInt($(this).siblings('.num').val());
	$v--;
	if($v <= 0 || !$.isNumeric($v)) {
		$(this).siblings('.num').val('1');
		$v = parseInt($(this).siblings('.num').val());
	}
	$(this).siblings('.num').val($v);
	$(this).parents('.number').siblings('.litter_sum').html($v * dj);
	sumPrice();
	var sid = $(this).parents('.number').siblings('img').attr('sid');
	if($.inArray(sid, sidarr) != -1) {
		$('.cart_body:visible').each(function() {
			if(sid == $(this).find('img').attr('sid')) {
				numarr[sidarr.indexOf(sid)] = $v;
				addCookie('cartsid', sidarr.toString(), 7);
				addCookie('cartnum', numarr.toString(), 7);
			}
		})
	}
})

$('.addNumber').on('click', function() {
	cookiearr();
	var dj = parseInt($(this).parents('.number').siblings('.simple_price').html());
	var $v = parseInt($(this).siblings('.num').val());
	$v++;
	
	if($v > 1000 || !$.isNumeric($v)) {
		$(this).siblings('.num').val('1');
		$v = parseInt($(this).siblings('.num').val());
	}
	$(this).siblings('.num').val($v);
	$(this).parents('.number').siblings('.litter_sum').html($v * dj);
	sumPrice();
var sid = $(this).parents('.number').siblings('img').attr('sid');
		if($.inArray(sid, sidarr) != -1) {
		$('.cart_body:visible').each(function() {
			if(sid == $(this).find('img').attr('sid')) {
				numarr[sidarr.indexOf(sid)] = $v;
				addCookie('cartsid', sidarr.toString(), 7);
				addCookie('cartnum', numarr.toString(), 7);
			}
		})
	}
})

$('#piliang_r a').click(function(){
	window.location = 'index.html';	
})



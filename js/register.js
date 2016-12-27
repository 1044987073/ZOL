/*---------------------------请求登录页面头部------------------------*/
(function() {
	$.ajax({
		type: "get",
		url: "../html/register_top.html",
		async: false,
		success: function(data) {
			$('#top_mode').append(data);
		}
	});
})();
/*---------------------------请求登录页面尾部------------------------*/
(function() {
	$.ajax({
		type: "get",
		url: "../html/register_foot.html",
		async: false,
		success: function(data) {
			$('#foot_mode').append(data);
			$('#login_foot').append(data);
		}
	});
})();

/*-------------------------------注册验证-----------------------------*/
(function() {
	var tele_reg = /^1[3|4|5|7|8]\d{9}$/;
	var pwd_reg = /^[a-z0-9_-]{6,16}$/;
	$('.tele').blur(function() {
		if(!tele_reg.test($(this).val())) {
			$('.tele_div>.error_hint').show();
			$('.tele_div>.correct_hint').hide();
		} else {
			$('.tele_div>.correct_hint').show();
			$('.tele_div>.error_hint').hide();
		}
		if($('.tele_div .tele').val() == '') {
			alert('手机号码不能为空');
		}
	})
	$('.pwd_div .pwd').blur(function() {
		if(!pwd_reg.test($(this).val())) {
			$('.pwd_div>.error_hint').show()
			$('.pwd_div>.correct_hint').hide()
		} else {
			$('.pwd_div>.correct_hint').show()
			$('.pwd_div>.error_hint').hide()
		}
		if($('.pwd_div .pwd').val() == '') {
			alert('密码不能为空')
			$(this).focus()
		}
	})
	$('.pwdtwe_div .pwd').blur(function() {
			if($('.pwd_div .pwd').val() != $(this).val()) {
				$('.pwdtwe_div>.error_hint').show()
				$('.pwdtwe_div>.correct_hint').hide()
			} else {
				$('.pwdtwe_div>.error_hint').hide()
				$('.pwdtwe_div>.correct_hint').show()
			}
			if($('.pwdtwe_div .pwd').val() == '') {
				alert('请确认密码')
				$(this).focus()
			}
		})
		/*----------------------随机生成验证码---------------------------*/
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'e',
		'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
	];
	var arrnew1 = [];
	var arrnew2 = [];
	var arrnew3 = [];
	var arrnew4 = [];
	$('.codename').click(function() {
		for(var j = 0; j < 4; j++) {
			arrnew1[j] = arr[Math.floor(Math.random() * (arr.length - 1))];
			arrnew2[j] = arr[Math.floor(Math.random() * (arr.length - 1))];
			arrnew3[j] = arr[Math.floor(Math.random() * (arr.length - 1))];
			arrnew4[j] = arr[Math.floor(Math.random() * (arr.length - 1))];
			$('.code').html(arrnew1[j] + arrnew2[j] + arrnew3[j] + arrnew4[j])
		}
	})
	$('.yanzhengma').blur(function() {
		if($('.code').html() != $(this).val()) {
			$('.yanzhengma_div>.error_hint').show()
			$('.yanzhengma_div>.correct_hint').hide()
		} else {
			$('.yanzhengma_div>.error_hint').hide()
			$('.yanzhengma_div>.correct_hint').show()
		}
		if($('.yanzhengma').val() == '') {
			alert('验证码不能为空')
			$(this).focus()
		}
	})

	/*----------------------------注册提交多用户注册-----------------------------*/
	$('.register_button').click(function() {
		if(tele_reg.test($('.tele').val()) && pwd_reg.test($('.pwd_div .pwd').val()) && $('.pwd_div .pwd').val() == $('.pwd_div .pwd').val() && $('.code').html() == $('.yanzhengma').val() && $('.checkbox').prop('checked')) {
			var arr = [];
			var user = $('.tele').val();
			var psd = $('.pwd_div .pwd').val();
			if(getCookie('usermore') == undefined) {
				arr.push(user, psd);
				addCookie('usermore', arr.toString(), 7);
				window.location = 'login.html';
			} else {
				arr = getCookie('usermore').split(',');
				if($.inArray($('.tele').val(), arr) != -1) {
					alert('该用户名已经存在');
				} else {
					arr.push(user, psd);
					addCookie('usermore', arr.toString(), 7);
					window.location = 'login.html';
				}
			}
		} else {
			alert('注册失败，请重新输入');
		}
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

/*--------------------------------------登录-----------------------------*/

;(function(){
	function reseachArr(value, arr) {
				for(var i = 0; i < arr.length; i++) {
					if(value == arr[i]) {
						return i;
					}
				}
				return false;
			}
	
$('#login_button').click(function() {
					var arrInfo = getCookie('usermore').split(',');
					if($.inArray($('.username ').val(), arrInfo) != -1) {
						var index = reseachArr($('.username ').val(), arrInfo);
						if($('.password').val()== arrInfo[index + 1]) {
							addCookie('usename',$('.username ').val(), 7);
							addCookie('password',$('.password').val(), 7);
							window.location = 'index.html';						
} else {	
							$('.error_p').show();
							$('.error_p').html('密码不正确')
						}
					} else {
						$('.error_p').show();
						$('.error_p').html('登录不正确')
					}
				})
})();

/*-------------------------------------首页------------------------------*/
(function(){
			if(getCookie('usename')&&getCookie('password')){
					$('.login_open').html(getCookie('usename')+'你好');
					$('.reg_open').html('退出');
				}
			$('.reg_open').click(function(){
				$('.login_open').html('登录');
				$('.reg_open').html('注册');
			})
		})();
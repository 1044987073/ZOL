/*主要推荐*/
$.ajax({
	url: '../json/index.json',
	success: function(data) {
		for(var i = 0; i < data.info.length; i++) {
			$('.main_recommend_list').find('ul').find('a').eq(i).html(data.info[i].title);
			$('.main_recommend_list').find('ul').find('span').eq(i).html(data.info[i].price);
			$('.main_recommend_list').find('ul').find('img').eq(i).attr('src', data.info[i].img);
		}
	}
})
$.ajax({
		url: '../json/index.json',
		success: function(data) {
			for(var i = 0; i < data.infomation.length; i++) {
				$('.box_b_right').find('img').eq(i).attr('src', data.infomation[i].img);
			}
		}
	})
	/************全国团购*************/
$.ajax({
	url: '../json/index.json',
	success: function(data) {
		for(var i = 0; i < data.group.length; i++) {
			$('#group_buying').find('img').eq(i).attr('src', data.group[i].img);
		}
	}
})


/*---------------------------------------------小商标请求图片-----------------------------------------*/
$.ajax({
	url: '../json/smallLabel.json',
	success: function(data) {
		for(var i = 0; i < data.oneFloor.length; i++) {
			$('.one_floor .picture_list').find('img').eq(i).attr('src', data.oneFloor[i].img);
		}
		for(var i = 0; i < data.twoFloor.length; i++) {
			$('.two_floor .picture_list').find('img').eq(i).attr('src', data.twoFloor[i].img);
		}
		for(var i = 0; i < data.threeFloor.length; i++) {
			$('.three_floor .picture_list').find('img').eq(i).attr('src', data.threeFloor[i].img);
		}
	}
	})


/*---------------------------把尾部插进HTML中------------------------------------*/

$.ajax({
	type:"get",
	url:"../html/foot.html"
}).done(function(data){
	$('#insert').append(data);
	$('#foot_frame').append(data);
})

/*---------------------------左侧固定定位------------------------------------*/
$.ajax({
	type:"get",
	url:"../html/global.html"
}).done(function(data){
	$('.fixedLeft').append(data);
});
/*---------------------------右侧固定定位------------------------------------*/
$.ajax({
	type:"get",
	url:"../html/glabalright.html"
}).done(function(data){
	$('.fixedRight').append(data);
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
})

/*---------------------------------------导航栏--------------------------------------*/
$.ajax({
	type:"get",
	url:"../html/search.html"
}).done(function(data){
	$('#seacher_fly').append(data);
})

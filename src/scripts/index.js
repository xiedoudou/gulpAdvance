// var dateUtil=require('./common/utils/dateUtil.js');
// var List=require('./module/list.js');
// var Detail=require('./module/detail.js');

// var $=require('./common/libs/jquery-1.12.4.min.js');

//  //var $=require('./common/libs/zepto.js');
// console.log($);

// $.post('/api/skill',{},
// 	function(response){
// 		result=response;
// 		var html="<ul>";
// 		for(var i=0;i<result.length;i++){
// 			html+="<li>"+result[i].name+"</li>";		
// 		}
// 		html+="</ul>";
// 		$('#list').html(html);
// })

// console.log($);



// console.log(List('222'));
// console.log(Detail);

// var detailInstance= new Detail();

// console.log(detailInstance);
// console.log(detailInstance.say('3333333'));


// console.log("main js");

// console.log(dateUtil.getDate());


//引入zepto
var $=require('./components/zepto-modules/_custom');
console.log($)




//引入iscroll
var IScroll=require('./components/iscroll/iscroll.js');

console.log(IScroll)



//设置iscroll对象默认为hide
$('#mainContent').hide();
$('.swiper-container').show();

$('#enter').tap(function(){
	$('#mainContent').show();
	$('.swiper-container').hide();

	//需要进行post请求，然后请求/api/skill，并且将数据列表显示在iscroll里
	// $.post('/api/skill', {}, function(response){
 //  		// process response
 //  		console.log(response)
	// 	var html="";
	// 	for(var i=0;i<response.length;i++){
	// 		html+="<li>"+response[i].name+"</li>";		
	// 	}		
	// 	$('#scroller ul').html(html);

	// 	//调用iscroll
	// 	myScroll = new IScroll('#wrapper', { scrollX: true, freeScroll: true });

	// 	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// })
	
})

//引入swiper
var Swiper=require('./components/swiper/swiper.min.js');

//console.log(Swiper);

var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min.js')

var mySwiper = new Swiper ('.swiper-container', {
	effect:'cube',
  	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	}, 
 	onSlideChangeEnd: function(swiper){ 
    	SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  	} 
})     


$("#footer div").tap(function(){
	console.log($(this).attr('id'));
	var apiTarget=$(this).attr('id');
	$.post('/api/'+apiTarget, {}, function(response){
  		// process response
  		//console.log(response)
		var html="";
		for(var i=0;i<response.length;i++){
			html+="<li>"+response[i].category+"</li>";		
		}
		
		$('#scroller ul').html(html);
	})

})


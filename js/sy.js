
     /*  轮播图    */
$(function(){
	var i = 0;
	//i代表图片的索引，0表示第一张图片
	var timer = null;
    $('.k').children().hover(function(){
		clearInterval(timer);
		i = $(this).index();
		lbs(i);
	});
	function lbs(s){
		$('.sy_lbk').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
		$('.k').children().eq(s).addClass('ko').siblings('li').removeClass('ko');
	}
	timer=setInterval(lb,1000);
	  function lb(){
		i++;
		if(i==5){
			i=0;
		}
		 lbs(i);
	}
	$('.sy_lbk').mouseenter(function(){
		clearInterval(timer);
	});
	$('.sy_lbk').mouseleave(function(){
		timer=setInterval(lb,1000);
	});
	
	
	/*  高晶石一行 */
	$("#p").hover(function(){
		$(this).find("#pak").stop().animate({height:"487px"},200);
		$(this).find("#pak h4").stop().animate({paddingTop:"60px"},200);
	},function(){
		$(this).find("#pak").stop().animate({height:"0px"},200);
		$(this).find("#pak h4").stop().animate({paddingTop:"0px"},200);
	});
	
	$("#p1").hover(function(){
		$(this).find("#psk").stop().animate({height:"225px"},200);
		$(this).find("#psk h4").stop().animate({paddingTop:"60px"},200);
	},function(){
		$(this).find("#psk").stop().animate({height:"0px"},200);
		$(this).find("#psk h4").stop().animate({paddingTop:"0px"},200);
	});
	
	$("#p2").hover(function(){
		$(this).find("#psk").stop().animate({height:"245px"},200);
		$(this).find("#psk h4").stop().animate({paddingTop:"60px"},200);
	},function(){
		$(this).find("#psk").stop().animate({height:"0px"},200);
		$(this).find("#psk h4").stop().animate({paddingTop:"0px"},200);
	})
	
//	
//	/*喷墨漆一行*/
	var pmc=$('#sy_pmc-uls'),
	    pmcs=$('#sy_pmc-uls>li');
	    pmc_1=$('.pmc_1');
	    pmc_2=$('.pmc_2');
	    pmc_3=$('.pmc_3');
	    console.log(pmc_1)

    pmcs[0].onmouseenter=function(){
         pmc_1.css('display','block')
      }
	pmcs[0].onmouseleave=function(){
         pmc_1.css('display','none')
      }
	
	pmcs[1].onmouseenter=function(){
         pmc_2.css('display','block')
      }
	 pmcs[1].onmouseleave=function(){
         pmc_2.css('display','none')
      }
	 
	 pmcs[2].onmouseenter=function(){
         pmc_3.css('display','block')
      }
	 pmcs[2].onmouseleave=function(){
         pmc_3.css('display','none')
      }
      
      
    
		
})
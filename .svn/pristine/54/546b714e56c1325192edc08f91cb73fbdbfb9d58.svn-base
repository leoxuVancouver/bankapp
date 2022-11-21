$(function(){
	//输入后变发送
    $('.inp').on('keyup',function (){
        var inp = $(this).val();
        if ( inp ){
            $('.plus_icon').hide();
            $('.send').show();
        }else {
            $('.plus_icon').show();
            $('.send').hide();
        }
    });

    /*发送信息icon*/
	$('.send').click(function(){  
		var myDate = new Date();
		var month = myDate.getMonth()+1;
		var day = myDate.getDate();
		var hours = myDate.getHours();
		var minutes = myDate.getMinutes();
		if(month < 10) month = "0"+month;
		if(day < 10) day = "0"+day;
		if(hours < 10) hours = "0"+hours;
		if(minutes < 10) minutes = "0"+minutes;
		var t=month+'-'+day+' '+hours+':'+minutes;
		

		var sVal = $(".operation_area input").val();
		var html = '<li class="even">'+'<p>'+t+'</p>'+
    					'<img src="images/face2.png" height="81" width="90" alt="">'+
    					'<div class="massage">'
    						+sVal+
    					'</div>'+
    				'</li>';
		if(sVal ='') {
			$(".operation_area input").focus();
		}else{
			$("ul").append(html);
		}
		$(".operation_area input").val('');
		$(".send").hide();
		$('.plus_icon').show();
	});
});
	
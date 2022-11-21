/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-06 10:10:44
 * @version $Id$
 */
$(function(){
	funSpinner("#item1");
	funSpinner("#item2");
	funSpinner("#item3");
	funSpinnerinput("#item1");
	funSpinnerinput("#item2");
	funSpinnerinput("#item3");

	//修改
	$(".J_update").click(function(){
		$(this).parent().parent('dl').find("span.purch1").hide().next().show();
	})
	//删除
	$(".J_del").click(function(){
		$(this).parent().parent().parent('dd').remove();
	})
	//删除
	$(".J_del").click(function(){
		$(this).parent().parent().parent('dl').remove();
	})
	//删除
	$(".J_del").click(function(){
		$(this).parent().parent().parent('li').remove();
	})

	setTotal();
	function setTotal() {
	    var s = 0;
	    $("#goods li").each(function() {
	    	var num = $(this).find('.number').text();
	    	var price = $(this).find('.price').text();
	    		price = price.replace(",",'');
	    	var n_price = (parseInt(price)*parseInt(num));
	    	$(this).find(".total").html(formatCurrency(n_price));
	        s += n_price;

	    });
	    $(".stotal").text(formatCurrency(s));
	}

	 	setTotal2();
        function setTotal2() {
            var s = 0;
            $(".list_view2").each(function() {
                var num = $(this).find('.number').text();
	    		var price = $(this).find('.price').text();
	    			price = price.replace(",",'');
	    		var n_price = (parseInt(price)*parseInt(num));
                $(this).find(".total").html(formatCurrency(n_price));
            });
        }

	function funSpinner(obj){
		var t = $(obj).find(".number");	
		$(obj).find(".add").click(function(){		
			t.text(parseInt(t.text())+1)
			if (parseInt(t.text())>9999999){
				t.text(9999999);
			}
			setTotal();
			setTotal2();
		});	
		$(obj).find(".min").click(function(){
			t.text(parseInt(t.text())-1);
			if (parseInt(t.text())<1){
				t.text(1);
			}
			setTotal();
			setTotal2();
		});	
	}
	
	function funSpinnerinput(objinput){
		var t = $(objinput).find(".numberinput");		
		$(objinput).find(".add").click(function(){
		                  if(t.val()==""){
			t.val(0);
		                  }		
			t.val(parseInt(t.val())+1)
			if (parseInt(t.val())>9999999){
				t.val(9999999);
			}
			setTotal();
			setTotal2();
		});	
		$(objinput).find(".min").click(function(){
                                                     if(t.val()==""){
			t.val(1);
		                  }
			t.val(parseInt(t.val())-1);
			if (parseInt(t.val())<1){
				t.val(1);
			}
			setTotal();
			setTotal2();
		});	
	}
})

/** 
 * 将数值四舍五入(保留2位小数)后格式化成金额形式 
 * @param num 数值(Number或者String) 
 * @return 金额格式的字符串,如'1,234,567.45' 
 * @type String 
 */  
function formatCurrency(num) {  
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
    num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*100+0.50000000001);  
    cents = num%100;  
    num = Math.floor(num/100).toString();  
    if(cents<10)  
    cents = "0" + cents;  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
}  
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-30 10:56:10
 * @version $Id$
 */

$(function() {
    funRadio(".goods_list dl dt");    //选择商品
    funRadio(".vendor_list ul li");   //选择供应商
    funRadio(".cashier ul li");       //选择支付方式

    funTabNav(".tagbar ul li","active",".tagcon");
    // funTabNav(".tabs ul li","active",".tabsCont");
    // funTabNav(".tabs2 ul li","active",".tabshow");
  	funTabNav(".tabs2 ul li","active",".sortcont");

    funSelect("#checkall",".checkbox",".footshow");  //checkBox全选单选   
    funSelect("#checkall2",".checkbox2",".footshow");//checkBox全选单选

    //funCheckBox(".goods h2 .checkbox",".goods_num"); //checkBox单选
	funCheckBox1("#checkbox-1","#goods_num1"); //checkBox单选
	funCheckBox1("#checkbox-2","#goods_num2"); //checkBox单选
	funCheckBox1("#checkbox-3","#goods_num3"); //checkBox单选

    //返回上一页
    $('.goBack').on('click',function (){
        window.history.go(-1);

    })

   

    //单选按钮
    function funRadio(obj){
    	$(obj).find("input").click(function(){
    		var index=$(obj).find("input").index(this);
    		$(obj).find("input").removeClass("active").eq(index).addClass("active");
    	});
    }
    //tab切换
    function funTabNav(obj,obj2,obj3){
        var tabbli = $(obj);
        tabbli.click(function(){
            $(this).addClass(obj2).siblings().removeClass(obj2);
            var index = tabbli.index(this);
            $(obj3).eq(index).show().siblings(obj3).hide();
        });
    }
    //checkBox全选单选
    function funSelect(obj1,obj2,obj3){
        $(obj1).click(function() {
            var flag = $(this).attr("checked");
           
            if (!flag){
                $(obj2).attr("checked", false);
                $(this).parent().parent().parent().find(obj3).hide();
                setTotal();
            }
            else{
                $(obj2).attr("checked", true);
                $(this).parent().parent().parent().find(obj3).show();
                setTotal();
            }
             var sell = $(this).attr("name");            
           if(sell=="check1"){
           $(".c2").attr("checked", false);
           $(".c2").hide();
           setTotal();
           }
            if(sell=="check2"){
            $(".c1").attr("checked", false);
            $(".c1").hide();
            setTotal();
           }
        });
        //全选后，取消某个选中后，全选的checkbox取消选中状态
        $(obj2).click(function() {
            var flag = true;
            var sell = $(this).attr("name");            
           if(sell=="check1"){
           $(".c2").attr("checked", false);
           $(".c2").hide();
           }
            if(sell=="check2"){
            $(".c1").attr("checked", false);
            $(".c1").hide();
           }
            $(obj2).each(function() {
                if (!this.checked) {
                    flag = false;
                    $(this).parent().parent().find(obj3).hide();
                    setTotal();
                }else{
                    $(this).parent().parent().find(obj3).show();
                    setTotal();
                }
            });
            $(obj1).attr("checked", flag);
        });
        setTotal();
        function setTotal() {
            var s = 0;
            $(".bundle ul li").each(function() {
                var price = $(this).find('.price').text();
                    price = price.replace(",",'');
                var n_price = parseInt(price);
                if ($(this).find("input[type=checkbox]").attr('checked')) {
                   s += n_price;
                }
            });
            $(".stotal").html(formatCurrency(s));
        }
    }

	 //checkBox单选-选择商品
    function funCheckBox1(obj1,obj2){
        $(obj1).click(function() {
            var _index = $(this).index();
            var flag = $(this).attr("checked");
            if (!flag){  
                $(obj2).find("input").val('');                
                $(obj2).hide();
                }
            else
                $(obj2).show(); 

        });
    }
});
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
//获取短信验证码

$(function(){
    var validCode=true;
     var times=0;
    $(".get_code").click(function(ev) {
            GetVlCode($(this));
    })
    function GetVlCode(code){    
            if ( validCode ) {
            validCode = false;
            times++;
           if (times < 10){ 
            var ttimes="0"+times;           
         } 
           else{
            var ttimes=times;
           }


            $(".dxxh").text(ttimes); 
            var time=59;
            code.css({'cursor':"default",'background':'#eee'});
            var t = setInterval(function(){
                time--;
                code.val("剩余"+time+"秒");
                if( time == 0) {
                    clearInterval(t);
                    code.css({'cursor':"pointer",'background':'#fff'});
                    code.val("重新获取验证码");
                    validCode = true;
                }
            },1000)
        }
    }
})
//select_order页面交互
$(document).ready(function(e) {
    $('#click').click(function(){
		$('#dd').show()
		});
});
$(document).ready(function(e) {
    $(".aa").click(function(){
		$('#dd').hide()
		});
    $(".changedate").click(function(){
		$('#dd').hide()
		});
$(".content a").click(function(){
$(this).addClass('change').siblings().removeClass('change')
$(this).addClass('changedate').siblings().removeClass('changedate')
	})

});

//select_order页面交互
$(document).ready(function(e) {
    $(".ee").click(function(){
		$(".bundle").show()
		});
});
$(document).ready(function(e) {
    $(".aa").click(function(){
		$(".bundle").hide()
		});
});




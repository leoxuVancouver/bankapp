/*
*弹窗
*Item:弹窗id
*fn:回调函数
*/
function popWin(Item,fn){
    var heig = $(window).height();
    $(window).scrollTop(0);
    $('body').css({'overflow':'hidden'});
    $(Item).show();
    var _pop= $(Item).find(".pop_win");
    marginW = _pop.width()/2;
    marginH = _pop.height()/2;
    if(_pop.length){
        _pop.css({marginLeft:-marginW , marginTop:-marginH});
    }
    if($(".hidePop").length){
        $(Item+" "+".hidePop").one("click",function(){
            $(Item).hide();
            $('body').css({'overflow':'auto'});
            if(fn && $.isFunction(fn)){
                fn.call(fn);
            }
        });
    }
}
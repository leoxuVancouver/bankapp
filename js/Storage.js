var Enjurokcc = {//公调方法
  
    isIE : function(){//判断是否为IE 包括IE-11//IE浏览器
          if (!!window.ActiveXObject || "ActiveXObject" in window){
              return true; 
           } 
          else{ 
              return false;
             } 
        },
    addMarkPage : function(Name,string){//页面统一增加标记方法
        if(!Enjurokcc.isIE()){
               localStorage.setItem(Name,string); 
            }else{
                cookie_jq(Name,string,{expires:1,path:'/'});//全局路径
            }
      },
    getMarkStringThis : function(string){//与上方法对应获取方法
       var _value;
       if(!Enjurokcc.isIE()){
              _value = localStorage.getItem(string);
          }else{
            _value = cookie_jq(string);
          }
          return _value;
      }
  }
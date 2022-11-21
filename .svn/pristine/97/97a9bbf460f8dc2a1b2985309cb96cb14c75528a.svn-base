/**
 * @author lb
 * 获得系统、分辨率等手机参数，设置meta
 */
var isAppCan=false;    //是否为appCan应用
var appVersion = window.navigator.appVersion;   //客户端信息
var isSystem=appVersion.indexOf("Android")>-1 || appVersion.indexOf("android")>-1?"android":false;
if(isSystem!="android"){
    isSystem=appVersion.indexOf("iPhone")>-1 || appVersion.indexOf("iPod")>-1?"iphone":false;
}
// document.writeln('<link href="data/css/base.css" rel="stylesheet" type="text/css">');
//isSystem='iphone';//在PC上模拟iphone测试的开关
switch (isSystem){
    case "android":
        var windowWidth=window.screen.width;    //屏幕分辨率
        var devicePixelRatio = window.devicePixelRatio; //屏幕分辨率与像素比
        var targetDensitydpi = 640 / windowWidth * devicePixelRatio * 160;
        document.writeln('<meta name="viewport" content="width=device-width,target-densitydpi='+targetDensitydpi+',user-scalable=no">');
        break;
    case "iphone":
        document.writeln('<link href="data/css/base-for-iphone.css" rel="stylesheet" type="text/css">');
        document.writeln('<meta name="viewport" content="width=device-width,initial-scale=0.5,minimum-scale=0.5, maximum-scale=0.5,user-scalable=no" />');
        break;
    default :
}
/*document.writeln('<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>');
document.writeln('<script type="text/javascript" src="js/jquery.mobile.custom.min.js"></script>');
document.writeln('<script type="text/javascript" src="js/function.js"></script>');
document.writeln('<script type="text/javascript" src="js/public.js"></script>');
document.writeln('<script type="text/javascript" src="js/clearLocalStorage.js"></script>');*/


var cont=document.getElementById('content');
var result=document.getElementById('notice');
var showcode;
var num=0;
var errnum=0;

function show(){
    var rand=Math.random();
     //获取一个0到26之间的一个随机数（不包含26）
    showcode=Math.floor(rand*26);
    //获取到65~90之间的任意整数
    //把Unicode的十进制编码转化成对应的字符
    //获取A~Z的任意一个字符
    showcode=showcode+65;
    var finalcode=String.fromCharCode(showcode)
    console.log(finalcode)
    cont.innerHTML=finalcode;
}
show();
//键盘按下事件
window.onkeydown=function(ev){
    //获取按键所对应的Unicode十进制编码
    var key=ev.keyCode
    if(key==showcode){
        num++;
        cont.className ='animated zoomIn'; //设置动画效果
        show();
    }else{
        errnum++;
        cont.className="animate shake error";//设置动画效果
        
    }
    count();
    setTimeout(clearAnimated,500);

}
//计算正确率
function count(){
    var rate= 100*num/(num+errnum);
    rate=rate.toFixed(2);
    result.innerHTML='正确'+num+'个'+'错误'+errnum+'个'
    +'正确率'+rate+'%';
}
//引入了css动画
function clearAnimated(){
    //清除动画
    cont.className='';
}


var allImg=$('img');
//console.log(typeof(allImg))
var len=allImg.length;
// 默认中间展示索引值为0的这张图片
var curDisplay=0;
//定义定时器
var timer;
function allDeal(){
  show();
  pick();
}
allDeal();
//图片展示问题
function show(){
    //先将图片左右两边铺开,先获得中间的图片索引
    var hlen=Math.floor(len/2);
    //左右两边图片的索引
    var leftPic,rightPic;
    for(var i=0;i<hlen;i++){
        leftPic=curDisplay-i-1;    //为负数，图片倒数
        //左右两边图片平铺开
        allImg.eq(leftPic).css({
            transform: 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
        });
        rightPic=curDisplay+i+1;
        //点击到最后一张切换到第一张
        if(rightPic>len-1){
            rightPic-=len;
        }
        allImg.eq(rightPic).css({
            transform: 'translateX(' + (150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)'
        });
        allImg.removeClass('active'); //所有的清除active这个class属性
    }   
    //当前显示第一张图片
    allImg.eq(curDisplay).css({
        transform:'translateZ('+300 + 'px)'
    }).addClass('active');  //为显示在第一张的图片添加class属性值

}
//点击获取索引值，并切换图片
function pick(){
    //每张图片上绑定点击事件
    allImg.on('click',function(){
        //通过class判断是否是第一张图片
        if(!$(this).hasClass('active')){    //该对象不具有active类属性
            //改变当前显示图片索引
            curDisplay=$(this).index();
            show();          
        }
    }).hover(function(){       //hoverin
        clearInterval(timer);
    },function(){              //hoverout
        play();
    })
}
//设置定时轮播
function play(){
     timer=setInterval(function(){
        if(curDisplay==len-1){
            curDisplay=0;
        }else{
            curDisplay++;
        }
        show();
    },1000)
}
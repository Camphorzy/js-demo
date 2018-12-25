function clickBox(){
    $('.boxBottom').on('click',function(){
        $('.box').addClass('shake');
        $('audio')[0].play();
        // 延迟1s盒子飞走  wrapper添加show类名，铃铛显示，字体显示同时字体摇晃
        setTimeout(function(){
            $('.box').removeClass('shake');
            $('.box').addClass('fly');
            $('.wrapper').addClass('show');
            //雪花
            init();
        },1000);
    })
}
clickBox();


//生成随机数功能
function randNum(min,max){
    return min+Math.floor(Math.random()*(max-min));
}
//制造雪花
function createSnow(){
    //生成图片序列号
    var j=Math.random()>0.5?1:2;
    // 雪花图片外包裹div
    var snow=$('<div class="snow"><img src="./img/snow'+j+'.png"></div>')
    snow.css({
        //调用随机数功能，设置雪花样式 、 规定下落时间 和下落延迟时间
        'left': randNum(0, 1500) + 'px',
        'animationDelay': randNum(0, 5) + 's',
        'animationDuration': randNum(4, 10) + 's',
    })
    // 返回一个包裹着雪花的div
    return snow;
}
//将雪花插入到wrapper中
function init(){
    // 生成一百个雪花
    for(var i=0;i<100;i++){
        // 每一个createSnow函数返回一个雪花div插入到 wrapper中
        $('.wrapper').append(createSnow());
    }
}
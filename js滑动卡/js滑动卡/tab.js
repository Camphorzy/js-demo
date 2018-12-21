var width=$('.wraper li').outerWidth(true);
var box=$('.box');
var i=0;//标记移动单位
var n=4
var len=$('li').length;
slide();
function slide(){
    $('.left').on('click',function(){
        i++
        if(i<=n){
           box.animate({'left':-(i*width)+'px'}) 
        }else{
            i=len-n;
            box.animate({'left':-(i*width)+'px'}) 
        }
        
    });
    $('.right').on('click',function(){
        i--
        if(i>=0){
           box.animate({'left':-(i*width)+'px'}) 
        }else{
            i=0;
            box.animate({'left':'0px'})
        }
        
    })
}
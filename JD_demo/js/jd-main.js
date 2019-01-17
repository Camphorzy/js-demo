/**
 * Created by Administrator on 2019/1/7.
 */
//����������
(function(){
    var sou=document.getElementById('topFixed');
    //����������
    window.addEventListener("scroll",function(e){
        var t =document.documentElement.scrollTop||document.body.scrollTop;
        if(t > 1000){
            sou.style.display='block';
        }else{
            sou.style.display='none';
        }
    });
}());



//�ֲ�ͼ
//����¼�
(function(){


    var nowIndex=0;  //���õ�ǰͼƬ����λ��Ϊ0
    var len=$(".pics>li").length;
    var timer;

    bindEvent();
    function bindEvent(){
        $('.btn span').on('click',function(){
            // ��ð�ť�ϵ�class����
            var name=$(this).attr('class');
            //���ͼƬ�ƶ�
            move(name);

        })
        //����±��ȡ��ǰ����ֵ
        $('.listNumber li').on('click',function(){
            var currentIndex=$(this).index();
            move(currentIndex);
        })
        //��������Ƴ�
        $('.carousel').on('mouseenter',function(){
            clearInterval(timer);
            //console.log('enter');
        }).on('mouseleave',function(){
            timer=setInterval(slideAuto,2000);
            //console.log('out');
        })

    }

    function move(e){
        //�����ͷ�ƶ�
        if(e=="left" ||e=="right" ){
            //����ң�������
            if(e=="right"){
                nowIndex++;
                if(nowIndex>len-1){
                    nowIndex=0;
                }
            }else if(e=="left"){
                nowIndex--;
                if(nowIndex<1){
                    nowIndex=len-1;
                }
            }
        }else{
            nowIndex=e;
        }
        //����±��ƶ�
        //console.log(nowIndex);
        $('.pics').css({'left': -nowIndex * 590 + 'px'});
        //���õ��뵭����ǰ������Ϊ1��ʣ�������Ϊopcity=0
        $('.pics li').eq(nowIndex).animate({'opacity':1},1000);
        $('.pics li').not(nowIndex).css({'opacity':0});
        //�л�ѡ��СԲ��
        $('.active').removeClass('active');
        $('.listNumber li').eq(nowIndex).addClass('active');
    }
//��ʱ��
    timer=setInterval(slideAuto,2000);
    function slideAuto(){
        move('right');  //Ĭ�����һ���
    }

}())


//��ɱ����ʱ
var cd_h=document.getElementsByClassName('cd_h')[0];
var cd_m=document.getElementsByClassName('cd_m')[0];
var cd_s=document.getElementsByClassName('cd_s')[0];
function CountTime(times){
    var timer=setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;
        if(times>0){
            times--;
            day=Math.floor(times/(24*60*60));
            hour=Math.floor(times/(60*60))-(day*24);
            minute=Math.floor(times/60-(day*24*60))-(hour*60);
            second=Math.floor(times-(day*24*60))-(hour*60*60)-(minute*60);
            if(day<=9){
                day="0"+day;
            }
            if(hour<=9){
                hour="0"+hour;
            }
            if(minute<=9){
                minute="0"+minute;
            }
            if(second<=9){
                second="0"+second;
            }
            cd_h.innerHTML=hour;
            cd_m.innerHTML=minute;
            cd_s.innerHTML=second;
                //console.log(hour+""+minute+""+second);
        }else{
            console.log("error");
        }
    },1000);
    if(times<=0){
        clearInterval(timer);
    }
}
CountTime(18204);

//tab����ѡ�

(function(){
    var len=$('.list_inner_con div').length;
    var currentIndex=0;
    function tabClick(){
        $('.tb_r').on("click",function(){
            currentIndex+=4;
            if(currentIndex>=len-1){
                currentIndex=0;
            }
            $('.list_inner_con').css({'left':-currentIndex*200+'px'})

        });
        $('.tb_l').on("click",function(){

            currentIndex-=4;
            if(currentIndex<=-4){
                currentIndex=len-4;
            }
            $('.list_inner_con').css({'left':-currentIndex*200+'px'});
        })
    }
    tabClick();
}());

//tab�ұ�С�ֲ�
(function(){
    var playTime;
    function smallSlide(){
        //��ʱ��
        playTime=setInterval(play,2000);
        //��ȡ�±�
        $('.sk_end ul li').on('mouseenter',function(){
            var curIndex=$(this).index();
            $('.act').removeClass('act');
            $('.sk_end ul li').eq(curIndex).addClass("act");
            slide(curIndex);
        });
        $('.sk_end').on('mouseenter',function(){
            clearInterval(playTime);
        }).on('mouseleave',function(){
            setInterval(play,2000);
        })
    }
    smallSlide();
//�����±껬��
    function slide(n){
        $('.sk_end_warp').css({'left':-n*190+'px'})
    }
//�Զ�����
    var n=0;
    function play(){
        n++;
        if(n>1){
            n=0;
        }
        $('.act').removeClass('act');
        $('.sk_end ul li').eq(n).addClass("act");
        slide(n);
    }

})()


//ѡ������ڲ��ֲ�
//ѡ��л�
var tabs=$('.tab_head a'),
    tlen=tabs.length;
var div=$('.tab_body .ss');
function onTab(){
    for(var i=0;i<tlen;i++){
        (function(i){
            tabs[i].onmouseover=function(){
                //ȥ������a��ǩclass
                for(var j=0;j<tlen;j++){
                    tabs[j].className='';
                    div[j].style.display = 'none';
                }
                this.className='hov';
                div[i].style.display = 'block';
            }
        }(i))
    }
}
onTab();
//�ű��л�
var a=$('.tab_body .ss .cont');
function footTog(){
    $('.tab_foot li').on('mouseenter',function(){
        var tabNum=$(this).index();
        $('.actv').removeClass('actv');
        $('.tab_foot li').eq(tabNum).addClass("actv");
        imgTog(tabNum);
        //console.log(tabNum);
    })
}
footTog();
function imgTog(e){
    for(var i=0;i< a.length;i++){
        a[i].style.left=-e*350+'px';
    }

}

//����ר���ֲ�
(function(){
    var nowpic=0;
    var len=$('.box_foot li').length;
    //console.log(len);
    function bindSlider(){
        //��ȡ��ť
        $('.btn_3 span').on('click',function(){
            var name=$(this).attr('class');
            slider(name)
        });
        //��ȡ�ű�
        $('.box_foot li').on('mouseenter',function(){
            var footNum=$(this).index();
            slider(footNum);
            clearInterval(Timer);
        }).on('mouseleave',function(){
            Timer=setInterval(splay,2000);
        });
        //����divֹͣ�ֲ�
        $('.box_bd').on('mouseenter',function(){
            clearInterval(Timer);
        }).on('mouseleave',function(){
            Timer=setInterval(splay,2000);
            console.log("yes")
        })
    }
    bindSlider();
    function slider(e){
        if(e=='left'||e=='right'){
            if(e=='left'){
                nowpic--;
                if(nowpic<0){
                    nowpic=len-1;
                }
                $()
            }else if(e=='right'){
                nowpic++;
                if(nowpic>len-1){
                    nowpic=0;
                }
            }
        }else{
            nowpic=e;//����ű�ʱ
        }
        $('.slider_bd_con').css({'left':-nowpic*350+'px'});
        $('.box_foot li').removeClass('actv');
        $('.box_foot li').eq(nowpic).addClass('actv');

    }
    var Timer=setInterval(splay,2000);
    function splay(){
        slider('right');
    }

}());

//��ȯ����
(function(){
    function change(){
        //��ȡ�±�
        $('.three ul li').on('mouseenter',function(){
            var curIndex=$(this).index();
            $('.at').removeClass('at');
            $('.three ul li').eq(curIndex).addClass("at");
            slide(curIndex);
        });
    }
    function slide(e){
        $('.slider_bd_con3').css({'left':-e*350+'px'});
    }
    change();
}());

//��ME
(function(){
    var nowpic=0;
    var len=$('.box_ft li').length;
    //console.log(len);
    function bindSlider(){
        //��ȡ��ť
        $('.btn_4 span').on('click',function(){
            var name=$(this).attr('class');
            slider(name)

        });
        //��ȡ�ű�
        $('.box_ft li').on('mouseenter',function(){
            var footNum=$(this).index();
            slider(footNum);
            clearInterval(timer_s);
        }).on('mouseleave',function(){
            timer_s=setInterval(splay,2000);
        });
        //����divֹͣ�ֲ�
        $('.box_body').on('mouseenter',function(){
            clearInterval(timer_s);
        }).on('mouseleave',function(){
            timer_s=setInterval(splay,2000);
        })
    }
    bindSlider();
    function slider(e){
        if(e=='left'||e=='right'){
            if(e=='left'){
                nowpic--;
                if(nowpic<0){
                    nowpic=len-1;
                }
                $()
            }else if(e=='right'){
                nowpic++;
                if(nowpic>len-1){
                    nowpic=0;
                }
            }
        }else{
            nowpic=e;//����ű�ʱ
        }
        $('.slider_bd_con2').css({'left':-nowpic*350+'px'});
        $('.box_ft li').removeClass('actv');
        $('.box_ft li').eq(nowpic).addClass('actv');

    }
    var timer_s=setInterval(splay,2000);
    function splay(){
        slider('right');
    }

}());





(function(){
    var len_st=$('.slider_w_img').length;
    var currentIndex=0;
    var stNum=0;
    function btnClick(){
        //��ȡ��ť
        $('.slider_tab_btn span').on("click",function(){
            var name=$(this).attr('class');
            sliderTab(name);
        });
        $('.slider_tab').on('mouseenter',function(){
            clearInterval(timer_st);
        }).on('mouseleave',function(){
            timer_st=setInterval(stplay,2000);
        });
        //��ȡ�ű�
        $('.choosen li').on('mouseenter',function(){
            var stfootNum=$(this).index();
            sliderTab(stfootNum);
            clearInterval(timer_st);
        }).on('mouseleave',function(){
            timer_st=setInterval(stplay,2000);
        });
    }
    btnClick();

    function sliderTab(e){
        //console.log(e);
        if(e=='right stb_r'||e=='left stb_l'){
            if(e=='right stb_r'){
                currentIndex+=3;
                stNum++;
                if(currentIndex>=len_st-1){
                    currentIndex=0;
                    stNum=0;
                }
                $('.slider_warp').css({'left':-currentIndex*398+'px'})
            }
            if(e=='left stb_l'){
                currentIndex-=3;
                stNum--;
                console.log(currentIndex);
                if(currentIndex<=-3){
                    currentIndex=len_st-3;
                    stNum=3;
                }
                $('.slider_warp').css({'left':-currentIndex*398+'px'});
            }
        }else{
            stNum=e;
        }
        $('.slider_bd_con2').css({'left':-currentIndex*398+'px'});
        $('.choosen li').removeClass('act_ch');
        $('.choosen li').eq(stNum).addClass('act_ch');
    }
    var timer_st=setInterval(stplay,2000);
    function stplay(){
        sliderTab('right stb_r');
    }

}());

$(function(){
var count=1;

    $(".main_photo img").on("click",fnChange)
        function fnChange(){
            
            if(count==1) {
            count++;
            $(".main_photo img").attr("src","img/BlogWeb/pic_"+count+".jpg");
            }else if(count>=2){
            count--;
            $(".main_photo img").attr("src","img/BlogWeb/pic_"+count+".jpg");
                     }
        }
    
    });

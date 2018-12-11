$(function(){
var count=1;

    $(".main_photo img").on("click",fnChange)
        function fnChange(){
            
            for(var count=1; count<=4; count++){
                console.log(count);
              $(".main_photo img").attr("src","img/savebank/pic_"+count+".png");  
            }
            
            
        }
    
    });



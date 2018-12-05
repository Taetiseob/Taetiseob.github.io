/*$(function(){
        $(".jas div").on("click",fnOver);
        var overValue=false;
        function fnOver(){
            if(overValue){
                overValue=false;
                $(".right_side").slideUp(1000,"swing",function(){})
            }else{
                overValue=true;
                $(".right_side").slideDown(1000,"swing",function(){})
            }
        };
});*/
var btn_click = false;
$(function(){
    
    $(".main_right").on("click",fnClick);
        function fnClick(){
        
        if(btn_click){
            btn_click=false;
            return $(".right_side").css({display:"none"});
        }else
            btn_click=true;
            $(".right_side").show();
        }
});



            /*$(function(){
                var value = false;
                $(".btn1").on("click",function(){
                    if(value){
                        value=false;
                        $(".txt1").css({"color":"red"});
                    }
                    else{
                        value=true;
                        $(".txt1").css({"color":"black"})
                    }
                });*/
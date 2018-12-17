$(function(){
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
                });
                
                $(".btn2").on({"mouseover":function(){
                        $(".txt2").css("color","green")},
                               
                        "mouseout":function(){
                        $(".txt2").css("color","black")}
                        });
            })
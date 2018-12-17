
/*
var num = 1;
    function btnClick() {

            if(true){
                num++;
                if(num==4) num=1;
            }
            

            var imgTag = document.getElementsByTagName("img")[1];
            imgTag.setAttribute("src", "img/background_img/pic_"+ num +".jpg");
        }

    */
$(function(){
    var count=1;
        $("#main_slider img").on("click",fnChange)
            function fnChange(){
                count++;
                if(count>=4) count=1;
                $("#main_slider img").attr("src","img/background_img/pic_"+count+".jpg");
            }
        });


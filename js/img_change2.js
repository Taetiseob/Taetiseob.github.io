num = 1;
    function btnClick() {

            if(true){
                num++;
                if(num==4) num=1;
            }
            

            var imgTag = document.getElementsByTagName("img")[0];
            imgTag.setAttribute("src", "img/pic_"+ num +".jpg");
        }
/*
var count=1;
    $("img").on("click",fnChange)
        function fnChange(){
            count++;
            if(count>=4) count=1;
            $("img").attr("src","img/pic_"+count+".jpg");
        }
    });
    */



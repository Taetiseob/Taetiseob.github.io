
    

 var num = 1;
    function btnClick() {

            if(true){
                num++;
                if(num==4) num=1;
            }
            

            var imgTag = document.getElementsByTagName("img")[1];
            imgTag.setAttribute("src", "img/leafleat/pic_"+ num +".jpg");
        }

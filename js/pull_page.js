  $(function(){
        $(".bt01").click(function () {
            var position = $(".window1").offset();
            console.log(position);
            $("html, body").stop().animate({scrollTop:position.top},500);
            console.log(position);
          });  //offset 해당 객체의 위치값을 받아오는 것
          $(".bt02").click(function () {
            var position = $(".window2").offset();
            $("html, body").stop().animate({scrollTop:position.top},500);
          });  // scrollTop 선택한 요소의 상하 스크롤 위치를 얻거나 설정하는 메소드
          $(".bt03").click(function () {
            var position = $(".window3").offset();
            $("html, body").stop().animate({scrollTop:position.top},500);
          });  // stop 중복방지
          $(".bt04").click(function () {
            var position = $(".window4").offset();
            $("html, body").stop().animate({scrollTop:position.top},500);
          });
  });

$(function(){
    
    $("#popup_btn").click(function(){

        // $("#modal_box").show();
        // $("#modal_box").toggle();
        // $("#modal_box").toggleClass("modal_active");
        // 만약 한 개의 버튼으로 class 추가/제거를 적용하는 경우 .toggleClass("class명")로 작업할 수 있다.
        // $("#modal_box").addClass("modal_active");

        $("#modal_box").fadeIn();

    });

    $("#cancel_btn").click(function(){

        // $("#modal_box").hide();
        // $("#modal_box").removeClass("modal_active");
        $("#modal_box").fadeOut();

    });




});
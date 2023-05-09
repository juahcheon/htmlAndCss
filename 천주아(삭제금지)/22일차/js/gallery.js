$(function(){
    $("#nav a").on("mouseover focus click", function(event){

        event.preventDefault();
        // function(e) e.preventDefault();
        // 현재 걸고자 하는 이벤트 외에 브라우저 행동(이미 약속되어있는 기본 이벤트)을 막기 위해 사용한다. 함수의 매개변수에 event 또는 e 를 작성하고 걸어주면 된다. 위치 상관없음.

        var imgUrl = $(this).attr("href");
        // console.log(imgUrl);
        // imgUrl 변수에 이벤트가 일어난 요소의 href 값을 가져와 저장(클릭할 때마다 or 마우스 올릴 때마다)


        $("#new_area img").attr("src", imgUrl);
        // #new_area img 태그에 src 속성의 값에 href 속성값(큰이미지)을 삽입


        // return false;
        /*  
        a 태그 클릭 시 href 속성값으로 이동되는 것을 막아준다.
        a 태그에는 기본적으로 href 속성값으로 이동하는 이벤트가 내장되어 있는데, 현재는 href 속성값으로 이동하지 않고 단순히 click에 대한 처리를 할 수 있도록 한다.
        
        return문 : 함수에서 결과값을 반환하고 강제로 종료
        false를 반환하면서 클릭이벤트를 먼저 실행하고 a 태그의 내장이벤트(이동)을 막아준다.
        ※ 주의!! return은 사용 시 이후의 코드는 종료되기 때문에 꼭 마지막에 넣어줘야 함!!

        */
    });
});
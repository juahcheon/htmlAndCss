$(function(){


    // swiper 
    var container = $(".swiper-wrapper").width();
    var display = $(".swiper-slide").length;
    var itemWidth = container / display;
    var swiperContainer = $(".swiper-container");
    var swiperWrapper = $(".swiper-wrapper");
    var swiperSlide = $(".swiper-slide");
    var count = swiperSlide.length;
    var slideBox = itemWidth * count


    



    // 페이드 인아웃 슬라이드 


    // var i = 0;

    // function autoSlide() {

    //     // i 값을 0, 1, 2, 0, 1, 2...
    //     if(i < count -1) {
    //         swiperSlide.animate({
    //             left: "+=" + itemWidth
    //             // left 값을 item의 너비만큼 계속 누적시킨다.
    //         }, 300, slideEnd);
    //     } else {
    //         swiperSlide.animate({
    //             left: "-=" + itemWidth
    //             // left 값을 item의 너비만큼 계속 뺀다.
    //         }, 300, slideEnd);
    //     }
        

        
    //     swiperSlide;

    // }


    // setInterval(autoSlide, 2000);



    // // 슬라이드의 끝에 도달했을 때 실행 이벤트
    // function slideEnd() {

    // var nowLeft = swiperSlide.position().left
    // var end = - (slideBox - container);


    // if( nowLeft <= end ) {
    //     // 현재 슬라이더의 위치값이 end(-800)보다 작거나 같은 경우(마지막 슬라이드에 도달했을 때)

    //     swiperSlide.animate({left: end});
    //     swiperSlide.siblings();


    // } else if( nowLeft > 0 ) {

    //     swiperSlide.animate({left: 0});

    // }


    
    

    
    // poster
    var posterImg = $(".posters_imgs").find("img");
    var posterPlace = $(".slide2");
    var img1st = $(".post_img_01").find("img");
    var img2nd = $(".post_img_02").find("img");
    var img3rd = $(".post_img_03").find("img");
    var img4st = $(".post_img_04").find("img");



    // logoshow
    var n = $("#netflix");
    var w = $("#watcha");
    var t = $("#tiving");
    var logoShowPlace = $(".slide3");
    var logoShowImg = logoShowPlace.find("img");
    var netplayBtn = $(".n_btn");
    var watPlayBtn = $(".w_btn")
    var tiPlayBtn = $(".t_btn")



    netplayBtn.click(function(){

        // posters
        if( !(n.find(posterPlace).hasClass("active")) ) {

            n.find(img1st).delay(500).fadeIn();
            n.find(img2nd).delay(700).fadeIn();
            n.find(img3rd).delay(1000).fadeIn();
            n.find(img4st).delay(1300).fadeIn();

        }
        

        // // logoshow
        // if( !(n.find(logoShowPlace).hasClass("active")) ) {
            
        //     n.find(logoShowImg).animate({
        //         left: "90%",
        //         top: "40px",
        //         width: "5%"
        //     }, 2000);

        // } 

        
        
        
    });


    new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    
        afterSlideLoad: function( secondPage, slide2, slide3, right){
            var loadedSlide = this;
    
            //두번째 구역의 첫번째 슬라이드
            if(section.anchor == 'secondPage' && destination == 3){
                n.find(logoShowImg).animate({
                    left: "90%",
                    top: "40px",
                    width: "5%"
                    }, 2000);
            }
    
            if(section.anchor == 'thirdPage' && destination == 3){
                w.find(logoShowImg).animate({
                    left: "90%",
                    top: "40px",
                    width: "5%"
                }, 2000);
            }
        }

        
    });


    watPlayBtn.click(function(){

        // posters
        if( !(w.find(posterPlace).hasClass("active")) ) {

            w.find(img1st).delay(500).fadeIn();
            w.find(img2nd).delay(700).fadeIn();
            w.find(img3rd).delay(1000).fadeIn();
            w.find(img4st).delay(1300).fadeIn();

        }
        
        

        // logoshow

        if( !(w.find(logoShowPlace).hasClass("active")) ) {
            
            w.find(logoShowImg).animate({
                left: "90%",
                top: "40px",
                width: "5%"
            }, 2000);

        } 
        
        
        

        
    });

        
    

    tiPlayBtn.click(function(){

        // posters
        if( !(t.find(posterPlace).hasClass("active")) ) {

            t.find(img1st).delay(500).fadeIn();
            t.find(img2nd).delay(700).fadeIn();
            t.find(img3rd).delay(1000).fadeIn();
            t.find(img4st).delay(1300).fadeIn();

        }
        
        

        // logoshow

        if( !(t.find(logoShowPlace).hasClass("active")) ) {
            
            t.find(logoShowImg).animate({
                left: "90%",
                top: "40px",
                width: "5%"
            }, 2000);

        } 
        
        
        

        
    });


});

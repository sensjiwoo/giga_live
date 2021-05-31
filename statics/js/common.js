// footer_언어변경

$(".footer_select").focusin(function(){
    $(".language").stop().slideDown();
});

$(".footer_select").focusout(function(){
    $(".language").stop().slideUp();
});

// 상위로 이동

$(".top_move").click(function(){
    var tn = $(this).attr("href");
    var dt = $(tn).offset().top;           
    $("html").animate({"scrollTop":dt} ,700);
    $("header").removeClass("ta");
    return false;    
});

$(".top_move").hover(function(){
    $(this).children("img").attr("src", "images/top_move_btn2.png");
}, function(){
    $(this).children("img").attr("src", "images/top_move_btn1.png");
}

);

// 팝업창_회원가입 및 로그인

$(".pop_j > li > a").click(function(){
    $(".on_remove").removeClass("on");   
    
    $(".pop_j > li > a").removeClass("on");
    $(this).addClass("on");
    var a = $(this).attr("data-a");
    $("."+a).addClass("on").siblings().removeClass("on");
});

// $(".popup_signup_open").click(function(){
//     $(".on_remove").removeClass("on");   
//     $(".popup_modal").fadeIn().find($(".signup_menu")).addClass("on");
    
//     var signup = $(".signup_menu").addClass("on");
//     if(signup) {
//         $(".signup").addClass("on").siblings().removeClass("on");
//     }
// });

$(".popup_signup_open").click(function(){
    $(".on_remove").removeClass("on"); 

    // 수정 0526 오후 ___ START
    $(".popup_modal").fadeIn(300, function(){
        $("#top").addClass("hide");
    }).find($(".signup_menu")).addClass("on");
    // 수정 0526 오후 ___ END

    var signup = $(".signup_menu").addClass("on");
    if(signup) {
        $(".signup").addClass("on").siblings().removeClass("on");
    }
});

$(".popup_login_open").click(function(){
    $(".on_remove").removeClass("on");   
    $(".popup_modal").fadeIn().find($(".login_menu")).addClass("on");

    var login = $(".login_menu").addClass("on");
    if(login) {
        $(".login").addClass("on").siblings().removeClass("on");
    }
});

$(".pop_close").click(function(){    
    $(".popup_modal").fadeOut();
});
    // 수정 0526 오후 ___ START

$(".pop_close_mob").click(function(){    
    $(".popup_modal").fadeOut();
    $("#top").removeClass("hide");
});
    // 수정 0526 오후 ___ END

// 팝업창_회원정보수정

$(".personal_modify").click(function(){    
    $(".modify_popup").fadeIn().focus();    
});

// 팝업창_방송생성

$(".start_btn").click(function(){
    // 수정시작
    $(".start_popup").fadeIn().focus().find($(".signup_menu")).addClass("on");
    // 수정끝
    var signup = $(".signup_menu").addClass("on");
    if(signup) {
        $(".signup").addClass("on").siblings().removeClass("on");
    }
});

// 방송생성_초대

$(".invite_select .invite_btn1").click(function(){
// 수정시작
    $(".invite_list").stop().slideToggle().focus();
//수정끝
    $(this).toggleClass("invite_close_btn");
});
// 수정시작


// 채팅창
// $(".chat_btn").click(function(){
//     $(".chat_cont").animate({"left":0}, 500);

// });
// $(".chat_close").click(function(){
//     $(".chat_cont").animate({"left":"-30vw"}, 500);
// });


/* 수정시작 0513 */

// 라운지_모바일_메뉴
$(".lounge_menu_btn").click(function(){
    $(".lounge_menu_cont").animate({"right":0}, 500, function(){
        $(".lounge_cont").delay(500).css({"display":"none"});
        $(".lounge_menu_close").animate({"opacity":"1"}, 500);
    });      
});
$(".lounge_menu_close").click(function(){
    $(".lounge_cont").delay(500).css({"display":"block"});
    $(".lounge_menu_cont").animate({"right":"-100vw"}, 500, function(){
        $(".lounge_menu_close").css({"opacity":0});
    });
});

/* 수정끝0513 */




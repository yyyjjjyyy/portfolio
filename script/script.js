$(document).ready(function () {
        // $(window).load(function () {
        //     $('#loading').fadeOut(12000);
        // });


        // 인트로페이지
        
        $(function(){
            var welcomSection = $('#loading'),
            skipButton = welcomSection.find('.skip-button');

            setTimeout(function(){
            welcomSection.removeClass('#loading');
            },800);

            skipButton.on('click',function(e){
            e.preventDefault();
            welcomSection.addClass('#loading').fadeOut();
            })
          })


    //스티키 내비게이션

    //내비게이션 상단부분 변수로 저장.
    var navOffset = $(".gnb")
        .offset()
        .top;
    console.log(navOffset); //내비게이션이 브라우저 상단에서 떨어진 위치값 확인 611.9375
    //아티클 각각의 높이값을 자동으로 계산하여 변수저장

    var h = $("section article").height();
    console.log(h);
    $(window).scroll(function () {
        //윈도우창의 스크롤바가 동작하면 아래내용 실행 변수선언
        var sPos = $(window).scrollTop(); //현재 스크롤 위치값을 변수에 저장.

        console.log(sPos);

        if (navOffset <= sPos) {
            //내비 위치값이 스크롤 값보다 작을경우 고정시킨다
            $(".gnb").addClass("act");
        } else {
            //그렇지않으면 - 화면이 다시 내려가면
            $(".gnb").removeClass("act"); //포지션 제거하여 내비가 내려가게 한다.
        } //1. 기존에 적용된 메뉴서식이 있다면 제거하라.

        $(".gnb ul >li a").removeClass("on");

        /* 내비게이션    */

        $("section article").each(function (i) {
            //each :각각의 기능을 넣는다.
            var top = $(this)
                .offset()
                .top - 600; //내가 선택한 article의 위치를 각각 변수에 대입

            if (sPos >= top) {
                $(".gnb li a").removeClass("on"); //모든 메뉴에 on클래스 서식 제거

                $(".gnb li")
                    .eq(i)
                    .find("a")
                    .addClass("on");
            }
        });

        //if(프로필 페이지의 영역이 페이지 상단으로 올라오면) 이미지 보이게

        if (sPos >= $('#profile').offset().top) { //들어옴
        //  $('#photo').addClass('show');
            // $('#photo').animate({'opacity':'1'},10);
            // $('#resume').animate({'opacity':'1'},10);

            $('#photo').animate({'opacity':'1'},1000,'swing');
            $('#resume').animate({'opacity':'1'},1500,'swing');
        }
        

    });

    //변수 선언

    var gnb = $(".gnb ul > li"); 
    // let m1 = $('.gnb li:first-child a');
    // let m2 = $('.gnb li:nth-child(2) a'); let m3 = $('.gnb li:nth-child(3) a');
    // let m4 = $('.gnb li:nth-child(4) a'); let m5 = $('.gnb li:last-child a');
    
    
    
    // 제이쿼리에서 a요소 클릭시 새로고침이 되는데 이걸 방지해주는 내용 e. preventDefault(); return false; 둘 중
    // 하나만 사용하면 됨.

    gnb.click(function () {
        // e.preventDefault();//a요소의 #기능을 무력화 시켜주기 위함(새로고침)
        var n = $(this).index(); // 내가 선택한 li의 인덱스 값을 구하여 변수에 저장.

        console.log(n); // 0,1,2,3,4...

        $("html, body").animate({
            scrollTop: $("section article")
                .eq(n)
                .offset()
                .top
        }, 500, "easeInOutExpo");
        return false; //#기능(새로고침) 무력화
    }); // 위로 올라갔다가 다시 내려오는 애니메이션 동작 함수

    function moveTop() {
        $(".main_title")
            .animate({
                top: "10%"
            }, 1000)
            .animate({
                top: "12%"
            }, 1000);
    }

    var Timer2 = setInterval(moveTop, 2000);
    var skillLevel = {
        html: 4,
        css: 4,
        js: 2,
        jq: 2,
        ps: 3,
        ai: 3
    };
    var skillsWrapper = $(".skill_b");
    Object
        .keys(skillLevel)
        .forEach(function (skill) {
            // const skillElement = `<li id="${skill}">     <div class="battery_top"></div>
            // <div class="battery">     <div class="in"><i class="fas fa-bolt"></i></div>
            // <div class="in"></div>     <div class="in"></div>     <div class="in"></div>
            // <div class="in"></div>     </div>     <p>${skill}</p> </li>`
                

        var skillElement = '<li id="' + skill + '">' +
        '<div class="battery_top"></div>' +
        '<div class="battery">' +
        '<div class="in"><i class="fas fa-bolt"></i></div>' +
        '<div class="in"></div>' +
        '<div class="in"></div>' +
        '<div class="in"></div>' +
        '<div class="in"></div>' +
        '</div>' +
        '<p>' + skill + '</p>' +
        '</li>'
    skillsWrapper.append(skillElement);
});


    //스크롤값 확인 화면 스크롤이 동작하면 아래 내용이 실행된다.

    $(window).scroll(function () {
        var hpos = $(window).scrollTop(); //세로 스크롤 높이값을 변수에 저장

        var wpos = $(window).scrollLeft(); //가로 스크롤 높이값을 변수에 저장

        $(".status1").html(hpos); //세로스크롤값 출력

        $(".status2").html(wpos); //가로 스크롤값 출력
    });

    //html 스킬바

    function animateSkills(lang, level) {
        var battery = "#" + lang + " > .battery";

        for (var i = 0; i < level; i++) {
            var index = 5 - i;
            var delay = i * 50;
            $(battery + " div:nth-child(" + index + ")")
                .delay(delay)
                .animate({
                    "background-color": "  #ffffa2"
                }, 200);
        }
    }

    function resetSkills(lang) {
        var battery = "#" + lang + " > .battery";

        for (var i = 1; i <= 5; i++) {
            var index = i;
            $(battery + " div:nth-child(" + index + ")").css(
                {"background-color": "  #ff9999"}
            );
        }
    }

    var minRange = 1450;
    var maxRange = 2300;

    // const ul = document.querySelector('.skill_b');
    // console.log({'ul.getBoundingClientRect()':ul.getBoundingClientRect()});
    // var minRange = ul.getBoundingClientRect().y + window.innerHeight - (500 * 1440 / window.innerHeight);
    // var maxRange = ul.getBoundingClientRect().y + window.innerHeight + ul.getBoundingClientRect().height + (50 * 1440 / window.innerHeight);
    // console.log({minRange, maxRange});

    // // var minRange = ul.offsetTop * 0.55;
    // console.log({'ul.offsetTop': ul.offsetTop});
    
    // var minRange = ul.offsetTop * 0.50;
    // console.log({minRange});
    // console.log({'ul.offsetHeight':ul.offsetHeight});
    // console.log({'window.innerHeight':window.innerHeight});


    // var minRange = 800; // 1368
    // var maxRange = minRange + (ul.offsetHeight * 4.3 * window.innerHeight / 1440);
    // console.log({maxRange});
    // // var maxRange = minRange + (ul.offsetHeight * 6 * window.innerHeight / 1440);
    // // var maxRange = 1500;
    // // var maxRange = 1634;
    $(window).scroll(_.debounce(function () {
        var sPos = $(this).scrollTop();

        if (sPos >= minRange && sPos <= maxRange) {
            Object
                .keys(skillLevel)
                .forEach(function (key) {
                    var level = skillLevel[key];
                    animateSkills(key, level);
                });
        } else {
            Object
                .keys(skillLevel)
                .forEach(function (key) {
                    resetSkills(key);
                });
        }
    }, 50));

    /*   목업    */

    const photo1 = $('.mokup_box01 img').eq(0);

    $('.mokup_box01').hover(function () {
        photo1.stop().animate({
            'top': '-1370px'
        }, 5000); //마우스 오버시 올라감
       }, function () {
        photo1.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
    });

    const photo2 = $('.mokup_box02 img').eq(0);

    $('.mokup_box02').hover(function () {
        photo2.stop().animate({
            'top': '-940px'
        }, 5000); //마우스 오버시 올라감

    }, function () {
        photo2.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
  
    });

    const photo3 = $('.mokup_box03 img').eq(0);

    $('.mokup_box03').hover(function () {
        photo3.stop().animate({
            'top': '-865px'
        }, 5000); //마우스 오버시 올라감
    }, function () {
        photo3.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
    });



    const photo4 = $('.mokup_box04 img').eq(0);

    $('.mokup_box04').stop().hover(function () {
        photo4.animate({
            'top': '-1050px'
        },5000); //마우스 오버시 올라감
    }, function () {
        photo4.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
    });



    const photo5 = $('.mokup_box05 img').eq(0);

    $('.mokup_box05').stop().hover(function () {
        photo5.animate({
            'top': '-860px'
        }, 5000); //마우스 오버시 올라감
    }, function () {
        photo5.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
    });

    const photo6 = $('.mokup_box06 img').eq(0);

    $('.mokup_box06').stop().hover(function () {
        photo6.animate({
            'top': '-1275px'
        }, 5000); //마우스 오버시 올라감
    }, function () {
        photo6.stop().animate({
            'top': '10%'
        }, 300); //마우스 아웃시 내려감
    });



    // 디자인 갤러리 영역

    const g_nav = $('#design > .g_nav a');
    
    // $('#design > .g_nav li:first-child a').addClass('on2'); //첫번째 메뉴에 배경색 적용
    
    g_nav.click(function(){
        $('#design a').removeClass('on2');//기존 서식을 모두 제거하고
        $(this).addClass('on2');				 //사용자가 선택한 메뉴만 서식적용.
        return false; // 새로고침 방지
    });
    
    //갤러리 목록에 마우스를 오버했을때 이미지캡션 이동
    // $('.g_list > li').hover(function(){
    //     $(this).find('.caption').stop().animate({'bottom':'0px'},300);
    // },function(){ //그렇지 않으면 = 마우스 아웃시
    //     $('.caption').stop().animate({'bottom':'-100px'},300);
    // });
    
    
    
    let src;
    
    //갤러리의 이미지를 클릭하면 현재 이미지 속성값 src를 변수에 담아서 body태그의 맨뒤에 modal에 대입하여 출력, 모달 윈도가 나오도록 한다.
    $('.g_list li').click(function(){
        src = $(this).find('img').attr('src');
        console.log(src); //테스트하기
        
        //모달창 내용
      const modal = '<div class="modal"><img src="'+src+'" alt=""><span class="x_btn">X</span></div>';
        
        //body태그의 맨 뒤쪽에 모달내용을 추가하라.
        $('body').prepend(modal);
        
        //닫기 버튼 클릭시 모달윈도 숨기기
        $('.modal .x_btn').click(function(){
//					$('.modal').hide();
            $('.modal').fadeOut();
//					$('.modal').css('display','none');					
        });

        return false; //종료
    });
    
    //메뉴 클릭시 해당하는 이미지만 보이게하기
    const total = $('.g_nav ul li:first-child a');
    const banner = $('.g_nav ul li:nth-child(2) a');
    const icon = $('.g_nav ul li:nth-child(3) a');
    const logo = $('.g_nav ul li:nth-child(4) a');
    const etc = $('.g_nav ul li:last-child a');
    
    total.click(function(){ //전체보기 버튼을 클릭하면
        //보이는 이미지 숨기고
        $('.g_list li').hide();
        //전체 이미지가 나오게 한다.
        $('.total').show();
        return false;
    });
    
    banner.click(function(){
        $('.g_list li').hide(); //보이는 이미지 모두 숨기고
        $('.banner').fadeIn(); //해당하는 이미지만 나오게 한다.
        return false;
    });
    
    logo.click(function(){
        $('.g_list li').hide();//보이는 이미지 모두 숨기고
        $('.logo').fadeIn();//해당하는 이미지만 나오게 한다.
        return false;
    });
    
    icon.click(function(){
        $('.g_list li').hide();//보이는 이미지 모두 숨기고
        $('.icon').fadeIn();//해당하는 이미지만 나오게 한다.
        return false;
    });
    
    etc.click(function(){
        $('.g_list li').hide();//보이는 이미지 모두 숨기고
        $('.etc').fadeIn();//해당하는 이미지만 나오게 한다.
        return false;
    });

    


    const isPC = (window.innerWidth > 768);
    const isMobile = (window.innerWidth <= 768);

    if (isPC) {
        total.click();

    } else if (isMobile) {
        banner.click();
    }
    

    






});

$(document).ready(function(){
    
    const g_nav = $('#design > .g_nav a');
    
    $('#design > .g_nav li:first-child a').addClass('on2'); //첫번째 메뉴에 배경색 적용
    
    g_nav.click(function(){
        $('#design a').removeClass('on2');//기존 서식을 모두 제거하고
        $(this).addClass('on2');				 //사용자가 선택한 메뉴만 서식적용.
        return false; // 새로고침 방지
    });
    
    // //갤러리 목록에 마우스를 오버했을때 이미지캡션 올라오고 마우스아웃시 다시 내려가게하기
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
      const modal = '<div class="modal"><img src="'+src+'" alt=""><span class="c_btn">Close</span></div>';
        
        //body태그의 맨 뒤쪽에 모달내용을 추가하라.
        $('body').prepend(modal);
        
        //닫기 버튼 클릭시 모달윈도 숨기기
        $('.modal .c_btn').click(function(){
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
        // $('.total').css('width','50%').show();
        
         $('.total').css('width','20%').show();
    
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
    
    
    
});

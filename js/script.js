$(function(){

  // Header Full down menu
  $(".gnb").hover(function(){
    $(this).find(".lnb").stop().slideDown();
    $(".lnbBgbox").stop().slideDown();
  }, function(){
    $(this).find(".lnb").stop().slideUp();
    $(".lnbBgbox").stop().slideUp();
  });

  $(".gnb").hover(function(){
    $(".headInner").addClass('headInnerH');
  },function(){
    $(".headInner").removeClass('headInnerH');
  });

  //story3 process
  $(".pCardBottom").hover(function(){
    $(this).siblings('.pCardTop').addClass('pCardTopH');
  },function(){
    $(this).siblings('.pCardTop').removeClass('pCardTopH');
  });

  //more1 accordionSec
  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  //Header load&scroll
  let ani = $(".ani");

  $(window).on("load scroll", function(){
    const header = $("header");
    const visuHeight = $(".visual").outerHeight();
    const h_Height = header.outerHeight();
    const scrollTop= $(window).scrollTop();
    const visual = $(".visual");

    console.log('scrollTop:' + scrollTop);
    console.log('header:' + h_Height);
    console.log('visuHeight:' + visuHeight);

    header.addClass("load");

    if(scrollTop >= visuHeight - h_Height){
      header.addClass("down");
    }else{
      header.removeClass("down");
    };

    // Scroll Event
    $.fn.scrollMoving = function(){
      let elementTop = $(this).offset().top;
      let elementBottom = elementTop + $(this).outerHeight();

      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();

      return (viewportTop < elementBottom) && (elementTop < viewportBottom);
    };

    $(window).on('load scroll',function(){
      ani.each(function(){
        if($(this).scrollMoving()){
          $(this).addClass("moving");
        }else{
          $(this).removeClass("moving");
        };
      });
    });

  });

});
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
  
  //Header load&scroll
  let ani = $(".ani");

  $(window).on("load scroll", function(){ //on-2개 이상의 이벤트를 사용할때
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

  


    
  });

});
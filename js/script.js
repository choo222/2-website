$(function(){
  
  let ani = $(".ani");

  //Header load&scroll
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
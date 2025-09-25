$(document).ready(function() {
  //탭메뉴
  $(".tab1>li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let galleryResult = $(this).attr("data-alt");
    $(".panel>li").removeClass("active");
    $("#"+galleryResult).addClass("active").hide().fadeIn();
  });
  //추가:해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab1 li:first-child").click(function(){
    $("#tab11 .productThumbs li:first").click();
  });
  $(".tab1 li:nth-child(2)").click(function(){  
    $("#tab12 .productThumbs li:first").click();
  });
  $(".tab1 li:nth-child(3)").click(function(){  
    $("#tab13 .productThumbs li:first").click();
  });
  $(".tab1 li:last-child").click(function(){  
    $("#tab14 .productThumbs li:first").click();
  });

  // 썸네일 클릭 이벤트
  $('.thumb').click(function() {
    const productId = $(this).data('product');
    
    // 모든 요소에서 active 클래스 제거
    $('.thumb').removeClass('active');
    $('.productImg').removeClass('active');
    $('.content').removeClass('active');
    
    // 클릭된 제품에 해당하는 요소들에 active 클래스 추가
    $(this).addClass('active');
    $('.productImg.product' + productId).addClass('active').hide().fadeIn();
    $('.content.product' + productId).addClass('active').hide().fadeIn();
  });
});
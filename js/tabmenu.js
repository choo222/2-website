$(document).ready(function() {
  //탭메뉴
  $(".tab1 li").click(function(){
    $('.tab1>li').removeClass("active");
    $(this).addClass("active");

    let galleryResult = $(this).attr("data-alt");
    $(".panel>li").removeClass("active");
    $("#"+galleryResult).addClass("active").hide().fadeIn();
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
    $('.productImg.product' + productId).addClass('active');
    $('.content.product' + productId).addClass('active');
  });
});
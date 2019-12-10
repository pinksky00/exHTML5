var menu = $('.menu');
var items = $('menu-item');
var btns = $('.btn-menu');
var anchors =$('.sub-menu a');

// 토글버튼을 클릭했을 때 하위 메뉴가 보이도록 설정할 것
btns.click(function(e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

anchors.addClass('icon-dot-circled');
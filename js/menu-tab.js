var menu = $('.menu');
var items = $('.menu-item');
var btns = $('.btn-menu');
var anchors = $('.sub-menu a');
var tabAnchors = $('.board ul a');
var tabAct = $('.board section');
var tab = $('.tab');

/* .border > ul > a */

// 토글 버튼을 클릭했을 때 하위 메뉴를 보이도록 설정할 것
btns.click(function (e) {
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

anchors.addClass('icon-dot-circled');
tabAnchors.addClass('icon-dot-circled');

// 탭을 클릭했을 때 클릭한 탭의 목록과 더보기가 보여지도록 설정할 것 
// 마우스와 키보드 모두 사용 가능하도록 설정할 것
tab.on('click keyup', function (e) {
  e.preventDefault();
  if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
    tabAct.removeClass('tab-act');
    // 나를 눌렀을 때 기존 class명을 지운다
    $(this).parent().addClass('tab-act');
    //나를 눌렀을 때 부모속성에 class명을 준다
  }
});

// || : OR, && : and
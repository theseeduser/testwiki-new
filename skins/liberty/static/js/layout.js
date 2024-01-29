/* 드롭다운 페이드인 */
jQuery('.dropdown').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});
/* 드롭다운 페이드인 End */

/* 문단 왼쪽에 접힘 여부를 알려주는 화살표 추가 */
$(".wiki-heading").each(function () {
    // NOTE : 처음 모든 문단을 접는 설정은 리버티 스킨에 없기 때문에 고려하지 않음.
    $(this).prepend('<a class="wiki-heading-arrow"><i class="fa fa-chevron-down"></i></a> ')
        .find(".wiki-heading-arrow")
        .click(function (e) {
            e.preventDefault();
        });
})

$(".wiki-heading").click(function (e) {
    if (e.target.tagName === 'A') return;
    var paragraph = $(this).next();
    if (paragraph.is(':visible')) {
        $(this).find(".wiki-heading-arrow i").addClass("fa-chevron-down").removeClass("fa-chevron-up")
    } else {
        $(this).find(".wiki-heading-arrow i").addClass("fa-chevron-up").removeClass("fa-chevron-down")
    }
});
/* 문단 왼쪽에 접힘 여부를 알려주는 화살표 추가  END*/

$(document).ready(function() {
    // 다크 모드 토글 버튼 클릭 이벤트
    $("#darkToggleLink").click(function() {
      $("body").toggleClass("dark-mode"); // "dark-mode" 클래스를 body 태그에 추가/제거하여 다크 모드를 토글합니다.
    });
  });
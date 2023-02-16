// Back to TOP js
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Dynamic navbar
var headerBottom = $("#header-bottom");

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    headerBottom.addClass("header-bottom-aktif");
  } else {
    headerBottom.removeClass("header-bottom-aktif");
  }
});

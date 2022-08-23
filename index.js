// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    var num = -50;

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
});

//Info tabs
$(document).ready(function () {
  //Hide all tabs btu the first one
  $(".info-text .tab-content").hide();
  $(".info-text .tab-content:first-child").show();
  $("#info ul li").click(function () {
    //active or non active links to tabs
    $("ul li").removeClass("active");
    $(this).addClass("active");
    //show clicked tab
    var currentTab = $(this).attr("data-list");
    $(".info-text .tab-content").hide();
    $("." + currentTab).show();
  });
});

//Stiky nav

var offset = $("nav").offset();
var num = offset.top; //number of pixels before modifying styles

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $("nav").addClass("fixed");
  } else {
    $("nav").removeClass("fixed");
  }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO

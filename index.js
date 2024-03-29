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
  //Hide all tabs but the first one
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

//Responsive nav
$(window).resize(function () {
  if (window.matchMedia("(max-width: 1440px)").matches) {
    $("#navList").addClass("responsive-nav-list");
    $("#navList").hide();
  } else {
    $("#navList").removeClass("responsive-nav-list");
    $("#navList").show();
  }
});

if (window.matchMedia("(max-width: 1440px)").matches) {
  $("#navList").addClass("responsive-nav-list");
  $("#navList").hide();
} else {
  $("#navList").removeClass("responsive-nav-list");
  $("#navList").show();
}

$(document).ready(function () {
  $("#navIcon").click(function () {
    $("#navList").slideToggle("slow");
  });
});

//Automatic slideshow header
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = $(".hero-inner");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  progressBar();
  setTimeout(showSlides, 10000);
}

//Progress bar
function progressBar() {
  $("#progressBar").animate(
    {
      width: "100%",
    },
    10000,
    "linear",
    function () {
      $("#progressBar").width("0%");
    }
  );
}

console.log("Your index.js has loaded correctly");
$(".inline-block li a").hover(function () {
  $(this).toggleClass("underline");
  $(".inline-block li a ").removeClass("pressed"); // Note the closing quote and the semicolon
  $(this).addClass("pressed");
});

$("#workZone").click(function (event) {
  event.preventDefault();
  var containerOffset = $("#workArea").offset().top;
  $("html, body").animate({ scrollTop: containerOffset}, 1000);
});
$("#skillZone").click(function (event) {
  event.preventDefault();
  var containerOffset = $("#mySkills").offset().top;
  $("html, body").animate({ scrollTop: containerOffset }, 1000);
});

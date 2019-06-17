$(document).ready(function() {
  var scroll = function() {
    $(".scrollHolder").animate({ bottom: "30" }, 2000, function() {
      $(".scrollHolder").animate({ bottom: "60" }, 1500, function() {
        scroll();
      });
    });
  };
  scroll();

  $(".scrollHolder").click(function() {
    $("section#Portfolio").animate({ height: auto }, 3000);
  });
});

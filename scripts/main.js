$(document).ready(function() {
  var Oheight = $("section#Portfolio").height();
  var scroll = function() {
    $(".LoadMore").animate({ bottom: "0" }, 2000, function() {
      $(".LoadMore").animate({ bottom: "30" }, 1500, function() {
        scroll();
      });
    });
  };
  scroll();

  $(".LoadMore").click(function() {
    var section = $("section#Portfolio");
    var height = section.height();
    var heightAuto = section.get(0).scrollHeight;
    if (height != heightAuto - 100) {
      section.animate(
        {
          height: heightAuto
        },
        1000
        // function() {
        //   $(this).height("auto");
        // }
      );
      $("body,html").animate({ scrollTop: "200px" }, 10);
    } else {
      section.animate({ height: Oheight }, 1000);
    }
  });
});

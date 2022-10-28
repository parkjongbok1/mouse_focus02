$(function () {
  $(".container").on("mousemove", function (event) {
    const mouseX = event.clientY;

    $(".corner-text").css({
      transform: "translateX(" + mouesX + "px)",
    });
  });
});

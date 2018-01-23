// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var ctaBounce = function() {
  var cta = $(".cta");

  if (cta.hasClass("lift")) {
    cta.removeClass("lift");
  } else {
    cta.addClass("lift");
  }
};

// run the arrowBounce function every 800ms
setInterval(ctaBounce, 800);

// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
/*
var ctaBounce = function() {
  var cta = $(".cta");

  if (cta.hasClass("lift")) {
    cta.removeClass("lift");
  } else {
    cta.addClass("lift");
  }

  function(){
    cta.hover(.addClass("lift"));

  }
};

// run the arrowBounce function every 800ms
setInterval(ctaBounce, 800);
*/

document.getElementById("cta").onmouseover = function() {
  // code to run when the user hovers over the div
  cta.addClass("lift");

};

// https://codepen.io/nxworld/pen/OyRrGy?q=scroll+down&limit=all&type=type-pens
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

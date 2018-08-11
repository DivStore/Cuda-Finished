var percentage = 20;
$("#progressbar")
  .animate({
    "value": percent + "%"
  }, {
    duration: 600,
    easing: 'linear'
  });
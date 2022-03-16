function boxtothetop() {
    var windowTop = $(window)
      .scrollTop();
    var top = $('#boxHere')
      .offset()
      .top;
    if(windowTop > top) {
      $('#boxThis')
        .addClass('box');
      $('#boxHere')
        .height($('#boxThis')
          .outerHeight());
    } else {
      $('#boxThis')
        .removeClass('box');
      $('#boxHere')
        .height(0);
    }
  }
  $(function() {
    $(window)
      .scroll(boxtothetop);
    boxtothetop();
  });
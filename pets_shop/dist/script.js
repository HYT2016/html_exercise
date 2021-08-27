$(".product_name").click(
  function() {
    if ($(this).attr("data-cata")=="dog") {
      $(".show_cata").text("BUY: 要買狗狗嗎");
      
    }else if ($(this).attr("data-cata")=="rabbit") {
      $(".show_cata").text("BUY: 要買兔兔嗎");
    }else if ($(this).attr("data-cata")=="cat") {
      $(".show_cata").text("BUY: 要買貓咪嗎");
    }else if ($(this).attr("data-cata")=="pig") {
      $(".show_cata").text("BUY: 要買豬豬嗎");
    }
    // $(this).css("width", 125);
    setTimeout(
      function() {
        $(".show_cata").text("BUY");
        
      }
    , 1000);
  }
);
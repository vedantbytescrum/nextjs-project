jQuery(document).ready(function () {
   jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();
      if (scroll > 50) {
         jQuery("#nav-one").addClass("fixed-header");
      } else {
         jQuery("#nav-one").removeClass("fixed-header");
      }
   });
});

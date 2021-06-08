(function(jQuery){



//nav fixed
jQuery('document').ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery('.main-nav').addClass('fixed-top');
        } else {
            jQuery('.main-nav').removeClass('fixed-top');
        }
    });
});

jQuery(".pool-healer #accordion").accordion({

          icons: {
              header: "fas fa-chevron-down",
              activeHeader: "fas fa-chevron-up"
          }
      });
      jQuery("#accordion").accordion({
          classes: {
              "ui-accordion-header": "ui-accordion-custom-header",
              "ui-accordion-header-active": "ui-accordion-custom-header-active",
              "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
              "ui-accordion-content": "ui-accordion-custom-content",
              "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
          },
          animate: 200,
          active: false,
          collapsible: true,
          heightStyle: "content",
          icons: {
              header: "fas fa-chevron-down",
              activeHeader: "fas fa-chevron-up"
          }
      });



    
    
    
	})(jQuery)



$(document).ready(function() {
  $(".maybe").hide(); // hide maybe-texts

  $(".showflr").show(); // show filter-button
  $(".showdrk").show(); // show filter-botton in drinks-section
  $(".showinf").show(); // show info-button

  // hide/show filter button
  $(".hidefilter").click(function() {
    $(".hideflr").hide();
    $(".showflr").show();
  });
  $(".showfilter").click(function() {
    $(".showflr").hide();
    $(".hideflr").show();
  });

  // hide/show filter button for drinks
  $(".hidedrinkfilter").click(function() {
    $(".hidedrk").hide();
    $(".showdrk").show();
  });
  $(".showdrinkfilter").click(function() {
    $(".showdrk").hide();
    $(".hidedrk").show();
  });

  // hide/show info button
  $(".hideinfo").click(function() {
    $(".hideinf").hide();
    $(".showinf").show();
  });
  $(".showinfo").click(function() {
    $(".showinf").hide();
    $(".hideinf").show();
  });

  // close mobile navigation when navigation item is clicked
  $(".and-close-it").click(function() {
    $("nav :checkbox").click();
  });

  // filter food items with checkboxes
  $(".filters :checkbox, :radio").click(function() {
    if ($("input[name=category]:checked").length) {
      $(".products li").show();
      $(".products li .maybe").hide();
      $("input:checked").each(function() {
        $('li[exclusion-category*="' + $(this).val() + '-red"]').hide();
        $(
          'li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe'
        ).show();
      });
    } else {
      $(".products li").show();
      $('li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe').hide();
    }

    // hiding chapters
    $(".chapter").each(function() {
      var hiddenLiItems = $(this)
        .children("ul")
        .children("li")
        .filter(function() {
          return $(this).css("display") !== "none";
        });
      if (hiddenLiItems.length) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // show drinks in the separate list
  $(".filters :checkbox").click(function() {
    if ($("input[name=category]:checked").length) {
      $(".drinks section").hide();
      $("input:checked").each(function() {
        $('section[inclusion-category*="' + $(this).val() + '"]').show();
      });
    } else {
      $(".drinks section").hide();
    }
  });
});

$(document).ready(function() {
  $(".mobile-navigation").click(function() {
    $("#myTopnav").toggle();
  });

  $(".showflr").show();
  $(".showinf").show();

  // hide/show filter button
  $(".hidefilter").click(function() {
    $(".hideflr").hide();
    $(".showflr").show();
  });
  $(".showfilter").click(function() {
    $(".showflr").hide();
    $(".hideflr").show();
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

  // filter food items with checkboxes
  $(".filters :checkbox, :radio").click(function() {
    if ($("input[name=category]:checked").length) {
      $("li").show();
      $('li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe').hide();
      $("input:checked").each(function() {
        $('li[exclusion-category*="' + $(this).val() + '-red"]').hide();
        $(
          'li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe'
        ).show();
      });
    } else {
      $("li").show();
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
});

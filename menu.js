$(document).ready(function() {$(".show").show();
  // hide/show filter button
  $(".hidefilter").click(function() {
    $(".hide").hide();
    $(".show").show();
  });
  $(".showfilter").click(function() {
    $(".show").hide();
    $(".hide").show();
  });
  $(".filters :checkbox").click(function() {
    // filter food items
      if ($("input:checkbox:checked").length) {
        $("li").show();
        $('li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe').hide();
        $("input:checkbox:checked").each(function() {
          $('li[exclusion-category*="' + $(this).val() + '-red"]').hide();
          $('li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe').show();
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


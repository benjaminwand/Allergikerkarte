$(document).ready(function() {
  // filter food items
  $(".filters :checkbox").click(function() {
    if ($("input:checkbox:checked").length) {
      $("li").show();
      $("li[exclusion-category" + '*="' + $(this).val() + '-maybe"] .maybe').hide();
      $("input:checkbox:checked").each(function() {
        $("li[exclusion-category" + '*="' + $(this).val() + '-red"]').hide();
        $("li[exclusion-category" + '*="' + $(this).val() + '-maybe"] .maybe').show();
      });
    } else {
      $("li").show();
      $("li[exclusion-category" + '*="' + $(this).val() + '-maybe"] .maybe').hide();
    }
  });
  // hide/show filter button
  $(".hidefilter").click(function() {
    $(".hide").hide();
    $(".show").show();
  });
  $(".showfilter").click(function() {
    $(".show").hide();
    $(".hide").show();
  });
});


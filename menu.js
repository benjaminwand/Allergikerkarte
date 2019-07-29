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
  $(".filters").click(function() {
    const values = $("input:checkbox:checked, input:radio:checked");
    if (values) {
      console.log(values);
      values.map(value => {
        console.log(value);
      });
    }

    if ($("input:checkbox:checked, input:radio:checked").length) {
      $(".products li").show();
      $('li[exclusion-category*="' + $(this).val() + '-maybe"] .maybe').hide();
      $("input:checkbox:checked").each(function() {
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
});

$(document).ready(function()
{
    $(".gif").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        });
});
var ready;
ready = function() {
	$('ul.tabs').each(function(){
    var $active, $content, $links = $(this).find('a');

    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('tab_on');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    $(this).on('click', 'a', function(e){
      $active.removeClass('tab_on');
      $content.hide();

      $active = $(this);
      $content = $(this.hash);

      $active.addClass('tab_on');
      $content.show();

      e.preventDefault();
    });
  });
	
};
$(document).ready(ready);
$(document).on('page:load', ready);
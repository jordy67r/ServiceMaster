var ready;
ready = function() {
	$("#nav-toggle").click(function(){
    	$(".menu").toggleClass("mobile");
});
};

$(document).ready(ready);
$(document).on('page:load', ready);
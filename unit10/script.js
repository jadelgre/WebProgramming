$(document).ready(function() {
	$toggled = false;
	$('.button').hover(function(){
		if(!$toggled) {
	    	$(this).css("background-color", "cyan");
	    	$('#questionBox').text("Click to see a question.");
	    }
    }, function(){
    	if(!$toggled) {
    		$(this).css("background-color", "aliceblue");
    		$('#questionBox').text("");
    	}
	});

	$('.button').click(function() {
		if(!$toggled) {
			$(this).css("background-color", "#0066FF");
			$toggled = true;
		}
	})
});
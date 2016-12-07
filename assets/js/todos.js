// Mark (on/off) completed task
$("li").click(function() {
	$(this).toggleClass("completed");
});

//Click on X to delete task
$("span").click(function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
});
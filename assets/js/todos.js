// Mark (on/off) completed task
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete task
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
});

//Add new task
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var task = $(this).val();
		$(this).val("");
		//create new li, add it to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + task + "</li>");
	}
}); 
//Check off certain ToDo's By clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete ToDo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13){
		//grabbing newTodo text
		var newTodo = $(this).val();
		//create new li and add to ul
		$(this).val("");
		$("ul").append("<li><span>X </span>" + newTodo + "</li>")

	}
})
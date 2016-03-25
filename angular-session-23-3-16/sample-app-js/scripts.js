$(document).ready(function(){
	var name = $('#name'),
	nameRepeat = $('#name-repeat'),
	greet = $("#greet"),
	submit = $("button");
	console.log(name);
	console.log(nameRepeat);
	name.on('keyup', function() {
		var disabled, value;
		value = name.val();
		if (value.length === 0) {
			submit.attr('disabled', 'disabled');
			greet.css('display', 'none');
			} 
		else {
			submit.removeAttr('disabled');
			greet.css('display', 'block');
		}
		nameRepeat.html(value);
		});
		submit.on('click', function() {
			$.ajax('/service?name=' + name.val()
		);
	});
});


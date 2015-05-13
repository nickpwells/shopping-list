$(document).ready(function(){

	//Define checkmark
	var xMark = '<i class="fa fa-times"></i>'
	
	//Clears the placeholder when clicking the input
	var listItem = document.getElementById("list-input");
	$('#list-input').click(function(){
		console.log('You clicked the input');
		listItem.placeholder='';
	});

	//Allows user to hit enter in order to submit items
	function postItem() {
		$('#list-input').keydown(function(enter){
			if (enter.keyCode == 13) {
				enter.preventDefault();//Added to prevent page from reloading
				addItem();
			}
		});
	}

	//Adds item to user's list
	function addItem() {
		var item = $('#list-input').val();
		$('ul').append('<li class="list-item">'+item+xMark+'</li>');
		$('#list-input').val('');
	}

	postItem();

	//allows user to cross and uncross items
	$('ul').on('click','.list-item',function(){
		if ($(this).hasClass('item-crossed')) {
				console.log('you clicked again');
				$(this).removeClass('item-crossed').css('background-color', '#edff8b');
		}
		else {
			console.log('you clicked a list item');
			$(this).addClass('item-crossed').css('background-color', '#808f3b');
		}
		}
	); 

	//removes item when user clicks on xMark
	$('ul').on('click', '.list-item > i', function(e){
		console.log('you clicked the xMark');
		e.preventDefault();
		$(this).parent().remove()
	});
});
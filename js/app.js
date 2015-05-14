$(document).ready(function(){

	//Define checkmark
	var xMark = '<i class="fa fa-times"></i>'
	count = 0;
	
	//Clears the placeholder when clicking the input
	var listItem = document.getElementById("list-input");
	$('#list-input').click(function(){
		listItem.placeholder='';
	});

	//Allows user to hit enter in order to submit items
	function postItem() {
		$('#list-input').keydown(function(enter){
			if (enter.keyCode == 13) {
				enter.preventDefault();//Added to prevent page from reloading
				addItem();
				count = count + 1;
			}
		});
	}

	//Adds item to user's list
	function addItem() {
		var item = $('#list-input').val();
		$('ul').append('<li class="list-item">'+item+'</li>');
		$('#list-input').val('');
	}

	postItem();

	//xMark appears when user hovers over item
	$('ul').on('mouseenter','.list-item',function(){
		$(this).append(xMark);
	}).on('mouseleave','.list-item',function(){
		$(this).children().remove();
	});

	//allows user to cross and uncross items
	$('ul').on('click','.list-item',function(){
		$(this).addClass('item-crossed').removeClass('list-item');
	}); 

	$('ul').on('click','.item-crossed',function(){
		$(this).addClass('list-item').removeClass('item-crossed');
	});

	//removes item when user clicks on xMark
	$('ul').on('click', '.list-item > i', function(e){
		e.preventDefault();
		$(this).parent().remove();
	});

	console.log(count);
	$('.list').append('<p class="count">'+'You currently have '+count+' items');

});
// $(document).on('page:load ready', function() {
// 	function display_search_results(){
// 		//readystate == 4 means that the asynchronous request completed successfully
// 		if (this.readyState === 4) {
// 			console.log(this);
// 			document.getElementById('products').innerHTML = this.responseText;
// 		}
// 	}


// 	var form = document.getElementById('search-form');

// 	form.addEventListener('submit',function(event) {
// 		event.preventDefault();

// 		var searchValue = document.getElementById('search').value;

// 		var xhr = new XMLHTTPRuest();
// 		xhr.onload = display_search_results;
// 		xhr.open('GET','/products?search=' + searchValue, true);
// 		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
// 		xhr.send();
// 	});
// });

// $("search-form").on('submit', function(e)) {
// 	e.preventDefault;


// $.ajax({
// 	url: '/products',
// 	type: 'GET',
// 	data: $("#search").val,
// 	dataType: 'html',
// 	success: function(data) {
// 		//This code runs when the response is received
// 		if (data) {
// 			$('products').html(data);
// 		}
// 	}
// });
// });

$(document).on('ready page:load', function() {
	$('#search-form').submit(function(event) {
		e.preventDefault();
		var searchValue = $('#search').val();

		// inside the submit event callback, replace the $.ajax portion with the following
    	// inside the submit event callback, replace the $.get portion with the following
    	$.getScript('/products?search=' + searchValue);
      	   .done(function(data){
           		console.log(data);
           		$('#products').html(data);
      		});
	});
});


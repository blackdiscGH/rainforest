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
		event.preventDefault();
		var searchValue = $('#search').val();
    $.getScript('/products?search=' + searchValue);
	}); // end of search-form.submit function

  $(window).scroll(function() {
     if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log($(document).height());
      console.log($(window).height());
      alert('near bottom');
     }
   }); // end of window.scroll function

}); // end of ready page:load function


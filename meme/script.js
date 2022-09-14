jQuery(document).ready(function ($) {

    $.ajax({
        type: 'GET',
        url: "http://localhost:10028/wp-json/meme/v1/posts",
        success: function (response) {
            console.log(response);
            $('#response').html(response.title);
            $('#response1').append('<img src="' + response.featured_image.thumbnail + '" />');
          
        }
    }
    );
});
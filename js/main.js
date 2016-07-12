function commentValidate() {
    $( "#contact_form" ).validate( {
	event: "keyup",
	rules: {
	    name: {
		required: true
	    },
	    email: {
		required: true,
		email: true
	    },
	    comments: {
		required: true
	    }
	},
	messages: {
	    name: '<p>Please enter your name</p>',
	    email: '<p>Please enter a valid e-mail address</p>',
	    comments: '<p>Please enter your comments</p>'
	},
	submitHandler: function( form ) {
	    var button = $( "#submit_button" );
	    button.attr( 'disabled', true );
	    button.attr( 'value', "Sending..." );

	    var name = $( "#name" ).val();
	    var email = $( "#email" ).val();
	    var phone = $( "#phone" ).val();
	    var body = $( "#comments" ).val();

	    $.ajax( 
		    {
			type: "POST",
			url: "submitComments.php",
			dataType: "text",
			data: { 
			    name: name,
			    email: email,
			    phone: phone,
			    body: body },
			success: function() {
			    var form = $( "#form_wrapper" );
			    form.fadeOut( "normal", function () { 
				$( "#contact_confirmation" ).fadeIn( "normal" ); } );
			},
			error: function() {
			    var form = $( "#form_wrapper" );
			    form.fadeOut( "normal", function () { 
				$( "#contact_error" ).fadeIn( "normal" ); } );
			}
		    });

	}
    }); 


}

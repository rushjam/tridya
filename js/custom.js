function checkEmail(str){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str)){
    	$('#email').attr("placeholder", 'Enter valid email').addClass('place_error_color');
		alert('Enter valid email');
		return false;
	}else{
		$('#email').removeClass('place_error_color');
		return true;

	}
}
function checkPhone(str){
    var mo_no = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(!mo_no.test(str)){
    	$('#phonenumber').attr("placeholder", 'Enter valid phonenumber').addClass('place_error_color');
		alert('Enter valid phonenumber');
		return false;
	}else{
		$('#phonenumber').removeClass('place_error_color');
		return true;

	}
}
$(document).on('input keydown keyup mousedown mouseup select contextmenu drop','#contact_form input',function(e){
	$(this).removeClass('place_error_color');
})
$("#free_demo_submit").click(function(event){
	var valdone = true;

	if ($('#name').val() == '') {
		$('#name').attr("placeholder", 'Enter name').addClass('place_error_color');
		valdone = false;
	}

    if ($('#company').val() == '') {
		$('#company').attr("placeholder", 'Enter company name').addClass('place_error_color');
		valdone = false;
	}

  	/*if ($('#crown_storage_location').val() == '') {
		$('#crown_storage_location').attr("placeholder", 'Enter crown storage location').addClass('place_error_color');
		valdone = false;
	}*/

	if ($('#phonenumber').val() != '') {
		var phone_no = $("#phonenumber").val();
		if(!checkPhone(phone_no)){
           valdone = false;
	}
		
	} else if ($('#phonenumber').val() == '') {
		$('#phonenumber').attr("placeholder", 'Enter phone number').addClass('place_error_color');
		valdone = false;
	}

	if ($('#email').val() != '') {
		var mail = $("#email").val();
		if(!checkEmail(mail)){
           valdone = false;
		}
		
	} else if ($('#email').val() == '') {
		$('#email').attr("placeholder", 'Enter Email').addClass('place_error_color');
		valdone = false;
	}

	if (valdone == true) {
		//alert('done');

		var name = $("#name").val();
		var email = $("#email").val();
		var phonenumber = $("#phonenumber").val();
		var company = $("#company").val();
		var crown_storage_location = $("#crown_storage_location").val();

		$.ajax({
			type: 'post',
			url: 'sendmail.php',
			data: {"name":name,"email":email,"phonenumber":phonenumber,"company":company,"crown_storage_location":crown_storage_location},
			beforeSend: function()
			{
				$("#free_demo_submit").html("Submiting <i class='fa fa-spinner fa-spin'></i>").prop("disabled",true);
			},
			success: function(data)
			{
				if(data==1){
					$("#free_demo_submit").html("Submited <i class='fa fa-check' aria-hidden='true'></i>");
					$( '#contact_form' ).each(function(){this.reset();});
					$('#success_message').slideDown({ opacity: "show" }, "slow").text('Thanks for contacting us, We will get back to you shortly.');
					$("#free_demo_submit").html("Thank You");
					window.location.replace("thankyou.php");
					/*$('i.form-control-feedback.bv-no-label.bv-icon-input-group.glyphicon.glyphicon-ok').hide({ opacity: "show" }, "slow");*/
				}else{
					if(data=='smtperr'){
						$("#err_message").text('Internal server error, Check your internet or Try again latter.');
						$('#err_message').slideDown({ opacity: "show" }, "slow");
						$("#free_demo_submit").html("Thank You");
						return false;
					}else{
						$("#err_message").text('Internal server error.');
						$('#err_message').slideDown({ opacity: "show" }, "slow");
						$("#free_demo_submit").html("Thank You");
						return false;
					}
				}	
			},
			error: function()
			{
				$('.content').html('error');
			}
		});
	}

});
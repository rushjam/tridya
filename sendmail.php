<?php
	// Import PHPMailer classes into the global namespace
	// These must be at the top of your script, not inside a function
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	//Load Composer's autoloader
	require 'PHPMailer/src/Exception.php';
	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';

// // define variables and set to empty values
 //$nameErr = $emailErr =  $subErr = $msgErr = "";
 //$name = $email = $subject = $message = $successMsg = "";
 $error = 0;
//
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//  if (empty($_POST["name"])) {
//     $nameErr = "Name is required";
//     $error++;
//   } else {
//     $name = test_input($_POST["name"]);
//     // check if name only contains letters and whitespace
//     /*if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
//       $nameErr = "Only letters and white space allowed";
//       $error++;
//     }*/
//   }

//   if (empty($_POST["email"])) {
//     $emailErr = "Email is required";
//     $error++;
//   } else {
//     $email = test_input($_POST["email"]);
//     // check if e-mail address is well-formed
//     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//       $emailErr = "Invalid email format";
//       $error++;
//     }
//   }

//   if (empty($_POST["subject"])) {
//     $subErr = "Name is required";
//     $error++;
//   } else {
//     $subject = test_input($_POST["subject"]);
//     // check if name only contains letters and whitespace
//     /*if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
//       $nameErr = "Only letters and white space allowed";
//       $error++;
//     }*/
//   }

//   if (empty($_POST["message"])) {
//     $message = "";
//   } else {
//     $message = test_input($_POST["message"]);
//   }

  if ($error == 0) {

	$mail = new PHPMailer(true);   	// Passing `true` enables exceptions
	try {



		$subject = "Inquire from schoolknot";
	    //Server settings
	    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
	    $mail->isSMTP();                                      // Set mailer to use SMTP
	    $mail->Host = '';  // Specify main and backup SMTP servers
	    $mail->SMTPAuth = true;                               // Enable SMTP authentication
	    $mail->Username = '';                 // SMTP username
	    $mail->Password = '';                           // SMTP password
	    $mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
	    $mail->Port = 587;                                    // TCP port to connect to

	    //Recipients
	    $mail->setFrom('', '');
	    $mail->addAddress(''); 
		$mail->addAddress(''); 
		$mail->addAddress('');
		$mail->addAddress('');
		// $mail->addAddress('rahul@callhippo.com');
		//$mail->addAddress('kbansode@crown.com'); // Add a recipient
	   // $mail->addAddress('arman@softwaresuggest.com');               // Name is optional
	    /*$mail->addReplyTo('info@example.com', 'Information');
	    $mail->addCC('abc@gmail.com');
	    $mail->addBCC('bcc@example.com');*/

	    //Attachments
	    /*$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');*/    // Optional name

	    //Content
	    $mail->isHTML(true);                                  // Set email format to HTML
	    $mail->Subject = $subject;
	    $mail->Body .= "<b>Name:</b> ".$_POST['name'].'<br/><br/>';
	    $mail->Body .= "<b>Email:</b> ".$_POST['email'].'<br><br/>';
	    $mail->Body .= "<b>Phonenumber:</b> ".$_POST['phonenumber'].'<br><br/>';
	    $mail->Body .= "<b>Company:-</b> ".$_POST['company'].'<br><br/>';


	    if($mail->send()){
	    	echo 1;
	    }else{
            echo 0;
        }
	} catch (Exception $e) {
	    echo 'smtperr';
	}
	}


// function test_input($data) {
//   $data = trim($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// }
?>
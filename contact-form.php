<?php
$message_sent= false;
if(isset($_POST['mail'])&& $_POST['mail']!=''){
	if(filter_var($mailFrom = $_POST['mail'],FILTER_VALIDATE_EMAIL)){
	if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];
	
	$mailTo = "abdurrahman.sameer@outlook.com"
	$headers = "From: ".$mailFrom;
	$txt = "You have received an E-mail from ".$name.".\n\n".$message;
	
	mail($mailTo, $subject, $txt, $headers);
	header("Location: cform.php?mailsend");
		
}
		$message_sent= true;
	}
}

?>
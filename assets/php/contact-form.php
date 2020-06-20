<?php

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
?>
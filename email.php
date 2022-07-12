

<?php
$to = "franciscomcarreiro@gmai.com";
$subject = "Test mail";
$message = "Hello! This is a <strong>HTML</strong> test email message.";
$from = "me@example.com";
$headers = "From:" . $from\r\n;
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

mail($to,$subject,$message,$headers)
?>
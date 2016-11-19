<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $msg = nl2br(htmlspecialchars($_POST['text']));

  $account="noreplykazanoicforum@gmail.com";
  $password="DDhf@11#aDj";

//  $to="fajerus@gmail.com";
  $to = "sidikov.marsel@gmail.com";
  $subject = "Feed back from oicyouthforum.tatar";

  if(isset($_POST['participant']))
    $msg .= "<br><br> I'm an international participant";
  var_dump($email);


  include("phpmailer/class.phpmailer.php");
  $mail = new PHPMailer();
  $mail->IsSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth= true;
  $mail->Port = 465; // Or 587
  $mail->Username= $account;
  $mail->Password= $password;
  $mail->SMTPSecure = 'ssl';
  $mail->From = $email;
  $mail->FromName= $name;
  $mail->SetFrom($email, $name);
  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = $msg;
  $mail->addAddress($to);



  if(!$mail->send()){
   echo "Mailer Error: " . $mail->ErrorInfo;
  }else{
   echo "E-Mail has been sent";
  }


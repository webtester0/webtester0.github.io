<?php
$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

require_once ('PHPMailerAutoload.php');
$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ru.gipsolit@yandex.ru';              // SMTP username
$mail->Password = '89996216733';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('ru.gipsolit@yandex.ru', 'Gipsolit Russia');
if (empty($email)) {
    $mail->addAddress('ru.gipsolit@yandex.ru'); 
} else {
    $mail->addAddress(''.$email.'');
}
// $mail->addAddress(''.$email.'');     // Add a recipient
// $mail->addAddress('ru.gipsolit@yandex.ru');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Оформление завяки на Гипсолит';
$mail->Body    = '
  Пользователь оставил свои данные <br>
  Имя: '. $name .' <br>
  Телефон: '. $tel .'';
//   Сообщение оставленное пользователем в теге textarea 
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    return false;
} else {
    return true;
}


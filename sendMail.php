<?php
  // SEND MAIL WITH FORM INFORMATION
  // BACKUP DATA in csv  
  // MAIL SENDER =  mail() SMTP
  // VALUES TYPES = string (ALL VALUES ARE REQUIRED)
  
  
  $nombre = "";
  $apellidos = "";
  $email = "";
  $telefono = "";
  $info = "";
  
    
  $nombre = $_POST['nombre'];;
  $apellidos = $_POST['apellidos'];;
  $email = $_POST['email'];;
  $telefono = $_POST['telefono'];;
  $info = $_POST['info'];;
  

  //CSV backup
  $csvfile = 'form-info.csv';
  $csvNewLine = array($nombre."|".$apellidos."|".$email."|".$telefono."|".$info);
  $file = fopen($csvfile, "a");
  foreach ($csvNewLine as $line) {
    fputcsv($file, explode(',', $line));
  }
  fclose($file);


  //MAIL SETTINGS
  $headers = "From: cotizacion@nissan.com" . "\r\n";
  // $headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
  // $headers .= "Bcc: jason@miweb.cr,yarelis@miweb.cr\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  


  $to = "jason@miweb.cr";
  // $to = "";
  $subject = "Solicitud de ".$email." cotización Nissan";
  $message = '';

  //html mail table
  $message .= '<html>';
  $message .= '<table  width="60%"  height="20%" align="center" style="border-style:solid; border-width:1px; border-color:#b1b5bc;" cellpadding="2" cellspacing=”0″  >';
  $message .= '<tr align="center">';
  $message .= '<th bgcolor="#025862" aling="center" width:"100%" colspan="2" style="font-size:20px"><font color="#fff">Solicitud cotización Nissan</font></th>';
  $message .= '</tr>';            
  $message .= '<tr height="10%" style="font-size:18px;"  bgcolor="#f2f2f2">';
  $message .= '<td><strong>Nombre:</strong></td>';
  $message .= '<td>'.$nombre.'</td>';
  $message .= '</tr>';
  $message .= '<tr   style="font-size:18px;" bgcolor="#ddd">';
  $message .= '<td><strong>Apellidos:</strong></td>';
  $message .= '<td>'.$apellidos.'</td>';
  $message .= '</tr>';
  $message .= '<tr   style="font-size:18px;" bgcolor="#f2f2f2">';
  $message .= '<td><strong>E-mail:</strong></td>';
  $message .= '<td>'.$email.'</td>';
  $message .=  '</tr>';
  $message .= '<tr   style="font-size:18px;" bgcolor="#f2f2f2">';
  $message .= '<td><strong>Telefóno:</strong></td>';
  $message .= '<td>'.$telefono.'</td>';
  $message .= '</tr>';
  $message .= '<tr   style="font-size:18px;" bgcolor="#ddd">';
  $message .= '<td><strong>información adicional:</strong></td>';
  $message .= '<td>'.$info.'</td>';
  $message .= '</tr>';
  $message .= '</table>';
  $message .= '</html>';
  
  if (mail($to,$subject,$message, $headers)) {
    header("Location: ../gracias/true");
    die();
  } else {
    header("Location: ../gracias/false");
    die();
  }


?>
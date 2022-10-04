
<?php
  //Variáveis
  $nome = $_POST['name'];
  $email = $_POST['email'];
  // $assunto = $_POST['subject'];
  $mensagem = $_POST['message'];
  

  //Compo E-mail 
  $arquivo = "
    <html>
      <p>Nome:$nome</p>
      <p>E-mail: $email</p>
      <p>Mensagem: $mensagem</p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "email@teste.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  if(mail($destino, $assunto, $arquivo, $headers)){
    echo("Email enviado com sucesso!");
  }else{
    echo("Email não pode ser enviado!");
  };
  
  echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <form id="loginForm" action="controller_login.php" method="post">
    <h2>Login</h2>

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <label for="clave">Clave:</label>
    <input type="password" id="clave" name="clave">

    <input type="submit" name="login" value="Login">

  </form>

  <p><b>¿No tienes una cuenta?</b> <a href="registrarse.php">Regístrate</a></p>

</body>

</html>

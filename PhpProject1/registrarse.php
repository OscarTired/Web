<!DOCTYPE html>
<html>

<head>
  <title>Registro</title>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      transition: all 0.3s ease;
    }

    body {
      background-image: url('img/register.jpg');
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }

    h2 {
      text-align: center;
      color: #333;
      text-shadow: 1px 1px #fff;
      margin-bottom: 20px;
    }

    form {
      background-color: #fff;
      max-width: 600px;
      width: 300px;
      padding: 30px 20px; 
      box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    label {
      color: #666;
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"], 
    input[type="password"],
    input[type="email"] {
      display: block;
      width: 80%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;  
    }

    input[type="text"]:focus, 
    input[type="password"]:focus,
    input[type="email"]:focus {
      border-color: #3498db;
      outline: none;
    }

    input[type="submit"] {
      background-color: #3498db;
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      display: block;
      width: 80%;
    }

    input[type="submit"]:hover {
      background-color: #2980b9; 
      transform: scale(1.05);
    }

    p {
      text-align: center; 
      font-size: 18px;
    }

    a {
      color: #3498db;
      text-decoration: none;
      font-size: 18px;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>

</head>

<body>

  <form action="controller_login.php" method="post">
    <h2>Registro</h2>
  
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
  
    <label for="clave">Clave:</label>
    <input type="password" id="clave" name="clave">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  
    <input type="submit" name="registro" value="Registrarse">
  
  </form>
  
    <p><b>¿Ya tienes una cuenta? <a href="index.php">Inicia sesión</a></b></p>

</body>
</html>

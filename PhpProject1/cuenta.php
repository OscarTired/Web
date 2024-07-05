<?php
session_start();
if (!isset($_SESSION['nombre'])) {
    header('Location: index.php');
}
?>
<!DOCTYPE html>
<html>

<head>
  <title>Bienvenido</title>
  
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    h2 {
      text-align: center;
      color: #333;
      text-shadow: 1px 1px #fff;
      margin-bottom: 20px;
    }

    p {
      text-align: center; 
      margin-top: 20px;
    }

    a {
      color: #3498db;
      text-decoration: none;
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
    }

    a:hover {
      background-color: #2980b9; 
      transform: scale(1.05);
    }

    .video-container {
      position: relative;
      width: 50%;
      height: 0;
      padding-bottom: 28%;
      margin-top: 2em;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style>

</head>

<body>
    <h2>Bienvenido, <?php echo $_SESSION['nombre']; ?>!</h2>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p>Has iniciado sesión correctamente.</p>
    <p><a href="logout.php">Cerrar sesión</a></p>
</body>
</html>

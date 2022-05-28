<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/index.css">
    <?php
    include("partials/header.php")
    ?>
    <script src="js/index.js"></script>
    <title>Thenujan</title>
</head>

<body>
    <div class="loading-screen">
        <div class="loading-wrapper">
            <h1>Loading</h1>
            <div class="circles">
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
            </div>  
        </div>  
    </div>  
    
    <div class="background-image image-container"></div>    

    <div class="background-image">
        <nav>
            <h1>Thenujan</h1>
            <ul>
                <li>Contact Me</li>
                <li>Skills</li>
            </ul>
        </nav>
        
        <div id="introduction">
            <h1>Hi, i'm <span>Thenujan</span></h1>
            <h1>I'm a web developer</h1>
        </div>  
        
    </div>
    

    <div id="projects">
        <h1>My favourite projects</h1>
        <div id="grub-editor">
            <img src="images/grub-editor.png">
        </div>

    </div>
</body>

</html>
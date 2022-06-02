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
                <i class="circle"></i>
                <i class="circle"></i>
                <i class="circle"></i>
            </div>  
        </div>  
    </div>  
    
    <div class="full-size image-container"></div>    
    <div class="full-size image-overlay-container"></div>    

    <div class="full-size section1">
        <nav>
            <h1>Thenujan</h1>
            <ul>
                <li><a>Contact Me</a></li>
                <li><a>Skills</a></li>
            </ul>
        </nav>
        
        <div id="introduction">
            <h1>Hi, i'm <span class="name">Thenujan</span></h1>
            <div class="container">
                <h1>I'm a </h1>
                <h1 class="dev-title"> web developer</h1>
            </div>
        </div>  
        
    </div>
    

    <div id="projects">
        <h1>My favourite projects</h1>
        <div id="grub-editor" class="project">
            <h1>Grub Editor</h1>
            <p> It is a GUI application to edit grub configuration</p>
            <div class="imageContainer">
                <a target="_blank" href="https://grub-editor.herokuapp.com/"><img src="images/grub-editor.png"></a>
                <a target="_blank" href="https://grub-editor.herokuapp.com/"><div class="btnView">
                    <p>Open Site</p>
                </div></a>
            </div>
            
        </div>
        <div id="pava-hub" class="project">
            <h1>PavaHub</h1>
            <p> This one doesn't need explanation</p>
            <div class="imageContainer">
                <img src="images/grub-editor.png">
                <div class="btnView">
                    <p>Open Site</p>
                </div>
            </div>
            
        </div>

    </div>
</body>

</html>
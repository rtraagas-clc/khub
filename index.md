<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Knowledge Hub</title>

    <!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,500;1,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/uicons-regular-rounded.css">
    <link rel="stylesheet" href="css/style.css">

    <style>
        .container{
            text-align: center;
            width: 60%;
            margin: auto;
            padding-top: 5rem;
        }
        form{
            margin: auto;
        }

        input{
            display: block;
            margin-bottom: 2rem;
            margin-left: auto;
            margin-right: auto;
            width: 20rem;
            height: 1.5rem;
            font-size: 1.5rem;
            transition: border-bottom 50ms ease;
        }

        input:focus{
            border-bottom: 1px black solid;
        }

        img{
            height: 10rem;
            margin: 2rem;
        }

        .google{
            text-decoration: none;
            color: lightgray;
            margin: 1rem;
            padding: 1rem;
        }
        .google:hover{
            color: gray;
        }
    </style>
    
</head>
<body>
    <div class="container">
        <img src="http://mc.pshs.edu.ph/wp-content/uploads/2017/08/PSHS_System_Logo.png" alt="">
        <h1 class="logo">Knowledge Hub</h1>
        <form action="">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Password">
        </form>
        <a href="#" class="google">Sign in with Google</a>
        <a href="dashboard.html">
            <div id="container">
                <button class="sign-in">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Sign In</span>
                </button>
            </div>
        </a>
        
    </div>

</body>
</html>

import React from 'react'
import './MAin.css';
import { Link } from 'react-router-dom';

function MAin() {
  return (


<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
    

    <header>
        <section class="nav">
           

          
            <div class="logo">
                <a href="#"><i class="fas fa-utensils"></i>Luna Bank</a>
            </div>

       
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
    
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#speciality">About Us</a></li>
                <Link to="/Contact"></Link><li><a href="#review">Contact</a></li>
                <li><a href="#order" class="order">Logut</a></li>
            </ul>
        </section>
    </header>



 

    <section class="home" id="home ">
        <div class="content">

            <h3 class="mainfont">
                The <span class="yellowColor"> LUNA </span> Bank
            </h3>
            <p>
            We are happy to bring to you our all new MobileBanking App. It has been designed for you, by us, keeping you in mind, to make banking through your mobile simple and convenient.
            </p>
   
       
            <a href="# " class="btn">OPEN</a>
        </div>


        <div class="image">
            <img src="" alt=" " />
        </div>
    </section>


</body>

</html>
)
}

export default MAin

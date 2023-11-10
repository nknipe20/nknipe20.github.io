function showWateringCan() 
{
    var image = document.getElementById('wateringCan');
    image.style.display = 'block';

    var flower = document.getElementById('flowers')
    flower.src = "/javascriptproject/2.png";

    var wateringButton = document.getElementById('wateringCanButton');
    wateringButton.style.display = "none";

    var sunButton = document.getElementById('sunButton');
    sunButton.style.display = "block";

    var topMessage = document.getElementById('topMessage');
    topMessage.innerHTML = "Almost there!"
}

function showSun() 
{
    var image = document.getElementById('sun');
    image.style.display = 'block';
    sun.rotateImage;

    var flower = document.getElementById('flowers')
    flower.src = "/javascriptproject/3.png";

    var wateringButton = document.getElementById('sunButton');
    wateringButton.style.display = "none";

    var topMessage = document.getElementById('topMessage');
    topMessage.innerHTML = "Great job! You did it!"
}

setTimeout(function() {
    document.getElementById('congratsBox').style.display = 'none';
  }, 5000);
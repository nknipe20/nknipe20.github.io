function showWateringCan() 
{
    var image = document.getElementById('wateringCan');
    image.style.display = 'block';

    var flower = document.getElementById('flowers')
    flower.src = "/javascriptproject/2.png";

    var wateringButton = document.getElementById('wateringCanButton');
    wateringButton.style.display = "none";

    var sunButtom = document.getElementById('sunButton');
    wateringButton.style.display = "block";
}

function showSun() 
{
    var image = document.getElementById('sun');
    image.style.display = 'block';

    var flower = document.getElementById('flowers')
    flower.src = "/javascriptproject/3.png";

    var wateringButton = document.getElementById('SunButton');
    wateringButton.style.display = "none";
}
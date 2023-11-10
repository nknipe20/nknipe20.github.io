document.getElementById("quiz1").addEventListener("click", function() 
{quizQuestionOne.replaceWith(quizQuestionTwo)});

var romcom_var = false;
var drama_var = false;
var scary_var = false;
var comedy_var = false;
var netflix_var = false;
var prime_var = false;
var hbo_var = false;
var disney_var = false;

function RomCom()
{
    romcom_var = true;
}

function Drama()
{
    drama_var = true;
}

function Scary()
{
    scary_var = true;
}

function Comedy()
{
    comedy_var = true;
}

function Netflix() {
    netflix_var = true;
    var quiz1Buttons = document.getElementsByClassName("quiz1");
      for (var i = 0; i < quiz1Buttons.length; i++) 
      {
        quiz1Buttons[i].style.display = "none";
  }
}

function PrimeVideo()
{
    prime_var = true;
} 

function HBOMax()
{
    hbo_var = true;
}

function DisneyPlus()
{
    disney_var = true;
}
 

function showResults()
{
    if (netflix_var && romcom_var)
    {
        document.getElementById('result').innerText = "Legally blonde";
    }
}
function open_menu() 
{
    var open = document.getElementById("menu");
    if (open.style.display === "none") 
    {
        open.style.display = "block";
    } 
    else 
    {
        open.style.display = "none";
    }
} 

function explode() 
{
    document.getElementById('rocket').style.backgroundImage="url(img/booom.gif)";
    document.getElementById("bubble").innerHTML = "<b>damn my son, your sister was in this shuttle</b>";
} 

function get_info() 
{
    document.getElementById("bubble").innerHTML = "<b>info</b><br>best resolution on 3840px * 1080px<br>mobil less 1024px <span id='red'>just few effects</span> available!";
} 

function reset() 
{
    document.getElementById('rocket').style.backgroundImage="url(img/rocket.gif)";
    document.getElementById("bubble").innerHTML = "<b>Hello my name <i>iq0x</i> your personal assistent. Welcome to the cybershit universe.</b>";
} 



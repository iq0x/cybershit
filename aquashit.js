var toggleMenu = false;
var total_hits = 0;
var ammo_maschinegun = 40;
var ammo_pirategun = 5;
var life = 50;
var healing = 1;
let weapon;
var damage = 0;

let welcome = '<b>Level 3 - <i>Welcome</i> </b>to  - aqua (beta)<br>new weapons unlocked!!!<br> show, in the menu';

window.onload = function()
{
    document.getElementById('bubble').style.display="block";
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
    document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
    document.getElementById("life_value").innerHTML = life;
    document.getElementById("healing_value").innerHTML = healing;
    weapon = 'pirategun';
};

function heal()
{
    if (healing > 0)
    {
        healing--;
        life = life + 20;
    }
    if (healing === 0)
    {
        document.getElementById('healing').style.backgroundColor="red";
    }
    document.getElementById("healing_value").innerHTML = healing;
    document.getElementById("life_value").innerHTML = life;
}

function alien_maschinegun()
{
    document.getElementById('alien').style.backgroundImage="url(img/alien_maschinegun.gif)";   
    weapon = 'maschinegun';
}

function alien_pirategun()
{
    document.getElementById('alien').style.backgroundImage="url(img/alien_pirategun.gif)";   
    weapon = 'pirategun';
}

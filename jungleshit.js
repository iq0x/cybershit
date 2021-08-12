var toggleMenu = false;
var total_hits = 0;
var ammo_maschinegun = 50;
var ammo_pirategun = 50;
var life = 99;
var bat_clicked = false; 
var monster_clicked = false;
var monster_life = 999;
let weapon;
var damage = 0;


let welcome = '<b>Level 2 - <i>Welcome</i> </b>to  - jungle (beta)<br>new weapons unlocked!!!<br> show, in the menu';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function()
{
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
    document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
    document.getElementById("life_value").innerHTML = life;
    document.getElementById("monsterlife_value").innerHTML = monster_life;
    weapon = 'pirategun';
};


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

function explode_bat() 
{
    if (bat_clicked !== true)
    {
        check();
        document.getElementById("score_value").innerHTML = total_hits;
        bat_clicked = false; 
    }
    document.getElementById('bat').style.backgroundImage="url(img/crash2.png)";
    document.getElementById("bubble_box").innerHTML = "freaking bat";
    document.getElementById("avatar").src='img/alien_avatar.gif';
}

function explode_monster() 
{
    check();
    monster_life = monster_life - damage;
    document.getElementById("monsterlife_value").innerHTML = monster_life;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("bubble_box").innerHTML = "die monster....";
    document.getElementById("avatar").src='img/alien_avatar.gif';
}


function check()
{
    if (weapon == 'pirategun')
    {
        damage = getRandomInt(10);
        var audio_pirategun = new Audio('sounds/pirategun.mp3');
        audio_pirategun.play();
        ammo_pirategun--;
        document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
    }
    else if (weapon == 'maschinegun')
    {
        var audio_maschinegun = new Audio('sounds/maschinegun.mp3');
        audio_maschinegun.play();
        ammo_maschinegun--;
        damage = getRandomInt(20);
        document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
    }
    total_hits++;
    if (total_hits % 10 === 0)
    {
        var damage_alien = getRandomInt(40);
        life = life - damage_alien;
        if(life <= 0)
        {
           alert('you lost!'); 
        }
        document.getElementById("life_value").innerHTML = life;
    }
    document.getElementById("score_value").innerHTML = total_hits;
}

function reset()
{
    total_hits = 0;
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById('bat').style.backgroundImage="url(img/bat.gif)"; 
}

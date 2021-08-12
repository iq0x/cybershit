var toggleMenu = false;
var total_hits = 0;
var ammo_maschinegun = 40;
var ammo_pirategun = 5;
var life = 50;
var healing = 1;
var bat_clicked = false; 
var monster_clicked = false;
var monster_life = 600;
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
    if (monster_life <= 0)
    {
        alert("win");
    }
    document.getElementById("monsterlife_value").innerHTML = monster_life;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("bubble_box").innerHTML = "damage: " + damage + " <br>die monster....";
    document.getElementById("avatar").src='img/alien_avatar.gif';
}

function check()
{
    if (weapon == 'pirategun')
    {
        if (ammo_pirategun > 0)
        {
            damage = getRandomInt(100);
            var audio_pirategun = new Audio('sounds/pirategun.mp3');
            audio_pirategun.play();
            ammo_pirategun--;
            document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
            monster_life = monster_life - damage;
            total_hits++;
        }
        else
        {
            document.getElementById('ammo_pirategun').style.backgroundColor="red";
        }
    }
    else if (weapon == 'maschinegun')
    {
        if (ammo_maschinegun > 0)
        {
            var audio_maschinegun = new Audio('sounds/maschinegun.mp3');
            audio_maschinegun.play();
            ammo_maschinegun--;
            damage = getRandomInt(20);
            document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
            monster_life = monster_life - damage;
            total_hits++;
        }
           else
        {
            document.getElementById('ammo_maschinegun').style.backgroundColor="red";
        }
    }
    
    if (total_hits % 10 === 0)
    {
        var damage_alien = getRandomInt(40);
        life = life - damage_alien;
        if(life <= 0)
        {
           document.getElementById('game_over').style.display="block"; 
        }
        document.getElementById("life_value").innerHTML = life;
    }
    document.getElementById("score_value").innerHTML = total_hits;
}

function reset()
{
    ammo_maschinegun = 40;
    ammo_pirategun = 5;
    life = 50;
    healing = 1;
    bat_clicked = false; 
    monster_clicked = false;
    monster_life = 600;
    damage = 0;
    total_hits = 0;
    weapon = 'pirategun';
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
    document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
    document.getElementById("life_value").innerHTML = life;
    document.getElementById("monsterlife_value").innerHTML = monster_life;
    document.getElementById("healing_value").innerHTML = healing;
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById('bat').style.backgroundImage="url(img/bat.gif)"; 
    document.getElementById('ammo_pirategun').style.backgroundColor="white";
    document.getElementById('ammo_maschinegun').style.backgroundColor="white";
    document.getElementById('healing').style.backgroundColor="white";
}

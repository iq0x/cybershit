var total_hits = 0;
var ufo_clicked = false;
var bong_clicked = false;
var rocket_clicked = false; 
var friend_clicked = false; 
var monster_clicked = false;
var bat_clicked = false; 

var level2 = 14;

var alien_slaps = 0;
var boss_life = 10; 
var toggleMenu = false;
var ammo_maschinegun = 40;
var ammo_pirategun = 5;
var life = 50;
var healing = 1;

var monster_life = 600;
let weapon;
var damage = 0;

let welcome = 'Hello my name <b><i>iq0x</i></b>, your personal assistent.<br>  Welcome to the cybershit universe,<br> a <b>TSBFARPG</b> (totally stupid brain fckd action role play game)';
var audio_mega_explosion = new Audio('sounds/mega_explosion.mp3');
var audio_victory = new Audio('sounds/victory.mp3');
var intro = new Audio('sounds/x.mp3');
var final = new Audio('sounds/final.mp3');


window.onload = function()
{
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById('bubble').style.display="block";
    
    intro.play();
    document.getElementById('life').style.display="block";
    document.getElementById('healing').style.display="block";
    document.getElementById('ammo_maschinegun').style.display="block";
    document.getElementById('ammo_pirategun').style.display="block";
    document.getElementById('monsterlife').style.display="block";
    document.getElementById('bubble').style.display="block";
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById("ammo_maschinegun_value").innerHTML = ammo_maschinegun;
    document.getElementById("ammo_pirategun_value").innerHTML = ammo_pirategun;
    document.getElementById("life_value").innerHTML = life;
    document.getElementById("monsterlife_value").innerHTML = monster_life;
    document.getElementById("healing_value").innerHTML = healing;
    weapon = 'pirategun';
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function win()
{
    if (total_hits == 4)
    {
        final.play();
        document.body.style.backgroundImage="url(img/win.gif)";
        document.getElementById('bubble').style.backgroundColor="yellow";
        document.getElementById("avatar").src='img/iq9x_avatar.gif';
        document.getElementById("bubble_box").innerHTML = "<b>BOSS</b> <br>kill the boss!";  
        document.getElementById('planet').style.display="none";
        document.getElementById('ufo').style.display="none";
        document.getElementById('meteor').style.display="none";
        document.getElementById('meteor2').style.display="none";
        document.getElementById('meteor3').style.display="none";
        document.getElementById('rocket').style.display="none";
        document.getElementById('bong').style.display="none";
        document.getElementById('friend').style.display="none";
        document.getElementById('boss1').style.display="block";
        document.getElementById('boss_life').style.display="block";
        
    }
    document.getElementById("score_value").innerHTML = total_hits;
}


function explode_ufo() 
{
    
    if (ufo_clicked !== true)
    {
        var audio_explosion = new Audio('sounds/explosion.mp3');
        audio_explosion.play();
        total_hits++;
        document.getElementById("score_value").innerHTML = total_hits;
        ufo_clicked = true; 
    }
    document.getElementById('ufo').style.backgroundImage="url(img/crash2.png)";
    document.getElementById("bubble_box").innerHTML = "<b>juhu i got some</b>";
    document.getElementById("avatar").src='img/alien_avatar.gif';
    win();
}

function explode_bong() 
{
    
if (bong_clicked !== true)
    {
        var audio_explosion = new Audio('sounds/explosion.mp3');
        audio_explosion.play();
        total_hits++;
        document.getElementById("score_value").innerHTML = total_hits;
        bong_clicked = true; 
    }
    document.getElementById("score_value").innerHTML = total_hits;
    document.getElementById('bong').style.backgroundImage="url(img/crash4.png)";
    document.getElementById("bubble_box").innerHTML = "<b>ohhhhh nooooo</b> i hit iq0x bong -.-";
    document.getElementById("avatar").src='img/alien_avatar.gif';
    win();
}

function explode_rocket() 
{

    if (rocket_clicked !== true)
    {
        var audio_explosion = new Audio('sounds/explosion.mp3');
        audio_explosion.play();
        total_hits++;
        document.getElementById("score_value").innerHTML = total_hits;
        rocket_clicked = true; 
    }
    document.getElementById('rocket').style.backgroundImage="url(img/crash3.png)";
    document.getElementById("bubble_box").innerHTML = "<b>damn my son, your sister was in this shuttle</b>";
    document.getElementById("avatar").src='img/alien_avatar.gif';
    win();
} 

function explode_friend() 
{

    if (friend_clicked !== true)
    {
        var audio_explosion = new Audio('sounds/explosion.mp3');
        audio_explosion.play();
        total_hits++;
        document.getElementById("score_value").innerHTML = total_hits;
        friend_clicked = true; 
    }
    document.getElementById('friend').style.backgroundImage="url(img/crash1.png)";
    document.getElementById("bubble_box").innerHTML = "<b>ups</b> sorry my friend";
    document.getElementById("avatar").src='img/alien_avatar.gif';
    win();
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

function get_info() 
{
    document.getElementById("bubble_box").innerHTML = "<b>info</b><br>best resolution on 3840px * 1080px<br>mobil less 1024px <span id='red'>no effects</span> available! <br> <b>dl:</b> <br><a href='https://github.com/iq0x/cybershit'>https://github.com/iq0x/cybershit</a><br><b>donate:</b><br><a href='https://www.blockchain.com/btc/address/bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt'>bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt</a><br>";
    document.getElementById("avatar").src='img/iq9x_avatar.gif';
} 

function reset() 
{
    intro.play();
    total_hits = 0;
    boss_life = 10;
    var alien_slaps = 0;
    ufo_clicked = false;
    bong_clicked = false;
    rocket_clicked = false;
    friend_clicked = false; 
    document.body.style.backgroundImage="url(img/star.gif)";
    
    document.getElementById("score_value").innerHTML = total_hits;
    
    document.getElementById('bong').style.backgroundImage="url(img/bong.png)";
    document.getElementById('rocket').style.backgroundImage="url(img/rocket.gif)";
    document.getElementById('ufo').style.backgroundImage="url(img/ufo.gif)";
    document.getElementById('friend').style.backgroundImage="url(img/corona.png)";
    
    document.getElementById('bubble_box').innerHTML = welcome;
    document.getElementById('avatar').src='img/iq9x_avatar.gif';
    document.getElementById('rocket').style.bottom="0%";
    
    document.getElementById('planet').style.display="block";
    document.getElementById('ufo').style.display="block";
    document.getElementById('meteor').style.display="block";
    document.getElementById('meteor2').style.display="block";
    document.getElementById('meteor3').style.display="block";
    document.getElementById('rocket').style.display="block";
    document.getElementById('bong').style.display="block";
    document.getElementById('friend').style.display="block";
    document.getElementById('boss1').style.display="none";
    
    document.getElementById('boss1').style.backgroundImage="url(img/boss1.gif)";
    document.getElementById('boss_life').style.display="none";
    document.getElementById('bubble').style.backgroundColor="white";
    
    
    
    
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

function punch_alien() 
{
    var audio_punch = new Audio('sounds/punch.mp3');
    audio_punch.play();
    alien_slaps++;
    if (total_hits < level2)
    {
        if (alien_slaps < 7)
        {
            document.getElementById("bubble_box").innerHTML = "<b>autsch</b>";
            document.getElementById("avatar").src="img/alien_avatar.gif";  
        }
        else
        {
            document.getElementById("bubble_box").innerHTML = "<b>enough dude find and kill the objects....!</b>";  
        }
    }
    else
    {
        document.getElementById("bubble_box").innerHTML = "<b>you are the winner bro, why you slap me bitch....!</b>";     
    }
    
}

function punch_boss() 
{
    if (total_hits < level2)
    {
        var audio_punch = new Audio('sounds/punch.mp3');
        audio_punch.play();
        total_hits++;
        boss_life--;
        document.getElementById("boss_life_value").innerHTML = boss_life;
        document.getElementById("score_value").innerHTML = total_hits;
        document.getElementById("bubble_box").innerHTML = "<b>ahhhhhhhhhhh</b>";
        document.getElementById("avatar").src="img/boss1_avatar.gif";
        var boss1_slap = getRandomInt(3);
        if (boss1_slap == 1)
        {
            document.getElementById('boss1').style.backgroundImage="url(img/boss1_slap1.gif)";
            document.getElementById("bubble_box").innerHTML = "<b>noooooo</b>";
        }
        else if (boss1_slap == 2)
        {
            document.getElementById('boss1').style.backgroundImage="url(img/boss1_slap2.gif)"; 
            document.getElementById("bubble_box").innerHTML = "<b>fckkkkkkkk</b>";
        }
        else
        {
            document.getElementById('boss1').style.backgroundImage="url(img/boss1_slap3.gif)";
        }
        
    }
    else if (total_hits = level2)
    {
        document.getElementById('boss1').style.backgroundImage="url(img/boss_kill.gif)";
        document.getElementById("bubble_box").innerHTML = "<b>CONGRATULATION!!!</b><br> you are the best man!!!<br><a href='https://cybershit.io/?level=jungle'>level 2</a><br><b>donate NOW and feel better:</b><br><img src='img/donate_btc.gif' width='50%'><a href='https://www.blockchain.com/btc/address/bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt'>bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt</a>";
        document.getElementById("avatar").src="img/iq9x_avatar.gif";
        audio_mega_explosion.play();
        audio_victory.play();
    }
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

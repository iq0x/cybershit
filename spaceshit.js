var total_hits = 0;
var ufo_clicked = false;
var bong_clicked = false;
var rocket_clicked = false; 
var friend_clicked = false; 


var audio_victory = new Audio('victory.mp3');
   

window.onload = function()
{
    document.getElementById("score_value").innerHTML = total_hits;
};


function win()
{
    if (total_hits == 4)
    {
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
        
    }
    document.getElementById("score_value").innerHTML = total_hits;
}

function open_menu() 
{
    var open = document.getElementById("menu");
    if (open.style.display == "none") 
    {
        open.style.display = "block";
    } 
    else 
    {
        open.style.display = "none";
    }
} 

function explode_ufo() 
{
    
    if (ufo_clicked !== true)
    {
        var audio_explosion = new Audio('explosion.mp3');
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
        var audio_explosion = new Audio('explosion.mp3');
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
        var audio_explosion = new Audio('explosion.mp3');
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
        var audio_explosion = new Audio('explosion.mp3');
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


function get_info() 
{
    document.getElementById("bubble_box").innerHTML = "<b>info</b><br>best resolution on 3840px * 1080px<br>mobil less 1024px <span id='red'>no effects</span> available! <br> <b>dl:</b> <br><a href='https://github.com/iq0x/cybershit'>https://github.com/iq0x/cybershit</a><br><b>donate:</b><br><a href='https://www.blockchain.com/btc/address/bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt'>bc1q427d9xy8t00dnnum2e0udaxhyyatx2tfr2dmkt</a>";
    document.getElementById("avatar").src='img/iq9x_avatar.gif';
    
} 

function reset() 
{
    total_hits = 0;
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
    
    document.getElementById('bubble_box').innerHTML = "Hello my name <b><i>iq0x</i></b> your personal assistent. Welcome to the cybershit universe.";
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
    document.getElementById('bubble').style.backgroundColor="white";
} 

function punch_alien() 
{
    var audio_punch = new Audio('punch.mp3');
    audio_punch.play();

    document.getElementById("bubble_box").innerHTML = "<b>autsch</b>";
    document.getElementById("avatar").src="img/alien_avatar.gif";
}

function punch_boss1() 
{
    if (total_hits < 30)
    {
        var audio_punch = new Audio('punch.mp3');
        audio_punch.play();
        total_hits++;
        document.getElementById("score_value").innerHTML = total_hits;
        document.getElementById("bubble_box").innerHTML = "<b>ahhhhhhhhhhh</b>";
        document.getElementById("avatar").src="img/alien_avatar.gif";
    }
    else
    {
        document.getElementById('boss1').style.backgroundImage="url(img/boss_kill.gif)";
        document.getElementById("bubble_box").innerHTML = "<b>winnnnnner</b>";
        document.getElementById("avatar").src="img/alien_avatar.gif";
        audio_victory.play();
    }
}



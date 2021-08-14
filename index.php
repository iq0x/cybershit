<?php
    $level = $_POST["level"];
?> 

<html>
    <head>
        <title>cybershit</title>
        <meta name="viewport" content="width=devicve-width, initial-scale=1.0"> 
        <link rel="stylesheet" href="engine.css">
        <link rel="stylesheet" href="responsive.css">
        <link rel="stylesheet" href="animation.css">
        <script src="terminal.js"></script>
        
        <?php if ($_GET["level"] == "space") { ?>
                <link rel="stylesheet" href="space.css">
                <script src="spaceshit.js"></script>
        <?php } ?>
        <?php if ($_GET["level"] == "jungle") { ?>
                <link rel="stylesheet" href="jungle.css">
                <script src="jungleshit.js"></script>
        <?php } ?>
        <?php if ($_GET["level"] == "aqua") { ?>
                <link rel="stylesheet" href="aqua.css">
                <script src="aquashit.js"></script>
        <?php } ?>
    
        <script>
            function change_background_lvl1(){document.body.style.backgroundImage="url(img/star.gif)";}
            function change_background_lvl2(){document.body.style.backgroundImage="url(img/gras.gif)";}
            function change_background_lvl3(){document.body.style.backgroundImage="url(img/deepwater.gif)";}
        </script>
    </head>
    
    <body>
        <div id="main">
            <?php
                if ($_GET["level"] == "space")
                {
                ?> 
                    <div id="rocket" onclick="explode_rocket()"></div>
                    <div id="planet"></div>
                    <div id="boss_life">BOSS life: <span id="boss_life_value"></span></div>
                    <div class="centrum"> 
                    <span class="moveY">
        			    <span id="bong" onclick="explode_bong()"></span>
        		    </span>
        	        </div>
                    <div id="ufo" onclick="explode_ufo()"></div>
                    <div id="meteor"></div>
                    <div id="meteor2"></div>
                    <div id="meteor3"></div>
                    <div id="alien" onclick="punch_alien()"></div>
                    <div id="alien_s"></div>
                    <div id="boss1" onclick="punch_boss()"></div>
                    <div id="floor"></div>
                    <div class="centrumF"> 
                        <span class="moveYY">
            			    <span id="friend" onclick="explode_friend()"></span>
            		    </span>
            	   </div>
                <?php
                }
     
                else if ($_GET["level"] == "jungle")
                {
                ?> 
                    <div id="clouds"></div>
                    <div id="alien"></div>
                    <div id="alien_s"></div>
                    <div id="monster" onclick="explode_monster()"></div>
                    <div id="bat" onclick="explode_bat()"></div>
                <?php
                }
                
                else if ($_GET["level"] == "aqua")
                {
                ?> 
                    <div id="alien"></div>
                    <div id="alien_s"></div>
                    <div id="monster" onclick="explode_monster()"></div>
                <?php
                }
           
            if ($_GET["level"] != "jungle" && $_GET["level"] != "space" && $_GET["level"] != "aqua")
            {
                ?>
                 <h1>cybershit universe</h1>
                  <div id="alertbox">min resulution 1240px</div>
                 <a id="footer"><?php include_once "visitors.php"; ?> </a>
                <span id="start_game">
                    <a href="?level=space"><img src="img/space_screenshot.jpg" id="img_border" width="30%" onmouseover="change_background_lvl1()"></a>    
                </span>    
                <span id="start_game">
                    <a href="?level=jungle"><img src="img/jungle_screenshot.jpg" id="img_border" width="30%" onmouseover="change_background_lvl2()"></a>
                </span>  
                <span id="start_game">
                    <a href="?level=aqua"><img src="img/aqua_screenshot.jpg" id="img_border" width="30%" onmouseover="change_background_lvl3()"></a>
                </span>  
          
                <iframe src="shoutbox/index.php" width="100%" height="600px" frameBorder="0" id="chatframe"></iframe> 
                  <a id="footer" href="https://github.com/iq0x/cybershit">download this trash on github</a> 
                <?php
            }
            ?>
           
            <div id="life"><span id="life_value"></span></div>
            <div id="ammo_maschinegun" onclick="alien_maschinegun()"><span id="ammo_maschinegun_value">0</span></div>
            <div id="ammo_pirategun" onclick="alien_pirategun()"><span id="ammo_pirategun_value">0</span></div>
            <div id="healing" onclick="heal()"><span id="healing_value"></span></div>
            <div id="monsterlife">monster: <span id="monsterlife_value"></span><img src="img/life.gif" width="25px"></div>
            <div id="score">Score: <span id="score_value">0</span></div>  
            <div id="bubble">
                <table>
                    <tr>
                        <td><img id="avatar" src="img/iq9x_avatar.gif"></td>
                        <td><span id="bubble_box"></span></td>
                    </tr>
                </table>
            </div>
           <div id="terminal">guest@cybershit:~$<input type="text" id="cmd" name="cmd"></div>
            <div id="menu">
                <div id="menu_box" onclick="reset()"><img src="img/reset.png" width="80%"></div>
                <div id="menu_box" onclick="toggle_terminal()"><img src="img/terminal.gif" width="80%"></div>
            </div>
            <div id="information" onclick="open_menu()"></div>
            <div id="game_over"><a href="https://cybershit.io/?level=jungle">Game Over</a></div>
                
        </div>
    </body>
</html>

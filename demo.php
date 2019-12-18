<?php
	$name = isset($_GET['name']) ? htmlspecialchars($_GET['name']) : '';
   $content = isset($_GET['content']) ? htmlspecialchars($_GET['content']) : '';
   
   echo '网站名: '. $name;
   echo "\n";
   echo '内容: '. $content;
   

   
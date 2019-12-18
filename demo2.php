<?php
	
	$count = isset($_GET["count"]) ? htmlspecialchars($_GET["count"]) : '';
	echo '点赞人数: ' . $count;

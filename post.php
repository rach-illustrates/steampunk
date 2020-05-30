<?php
	$myFile = "data.txt";
	$fh = fopen($myFile, 'a');
	$comma_delmited_list = implode(",", $_POST) . "\r\n";

	fwrite($fh, $comma_delmited_list);
	fclose($fh);
?>
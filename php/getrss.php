<?php 

$rssurl = $_GET['rssurl'];

$xml_string = file_get_contents($rssurl);

$xml_string = str_replace(array("\n", "\r", "\t"), '', $xml_string);

$xml_string = trim(str_replace('"', "'", $xml_string));

$xml_str = simplexml_load_string($xml_string);

$json = json_encode($xml_str);

echo $json;

?>
<?php 

$rssurl = $_GET['rssurl'];

$xml_string = file_get_contents($rssurl);

$xml = simplexml_load_string($xml_string);
$json = json_encode($xml);


echo $json;

?>
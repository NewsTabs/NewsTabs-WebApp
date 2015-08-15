<?php 

// for test

$rssurl = 'http://www.buzzfeed.com/tech.xml';
$xml_string = simplexml_load_file($rssurl);



// fetch all news items
foreach($xml_string->channel->children() as $item) { 
    
    if(isset($item->title) && isset($item->description)  && strlen($item->title) > 0) {
        echo strtotime($item->pubDate);
        echo "<br>";
    }
} 


?>
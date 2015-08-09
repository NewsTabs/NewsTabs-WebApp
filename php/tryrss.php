<?php 

$rssurl = $_GET['rssurl'];

$xml_string = simplexml_load_file($rssurl);

$news_items = array();
$channel_items = array();

$channel_items['title'] = (string)$xml_string->channel->title;
$channel_items['link'] = (string)$xml_string->channel->link;
$channel_items['description'] = (string)$xml_string->channel->description;
$channel_items['language'] = (string)$xml_string->channel->language;
$channel_items['copyright'] = (string)$xml_string->channel->copyright;
$channel_items['image'] = $xml_string->channel->image;   

$news_items_array = array();

// fetch all news items
foreach($xml_string->channel->children() as $item) { 
    if(isset($item->title) && isset($item->description)  && strlen($item->title) > 0) {
        $item_array = array();
        $item_array['title'] = (string)$item->title;
        $item_array['description'] = strip_tags($item->description);
        $item_array['link'] = (string)$item->link;
        array_push($news_items_array,$item_array);
    }
} 

$channel_items['item'] = $news_items_array;

$news_items['channel'] = $channel_items;

$json = json_encode($news_items);

echo $json;

?>
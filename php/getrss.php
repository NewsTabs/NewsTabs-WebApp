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
        $item_array['pubDate'] = (string)$item->pubDate;
        
        $namespace_of_media = $item->getNameSpaces(true);
        $media = $item->children($namespace_of_media['media']);
        if(property_exists($media,thumbnail)){
            $item_array['media'] = (string)$media->thumbnail->attributes()->url;
        }else{
            $item_array['media'] = (string)null;
        }
        
        array_push($news_items_array,$item_array);
    }
} 

$channel_items['item'] = $news_items_array;
$news_items['channel'] = $channel_items;
$json = json_encode($news_items);
echo $json;

/*$rssurl = $_GET['rssurl'];

$xml_string = file_get_contents($rssurl);

$xml_string = str_replace(array("\n", "\r", "\t"), '', $xml_string);

$xml_string = trim(str_replace('"', "'", $xml_string));

$xml_str = simplexml_load_string($xml_string);

$json = json_encode($xml_str);

echo $json;*/

?>
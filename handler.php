<?php
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $comments = isset($_POST['comments']) ? $_POST['comments'] : null;
    $telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
    $call_time = isset($_POST['call_time']) ? $_POST['call_time'] : null;
    
    $html = '';
$html .= 'A message send by: ' .$name . '<br>';
$html .= 'Message: '.$comments;
$html .= 'Telephone: '.$telephone;
$html .= 'Call Time: '.$call_time;
    

    
    
        if(mail('example@gmail.com', "Message from $name", $html)){
            echo json_encode(['result' => 'success']);
        }
    y
?>
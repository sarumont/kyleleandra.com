<?php

if ( "http://www.kyleleandra.com/contact.html" != $_SERVER['HTTP_REFERER'] ) {
    header( "HTTP/1.0 401 Unauthorized" );
    return;
}

$msg = "From:   ".$_POST['name']."\nE-mail: ".$_POST['email']."\nPhone:  ".
    $_POST['phone']."\n\n".$_POST['body'];
mail( "kyle@kyleleandra.com", "kyleleandra.com: Contact Form", $msg );

?>

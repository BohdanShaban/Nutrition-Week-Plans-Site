<?php
$_POST = json_decode(file_get_contents("php://input"), true );   
echo var_dump($_POST); 

// Takes Data from Client -> Converts to Str -> Shows It on Client
// It will be the Server Response
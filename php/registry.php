<?php
include "conn.php";

if (isset($_POST['user'])) {
    $user = $_POST['user'];
    $result = $conn->query("select * from registry where username = '$user'");
    if ($result->fetch_assoc()) { //存在
        echo true;  //1
    } else { //不存在
        echo false;  //空隙''
    }
}

if (isset($_POST['user'])) {
    $user = $_POST['user'];
    $pass = sha1($_POST['password']);
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $conn->query("insert into registry values(null,'$user','$pass','$email','$phone')");
}
